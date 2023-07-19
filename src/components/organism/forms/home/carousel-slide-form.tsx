import React from 'react';
import { FormItemWithLabel } from 'components/organism';

const CarouselSlideForm = () => {
  return (
    <form className="space-y-6" action="#">
      <FormItemWithLabel
        id="title"
        name="title"
        inputType="text"
        placeholder="Enter title for this slide"
        label="Slide Title"
      />
      <FormItemWithLabel
        id="desc"
        name="desc"
        inputType="text"
        placeholder="Enter description for this slide"
        label="Slide Description"
      />

      <FormItemWithLabel
        name="learnMore"
        id="learnMore"
        inputType="text"
        label="Learn More Link"
        placeholder="http://forms.google.com/project"
      />

      <FormItemWithLabel
        name="submitProject"
        id="submitProject"
        inputType="text"
        label="Submit Project Link"
        placeholder="http://forms.google.com/project"
      />
    </form>
  );
};

export default CarouselSlideForm;
