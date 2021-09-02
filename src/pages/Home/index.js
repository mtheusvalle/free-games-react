import CardGame from '../../components/Cards'

import { 
  Container,
  Grid,
  makeStyles,
 } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
    },
    grid_button: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={6}>
            <CardGame />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}