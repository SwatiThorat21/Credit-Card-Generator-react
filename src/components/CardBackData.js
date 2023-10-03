import "../App.css";

export default function CardFrontData({finalFormData}) {
  return (
    <>
      <div className="card_back_wrapper">
        <div className="black_scanner"></div>
        <div className="cvc_input">{finalFormData.cvc || "000"}</div>
        <div className="lines_wrapper">
          <div className="line_contain">
            <div className="line1-1"></div>
            <div className="line1-2"></div>
            <div className="line1-3"></div>
            <div className="line1-4"></div>
          </div>
          <div className="line_contain">
            <div className="line2-1"></div>
            <div className="line2-2"></div>
            <div className="line2-3"></div>
            <div className="line2-4"></div>
          </div>
          <div className="line_contain">
            <div className="line3-1"></div>
            <div className="line3-2"></div>
            <div className="line3-3"></div>
            <div className="line3-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
