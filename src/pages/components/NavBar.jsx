
import { useState } from 'react'
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = ({ handleSubmit }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const LinkMenuMain = styled(Link)({
    color: 'white',
    display: 'block',
    fontSize: '0.9rem',
    fontFamily: 'Open Sans'
  })
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight:'10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  return (
    <AppBar position="static" sx={{zIndex: 0 , height: '70px' , display: 'flex', alignItems: 'center', justifyContent: "center" }} >
      <Container maxWidth="xl" sx={{zIndex: 0 }} >
        <Toolbar disableGutters sx={{zIndex: 0 ,  }}>
          <Box sx={{ flexGrow: 1, display: 'flex', maxWidth: '100%' , justifyContent: "space-between", alignItems: 'center' }}>


          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link  underline="none" component='a' to="/">
                  
                  Inicio
                </Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}>
                <Link  underline="none" component='a' to="/">

                  Peliculas
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link underline="none" >

                  Series
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link underline="none" to="/">

                 Mi lista
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box  sx={{ flexGrow: 1, display: {  xs: 'none' ,sm: 'none', md: 'flex' , alignItems: 'center'}, maxWidth: {xs: '70%', sm:'70%', md: '55%' , lg: '45%'} , justifyContent: 'space-between'  }}>
          <Box component="img" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" sx={{width: {xs: '30%' , sm: '20%', md: '18%'} ,'&:hover':{cursor: 'pointer' } }} />
              <LinkMenuMain   underline="none" href="#">
                {" "}
                Inicio
              </LinkMenuMain>
        
              <LinkMenuMain  underline="none" href="#">
                {" "}
                Series
              </LinkMenuMain>
            
              <LinkMenuMain underline="none" href="#">
                {" "}
                Peliculas
              </LinkMenuMain>
              <LinkMenuMain underline="none" href="#">
                {" "}
                Novedades
              </LinkMenuMain>
              <LinkMenuMain underline="none" href="#">
                {" "}
                Mi Lista
              </LinkMenuMain>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' , width: {sx:'30%'}}}> 
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Titulos, Generos'
              inputProps={{ 'aria-label': 'search' }}
              onBlur={handleSubmit}
              onKeyUp={handleSubmit}
            />
          </Search>
          <Typography sx={{marginRight:'10px', '&:hover':{cursor: 'pointer'}}}>
            Niños
          </Typography>
          <Avatar  sx={{marginRight:'10px', '&:hover':{cursor: 'pointer'}}} alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          </Box>
          </Box>
        </Toolbar>
        
      </Container>
      
    </AppBar>
  );
};
