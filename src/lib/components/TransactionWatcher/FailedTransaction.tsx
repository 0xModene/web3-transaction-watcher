import React from "react";
import { Spacer } from "react-neu";
import styled from "styled-components";

import { RoundedButton } from "lib/components/RoundedButton";
import ExternalLink from "lib/components/ExternalLink";
import useTransactionWatcher from "lib/hooks/useTransactionWatcher";
import { makeEtherscanLink } from "lib/utils/index";
import { TransactionStatusType } from ".";

const FailedTransaction: React.FC = () => {
  const { transactionId, setTransactionId, setTransactionStatus } =
    useTransactionWatcher();

  const etherscanLink = transactionId && makeEtherscanLink(transactionId);

  const onFinishTransaction = () => {
    setTransactionId(undefined);
    setTransactionStatus(TransactionStatusType.IS_UNSTARTED);
  };

  return (
    <StyledCard>
      <StyledIcon
        src="https://index-dao.s3.amazonaws.com/red-x.svg"
        alt="red x"
      />
      <StyledCardBody>Your transaction failed</StyledCardBody>
      <ExternalLink href={etherscanLink} target="_blank">
        View the transaction{" "}
        <StyledTransactionArrow src="https://index-dao.s3.amazonaws.com/external-arrow.svg" />
      </ExternalLink>
      <Spacer />
      <RoundedButton text="Try Again" onClick={onFinishTransaction} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.transparentColors.grey};
  border-radius: ${(props) => props.theme.borderRadius}px;
`;

const StyledIcon = styled.img`
  width: 55px;
  height: 55px;
`;

const StyledTransactionArrow = styled.img`
  width: 9px;
  height: 9px;
  margin-left: 2px;
`;

const StyledCardBody = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export default FailedTransaction;
