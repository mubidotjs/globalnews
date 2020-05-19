import React from "react";
import "./App.css";
import { Navbar, Main, Footer } from "./components";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import {
  Technology,
  Business,
  Sports,
  WallStreetJournal,
  Bitcoin,
  NasaMarsImages,
  Feedback,
  ContactUs,
  AboutUs,
} from "./components/pages";
require("dotenv").config();

const api_global = process.env.REACT_APP_API_GLOBAL;
const api_tech = process.env.REACT_APP_API_TECH;
const api_business = process.env.REACT_APP_API_BUSINESS;
const api_sports = process.env.REACT_APP_API_SPORTS;
const api_bitcoin = process.env.REACT_APP_API_BITCOIN;
const api_wallStreetJournal = process.env.REACT_APP_API_WALLSTREETJOURNAL;
const api_nasaMarsImages = process.env.REACT_APP_API_NASAMARSIMAGES;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      search: "",
      globalNews: [],
      techNews: [],
      businessNews: [],
      sportsNews: [],
      wsjNews: [],
      bitcoinNews: [],
      nasaImages: [],
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(api_global),
        axios.get(api_tech),
        axios.get(api_business),
        axios.get(api_sports),
        axios.get(api_wallStreetJournal),
        axios.get(api_bitcoin),
        axios.get(api_nasaMarsImages),
      ])
      .then(
        axios.spread(
          (
            global,
            tech,
            business,
            sports,
            wallStreetJournal,
            bitcoin,
            nasaImg
          ) => {
            this.setState({
              globalNews: global.data.articles,
              techNews: tech.data.articles,
              businessNews: business.data.articles,
              sportsNews: sports.data.articles,
              wsjNews: wallStreetJournal.data.articles,
              bitcoinNews: bitcoin.data.articles,
              nasaImages: nasaImg.data.photos,
            });
          }
        )
      )
      .catch((err) => console.error(err));
  }

  showMenu = (event) => {
    event.preventDefault();

    this.setState({
      menu: !this.state.menu,
    });
  };

  searchResult = (e) => {
    e.preventDefault();

    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const {
      menu,
      search,
      globalNews,
      techNews,
      businessNews,
      sportsNews,
      bitcoinNews,
      wsjNews,
      nasaImages,
    } = this.state;

    return (
      <div className="App">
        <Navbar
          showMenu={this.showMenu}
          menu={menu}
          searchResult={this.searchResult}
        />
        <div className="main-wrapper">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Main {...props} globalNews={globalNews} search={search} />
              )}
            />
            <Route
              exact
              path="/tech"
              render={(props) => (
                <Technology {...props} techNews={techNews} search={search} />
              )}
            />
            <Route
              exact
              path="/business"
              render={(props) => (
                <Business
                  {...props}
                  businessNews={businessNews}
                  search={search}
                />
              )}
            />
            <Route
              exact
              path="/sports"
              render={(props) => (
                <Sports {...props} sportsNews={sportsNews} search={search} />
              )}
            />
            <Route
              exact
              path="/wall-street-journal"
              render={(props) => (
                <WallStreetJournal
                  {...props}
                  wsjNews={wsjNews}
                  search={search}
                />
              )}
            />
            <Route
              exact
              path="/bitcoin"
              render={(props) => (
                <Bitcoin {...props} bitcoinNews={bitcoinNews} search={search} />
              )}
            />
            <Route
              exact
              path="/nasa-mars-images"
              render={(props) => (
                <NasaMarsImages
                  {...props}
                  nasaImages={nasaImages}
                  search={search}
                />
              )}
            />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
