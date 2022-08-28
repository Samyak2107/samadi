import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { display } from "@mui/system";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./LoginModal.css";

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

export default function LoginModal({ open, onClose }) {
  //   const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    onClose();
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
            <h3>Login with Samadi</h3>
          </div>

          <div>
            <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
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
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
                //error={true}
                //autoComplete="current-password"
              />
            </div>
            <div className="modal-textfield">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                sx={{ m: 1 }}
                className="modal-textfield-input"
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
                fontWeight: "700",
              }}
              sx={{ m: 1 }}
              //onClick={() => setOpenLoginModal(true)}
            >
              Login
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
            //onClick={handleSignup}
          >
            New user ? Sign up
          </p>
        </div>
      </BootstrapDialog>
    </div>
  );
}
