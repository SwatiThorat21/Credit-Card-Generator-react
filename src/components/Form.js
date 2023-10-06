import { useState } from "react";
import "../App.css";

export default function FormData({ setFinalFormData, handleShowModal }) {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({
    cardName: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "cardNumber" && /[^0-9]/.test(value)) {
      return;
    } else if (name === "expMonth" && /[^0-9]/.test(value)) {
      return;
    } else if (name === "expYear" && /[^0-9]/.test(value)) {
      return;
    } else if (name === "cvc" && /[^0-9]/.test(value)) {
      return;
    }

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};
    // Validate card name
    if (formData.cardName.length === 0) {
      newErrors.cardName = true;
    } else {
      newErrors.cardName = false;
    }

    // Validate card number
    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = true;
    } else {
      newErrors.cardNumber = false;
    }

    // Validate expiration month (1-12)
    if (formData.expMonth < 1 || formData.expMonth > 12 || formData.expMonth.length <2) {
      newErrors.expMonth = true;
    } else {
      newErrors.expMonth = false;
    }

    // Validate expiration year (<2023)
    if (formData.expYear < 22 || formData.expYear.length <2) {
      newErrors.expYear = true;
    } else {
      newErrors.expYear = false;
    }

    // Validate CVC
    if (formData.cvc.length === 0 || formData.cvc.length <3) {
      newErrors.cvc = true;
    } else {
      newErrors.cvc = false;
    }
    const hasError = Object.values(newErrors).some((err) => err);
    if (!hasError) {
      setFinalFormData(formData);
      handleShowModal()
    }
    setErrors(newErrors);
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
        {errors.cardName && formData.cardName.length <= 0 && (
          <label>Name can not be empty !</label>
        )}

        <div>
          <p>CARD NUMBER</p>
          <input
            type="tel"
            maxLength="16"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            onChange={handleChange}
            value={formData.cardNumber}
          />
        </div>
        {errors.cardNumber && <label>Card number should be 16 digits !</label>}
        <div className="info_wrapper">
          <div className="date_wrapper">
            <p>EXP. DATE (MM/YY) </p>
            <div className="date_input">
              <input
                type="tel"
                placeholder="MM"
                name="expMonth"
                maxLength="2"
                onChange={handleChange}
                value={formData.expMonth}
              />
              <input
                type="tel"
                placeholder="YY"
                name="expYear"
                maxLength="2"
                onChange={handleChange}
                value={formData.expYear}
              />
            </div>
            {(errors.expMonth || errors.expYear) && (
              <label>Invalid expiration date !</label>
            )}
          </div>
          <div className="cvc_wrapper">
            <div>
              <p>CVC</p>
              <input
                type="tel"
                placeholder="e.g.123"
                name="cvc"
                maxLength="4"
                onChange={handleChange}
                value={formData.cvc}
              />
            </div>
            {errors.cvc && (
              <label>CVC can not be empty !</label>
            )}
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
