import "../App.css";

export default function FormData() {
  return (
    <>
      <div className="formData">
        <p>CARDHOLDER NAME</p>
        <input type="text" placeholder="e.g.Jane Appleseed"></input>
        <p>CARD NUMBER</p>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000"></input>
        <div className="info_wrapper">
          <div className="date_wrapper">
            <p>EXP. DATE (MM/YY) </p>
            <div className="date_input">
              <input type="number" placeholder="MM"></input>
              <input type="number" placeholder="YY"></input>
            </div>
          </div>
          <div className="cvc_wrapper">
            <p>CVC</p>
            <input type="number" placeholder="e.g.123"></input>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </>
  );
}
