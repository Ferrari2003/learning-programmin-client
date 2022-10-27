import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BreadHeader from "../Shared/BreadHeader/BreadHeader";

const Checkout = () => {
  const { selected, setSelected } = useContext(AuthContext);
  console.log(selected);
  const navigate = useNavigate();

  const handleOrder = () => {
    toast.success("Succesfully Enrolled");
    setTimeout(() => {
      navigate("/");
      setSelected({});
    }, 1000);
  };

  return (
    <div>
      {selected.id ? (
        <>
          <BreadHeader title="CHECKOUT"></BreadHeader>
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
