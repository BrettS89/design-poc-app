import React from 'react';

const styles = {
  container: {
    marginBottom: 30,
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    textTransform: 'uppercase' as const,
    fontWeight: 800,
    marginBottom: 5,
    width: 100,
  }
};

interface Props extends React.PropsWithChildren {
  label?: string;
}

const UIState: React.FC<Props> = ({ children, label }) => {
  return (
    <div style={styles.container}>
      {label && (
        <div style={styles.label}>{label}</div>
      )}
      {children}
    </div>
  );
};

export default UIState;
