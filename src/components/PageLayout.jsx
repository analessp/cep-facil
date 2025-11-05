import { styles } from '../styles/styles';

export default function PageLayout({ children }) {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}