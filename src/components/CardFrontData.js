import "../App.css";

export default function CardFrontData({ finalFormData }) {
  return (
    <>
      <div className="card_fornt_wrapper">
        <div className="circle_wrapper">
          <div className="filled_circle"></div>
          <div className="ring_circle"></div>
        </div>
        <div className="cardNumber">{finalFormData.cardNumber || "0000 0000 0000 0000"}</div>
        <div className="namedate_wrapper">
          <p>{finalFormData.cardName || "Jane Appleseed"}</p>
          <div className="exp_wrapper">
            <p>{finalFormData.expMonth || "00"}/{finalFormData.expYear || "00"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
