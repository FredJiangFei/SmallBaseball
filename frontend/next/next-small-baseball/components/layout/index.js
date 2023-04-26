import Footer from './Footer';
import Navbar from './Navbar';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';
import { useContext } from 'react';

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

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

export default Layout;
