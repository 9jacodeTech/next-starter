import NestedLinkLayout from '@/components/layout/nestedLinkLayout';
import React from 'react';
import { admissionPrograms } from './constants';

const AdmissionAndAid = () => {
  const admissionIng = '/assets/images/admission.jpg';

  return (
    <NestedLinkLayout
      imageSrc={admissionIng}
      imageWidth={300}
      imageHeight={146}
      description="We seek to train professionals who will uphold the highest
            intellectual, ethical and professional values that promote
            creativity, critical knowledge, technical preferences, social
            responsibility and the spirit of the enterprise."
      readMoreHref={''}
      sideLinks={admissionPrograms}
    />
  );
};

export default AdmissionAndAid;
