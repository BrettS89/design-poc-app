import Input from '@blsodie/ui2/build/component/Input';
import UIState from '../../../../components/ui-state';

export default ({ dummyText, styles }) => {
  return (
    <div>
      <UIState label='base'>
        <Input
          placeholder={dummyText}
          type='text'
          styles={styles}
        />
      </UIState>
      <UIState label='error'>
        <Input
          placeholder={dummyText}
          type='text'
          styles={styles}
          error='this is an error'
        />
      </UIState>
    </div>
  );
};
