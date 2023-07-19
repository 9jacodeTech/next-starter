import React, { SyntheticEvent, useRef } from 'react';
import Image from 'next/image';
import { CloseIcon } from '@/components/atom/close-icon';

type MultipleFileInputProps = {
  imageURLs: string[];
  name?: string;
  onImageChange: (e: SyntheticEvent<HTMLInputElement>, files: File[]) => void;
  onRemoveImage?: (position: number) => void;
};

const MultipleFileInput = (props: MultipleFileInputProps) => {
  const { imageURLs, name, onRemoveImage, onImageChange } = props;
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files || []);
    onImageChange(e, files);
  };

  const handleRemoveImage = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (!onRemoveImage) return;
    const position = e.currentTarget.dataset.position;
    if (typeof position === 'undefined') return;
    onRemoveImage(+position);
  };

  return (
    <div>
      {imageURLs.map((image, index) => (
        <div key={index} className="h-[160px] w-full relative mb-4">
          <Image
            src={image}
            fill
            alt={`Image ${index}`}
            className="rounded-l-lg rounded-r-lg object-cover"
          />
          {onRemoveImage && (
            <button
              type="button"
              className="absolute w-8 h-8 bg-white rounded-full right-4 top-4 grid place-items-center"
              data-position={index}
              onClick={handleRemoveImage}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      ))}

      <input
        type="file"
        name={name}
        className="hidden"
        ref={fileRef}
        onChange={handleImageChange}
        accept="image/png, image/jpeg"
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="bg-[#F2FFF9] h-20 w-full font-mulish font-normal"
      >
        Selet Image
      </button>
    </div>
  );
};

export default MultipleFileInput;
