import Input from '@blsodie/ui2/build/component/Input';

export default ({ dummyText, styles }) => {
  return (
    <Input
      placeholder={dummyText}
      type='text'
      styles={styles}
    />
  );
};
