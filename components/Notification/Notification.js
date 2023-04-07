import { useContext } from "react";
import NotificationContext from "../../store/notification";
import { Alert, AlertIcon } from "@chakra-ui/react";
import ReactDOM from "react-dom";

const Notification = (props) => {
  const context = useContext(NotificationContext);
  const {
    notification
  } = props;
  const {
    status,
    message
  } = notification;
  return ReactDOM.createPortal(
    <Alert status={status} onClick={e => {
        context.hide();
    }}>
        <AlertIcon />
        {message}
    </Alert>, document.querySelector('#notification')
    );
}

export default Notification;
