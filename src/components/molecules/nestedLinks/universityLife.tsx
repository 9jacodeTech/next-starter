import NestedLinkLayout from '@/components/layout/nestedLinkLayout';
import React from 'react';
import { universityLifeProgrammes } from './constants';

const UniversityLife = () => {
  const universityLifeImage = '/assets/images/universityLife.jpg';

  return (
    <NestedLinkLayout
      imageSrc={universityLifeImage}
      imageWidth={300}
      imageHeight={146}
      description={
        ' We form competent and socially responsible professionals who are committed to the promotion of the common good of society and the advancement of the profession”.'
      }
      readMoreHref={''}
      sideLinks={universityLifeProgrammes}
    />
  );
};

export default UniversityLife;
