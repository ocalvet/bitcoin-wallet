import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Wallet({ classes, wallet }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {wallet.title}
        </Typography>
        <Typography component="p">
          {wallet.description}
        </Typography>
        <Typography component="p">
          Private Key: {wallet.key}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Transaction</Button>
      </CardActions>
    </Card>
  );
}

Wallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wallet);