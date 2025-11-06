import { MapPin } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SearchBox from '../components/SearchBox';
import { styles } from '../styles/styles';

export default function SearchPage() {
  return (
    <PageLayout>
      <div style={styles.header}>
        <div style={styles.logoSmall}>
          <MapPin size={40} strokeWidth={2.5} color='white' />
        </div>
        <h1 style={styles.title}>CEPFácil</h1>
        <p style={styles.subtitle}>Consulte informações de endereço através do CEP</p>
      </div>
      <SearchBox />
    </PageLayout>
  );
}