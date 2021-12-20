import React from "react";
import { Loading } from "./index";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};
