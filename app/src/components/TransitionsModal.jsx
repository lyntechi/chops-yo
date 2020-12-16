import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DatePickers from "./DatePickers";
import { AiFillCloseSquare } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "none",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: 0,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleOpen} className="register-btn">
        RESV
      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <AiFillCloseSquare
              className='form-close'
              onClick={handleClose}
              
              />
              <div className="first-row">
                <input type="text" placeholder="YOUR NAME*" />

                <select>
                  <option>OCCASION</option>
                  <option>REGULAR DINE-IN</option>
                  <option>BIRTHDAY</option>
                  <option>WEDDING</option>
                </select>

                <input type="text" placeholder="PHONE NUMBER #" />
              </div>{" "}
              <div>
                <input type="email" placeholder="EMAIL" />
                <br />
                <select>
                  <option>PREFERED FOOD</option>
                  <option>SEA FOOD</option>
                  <option>CHICKEN</option>
                  <option>STEAK</option>
                  <option>DESERTS</option>
                </select>{" "}
                <br />
                <input type="text" placeholder="NUMBER OF PEOPLE" />
                <br />
                <DatePickers /> <br />
              </div>
              <textarea placeholder="ANYTHING ELSE WE SHOULD KNOW?" />
            </form>{" "}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
