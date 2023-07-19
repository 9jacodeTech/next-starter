import { ErorrType, SlideContentInput } from 'entities';
import { EditCarouselForm } from '../organism';
import { Editable } from '../organism/editable/Editable';
import CarouselImages from './carousel-images';
import { useToggle } from 'hooks';
import Modal from '../organism/Modal';
import { useEffect } from 'react';

type CarouselSectionProps = SlideContentInput & {
  submittingForm?: boolean;
  onSubmit?: (values: SlideContentInput) => void;
  errors?: ErorrType<SlideContentInput>;
  onCancel?: () => void;
  clearErrors?: () => void;
};

const defaultSlideContent: SlideContentInput = {
  title: 'Test Title',
  description: 'Know Yourself',
  button1URL: 'https://9jacode.com',
  button2URL: 'https://9jacode.com',
  button1Label: 'Submit',
  button2Label: 'Submit',
  imageURLs: ['/assets/Project1.png'],
};

export const CarouselSection = (props: CarouselSectionProps) => {
  const { submittingForm, onSubmit, clearErrors, errors, ...defaults } = props;

  const [showModal, toggleModal] = useToggle();
  useEffect(() => {
    clearErrors?.();
  }, [showModal, clearErrors]);

  return (
    <>
      <Editable onEditBtnClick={toggleModal}>
        <CarouselImages slideContent={defaults} />
      </Editable>

      <Modal visible={showModal} title="Edit Carousel" onClose={toggleModal}>
        <EditCarouselForm
          onSubmitForm={onSubmit}
          loading={submittingForm}
          errors={errors}
          defaults={defaultSlideContent}
          onCancel={toggleModal}
        />
      </Modal>
    </>
  );
};
