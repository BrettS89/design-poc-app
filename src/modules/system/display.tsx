import React from 'react';
import styles from './styles';
import Button from '@blsodie/ui2/build/component/Button';
import uiComponents from './ui-components';

const Display = ({ component, componentStyles, dummyText }) => {
  const UIComponent = uiComponents[component];

  const cleanStyles = () => {
    const newStyles = Object.entries(componentStyles).reduce((acc, [k, v]) => {
      if (v === null || v === undefined) return acc;

      acc[k] = v;

      return acc;
    }, {});

    return newStyles;
  }

  return (
    <div style={styles.display}>
      <UIComponent
        styles={cleanStyles()}
        dummyText={dummyText}
      />
    </div>
  );
};

export default Display;
