import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const styles = {
  container: {
    justifyContent: "center",
    alignContent: "center",
    margin: 30,
  },
  paper: {
    width: "45%",
    height: "400px",
    padding: 10,
    cursor: "pointer",
    margin: 10,
  },
  nasaImg: {
    width: "100%",
    height: "80%",
  },
};

const NasaMarsImages = ({ nasaImages, search }) => {
  const searchNews = nasaImages.filter((image) => {
    return image.earth_date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="main">
      <div className="heading">
        <h1>Nasa's Mars Image Gallery</h1>
      </div>
      <Grid container>
        {searchNews ? (
          searchNews.map((photo, index) => (
            <Paper style={styles.paper} elevation={3} key={index}>
              <img style={styles.nasaImg} src={photo.img_src} alt="nasa-pic" />
              <Typography variant="h5">
                Captured on : {photo.earth_date}
              </Typography>
              <br />
              <Typography variant="body1">
                Captured from : {photo.camera.full_name}
              </Typography>
            </Paper>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default NasaMarsImages;
