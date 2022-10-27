import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { selected, setSelected } = useContext(AuthContext);
  console.log(selected);
  const navigate = useNavigate();

  const handleOrder = () => {
    toast.success("Succesfully Enrolled");
    setTimeout(() => {
      navigate("/");
      setSelected({});
    }, 2000);
  };

  return (
    <div>
      {selected.id ? (
        <>
          <section
            className=" include-bg pt-150 pb-150 breadcrumb__overlay text-light "
            style={{
              backgroundImage: `url("https://i.ibb.co/DQC36zr/7915212-3785210-1900x.jpg")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="breadcrumb__content text-center p-relative z-index-1">
                    <h2 className="breadcrumb__title">CHECKOUT</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container my-5 ">
            <Row className="justify-content-center">
              <Col xs={11} md={6}>
                <div className="rounded shadow p-4 mx-auto my-3">
                  <h4 className="">Order Summery:</h4>
                  <div className="course__video-content mb-35 mt-4">
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="course__video-icon">
                          <img
                            className="img-fluid"
                            src={selected.img}
                            alt=""
                            width={"80px"}
                          />
                        </div>
                        <Toaster position="top-center" reverseOrder={false} />
                        <div className="course__video-info ms-3 d-flex align-items-center justify-content-between flex-grow-1">
                          <p className="h6 ">{selected.displayName}</p>
                          <p className="mb-0">${selected.price}</p>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between ">
                        <p className="h5">Total to pay:</p>
                        <p className="mb-0 h5">${selected.price}</p>
                      </li>
                      <li className="d-flex justify-content-center ">
                        <button
                          onClick={handleOrder}
                          className="btn btn-primary"
                        >
                          Confrim Order
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div className="pb-150 pt-150 text-center">
            <p className="pb-150 pt-150 h2">No Item Selected</p>
            <Link to="/courses">
              <button className="btn btn-primary"> Course</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
