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
    padding: 10,
    margin: 10,
    cursor: "pointer",
  },
};

const Sports = ({ sportsNews, search }) => {
  const searchNews = sportsNews.filter((news) => {
    return news.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div style={styles.container}>
      <div className="heading">
        <h1>Sports</h1>
      </div>
      <Grid container>
        {searchNews ? (
          searchNews.map((data, index) => (
            <Paper
              style={styles.paper}
              elevation={3}
              key={index}
              onClick={() => {
                window.open(data.url);
              }}
            >
              <img
                width="100%"
                height="300px"
                src={data.urlToImage}
                alt="img"
              />
              <Grid item sm={12}>
                <Typography variant="h6" align="center">
                  {new Date(data.publishedAt).toUTCString()}
                </Typography>
                <Typography variant="h5">{data.title}</Typography>
                <Typography variant="body1">{data.description}</Typography>
              </Grid>
            </Paper>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default Sports;
