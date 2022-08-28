import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HeaderLogo from "../../assets/bandit.png";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import DiamondIcon from "@mui/icons-material/Diamond";
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
import LoginModal from "../LoginModal/LoginModal";

function Header() {
  const pages = ["Men", "Women", "Kids", "Exclusive"];
  const settingsPostLogin = ["Profile", "Cart", "Wishlist", "Orders", "Logout"];
  const settingsGuestLogin = ["Login", "Cart", "Wishlist", "Orders"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //To active the Navlink
  let activeStyle = {
    textDecoration: "underline",
  };

  // let activeClassName = "underline";

  //To toggle the drawer in responsive view
  const theme = useTheme();

  const [left, setLeft] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setLeft(open);
  };

  //To show the list shown in toggle
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const optionArray1 = [
    { title: "Men", icon: <MaleIcon /> },
    { title: "Women", icon: <FemaleIcon /> },
    { title: "Kids", icon: <ChildCareIcon /> },
    { title: "Exclusive", icon: <DiamondIcon /> },
  ];

  const optionArray2 = [
    { title: "About us", icon: <InfoIcon /> },
    { title: "Privacy Policy", icon: <SecurityIcon /> },
    { title: "Terms & Conditions", icon: <MilitaryTechIcon /> },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
      >
        <Avatar
          src={HeaderLogo}
          sx={{
            width: 50,
            height: 50,
            //display: { xs: "flex", md: "none" },
            ml: 1,
          }}
        />
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(anchor, false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
      </Box>

      <Divider />
      <List>
        {/* {["Male", "Female", "Kids", "Exclusive"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MaleIcon /> : <FemaleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {optionArray1.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {optionArray2.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //Set the login state
  const [userLoggedin, setUserLoggedIn] = React.useState(false);

  //User Avatar settings
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    let nameCharacters = name.split(" ");
    console.log(nameCharacters);
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children:
        nameCharacters.length > 1
          ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
          : `${name.split(" ")[0][0]}`,
    };
  }

  //Login modal settings
  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <>
              <Avatar
                src={HeaderLogo}
                sx={{
                  width: 50,
                  height: 50,
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Titillium Web",
                  fontWeight: 750,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SAMADI
              </Typography>
            </>

            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  //onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon onClick={toggleDrawer("left", true)} />
                  <SwipeableDrawer
                    anchor="left"
                    open={left}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                  >
                    {list("left")}
                  </SwipeableDrawer>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      {/* <Typography
                        sx={{
                          fontFamily: "Aboreto",
                        }}
                        style={{ fontFamily: "Aboreto" }}
                        textAlign="center"
                      >
                        {page}
                      </Typography> */}
                      <NavLink
                        to={page.toLowerCase()}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {page}
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>

            <>
              <Avatar
                src={HeaderLogo}
                sx={{
                  width: 50,
                  height: 50,
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Titillium Web",
                  fontWeight: 750,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SAMADI
              </Typography>
            </>

            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  // <Button
                  //   key={page}
                  //   onClick={handleCloseNavMenu}
                  //   sx={{ my: 2, color: "white", display: "block" }}
                  // >
                  //   {page}
                  // </Button>
                  <NavLink
                    to={page.toLowerCase()}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {page}
                  </NavLink>
                ))}
              </Box>

              {/* <Box sx={{ flexGrow: 0 }}> */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  },
                }}
              >
                {/* <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
                <IconButton aria-label="cart" size="large">
                  <ShoppingCartOutlinedIcon
                    style={{ color: "white" }}
                    fontSize="inherit"
                  />
                </IconButton>

                <IconButton aria-label="wishlist" size="large">
                  <ShoppingBagOutlinedIcon
                    style={{ color: "white" }}
                    fontSize="inherit"
                    sx={{ mr: 2 }}
                  />
                </IconButton>

                {userLoggedin ? (
                  <>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar {...stringAvatar("Samyak Panchbhai")} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <div style={{ width: "200px" }}>
                        <p
                          style={{
                            marginLeft: "10px",
                            marginRight: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          Welcome, Samyak Panchbhai
                        </p>
                        <Divider />
                        {settingsPostLogin.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </div>
                    </Menu>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    style={{
                      color: "#F93D6E",
                      borderColor: "#F93D6E",
                      fontWeight: "750",
                      borderWidth: "2px",
                      maxHeight: "50px",
                    }}
                    onClick={() => setOpenLoginModal(true)}
                  >
                    Login / Register
                  </Button>
                )}
              </Box>

              <Box
                sx={{
                  flexGrow: 0,
                  display: {
                    xs: "block",
                    md: "none",
                    // justifyContent: "end",
                    // alignItems: "center",
                  },
                }}
              >
                {userLoggedin ? (
                  <>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar {...stringAvatar("Samyak Panchbhai")} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <div style={{ width: "200px" }}>
                        <p
                          style={{
                            marginLeft: "10px",
                            marginRight: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          Welcome, Samyak Panchbhai
                        </p>
                        <Divider />
                        {settingsPostLogin.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </div>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar {...stringAvatar("Guest")} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <div style={{ width: "200px" }}>
                        <p
                          style={{
                            marginLeft: "10px",
                            marginRight: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          Welcome, Guest user
                        </p>
                        <Divider />
                        {settingsGuestLogin.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </div>
                    </Menu>
                  </>
                )}
              </Box>
            </>
          </Toolbar>
        </Container>
      </AppBar>

      <LoginModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      />
    </div>
  );
}

export default Header;
