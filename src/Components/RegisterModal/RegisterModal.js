import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ForgotPasswordModalViaReg from "../ForgotPasswordModal/ForgotPasswordModalViaReg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function RegisterModal({ open, onClose, closeBoth }) {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClose = () => {
    onClose();
  };

  const [openForgotPasswordModal, setOpenForgotPasswordModal] =
    React.useState(false);

  const handleForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
    closeBoth();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 0,
            p: 2,
          }}
        >
          <div>
            <h2 style={{ color: "#F93D6E" }}>Welcome,</h2>
            <h3>Register with Samadi</h3>
          </div>

          <div>
            <CloseIcon onClick={closeBoth} style={{ cursor: "pointer" }} />
          </div>
        </Box>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              flexGrow: 1,
            }}
          >
            <div className="modal-textfield">
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
                name="name"
                value={state.name}
                onChange={(event) => handleChange(event)}
                //error={true}
                //autoComplete="current-password"
              />
            </div>
            <div className="modal-textfield">
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
                name="email"
                value={state.email}
                onChange={(event) => handleChange(event)}
                //autoComplete="current-password"
              />
            </div>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              flexGrow: 1,
            }}
          >
            <div className="modal-textfield">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
                name="password"
                value={state.password}
                onChange={(event) => handleChange(event)}
                //autoComplete="current-password"
              />
            </div>
            <div className="modal-textfield">
              <TextField
                id="outlined-cpassword-input"
                label="Confirm Password"
                type="password"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
                name="cpassword"
                value={state.cpassword}
                onChange={(event) => handleChange(event)}
                //autoComplete="current-password"
              />
            </div>
          </Box>

          <div>
            <Button
              variant="outlined"
              style={{
                color: "#F93D6E",
                borderColor: "#F93D6E",
                fontWeight: "750",
                borderWidth: "2px",
                maxHeight: "50px",
                width: "97%",
                fontSize: "16px",
              }}
              sx={{ m: 1 }}
              //onClick={() => setOpenLoginModal(true)}
            >
              Register
            </Button>
          </div>

          <h5 style={{ textAlign: "center", marginTop: "15px" }}>
            ------ OR ------
          </h5>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                background: "none",
                color: "black",
                width: "97%",
                border: "2px solid #F93D6E",
                padding: "7px",
                fontWeight: "550",
                borderRadius: "4px",
              }}
              variant="contained"
              size="medium"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://www.tring.co.in/img/google-btn.png"
                  alt="google-logo"
                  style={{ marginRight: "10px" }}
                />
                CONTINUE WITH GOOGLE
              </div>
            </button>
          </div>
        </DialogContent>
        {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              marginLeft: "22px",
              marginBottom: "10px",
              marginTop: "10px",
              color: "#F93D6E",
              cursor: "pointer",
            }}
            onClick={handleForgotPasswordModal}
          >
            Forgot Password
          </p>
          <p
            style={{
              marginRight: "22px",
              marginBottom: "10px",
              marginTop: "10px",
              color: "#F93D6E",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Already registered ? Login
          </p>
        </div>
      </BootstrapDialog>

      <ForgotPasswordModalViaReg
        open={openForgotPasswordModal}
        onClose={() => setOpenForgotPasswordModal(false)}
      />
    </div>
  );
}
