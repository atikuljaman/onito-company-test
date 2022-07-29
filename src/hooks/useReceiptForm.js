import { useState } from "react";

const useReceiptForm = () => {
  const [receiptDetails, setReceiptDetails] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [remark, setRemark] = useState("");
  const [filterAll, setFilterAll] = useState(true);
  const [filterCash, setFilterCash] = useState(false);
  const [filterCard, setFilterCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      date: date,
      amount: amount,
      paymentMode: paymentMode,
      remark: remark,
    };

    setReceiptDetails([...receiptDetails, obj]);

    // CLEARING THE INPUT FIELDS
    setDate("");
    setAmount("");
    setPaymentMode("");
    setRemark("");
  };

  const handleCashFilter = () => {
    if (filterCard || filterAll) {
      setFilterCard(false);
      setFilterAll(false);
      setFilterCash(true);
    }
  };

  const handleCardFilter = () => {
    if (filterCash || filterAll) {
      setFilterCash(false);
      setFilterAll(false);
      setFilterCard(true);
    }
  };

  const handleAllFilter = () => {
    if (filterCash || filterCard) {
      setFilterCard(false);
      setFilterCash(false);
      setFilterAll(true);
    }
  };

  return {
    receiptDetails,
    date,
    amount,
    paymentMode,
    remark,
    setDate,
    setAmount,
    setPaymentMode,
    setRemark,
    handleSubmit,
    handleCashFilter,
    handleCardFilter,
    handleAllFilter,
    filterCash,
    filterAll,
    filterCard,
  };
};

export default useReceiptForm;
