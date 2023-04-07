import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext({
    notification: null,
    show: function(msg) {},
    hide: function() {}
});

export function NotificationContextProvider(props) {
    const [active, setActive] = useState();

    useEffect(() => {
        if (active) {
            const timer = setTimeout(() => {
                onHideHandler();
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    },[active]);

    function onShowHandler(data) {
        setActive(data);
    }

    function onHideHandler() {
        setActive(false);
    }

    const context = {
        notification: active,
        show: onShowHandler,
        hide: onShowHandler
    };

    return <NotificationContext.Provider
        value={context}
    >{props.children}</NotificationContext.Provider>
}

export default NotificationContext;
