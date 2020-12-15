import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <Link to="/" className="link">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        {["Foods"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <Link to="/menu" className="link">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        {["Desserts"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <Link to="/desert-menu" className="link">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        {["Drinks"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <Link to="/drinks-menu" className="link">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        {["About"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <a href="#about" className="link">
              {" "}
              <ListItemText primary={text} />{" "}
            </a>
          </ListItem>
        ))}
        {["Hours"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <a href="#hours" className="link">
              {" "}
              <ListItemText primary={text} />{" "}
            </a>
          </ListItem>
        ))}
        {["Chefs"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <a href="#chefs" className="link">
              {" "}
              <ListItemText primary={text} />{" "}
            </a>
          </ListItem>
        ))}
        {["Resv"].map((text, index) => (
          <ListItem button key={text} className="menu-item">
            <a href="#resv" className="link">
              {" "}
              <ListItemText primary={text} />{" "}
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu className="menu-icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
