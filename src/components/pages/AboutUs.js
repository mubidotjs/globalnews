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

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>
        <b>Global News</b>, the pioneer of News Channel that operates under the
        philosophy of keeping its viewers always updated and informed, and that
        is precisely what the channel strives to achieve by leaving no stone
        unturned as it digs into the heart of every story globaly. Besides its
        comprehensive news coverage and updates every hour, Global News offers
        wide range of extraordinary insights on topics ranging from Tech,
        business, wall street journal, bitcoin, sports and nasa's mars image
        updates. To reveal as much as possible about the most exclusive and
        interesting aspects of the news has always been a priority. Employing a
        vast network of correspondents all around the world, Global News is at
        the forefront of every breaking news story that matters most to you.
      </p>
    </div>
  );
};

export default AboutUs;
