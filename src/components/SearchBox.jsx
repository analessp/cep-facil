import { useState } from "react";
import { Search, Loader2, AlertCircle, MapPin } from 'lucide-react';
import { styles } from '../styles/styles'

export default function SearchBox() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [endereco, setEndereco] = useState(null);

  const formatCEP = (value) => {
    const nums = value.replace(/\D/g, '');
    if (nums.length <= 5) return nums;
    return `${nums.slice(0,5)}-${nums.slice(5,8)}`;
  };

  const handleInputChange = (e) => {
    const formatted = formatCEP(e.target.value);
    setCep(formatted)
    setError('');
  };

  const buscarCEP = async () => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    setEndereco(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
      } else {
        setEndereco(data);

        const historico = JSON.parse(localStorage.getItem('historicoCEP') || '[]');
        const novoHistorico = [
          {
            cep: data.cep,
            endereco: `${data.logradouro}, ${data.bairro}`,
            data: new Date().toISOString()
          },
          ...historico.filter(item => item.cep !== data.cep)
        ].slice(0,10);
        localStorage.setItem('historicoCEP', JSON.stringify(novoHistorico));
      }
    } catch (err) {
      setError('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') buscarCEP();
  };

  return (
    <div style={styles.searchBox}>
      <div style={styles.inputGroup}>
        <input
        type="text"
        value={cep}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="00000-000"
        maxLength={9}
        style={styles.input}
        />
        <button
        onClick={buscarCEP}
        disabled={loading}
        style={{
          ...styles.button,
          ...(loading ? styles.buttonDisabled : {})
        }}
        >
          {loading ? (
            <>
            <Loader2 size={20} style={styles.spinner} />
            Buscando...
            </>
          ) : (
            <>
            <Search size={20} />
            Buscar
            </>
          )}
        </button>
      </div>

      {error && (
        <div style={styles.error}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {endereco && (
        <div style={styles.results}>
          <div style={styles.resultsHeader}>
          <div style={styles.resultsIcon}>
            <MapPin size={24} color="#22d3ee" />
          </div>
          <div>
            <h2 style={styles.resultsTitle}>Endereço Encontrado</h2>
            <p style={styles.resultsCep}>CEP: {endereco.cep}</p>
          </div>
        </div>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <p style={styles.infoLabel}>Logradouro</p>
            <p style={styles.infoValue}>{endereco.logradouro}</p>
          </div>
          <div style={styles.infoCard}>
            <p style={styles.infoLabel}>Bairro</p>
            <p style={styles.infoValue}>{endereco.bairro}</p>
          </div>
          <div style={styles.infoCard}>
            <p style={styles.infoLabel}>Cidade</p>
              <p style={styles.infoValue}>{endereco.localidade}</p>
          </div>
          {endereco.complemento && (
            <div style={{...styles.infoCard, gridColumn: '1 / -'}}>
              <p style={styles.infoLabel}>Complemento</p>
              <p style={styles.infoValue}>{endereco.complemento}</p>
            </div>
          )}
        </div>
        </div>
      )}
    </div>
  );
}