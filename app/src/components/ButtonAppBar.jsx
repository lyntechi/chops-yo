import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import TemporaryDrawer from "./TemporaryDrawer";
import TransitionsModal from "./TransitionsModal";

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
                <img
                  src="https://cdn0.iconfinder.com/data/icons/fastfood-30/64/noodle-bowl-chopsticks-food-asian-ramen-spaghetti-256.png"
                  alt=""
                  className="bowlImg"
                />
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
                <p className="login-btn">Login</p>
                <TransitionsModal />
                <TemporaryDrawer />
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
