

import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useStyles from './styles';

function MensProductLists({product , index})  {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardMedia className={classes.media} image={product.image} title="Product Media"   /> 
      <CardContent>
        

      <Typography gutterBottom variant="h5" component="h1">
            {product.category}
          </Typography>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          
          <Typography gutterBottom variant="h6" component="h2">
            Rs.{product.price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Favourite Item" >
          <FavoriteBorderIcon/>
        </IconButton>
        
      </CardActions>
    </Card>
    
  );
};

export default MensProductLists;

