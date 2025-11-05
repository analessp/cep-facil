import { useNavigate } from "react-router-dom";
import { MapPin, Search } from "lucide-react";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.homeContent}>
        <div style={styles.logo}>
          <MapPin size={60} strokeWidth={2.5} color="white" />
        </div>
        <h1 style={styles.homeTitle}>CEPFácil</h1>
        <p style={styles.homeSubtitle}>Consulte informações de endereço através do CEP</p>
        <button onClick={() => navigate('/buscarPage')}
          style={styles.homeButton}
          >
            <Search size={20} />
            Buscar
          </button>
      </div>
    </div>
  );
}