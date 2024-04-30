import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        <a href="#">
          <h1>PR.</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu-icon">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          > */}
          <MenuIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
          {/* </IconButton> */}
          {/* <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button> */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <a href="#">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </a>
            <a href="#projects">
              <MenuItem onClick={handleClose}>Projects</MenuItem>
            </a>
            <a href="#skills">
              <MenuItem onClick={handleClose}>Skills</MenuItem>
            </a>
            <a href="#contact">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </a>
          </Menu>
        </div>
      </header>
    </>
  );
}

export default Header;
