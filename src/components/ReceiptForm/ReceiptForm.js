import React from "react";
import useReceiptForm from "../../hooks/useReceiptForm";
import "./ReceiptForm.css";

const ReceiptForm = () => {
  const {
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
  } = useReceiptForm();

  return (
    <>
      <div className="form-container">
        <h2 className="heading">Receipt Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-content">
              <h3>
                Date<span>*</span>
              </h3>
              <h3>
                Amount<span>*</span>
              </h3>
              <h3>
                Payment Mode<span>*</span>
              </h3>
              <h3>Remark</h3>
            </div>
            <div className="input-fields">
              <input
                onChange={(e) => setDate(e.target.value)}
                className="date-input"
                type="date"
                placeholder="Enter Date"
                value={date}
                required
              />
              <input
                onChange={(e) => setAmount(e.target.value)}
                className="amount-input"
                type="number"
                placeholder="Enter Amount (in INR)"
                value={amount}
                required
              />
              <select
                onChange={(e) => setPaymentMode(e.target.value)}
                className="payment-mode"
                value={paymentMode}
              >
                <option>Cash</option>
                <option>Card</option>
              </select>
              <input
                onChange={(e) => setRemark(e.target.value)}
                className="remark-input"
                type="text"
                placeholder="Enter Remark"
                value={remark}
              />
            </div>
          </div>
          <div className="button-container">
            <button>
              Cancel <br /> <span>(ESC)</span>
            </button>
            <button type="submit">
              Submit <br /> <span>(x S)</span>
            </button>
          </div>
        </form>
      </div>

      {/* TABLE SECTION STARTED HERE */}

      {receiptDetails.length > 0 && (
        <div className="table-container">
          <table className="content-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {receiptDetails?.map((detail, index) => (
                <tr key={index}>
                  <td>{detail?.date}</td>
                  <td>{detail?.amount}</td>
                  <td>{detail?.paymentMode}</td>
                  <td>{detail?.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TABLE SECTION ENDED HERE */}
    </>
  );
};

export default ReceiptForm;
