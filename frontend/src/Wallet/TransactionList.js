import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  table: {
    minWidth: 700,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

function TransactionList(props) {
  const { classes, transactions } = props;
  return transactions && transactions.length > 0 ? <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>To</TableCell>
            <TableCell numeric>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.to}
                </TableCell>
                <TableCell numeric>{row.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> : null;
}

TransactionList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionList);
