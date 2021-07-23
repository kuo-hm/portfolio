import React from "react";
import "./Styles/ContactMe.css";
const ContactMe = () => {
  return (
    // Contact Me form

    <div className="contact-us">
      <form action="#">
        <label for="customerName">NAME</label>
        <input id="customerName" name="customerName" required="" type="text" />
        <label for="customerEmail">EMAIL</label>
        <input
          id="customerEmail"
          name="customerEmail"
          required=""
          type="email"
        />
        <label for="customerPhone">PHONE</label>
        <input
          id="customerPhone"
          name="customerPhone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
        />
        <label for="customerNote">YOUR MESSAGE</label>
        <textarea
          id="customerNote"
          name="customerNote"
          required=""
          rows="4"
        ></textarea>
        <h3>Please provide all the information about your issue you can.</h3>
        <button id="customerOrder">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactMe;
