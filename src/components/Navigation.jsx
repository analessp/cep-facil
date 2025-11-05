import { Link } from 'react-router-dom';
import { Home, Search, History } from 'lucide-react';
import { styles } from '../styles/styles'

export default function Navigation() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <Link to="/" style={styles.navLink}>
        <Home size={20} />
        Início
        </Link>
        <Link to="/searchPage" style={styles.navLink}>
        <Search size={20} />
        Buscar
          </Link>
          <Link to="/pageHistory" style={styles.navLink}>
          <History size={20} />
          Histórico
          </Link>
      </div>
    </nav>
  );
}