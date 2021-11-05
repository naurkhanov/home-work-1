import React from 'react';
import {
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const useStyles = makeStyles({
  cardComments: {
    padding: 20,
  },
  emoji: {
    fontSize: 40,
    display: 'block',
    textAlign: 'center',
  },
});

const Comments = ({ comments, setComments }) => {
  const classes = useStyles();

  const handleDel = (index) => {
    setComments(comments.filter((el, i) => index !== i));
  };
  return (
    <div>
      <Card variant="outlined" className={classes.cardComments}>
        <Typography variant="h5" gutterBottom>
          Отзывы:
        </Typography>

        <List>
          {!comments.length ? (
            <Typography align="center">
              Отзывов пока нет <span className={classes.emoji}>👻</span>️
            </Typography>
          ) : (
            comments.map((comment, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton onClick={() => handleDel(index)}>
                    <HighlightOffOutlinedIcon color="warning" />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{comment.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={comment.name} secondary={comment.text} />
              </ListItem>
            ))
          )}
        </List>
      </Card>
    </div>
  );
};

export default Comments;
