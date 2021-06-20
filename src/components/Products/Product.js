
import React from 'react';
import Loader from '../Loader/loader';
import Grid from '@material-ui/core/Grid';


import ProductLists from './ProductLists/ProductLists';
import useStyles from './styles';

import { useProduct } from './useProduct';

const Products = () => {
  const classes = useStyles();

  const [products, loading , addtoFav] = useProduct();



  return (
    
    



    
    <main className={classes.content} style={{minHeight: '700px'}}>
    <h2  style={{fontFamily: 'cursive' , marginTop: 50 ,  fontSize: 24 , color:'#2E3B60'}} >Fresh Recommendations</h2>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      {


            products.map(  (item , index)=>
                {
                 
                  return(
              <Grid  item xs={12} sm={6} md={4} lg={3} >
                  <ProductLists  index={index} product={item} addtoFav={addtoFav} />
              </Grid>
                  )
                    
          })
      }          


        {loading && <Loader />}



      </Grid>
    </main>
    
  );
};

export default Products;























