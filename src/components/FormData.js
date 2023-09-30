import { useState } from "react";
import "../App.css";

export default function FormData() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className="formData" onSubmit={handleSubmit}>
        <p>CARDHOLDER NAME</p>
        <input
          type="text"
          placeholder="e.g.Jane Appleseed"
          name="cardName"
          onChange={handleChange}
          value={formData.cardName}
        />
        <p>CARD NUMBER</p>
        <input
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          onChange={handleChange}
          value={formData.cardNumber}
        />
        <div className="info_wrapper">
          <div className="date_wrapper">
            <p>EXP. DATE (MM/YY) </p>
            <div className="date_input">
              <input
                type="number"
                placeholder="MM"
                name="expMonth"
                onChange={handleChange}
                value={formData.expMonth}
              />
              <input
                type="number"
                placeholder="YY"
                name="expYear"
                onChange={handleChange}
                value={formData.expYear}
              />
            </div>
          </div>
          <div className="cvc_wrapper">
            <p>CVC</p>
            <input
              type="number"
              placeholder="e.g.123"
              name="cvc"
              onChange={handleChange}
              value={formData.cvc}
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
