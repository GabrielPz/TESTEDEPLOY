import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBotton: 16 }}
    >
     <IconButton type="button" sx={{ p: '10px' }} aria-label="Pesquisar">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar"
        inputProps={{ 'aria-label': 'Procurar' }}
      />
      
    </Paper>
    </div>
  );
}