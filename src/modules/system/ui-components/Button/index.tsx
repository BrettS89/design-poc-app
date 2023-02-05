import Button from '@blsodie/ui2/build/component/Button';
import UIState from '../../../../components/ui-state';

export default ({ dummyText, styles }) => {
  return (
    <div>
      <UIState label='Base'>
        <Button styles={styles}>
          {dummyText}
        </Button>
      </UIState>

      <UIState label='Disabled'>
        <Button styles={styles} disabled>
          {dummyText}
        </Button>
      </UIState>
    </div>
  );
};
