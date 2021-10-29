import React from "react";
import Button from "../../../components/Button/Button";

const Chain: React.FC = () => {
  return (
    <div>
      <Button
        scale="sm"
        variant="tertiary"
        onClick={() => {
          console.log(1);
        }}
      >
        Binance smart chain
      </Button>
      <Button
        scale="sm"
        onClick={() => {
          console.log(2);
        }}
      >
        Klaytn chain
      </Button>
    </div>
  );
};

export default React.memo(Chain);
