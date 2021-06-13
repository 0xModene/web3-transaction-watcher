import {TransactionStatusType} from "./../components/TransactionWatcher";
import {useState} from "react";

const useTransactionWatcher = () => {
  const [transactionId, setTransactionId] = useState<string>();
  const [transactionStatus, setTransactionStatus] =
    useState<TransactionStatusType>(TransactionStatusType.IS_UNSTARTED);

  return {
    transactionId,
    setTransactionId,
    transactionStatus,
    setTransactionStatus,
  };
};

export default useTransactionWatcher;
