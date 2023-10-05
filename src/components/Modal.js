import "./Modal.css";

export default function Modal() {

  return (
    <>
      <div className="toastContain">
        {/* <!-- Modal --> */}
        <div id="success_tic" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="close">&times;</div>
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
