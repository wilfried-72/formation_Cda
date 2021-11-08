// React
import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Material UI
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

// store
import { store } from "../store";
import { getMeteo } from "../store/actions/MeteoActions";


const NavBar = () => {
  const select = ["Paris", "Dubai", "Londres", "Le Mans"];

  function handleChangeSelect(e) {
    // console.log("Selected!!", e.target.value);
    // ici on demande un getMeteo en fonction de la ville du select puis on execute l'api et les datas renvoyées son mmises dans le store
    if (e.target.value.length > 0) store.dispatch(getMeteo(e.target.value));
  }

  // on recupere les datas dans le store dont les "routes" sont défenies dans index.js du dossier store  puis reducer puis action
  const data = useSelector((state) => state.meteo.data);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
           <AppBar position="static">
            <Toolbar>
              <Tooltip title="Menu">
                <IconButton
                  onClick={handleClick}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <WbSunnyOutlinedIcon sx={{ height: 20 }} />
                Meteo
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                {data.name}
              </Typography>

              <select
                id="country"
                name="country"
                onChange={(e) => handleChangeSelect(e)}
              >
                {select.map((select) => {
                  return (
                    <option value={select} key={select}>
                      {select}
                    </option>
                  );
                })}
              </select>


              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase placeholder="Rechercher…" />
              </Search>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Link exact to="/">
                    Météo
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link exact to="favoris">
                    Favoris
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link exact to="a-propos">
                    A propos
                  </Link>
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
    </div>
  );
};

export default NavBar;
