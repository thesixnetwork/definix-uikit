// import useUserDeadline from 'hooks/useUserDeadline'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Helper } from "../../../components/Helper";
import { AlertIcon } from "../../../components/Icon";
import { TextStyles } from "../../../theme/text";
import { ColorStyles } from "../../../theme/colors";
import { TransactionDeadLineProps, TranslateProps } from "../types";

interface Props extends TranslateProps, TransactionDeadLineProps {}

const StyledTransactionDeadlineSetting = styled.div`
  margin-top: 4px;
`;

const Label = styled.div`
  align-items: center;
  display: flex;
  margin: 16px 0;
`;

const TransactionDeadlineSetting: React.FC<Props> = ({ Trans, deadline, setDeadline }) => {
  // const { t } = useTranslation();
  const [value, setValue] = useState((deadline / 60).toString()); // deadline in minutes
  const [error, setError] = useState<string | null>(null);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target;

    if (isNaN(+inputValue) || inputValue.length > 4) {
      return;
    } else if (!inputValue || inputValue === "") {
      setValue("20");
    } else {
      setValue(inputValue);
    }
  };

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = +value * 60;
      if (!Number.isNaN(rawValue) && rawValue > 0) {
        setDeadline(rawValue);
        setError(null);
      } else {
        setError("Enter a valid number");
      }
    } catch {
      setError("Enter a valid number");
    }
  }, [value, setError, setDeadline]);

  return (
    <StyledTransactionDeadlineSetting>
      <Label>
        <Text textStyle={TextStyles.R_16M} color={ColorStyles.DEEPGREY} mr="S_6">
          <Trans i18nKey="Transaction Deadline" />
        </Text>
        <Helper text={<Trans i18nKey="Your transaction will revert if"></Trans>}></Helper>
      </Label>
      <Flex width="184px" alignItems="center">
        <Input
          type="text"
          value={value}
          placeholder="20"
          onChange={handleChange}
          endIcon={
            <Text fontSize="16px">
              <Trans i18nKey="Minutes" />
            </Text>
          }
        />
      </Flex>
      {error && (
        <Flex mt="S_12" alignItems="center">
          <AlertIcon />
          <Text ml="5px" textStyle={TextStyles.R_14R} color={ColorStyles.RED}>
            <Trans i18nKey={error} />
          </Text>
        </Flex>
      )}
    </StyledTransactionDeadlineSetting>
  );
};

export default TransactionDeadlineSetting;
