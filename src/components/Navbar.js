import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../images/Global-News-logo.png";
import DropdownArrow from "../images/drop_down_arrow.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@material-ui/core";
// import { SearchIcon } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  heading: {
    color: "white",
    textDecoration: "none",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  dropdownMenu: {
    border: "1px solid #1e88e5",
    borderRadius: "5px",
    backgroundColor: "#3f51b5",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "150px",
  },
}));

const Navbar = ({ menu, showMenu, search, searchResult }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/">
              <img src={logo} alt="news-logo" className={styles.logo} />
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.heading}>
              Home
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/tech" className={classes.heading}>
              Technology
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/business" className={classes.heading}>
              Business
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/sports" className={classes.heading}>
              Sports
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/wall-street-journal" className={classes.heading}>
              WSJ
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/bitcoin" className={classes.heading}>
              Bitcoin
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/nasa-mars-images" className={classes.heading}>
              Nasa
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <img
              className={styles.dropdownArrow}
              onClick={showMenu}
              src={DropdownArrow}
              alt="drop-down-arrow"
            />
          </Typography>
          {menu ? (
            <div className={classes.dropdownMenu}>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="/feedback" className={classes.heading}>
                  Feedback
                </Link>
              </Typography>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="/contact-us" className={classes.heading}>
                  Contact Us
                </Link>
              </Typography>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="/about-us" className={classes.heading}>
                  About Us
                </Link>
              </Typography>
            </div>
          ) : null}
          <div className={classes.search}>
            <div className={classes.searchIcon}>{/* <SearchIcon /> */}</div>
            <InputBase
              value={search}
              onChange={searchResult}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
