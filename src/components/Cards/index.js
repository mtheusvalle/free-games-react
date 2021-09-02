import { useState, useEffect } from 'react';

import { api } from '../../services/api'

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea
 } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 345,
    marginTop: 30,
  },
  media: {
    height: 200,
  },
});

export default function CardGame() {
  const classes = useStyles();

  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get(`/games`, {
      params: {
        _limit: 10
      }
    }).then(response => {
      setGames(response.data);
    }).catch(err => {
      console.log(err);
    });
  });

  return (
    <>
      {games.map(game => {
        return (
          <Card key={game.id} className={classes.root}>
              <CardActionArea href={game.game_url} target="_blank">
                <CardMedia 
                  className={classes.media}
                  image={game.thumbnail}
                  title={game.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {game.short_description}
                  </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  )
}
