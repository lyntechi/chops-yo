import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import bowl from "../images/bowl.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import TemporaryDrawer from "./TemporaryDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    background: "#212020",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="app-bar">
          <Typography variant="h6" className={classes.title}>
            <div className="listItems">
              <div className="img-logo">
                <img src={bowl} alt="" className="bowlImg" />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h1>CHOPS-YO</h1>
                </Link>
              </div>
              <div className="contact-details">
                <p>
                  Contact Us: <FiPhoneCall /> 484.627.9598
                </p>
                <p>lyndasantiag@gmail.com</p>
                <p>Easton PA, USA</p>
                <button className="login-btn">Login</button>
                <button className="register-btn">Register</button>
                <FaSearch className="search-icon" />
                <TemporaryDrawer />
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
