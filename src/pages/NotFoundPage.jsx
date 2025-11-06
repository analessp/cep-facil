import { useNavigate } from "react-router-dom";
import { Home } from  'lucide-react';
import { styles } from '../styles/styles';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.homeContent}>
        <h1 style={{...styles.homeTitle, fontSize: '72px'}}>404</h1>
        <p style={styles.homeSubtitle}>Página não encontrada</p>
        <button
        onClick={() => navigate('/')}
        style={styles.homeButton}
        >
          <Home size={20} />
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}