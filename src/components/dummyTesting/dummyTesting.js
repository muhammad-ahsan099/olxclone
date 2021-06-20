import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import '../OLXNavbar/olxNavbar.css'

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginRight: "2%", marginLeft: '3%' }}>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} disableRipple >
        All CATEGORIES &nbsp;&nbsp;< KeyboardArrowDownOutlinedIcon fontSize='large' />
      </Button>
      <Menu

        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        open={open}
        TransitionComponent={Fade}
      >
        <div style={{ display: 'flex' }}>
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem>
          </div>
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem><MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem>
          </div>
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem><MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem>
          </div>
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem><MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem>
          </div>
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem><MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahsan</MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
