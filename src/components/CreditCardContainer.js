import { useState } from "react";
import CardFrontData from "./CardFrontData";
import CardBackdata from "./CardBackData";
import FormData from "./Form";
import Modal from "./Modal";
import "../App.css";

export default function CreditCardContainer() {
  const [finalFormData, setFinalFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  return (
    <>
      <div className="cardData_wrapper">
        <Modal />
        <CardFrontData finalFormData={finalFormData} />
        <CardBackdata finalFormData={finalFormData} />
      </div>
      <div className="formData_wrapper">
        <FormData setFinalFormData={setFinalFormData} />
      </div>
    </>
  );
}
