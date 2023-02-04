import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './styles';
import api from '../../api';
import Display from './display';
import Library from './library';
import editPannels from './edit-pannels';

const System = () => {
  const { id } = useParams();
  const [system, setDesignSystem] = React.useState(null);
  const [designSystemStyles, setDesignSystemStyles] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [component, setComponent] = React.useState('button');
  const [componentStyles, setComponentStyles] = React.useState({});
  const [dummyText, setDummyText] = React.useState('Hello World!');

  const EditPannel = editPannels[component];

  const getSystem = async () => {
    try {
      const designSystem = await api.service('design/system').get(id);
      const { data } = await api.service('design/style').find({
        query: {
          designSystemId: designSystem._id,
        },
        $limit: 1000,
      });

      setDesignSystem(designSystem);
      setDesignSystemStyles(data);

      const foundComponent = data.find(style => style.componentName === component);
      if (foundComponent) setComponentStyles(foundComponent.styles);

    } catch(e) {
      setError(true);
    }
  };

  const onComponentChanged = (component: string) => {
    const savedStyles = designSystemStyles.find(sys => sys.componentName === component) ?? { styles: {} };

    setComponentStyles(savedStyles.styles);
    setComponent(component);
    setDummyText('Hello World!')
  };

  const onSaveStyles = async () => {
    try {
      const savedStyles = designSystemStyles.find(sys => sys.componentName === component);

      if (!savedStyles) {
        //create
        const createdStyles = await api
          .service('design/style')
          .create({
            designSystemId: system._id,
            componentName: component,
            styles: componentStyles,
          });

        setDesignSystemStyles([...designSystemStyles, createdStyles]);
      } else {
        //patch
        const patchedStyles = await api
          .service('design/style')
          .patch(savedStyles._id, { styles: componentStyles });

        const updatedStyles = designSystemStyles.map(style => {
          if (style._id === patchedStyles._id) return patchedStyles;
          return style;
        });

        setDesignSystemStyles(updatedStyles);
      }

    } catch(e) {
      alert(e.message);
    }
  };

  React.useEffect(() => {
    getSystem();
  }, []);

  if (error) return <div style={{ padding: 30 }}>Something went wrong :(</div>
  if (!system) return <div style={{ padding: 30 }}>Loading...</div>

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <div style={{ marginLeft: 15 }}>
          {system.name}
        </div>
      </div>
      <div style={styles.main}>
        <div style={styles.library}>
          <div style={styles.header}>Components</div>
          <Library setComponent={onComponentChanged} />
        </div>
        <Display component={component} componentStyles={componentStyles} dummyText={dummyText} />
        <div style={styles.editor}>
          <div style={styles.header}>Editor</div>
          <EditPannel componentStyles={componentStyles} setComponentStyles={setComponentStyles} setDummyText={setDummyText} dummyText={dummyText} />
          <Button variant='contained' color='primary' disableElevation onClick={onSaveStyles}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default System;
