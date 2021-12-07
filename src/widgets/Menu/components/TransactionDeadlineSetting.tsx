// import useUserDeadline from 'hooks/useUserDeadline'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useTranslation } from 'react-i18next'
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
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
  const [value, setValue] = useState(deadline / 60); // deadline in minutes
  const [error, setError] = useState<string | null>(null);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target;
    setValue(parseInt(inputValue, 10));
  };

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 60;
      if (!Number.isNaN(rawValue) && rawValue > 0) {
        setDeadline(rawValue);
        setError(null);
      } else {
        setError("Enter a valid deadline");
      }
    } catch {
      setError("Enter a valid deadline");
    }
  }, [value, setError, setDeadline]);

  return (
    <StyledTransactionDeadlineSetting>
      <Label>
        <Text textStyle={TextStyles.R_16M} color={ColorStyles.DEEPGREY} mr="S_6">
          <Trans i18nKey="Transaction Deadline" />
        </Text>
        {/* <Helper text={t("Your transaction will revert if it is pending for more than this long.")} /> */}
      </Label>
      <Flex width="184px" alignItems="center">
        <Input
          type="number"
          step="1"
          min="1"
          value={value}
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
            {error}
          </Text>
        </Flex>
      )}
    </StyledTransactionDeadlineSetting>
  );
};

export default TransactionDeadlineSetting;
