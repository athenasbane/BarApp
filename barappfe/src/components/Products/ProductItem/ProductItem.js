import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  makeStyles,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProductForm from './ProductForm/ProductForm';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '2px',
  },
  paperEven: {
    backgroundColor: '#C0C0C0',
    textAlign: 'center',
  },
  paperOdd: {
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
  },
  subHeading: {
    marginLeft: '100px',
  },
});

export const ProductItem = ({ title, index, active, id }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (title) => (event, isExpanded) => {
    setExpanded(isExpanded ? title : false);
  };

  return (
    <Accordion
      expanded={expanded === title}
      className={index % 2 === 1 ? classes.paperOdd : classes.paperEven}
      onChange={handleChange(title)}
      disabled={!active}
    >
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
      >
        <Typography>{title}</Typography>
        {!active ? <Typography className={classes.subHeading}>Sold Out</Typography> : null}
      </AccordionSummary>
      <AccordionDetails>
        <ProductForm title={title} id={id} handleChange={handleChange(title)} />
      </AccordionDetails>
    </Accordion>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProductItem;
