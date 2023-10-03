import { useState } from "react";
import "../App.css";

export default function FormData({ setFinalFormData }) {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [error, setError] = useState(false);

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFinalFormData(formData);
    if (
      formData.cardName.length === 0 ||
      formData.cardNumber.length === 0 ||
      formData.expMonth.length === 0 ||
      formData.expYear.length === 0 ||
      formData.cvc.length === 0
    ) {
      setError(true);
    }
  }

  return (
    <>
      <form className="formData" onSubmit={handleSubmit}>
        <div>
          <p>CARDHOLDER NAME</p>
          <input
            type="text"
            placeholder="e.g.Jane Appleseed"
            name="cardName"
            onChange={handleChange}
            value={formData.cardName}
          />
        </div>
        { error ? <label>Name can not be empty !</label> : ""}
        <div>
          <p>CARD NUMBER</p>
          <input
            type="tel"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            maxLength="16"
            pattern="[0-9\s]{13,19}"
            onChange={handleChange}
            value={formData.cardNumber}
          />
        </div>
        {error ? <label>Card number can not be empty !</label> : ""}
        <div className="info_wrapper">
          <div className="date_wrapper">
            <p>EXP. DATE (MM/YY) </p>
            <div className="date_input">
              <input
                type="tel"
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
            {error ? <label>Exp. date can not be empty !</label> : ""}
          </div>
          <div className="cvc_wrapper">
            <div>
              <p>CVC</p>
              <input
                type="tel"
                placeholder="e.g.123"
                name="cvc"
                pattern="\d{3,4}"
                onChange={handleChange}
                value={formData.cvc}
              />
            </div>
            {error ? <label>CVC can not be empty !</label>:""}
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
