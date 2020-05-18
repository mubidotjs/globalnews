import React from "react";

const styles = {
  container: {
    margin: 30,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
};

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Phone No : 042 12345678</p>
      <p>Email us at : web@globalnews.com</p>
      <h4>Head Office: </h4>
      <p>Global communications</p>
      <p>5th Floor, City Hall</p>
      <p>Lahore Cantt</p>
      <p>Punjab, Pakistan</p>
    </div>
  );
};

export default ContactUs;
