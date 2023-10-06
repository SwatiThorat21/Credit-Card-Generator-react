import "./Modal.css";

export default function Modal({onClose}) {

  return (
    <>
      <div className="modalContain">
        {/* <!-- Modal --> */}
        <div id="success_tic" className="modal">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="close" onClick={onClose}>&times;</div>
              <div className="page-body">
                <div className="head">
                  <h3>Success !!</h3>
                  <h4>You have filled card details successfully!</h4>
                </div>

                <h1>
                  <div className="checkmark-circle">
                    <div className="background"></div>
                    <div className="checkmark draw"></div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
