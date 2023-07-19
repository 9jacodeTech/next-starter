import { FormItemWithLabel } from '@/components/organism/forms/inputs/form-Item';
import { SlideContentInput } from 'entities';
import React, { useCallback } from 'react';
import MultipleFileInput from '../inputs/multiple-file-input';
import { CancelOrSubmit } from '@/components/organism';
import { FormComponentProps } from '../types';
import { useFormControls } from 'hooks';

export const EditCarouselForm = (
  props: FormComponentProps<SlideContentInput>
) => {
  const {
    onCancel,
    onSubmitForm,
    uploadFile,
    errors: defaultErrors,
    defaults,
    loading,
  } = props;
  const formProps = useFormControls({
    defaults,
    defaultErrors,
    onCancel,
    uploadFile,
    onSubmitForm,
  });

  const {
    values,
    errors,
    setValues,
    handleChange,
    handleSubmit,
    handleImageChange,
  } = formProps;

  const handleRemoveImage = useCallback(
    (position: number) => {
      setValues((values) => ({
        ...values,
        imageURLs: values.imageURLs.filter((_, index) => index !== position),
      }));
    },
    [setValues]
  );

  return (
    <form className="flex justify-center h-full" onSubmit={handleSubmit}>
      <div className=" w-full bg-white  h-fit">
        <FormItemWithLabel
          id="title"
          name="title"
          inputType="text"
          placeholder="Enter title for this slide"
          label="Header"
          value={values.title}
          onChange={handleChange}
          error={errors?.title}
        />

        <FormItemWithLabel
          id="subheader"
          name="description"
          inputType="textarea"
          placeholder="Type your subheading here"
          label="Subheader"
          value={values.description}
          onChange={handleChange}
          error={errors?.description}
        />

        <FormItemWithLabel
          id="button1Label"
          name="button1Label"
          inputType="text"
          placeholder="Enter the button label here"
          label="Button 1 Label"
          value={values.button1Label}
          onChange={handleChange}
          error={errors?.button1Label}
        />

        <FormItemWithLabel
          id="button1URL"
          name="button1URL"
          inputType="text"
          placeholder="Enter the button label here"
          label="Button 1 URL"
          onChange={handleChange}
          value={values.button1URL}
          error={errors?.button1URL}
        />

        <FormItemWithLabel
          id="button2Label"
          name="button2Label"
          inputType="text"
          placeholder="Enter the button label here"
          label="Button 2 Label"
          value={values.button2Label}
          onChange={handleChange}
          error={errors?.button2Label}
        />

        <FormItemWithLabel
          id="button2URL"
          name="button2URL"
          inputType="text"
          placeholder="Enter the button label here"
          label="Button 2 URL"
          value={values.button2URL}
          onChange={handleChange}
          error={errors?.button2URL}
        />

        <MultipleFileInput
          imageURLs={values.imageURLs}
          onImageChange={handleImageChange}
          onRemoveImage={handleRemoveImage}
        />
        <CancelOrSubmit
          submitText="Publish"
          onCancel={onCancel}
          loading={loading}
        />
      </div>
    </form>
  );
};
