import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { removeProductFromOrder } from '../../../Redux/actions/order.action';
import TableDropDown from '../../Inputs/DropDown/TableDropDown';
import OrderItem from './OrderItem/OrderItem';
import { loadTables } from '../../../Redux/thunks/tables.thunk';
import { sendOrder } from '../../../Redux/thunks/order.thunk';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    borderBottom: '1px solid black',
  },
  button: {
    width: '100%',
  },
});

function Order({ getTables, tables, confirmOrder, order, removeItem, checkoutClickHandler }) {
  const classes = useStyles();
  const [tableOpen, setTableOpen] = React.useState(false);
  const [tableSelection, setTableSelection] = React.useState('');

  const orderCompleteHandler = () => {
    confirmOrder({ orderData: [...order], tableNumber: tableSelection });
  };

  const totaller =
    order.length === 0
      ? 0
      : order.map((el) => el.price * el.volume).reduce((acc, curr) => acc + curr);

  React.useEffect(() => {
    getTables();
  }, [getTables]);

  const orderDetails = order.map((item) => (
    <OrderItem
      key={item.title + item.subOption + item.volume}
      item={item}
      removeItem={removeItem}
    />
  ));

  return (
    <div>
      <Grid className={classes.root} container direction="column">
        <Grid className={classes.root} container item direction="row">
          <Grid item xs={4}>
            <Typography>ITEM</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>AMOUNT</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>COST</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography> </Typography>
          </Grid>
        </Grid>
        {orderDetails}
        <Grid container item direction="column">
          <Grid item>
            <Typography>
              Total: &nbsp; £&nbsp;
              {totaller.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={checkoutClickHandler}
            >
              Back to Menu
            </Button>
          </Grid>
          <Grid className={classes.button} item xs={12}>
            {tableOpen ? (
              <TableDropDown
                tableData={tables}
                tableSelection={tableSelection}
                setTableSelection={setTableSelection}
              />
            ) : null}
            {tableOpen ? (
              <Button
                className={classes.button}
                disabled={tableSelection === ''}
                variant="contained"
                onClick={() => orderCompleteHandler()}
              >
                Confirm Order
              </Button>
            ) : (
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => setTableOpen(!tableOpen)}
              >
                Place Order
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Order.propTypes = {
  getTables: PropTypes.func,
  tables: PropTypes.arrayOf(PropTypes.object),
  confirmOrder: PropTypes.func,
  order: PropTypes.object,
  removeItem: PropTypes.func,
  checkoutClickHandler: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.order.orderData,
  tables: state.tables.tableData,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeProductFromOrder(item)),
  getTables: () => dispatch(loadTables()),
  confirmOrder: (order) => dispatch(sendOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
