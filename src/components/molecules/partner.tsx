import React from 'react';
import Image from 'next/image';
import SectionHeading from 'components/atom/heading';

type PartnerProps = {
  title: string;
  subText?: string;
};
const Partner = (props: PartnerProps) => {
  const { subText, title } = props;
  const partners = [
    '/assets/PAU-logo1.png',
    '/assets/PAU-logo1.png',
    '/assets/PAU-logo1.png',
    '/assets/PAU-logo1.png',
    '/assets/PAU-logo1.png',
    '/assets/PAU-logo1.png',
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-secondary_color pt-[36px] pb-[44px] ">
      <SectionHeading color="white">{title}</SectionHeading>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-[repeat(auto-fill,100px)] w-full gap-y-5  lg:gap-x-[100px] gap-x-5  pt-[32px] px-2 place-items-center lg:w-[70vw] md:w-[90vw] xl:w-full max-w-[1200px]">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-full bg-white w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] grid place-items-center "
            >
              <div className="lg:h-[80px] lg:w-[80px] w-[75px] h-[75px] relative">
                <Image
                  key={index}
                  src={partner}
                  alt="partners"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {subText && (
        <div className="text-white mt-12 text-xl text-center flex justify-center">
          <div className="max-w-[1000px]">{subText}</div>
        </div>
      )}
    </div>
  );
};

export default Partner;
