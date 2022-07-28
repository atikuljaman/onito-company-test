import { useState } from "react";

const useReceiptForm = () => {
  const [receiptDetails, setReceiptDetails] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [remark, setRemark] = useState("");

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
  };
};

export default useReceiptForm;
