import Header from 'components/Header/Header';
import { PageContainer } from 'components/common';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Outlet />
      </PageContainer>
    </>
  );
};
export default Layout;
