import React from 'react';
import styles from './styles';
import SystemCard from './system-card';
import CreateDesignSystem from './create';
import { createDesignSystem, fetchDesignSystems } from './controller';

const DesignSystems = () => {
  const [createSystemModalOpen, setCreateSystemModalOpen] = React.useState(false);
  const [designSystems, setDesignSystems] = React.useState([]);

  const fetchAllDesignSystems = async () => {
    try {
      const { data } = await fetchDesignSystems();
      setDesignSystems(data);
    } catch(e) {
      alert(e.message);
    }
  };

  const onCreateDesignSystem = async (name, description) => {
    const system = await createDesignSystem({ name, description });

    setDesignSystems([...designSystems, system]);
  };

  const renderDesignSystems = () => {
    return designSystems.map(d => {
      return (
        <SystemCard
          designSystem={d}
        />
      );
    });
  };

  React.useEffect(() => {
    fetchAllDesignSystems()
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Your Design Systems
      </h1>

      <div style={styles.systemsList}>
        <div style={styles.createNew} onClick={() => setCreateSystemModalOpen(true)}>
          <h2 style={styles.cardName}>
            Create a new design system +
          </h2>
        </div>

        {renderDesignSystems()}

      </div>

      <CreateDesignSystem
        handleClose={() => setCreateSystemModalOpen(false)}
        open={createSystemModalOpen}
        onCreateDesignSystem={onCreateDesignSystem}
      />
    </div>
  );
};

export default DesignSystems;
