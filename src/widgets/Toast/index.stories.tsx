import React, { useState } from "react";
import { sample } from "lodash";
import { alertVariants } from "../../components/Alert";
import Button from "../../components/Button/Button";
import ToastContainer from "./ToastContainer";

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
      <Button
        type="button"
        variant="secondary"
        onClick={() => handleSuccessToastClick("custom content")}
      >
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
        url: "https://pancakeswap.finance",
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
