import React from "react";
import Topbar from "../../components/navbar/Topbar";
import Navbar from "../../components/navbar/Navbar";
import Notifications from "../../components/notifications/Notifications";

const NotificationsPages = () => {
  return (
    <div>
      <Topbar />
      <div>
        <Notifications />
      </div>
      <Navbar />
    </div>
  );
};

export default NotificationsPages;
