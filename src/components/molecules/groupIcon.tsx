import Image from 'next/image';
import React from 'react';
import { Editable } from '../organism/editable/Editable';
import Modal from '../organism/Modal';
import { useToggle } from 'hooks';
import { GroupIconForm } from '../organism';
import { ErorrType, GroupIconsInput } from 'entities';

const iconTypes = {
  heart: '/assets/images/group-icons/hand-heart.svg',
  books: '/assets/images/group-icons/books.svg',
  target: '/assets/images/group-icons/target.svg',
  connection: '/assets/images/group-icons/graph.svg',
};

type GroupIconProps = {
  icon: keyof typeof iconTypes;
  text: string;
};
const GroupIcon = (props: GroupIconProps) => {
  const { icon, text } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-primary_color rounded-full grid place-items-center">
        <Image src={iconTypes[icon]} alt="icon" width={50} height={50} />
      </div>
      <div className="mt-3 w-32 h-12 text-center text-base">{text}</div>
    </div>
  );
};

type GroupIconsProps = GroupIconsInput & {
  onSubmit?: (values: GroupIconsInput) => void;
  submittingForm?: boolean;
  errors?: ErorrType<GroupIconsInput>;
};

const GroupIcons = (props: GroupIconsProps) => {
  const { submittingForm, errors, onSubmit, ...defaults } = props;
  const items = [
    {
      icon: props.icon1,
      text: props.text1,
    },
    {
      icon: props.icon2,
      text: props.text2,
    },
    {
      icon: props.icon3,
      text: props.text3,
    },
    {
      icon: props.icon4,
      text: props.text4,
    },
  ];

  const [showModal, toggleModal] = useToggle();

  return (
    <>
      <Editable onEditBtnClick={toggleModal}>
        <section className="flex justify-center w-full">
          <div className="py-8 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2   justify-between items-center lg:gap-x-32 gap-4 bg-lue-400 px-4">
            {items.map((item, index) => (
              <GroupIcon key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </section>
      </Editable>

      <Modal visible={showModal} title="Update Icons" onClose={toggleModal}>
        <GroupIconForm
          defaults={defaults}
          onCancel={toggleModal}
          loading={submittingForm}
          onSubmitForm={onSubmit}
          errors={errors}
        />
      </Modal>
    </>
  );
};

export default GroupIcons;
