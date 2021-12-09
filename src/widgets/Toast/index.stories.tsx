import React, { useState, useCallback } from "react";
import { sample } from "lodash";
import { alertVariants } from "../../components/Alert";
import Button from "../../components/Button/Button";
import ToastContainer from "./ToastContainer";
import { useEffect } from "hoist-non-react-statics/node_modules/@types/react";

export default {
  title: "Widgets/Toast[NEW]",
  component: ToastContainer,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [toasts, setToasts] = useState([]);

  const handleSuccessToastClick = (description = "") => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: `Title: ${now}`,
      description,
      type: alertVariants.SUCCESS,
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleFailToastClick = (description = "") => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: `Title: ${now}`,
      description,
      type: alertVariants.DANGER,
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  };

  return (
    <div>
      <Button type="button" variant="secondary" onClick={() => handleSuccessToastClick()}>
        Success Toast
      </Button>
      <Button type="button" variant="secondary" mx="8px" onClick={() => handleFailToastClick()}>
        Fail Toast
      </Button>
      <Button type="button" variant="secondary" onClick={() => handleSuccessToastClick(<div>test</div>)}>
        Random Toast with Description
      </Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </div>
  );
};

export const WithAction: React.FC = () => {
  const [toasts, setToasts] = useState([]);

  const handleClick = () => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: `Title: ${now}`,
      description: "A description of a toast with a call to action",
      action: {
        text: "Action Button",
        url: "https://definix.com/",
      },
      type: alertVariants[sample(Object.keys(alertVariants))],
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  };

  return (
    <div>
      <Button type="button" variant="success" ml="8px" onClick={() => handleClick()}>
        Random Toast with Action Button
      </Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </div>
  );
};

export const MultiToast: React.FC = () => {
  const [toasts, setToasts] = useState([]);

  const createToast = useCallback(
    (title: string) => {
      const now = Date.now();
      const randomToast = {
        id: `id-${now}`,
        title,
        action: {
          text: "Action Button",
          url: "https://pancakeswap.finance",
        },
        type: alertVariants[sample(Object.keys(alertVariants))],
      };
      setToasts((prevToasts) => [randomToast, ...prevToasts]);
      if (toasts.length >= 3) {
        setToasts((prevToasts) => {
          prevToasts.pop();
          return prevToasts;
        });
      }
    },
    [toasts]
  );

  const handleClick = () => {
    setTimeout(() => {
      createToast("toast1");
    }, 4000);
    setTimeout(() => {
      createToast("toast2");
    }, 3000);
    setTimeout(() => {
      createToast("toast3");
    }, 2000);
    setTimeout(() => {
      createToast("toast4");
    }, 1000);
  };

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  };

  return (
    <div>
      <Button type="button" variant="success" ml="8px" onClick={() => handleClick()}>
        MultiToast
      </Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </div>
  );
};
