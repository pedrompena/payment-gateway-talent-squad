import { useState } from "react";

const PaymentForm = () => {
  const formInitialState = {
    "fullName": "",
    "cardNumber": "",
    "expiration": "",
    "cvv": "",
    "zip": "",
  };

  const [form, setForm] = useState(formInitialState);
  const [isSubmit, setIsSubmit] = useState(false);

  const cardValidation = (num) => {
    return num?.split("").join("").length === 19? true : false;
  };

  const formatNumber = (num) => {
    return num.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const sub = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    setForm(formInitialState);
  };

  return (
    <form className="form" onSubmit={sub}>
      <div className="title">
        <i className="fa-solid fa-building-columns"></i>
        <h2>Payment info</h2>
      </div>
      <div className="form-item full-name">
        <label htmlFor="full-name">Full Name</label>
        <input
          placeholder="Your Name"
          type="name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          required
        />
      </div>
      <div className="form-item card-number">
        <label htmlFor="card-number">Card Number</label>
        <i className="fa-regular fa-credit-card"></i>
        <input
          className={cardValidation(form.cardNumber)? "valid" : "invalid"}
          placeholder="1234 1234 1234 1234" 
          minLength="19"
          maxLength="19"
          accept="number"
          value={form.cardNumber}
          onChange={(e) => setForm({...form, cardNumber: formatNumber(e.target.value)})}
          required
        />
      </div>
      <div className="expiration-cvv">
        <div className="form-item expiration">
          <label htmlFor="expiration">Expiration</label>
          <input 
            placeholder="MM/YY"
            maxLength="5"
            type="text"
            value={form.expiration}
            onChange={(e) => setForm({...form, expiration: e.target.value })}
            required
          />
        </div>
        <div className="form-item cvv">
          <label htmlFor="cvv">CVV</label>
          <i className="fa-solid fa-circle-info"></i>
          <input 
            placeholder="•••"
            minLength="3"
            maxLength="3"
            type="password" 
            value={form.cvv}
            onChange={(e) => setForm({...form, cvv: e.target.value })}  
            required
          />
        </div>
      </div>
      <div className="form-item zip-code">
        <label htmlFor="zip-code">Zip Code</label>
        <input 
          placeholder="Your Zip" 
          type="number" 
          value={form.zip}
          onChange={(e) => setForm({...form, zip: e.target.value })}
          required
        />
      </div>
      <div className="form-item confirm-payment">
        <button type="submit">
          <i className="fa-solid fa-lock"></i>Confirm Payment
        </button>
        <label>You verify that this info is correct</label>
      </div>
      {isSubmit? <div className="message">Your payment has been confirmed <i className="fa-solid fa-circle-check fa-xl"></i></div> : null}
    </form>
  );
};

export default PaymentForm;
