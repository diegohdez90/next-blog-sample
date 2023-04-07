import { useContext } from "react";
import NotificationContext from "../../store/notification";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Notification = (props) => {
  const context = useContext(NotificationContext);
  const {
    notification
  } = props;
  const {
    status,
    message
  } = notification;
  return (
    <Alert status={status} onClick={e => {
        context.hide();
    }}>
        <AlertIcon />
        {message}
    </Alert>
  )
}

export default Notification;
