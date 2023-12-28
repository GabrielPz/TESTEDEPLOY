
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Popover } from '@mui/material';
import { FlagPt, FlagEn, FlagEs, FlagIt } from '../../assets/flags/Flags';
import { useTranslation } from 'react-i18next';


export default function ResponsiveAppBar(info: AppInfo) {
  const phone = info.phone
  const email = info.email
  const name = info.name
  const { i18n, t} = useTranslation("global");
    const onChangeLang = (e: string) => {
        const lang_code = e;
        i18n.changeLanguage(lang_code)
    }
  const pages = [
    {
    path: '/',
    label: name, 
    },
    {
    path: 'payment',
    label: t("anuncieAqui"), 
    },
  ];
  
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  const router = useRouter();
  const handleNavigation = async (path: string) => {
    router.push(`/${path}`);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Link key ={index} href={page.path}>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button aria-describedby={id} variant="outlined" onClick={handleClick} sx={{marginRight: '2rem', borderColor: 'white', color: 'white'}}>
            {t("mudaridioma")}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MenuItem>
              <div onClick={(e)=>{e.preventDefault(); onChangeLang('pt')}} style={{gap: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', paddingLeft: '1rem'}}>
                <FlagPt/>
                <Typography sx={{ p: 2 }}>
                    Português Brasil
                </Typography>
              </div>
            </MenuItem>
            <MenuItem>
              <div onClick={(e)=>{e.preventDefault(); onChangeLang('en')}} style={{gap: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', paddingLeft: '1rem'}}>
                <FlagEn/>
                <Typography sx={{ p: 2 }}>
                    Inglês
                </Typography>
              </div>
            </MenuItem>
            <MenuItem>
              <div onClick={(e)=>{e.preventDefault(); onChangeLang('es')}}  style={{gap: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', paddingLeft: '1rem'}}>
                <FlagEs/>
                <Typography sx={{ p: 2 }}>
                    Espanhol
                </Typography>
              </div>
            </MenuItem>
            <MenuItem>
              <div onClick={(e)=>{e.preventDefault(); onChangeLang('it')}}  style={{gap: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', paddingLeft: '1rem'}}>
                <FlagIt/>
                <Typography sx={{ p: 2 }}>
                    Italiano
                </Typography>
              </div>
            </MenuItem>
          </Popover>
          </Box>
                <Typography sx={{ p: 2 }} >
                {email}
                </Typography>
                <Typography sx={{ p: 2 }}>
                {phone}
                </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}