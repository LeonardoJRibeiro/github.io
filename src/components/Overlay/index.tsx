import { createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
interface OverlayProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme) => createStyles({
  overlay: {
    height: '800vh',
    backgroundColor: theme.palette.background.default
  }
}));

export default function Overlay({ children }: OverlayProps): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      {children}
    </div>
  )
}
