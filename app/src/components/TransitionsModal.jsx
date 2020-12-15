import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DatePickers from "./DatePickers";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    {/* <button className="register-btn" onClick={handleOpen}></button> */}
    <p onClick={handleOpen} className="register-btn">RESV</p>
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
        <div className="first-row">
          <input type="text" placeholder="YOUR NAME*" />
          <br />
          <select>
            <option>OCCASION</option>
            <option>REGULAR DINE-IN</option>
            <option>BIRTHDAY</option>
            <option>WEDDING</option>
          </select>
          <br />
          <input type="text" placeholder="ANY FOOD ALLERGIES?" />
          <br />
          <input type="text" placeholder="PHONE NUMBER #" />
          <br />
        </div>{" "}
        <div>
          <input type="email" placeholder="EMAIL" />
          <br />
          <br />
          <select>
            <option>PREFERED FOOD</option>
            <option>SEA FOOD</option>
            <option>CHICKEN</option>
            <option>STEAK</option>
            <option>DESERTS</option>
          </select>{" "}
          <br />
          <br />
          <input type="text" placeholder="NUMBER OF PEOPLE" />
          <br />
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
