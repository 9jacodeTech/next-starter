import React from 'react';
import MultipleFileInput from '../inputs/multiple-file-input';
import { CancelOrSubmit } from '@/components/organism';
import { FormItemWithLabel } from '@/components/organism/forms/inputs/form-Item';
import { FormComponentProps } from '../types';
import { useFormControls } from 'hooks';
import { HeroSectionInput } from 'entities';

export const HeroForm = (props: FormComponentProps<HeroSectionInput>) => {
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

  const {
    values,
    uploadingImage,
    errors,
    handleSubmit,
    handleImageChange,
    handleChange,
  } = formProps;

  return (
    <form className="space-y-6 px-2" onSubmit={handleSubmit}>
      <FormItemWithLabel
        onChange={handleChange}
        name="title"
        inputType="text"
        label="Title"
        error={errors?.title}
        value={values.title}
      />
      <FormItemWithLabel
        onChange={handleChange}
        name="subText"
        inputType="textarea"
        label="Sub Text"
        error={errors?.subText}
        value={values.subText}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="button1Label"
        inputType="text"
        label="Button 1 Label"
        error={errors?.button1Label}
        value={values.button1Label}
      />
      <FormItemWithLabel
        onChange={handleChange}
        name="button1Link"
        inputType="text"
        label="Button 1 Link"
        value={values.button1Link}
        error={errors?.button1Link}
      />

      <FormItemWithLabel
        onChange={handleChange}
        name="button2Label"
        inputType="text"
        label="Button 2 Label"
        error={errors?.button2Label}
        value={values.button2Label}
      />
      <FormItemWithLabel
        onChange={handleChange}
        name="button2Link"
        inputType="text"
        label="Button 2 Link"
        value={values.button2Link}
        error={errors?.button2Link}
      />

      <MultipleFileInput
        imageURLs={[values.imageURL]}
        name="imageURL"
        onImageChange={handleImageChange}
      />
      <CancelOrSubmit
        loading={loading || uploadingImage}
        submitText="Publish"
        onCancel={onCancel}
      />
    </form>
  );
};

export default HeroForm;
