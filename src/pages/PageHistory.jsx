import { useNavigate } from "react-router-dom";
import { History, MapPin, Search } from 'lucide-react';
import PageLayout from "../components/PageLayout";
import { styles } from '../styles/styles';

export default function PageHistory() {
  const navigate = useNavigate();
  const historico = JSON.parse(localStorage.getItem('historicoCEP') || '[]');

  const limparHistorico = () => {
    if (confirm('Deseja realmente limpar todo o histórico')) {
      localStorage.removeItem('historicoCEP');
      window.location.reload();
    }
  };

  return (
    <PageLayout>
      <div style={styles.header}>
        <div style={styles.logoSmall}>
          <History size={40} strokeWidth={2.5} color="white" />
        </div>
        <h1 style={styles.title}>Histórico de Buscas</h1>
        <p style={styles.subtitle}>Suas últimas consultas de CEP</p>
      </div>

      <div style={styles.searchBox}>
        {historico.length === 0 ? (
          <div style={styles.emptyState}>
            <History size={40} color="#475569" />
            <p style={styles.emptyText}>Nenhuma busca realizada ainda</p>
            <button
            onClick={() => navigate('/searchPage')}
            style={styles.button}
            >
              <Search size={20} />
              Fazer primeira bsuca
            </button>
          </div>
      ) : (
        <>
        <div style={styles.historicoHeader}>
          <p style={styles.historicoCount}>
            {historico.length} busca(s) encontrada(s)
            </p>
          <button 
          onClick={limparHistorico}
          style={styles.clearButton}>
            Limpar histórico
          </button>
        </div>
        <div style={styles.historicoList}>
          {historico.map((item, index) => (
            <div key={index} style={styles.historicoItem}>
              <div style={styles.historicoIcon}>
                <MapPin size={20} color="#22d3ee" />
              </div>
              <div style={styles.historicoInfo}>
                <p style={styles.historicoCep}>{item.cep}</p>
                <p style={styles.historicoEndereco}>{item.endereco}</p>
                <p style={styles.historicoData}>
                  {new Date(item.data).toLocaleDateString('pt-BR')} às{''}
                  {new Date(item.data).toLocaleDateString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        </>
        )}
        </div>
    </PageLayout>
  );
}