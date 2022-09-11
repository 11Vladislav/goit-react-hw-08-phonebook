const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Wellcome to Phone Book</h1>
  </div>
);

export default HomePage;
