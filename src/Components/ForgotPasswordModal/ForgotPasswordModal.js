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

export default function ForgotPasswordModal({ open, onClose }) {
  //   const [state, setState] = React.useState({
  //     email: "chesy",
  //   });
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.value });
    setEmail(event.target.value);
  };

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
            <h2 style={{ color: "#F93D6E" }}>Forgot Password</h2>
            <p>
              Kindly enter the email id that you have registered with Samadi. We
              will send you a link to reset your account password if the email
              id entered is registered with us.
            </p>
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
                name="email"
                value={email}
                onChange={(event) => handleChange(event)}
                //error={true}
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
              Reset Password
            </Button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
