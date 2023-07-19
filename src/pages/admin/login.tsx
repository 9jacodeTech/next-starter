import { paths } from 'config/paths';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect } from 'react';

const Login = () => {
  const logo = '/assets/PAU-logo2.png';
  const googleLogo = '/assets/images/google-logo.png';
  const router = useRouter();

  useEffect(() => {
    const error = router.query.error;
    if (error) {
      window.alert('Login failed. Most like a wrong email was used');
      router.replace(router.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.error]);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const routerNextURL = router.query.next as string;
    const callbackUrl = routerNextURL || paths.adminHome;
    signIn('google', { callbackUrl });
  };
  return (
    <div className="font-roboto">
      <div className="bg-secondary_color h-[45vh] relative w-full z-[-3] " />
      <div className="flex flex-col items-center  mt-[-80px] rounded-[5px] p-[30px] mx-auto bg-[#f9f9f9] shadow-[1px_1px_10px_1px_rgba(0,0,0,0.2)] z-[3] w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] ">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="mb-[30px] mx-auto"
        />

        <button
          type="button"
          className="flex p-[10px_30px] rounded-xl shadow-lg bg-white"
          onClick={handleClick}
        >
          <Image
            src={googleLogo}
            alt="logo"
            width={40}
            height={40}
            className="object-cover mr-[20px]"
          />

          <span>
            <h2 className="text-[20px]">Login with Google</h2>
            <p className="text-[12px]">Login with your Google Account</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
