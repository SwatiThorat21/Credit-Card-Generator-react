import CardFrontData from "./CardFrontData";
import CardBackdata from "./CardBackData";
import FormData from "./FormData";
import "../App.css";

export default function CardContainer() {
  return (
    <>
      <div className="cardData_wrapper">
        <CardFrontData />
        <CardBackdata />
      </div>
      <div className="formData_wrapper">
        <FormData />
      </div>
    </>
  );
}
