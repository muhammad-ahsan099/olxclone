
import React from 'react';
import Loader from '../../components/Loader/loader';
import Grid from '@material-ui/core/Grid';


import ProductLists from './CarProductLists/CarProductLists';
import useStyles from './styles';

// Custom Hook From Product Component 
import { useProduct } from '../../components/Products/useProduct';

const CarProducts = () => {
  const classes = useStyles();

  const [products, loading] = useProduct();



  return (
    <div>
    <h2  style={{fontFamily: 'cursive' , marginTop: 50 , textAlign: 'center' , fontSize: 34 , color:'#2E3B60'}} >Car Products</h2>

    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>



         {

          products.filter(  (item , index) => 
          {
            return item.category === "Car";
          }).map((item , index) => {
            
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductLists index={index} product={item} />
              </Grid>
            )
        } )


        } 
          
        




      {/* {


            products.map(  (item , index)=>
                {
                 
                  return(
              <Grid  item xs={12} sm={6} md={4} lg={3}>
                  <ProductLists  index={index} product={item} />
              </Grid>
                  )
                    
          })
      }           */}


        {loading && <Loader />}



      </Grid>
    </main>


    </div>
  );
};

export default CarProducts;























