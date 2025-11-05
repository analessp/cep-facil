import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { MapPin, Search } from "lucide-react";

function BuscarPage() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [endereco, setEndereco] = useState(null);

  const formatCEP = (value) => {
    const nums = value.replace(/\D/g, '');
    if (nums.length <= 5) return nums;
    return `${nums.slice(0,5)}-${nums.slice(5,8)}`;

    const handleInputChange = (e) => {
      const formatted = formatCEP(e.target.value);
      setCep(formatted);
      setError('');
    };

    const buscarCEP = async () => {
      const cepLimpo = cep.replace(/\D/g, '');

      if (cepLimpo.length !== 8)
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

        // Salva no histórico
        const historico = JSON.parse(localStorage.getItem('historicoCEP') || `[]`);
        const novoHistorico = [
          { cep: data.cep, endereco: `${data.logradouro}, ${data.bairro}`, data: new Date().toISOString() },
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
  
}