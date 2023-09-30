import "../App.css";

export default function CardFrontData() {
  return (
    <>
      <div className="card_fornt_wrapper">
        <div className="circle_wrapper">
          <div className="filled_circle"></div>
          <div className="ring_circle"></div>
        </div>
        <div className="cardNumber">0000 0000 0000 0000</div>
        <div className="nameCvc_wrapper">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
        </div>
      </div>
    </>
  );
}
