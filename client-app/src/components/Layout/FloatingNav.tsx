import { Box, Fab, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function FloatingNav() {
  const pages = [
    { name: 'Home', icon: HomeIcon },
    { name: 'About', icon: PersonIcon },
    { name: 'Skills', icon: InsightsIcon },
    { name: 'Portfolio', icon: PermMediaIcon },
    { name: 'Contact', icon: EmailIcon },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component='div'
      className='FloatingNav'
      sx={{
        position: 'fixed',
        top: '8%',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row-reverse',
        zIndex: 1000,
      }}
    >
      <Tooltip title='Menu'>
        <Fab
          onClick={handleClick}
          color='secondary'
          size='large'
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          sx={{
            right: '5%',
            display: 'flex',
            boxShadow: '0 0 10px rgb(0, 180, 216), 0 0 15px rgb(0, 180, 216)',
          }}
        >
          <MenuIcon />
        </Fab>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {pages.map((page) => (
          <Link key={page.name} to={page.name} smooth={true} onClick={handleClose}>
            <MenuItem sx={{ p: 1.5 } }>
              <ListItemIcon>
                <page.icon />
              </ListItemIcon>
              {page.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}
