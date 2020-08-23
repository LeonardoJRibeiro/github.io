import React from 'react';
import { Toolbar, Grid, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer: React.FC = () => {
  return (
    <Toolbar>
      <Grid container justify="center">
        <Grid item>
          <CopyrightIcon />
        </Grid>
        <Grid item>
          <Typography>2020 - Leonardo Jardim Ribeiro</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Footer;