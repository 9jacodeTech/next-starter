import clsx from 'clsx';
import Link from 'next/link';
import { LoadingSpiner } from './loading-spinner';

const typeMapper = {
  primary: 'bg-secondary_color  text-main_bg_color ',
  secondary: 'bg-main_bg_color',
  transparent: '',
  cta: 'bg-cta_color border border-cta_color text-white',
  danger: 'bg-danger border border-danger text-white',
  tertiary: 'border-[1px] text-main_bg_color',
  hero: 'bg-secondary_color text-white border-secondary_color border',
};
const sizeMapper = {
  xs: 'p-[6px_3px]  text-[12px]',
  sm: 'px-4  text-[12px] h-9',
  normal: 'px-4 h-auto',
  lg: 'p-[16px] text-[18px]',
};

type Shared = {
  children: string;
  onClick?: () => void;
  stretch?: boolean;
  size?: keyof typeof sizeMapper;
  type?: keyof typeof typeMapper;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

type BaseButtonProps = Shared & {
  htmlType?: 'submit' | 'button';
};

type LinkButtonProps = Shared & {
  href: string;
};

export type ButtonProps = LinkButtonProps | BaseButtonProps;

const Button = (props: ButtonProps) => {
  const {
    children,
    size = 'normal',
    stretch = false,
    type = 'primary',
    rounded = true,
    disabled = false,
    loading = false,
    onClick,
  } = props;
  const className = clsx(
    'leading-none  border flex items-center justify-center',
    sizeMapper[size],
    typeMapper[type],
    stretch ? 'w-full' : '',
    rounded ? 'rounded-full' : 'rounded-[10px]'
  );

  if ('href' in props) {
    return (
      <Link
        className={className}
        href={props.href}
        target={props.href.startsWith('http') ? '_blank' : ''}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={props.htmlType}
      className={className}
      disabled={disabled}
    >
      {children}

      {loading && (
        <span className="ml-3">
          <LoadingSpiner />
        </span>
      )}
    </button>
  );
};

export default Button;
