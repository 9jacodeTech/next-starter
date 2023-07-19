import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import SlideDescription from 'components/molecules/slideDescription';
import Image from 'next/image';
import { SlideContentInput } from 'entities';

type CarouselLayoutProps = {
  slideContent: SlideContentInput;
};

export const DEFAULT_CAROUSEL_IMAGE = '/assets/images/carouselImage.png';

export const CarouselImages = (props: CarouselLayoutProps) => {
  const { slideContent } = props;
  return (
    <Carousel
      autoPlay
      showArrows={false}
      interval={3000}
      infiniteLoop
      autoFocus
      showStatus={false}
      showThumbs={false}
    >
      {slideContent.imageURLs.map((imageURL, index) => (
        <div key={index}>
          <div className="lg:h-[450px] h-[300px] w-full">
            <Image
              src={imageURL || DEFAULT_CAROUSEL_IMAGE}
              fill
              alt="Caarousel"
              className="object-cover"
            />
            <SlideDescription {...slideContent} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImages;
