import { useTheme } from '../context/ThemeContext.jsx';

const Payments = () => {
  const { colors } = useTheme();
  return (
    <div style={{ padding: '32px', color: colors.text }}>
      <h1>Payments</h1>
      <p>View and manage payment history.</p>
    </div>
  );
};

export default Payments;

