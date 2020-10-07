import React from "react";
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const LikeTrack = ({ classes, trackId, likeCount }) => {
  return (
    <Mutation
    mutation={CREATE_LIKE_MUTATION}
    variables={{ trackId}}
    >
      {createLike => (
        <IconButton
          className={classes.iconButton}
        >
          {likeCount}
          <ThumbUpIcon className={classes.icon}/>
        </IconButton>
    )}

    </Mutation>
    )
};

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId: Int!) {
    createLike(trackId: $trackId) {
      track {
        identifierlikes {
          id
        }
      }
    }
  }
`
const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(LikeTrack);
