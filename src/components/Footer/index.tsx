import React from 'react';
import { Toolbar, Grid, Typography } from '@material-ui/core';

const Footer: React.FC = () => {
  return (
    <Toolbar>
      <Grid container justify="center">
        <Grid item>
          <Typography>© 2020 - Leonardo Jardim Ribeiro</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Footer;