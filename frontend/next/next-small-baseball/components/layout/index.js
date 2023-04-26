import Footer from './Footer';
import Navbar from './Navbar';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';
import { useContext } from 'react';
import AuthForm from '../auth/auth-form';
import { useSession, getSession } from 'next-auth/react';

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  // const { data: session } = useSession();
  // if (!session) {
  //   return <AuthForm />;
  // }

  return (
    <div className="content">
      <Navbar />
      {children}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Layout;
