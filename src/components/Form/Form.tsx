import React from "react";
import "./styles.css";
import FormInputs from "../FormInput/FormInputs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ name, setOpenForm }) => {
  const notify = () => {
    toast.success("Ticket Booked Successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="formModal">
      <h2>Book Tickets</h2>

      <form>
        <FormInputs
          label="First Name"
          type="text"
          placeholder="Enter your First name"
          fieldReq={true}
          disabled={false}
        />
        <FormInputs
          label="Last Name"
          type="text"
          placeholder="Enter your Last name"
          fieldReq={true}
          disabled={false}
        />
        <FormInputs
          label="Email"
          type="email"
          placeholder="Enter your Email"
          fieldReq={true}
          disabled={false}
        />
        <FormInputs
          label="Mobile Number"
          type="number"
          placeholder="Enter your Mobile Number"
          fieldReq={true}
          disabled={false}
        />
        <FormInputs
          label="Date"
          type="date"
          placeholder=""
          fieldReq={true}
          disabled={false}
        />

        <FormInputs
          label="Adults"
          type="number"
          placeholder="Enter your Number of Adults"
          fieldReq={true}
          disabled={false}
        />

        <FormInputs
          label="Movie Name"
          type="number"
          placeholder={name}
          fieldReq={true}
          disabled={true}
        />
        <FormInputs
          label="Total Tickets"
          type="number"
          placeholder="Enter your Total Tickets"
          fieldReq={true}
          disabled={false}
        />
      </form>

      <div className="buttonDiv">
        <button onClick={() => setOpenForm(false)} className="cancelBtn">
          Cancel
        </button>

        <button
          onClick={() => {
            setOpenForm(false);
            notify();
          }}
          className="bookButton"
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default Form;
