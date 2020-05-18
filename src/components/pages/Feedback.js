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

const Feedback = () => {
  return (
    <div style={styles.container}>
      <h2>Feedback</h2>
      <p>
        Please give us your feedback and we would love to improve upon your
        valuable input.
      </p>
      <p>
        Feel fee to write us at <b>web@globalnews.com</b>.
      </p>
    </div>
  );
};

export default Feedback;
