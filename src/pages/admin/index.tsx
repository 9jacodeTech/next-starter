import Navbar from '@/components/organism/navbar/navbar';

import Footer from '@/components/molecules/footer';

import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { NAV_LINKS } from 'config/constants';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  ctx.req.headers;
  const { res, req } = ctx;

  const session = await getSession(ctx);

  if (!session) {
    res.writeHead(307, { location: `/admin/login?next=${req.url}` });
    res.end();

    return {
      props: {},
    };
  }
  return {
    props: {},
  };
};

const AdminHome = () => {
  // const { token } = useToken();

  // update
  // const handleUploadImage = useCallback(
  //   (file: File) => {
  //     return UploadImageService.uploadImage(token, file);
  //   },
  //   [token]
  // );

  return (
    <>
      <Navbar isAdmin navLinks={NAV_LINKS} />
      <div> You would see this text only if you are logged in</div>
      <Footer />
    </>
  );
};
export default AdminHome;
