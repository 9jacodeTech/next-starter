import { LoadingSpiner } from '@/components/atom/loading-spinner';
import { paths } from 'config/paths';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

const Signout = () => {
  useEffect(() => {
    signOut({ callbackUrl: paths.home });
  }, []);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div>
        Signing out <LoadingSpiner />
      </div>
    </div>
  );
};

export default Signout;
