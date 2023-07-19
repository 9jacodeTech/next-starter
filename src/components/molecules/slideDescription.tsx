import React from 'react';
import Button from 'components/atom/button';
import { SlideContent } from 'entities';

type SlideDescriptionProp = Omit<SlideContent, 'id'>;

const SlideDescription = (props: SlideDescriptionProp) => {
  const {
    title,
    description,
    button1Label,
    button1URL,
    button2URL,
    button2Label,
  } = props;
  const CTALinks = [
    {
      text: button1Label,
      href: button1URL,
    },
    {
      text: button2Label,
      href: button2URL,
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#35353572] flex flex-col pl-20   items-start justify-center text-left">
      <h1 className="font-roboto text-main_bg_color font-[600] capitalize xl:leading-[60px] leading-[30px] xl:text-[48px] text-[24px] xl:w-[760px] ">
        {title}
      </h1>
      <p className="font-roboto text-main_bg_color font-[400] xl:text-[24px] text-[16px] xl:leading-[30px]  xl:w-[760px] mt-[16px] xl:mt-[21px] mb-[44px]  ">
        {description}
      </p>
      <div className="grid grid-flow-col grid-cols-2 gap-[10px] ">
        {CTALinks.map((data, index) => (
          <Button
            size="lg"
            type="cta"
            href={data.href}
            key={index}
            rounded={false}
          >
            {data.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SlideDescription;
