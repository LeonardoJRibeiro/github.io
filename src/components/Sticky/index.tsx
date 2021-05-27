import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react'
interface StickyProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme) => createStyles({
  sticky: {
    height: '100vh',
    top: 0,
    left: 0,
    position: 'sticky',
  }
}));

export default function Sticky({ children }: StickyProps): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.sticky}>
      {children}
    </div>
  )
}
