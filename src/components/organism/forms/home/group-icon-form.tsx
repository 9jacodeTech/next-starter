import React from 'react';
import { FormItemWithLabel } from '../inputs/form-Item';
import { FormComponentProps } from '../types';
import { CancelOrSubmit } from 'components/organism';
import { useFormControls } from 'hooks';
import { GroupIconsInput } from 'entities';

const iconOptions = [
  {
    label: 'Heart',
    value: 'heart',
  },
  {
    label: 'Books',
    value: 'books',
  },
  {
    label: 'Target',
    value: 'target',
  },
  {
    label: 'Connection',
    value: 'connection',
  },
];

export const GroupIconForm = (props: FormComponentProps<GroupIconsInput>) => {
  const {
    defaults,
    loading = false,
    errors: defaultErrors,
    onSubmitForm,
    onCancel,
    uploadFile,
  } = props;

  const formProps = useFormControls({
    defaults,
    defaultErrors,
    onSubmitForm,
    uploadFile,
    onCancel,
  });

  const { values, errors, handleSubmit, handleChange } = formProps;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormItemWithLabel
        onChange={handleChange}
        name="icon1"
        id="icon1"
        options={iconOptions}
        label="First Icon"
        placeholder="Select the icon type for the first one..."
        value={values.icon1}
        error={errors?.icon1}
        inputType={'text'}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="text1"
        id="text1"
        inputType="text"
        label="Text under the first icon"
        placeholder="Enter text you would like"
        value={values.text1}
        error={errors?.text1}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="icon2"
        id="icon2"
        options={iconOptions}
        label="Second Icon"
        placeholder="Select the icon type for the first two..."
        value={values.icon2}
        inputType="text"
        error={errors?.icon2}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="text2"
        id="text2"
        inputType="text"
        label="Text under the second icon"
        placeholder="Enter text you would like"
        value={values.text2}
        error={errors?.text2}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="icon3"
        id="icon3"
        options={iconOptions}
        label="Third Icon"
        placeholder="Select the icon type for the first three..."
        value={values.icon3}
        error={errors?.icon3}
        inputType="text"
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="text3"
        id="text3"
        inputType="text"
        label="Text under the third icon"
        placeholder="Enter text you would like"
        value={values.text3}
        error={errors?.text3}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="icon4"
        id="icon4"
        options={iconOptions}
        label="Fourth Icon"
        placeholder="Select the icon type for the fourth three..."
        value={values.icon4}
        inputType={'text'}
        error={errors?.icon4}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="text4"
        id="text4"
        inputType="text"
        label="Text under the fourth icon"
        placeholder="Enter text you would like"
        value={values.text4}
        error={errors?.text4}
      />

      <CancelOrSubmit
        loading={loading}
        submitText="Publish"
        onCancel={onCancel}
      />
    </form>
  );
};

export default GroupIconForm;
