import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'#00577D',
    height:200
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  }
}));

const Clients=()=>{
    const classes=useStyles();
    const images= [
      {
        imageUrl: '/images/products/product_1.png'
      },
      {
        imageUrl: '/images/products/product_2.png'
      },
      {
        imageUrl: '/images/products/product_3.png'
      },
      {
        imageUrl: '/images/products/product_4.png'
      },
      {
        imageUrl: '/images/products/product_5.png'
      },
      {
        imageUrl: '/images/products/product_6.png'
      },
      {
        imageUrl: '/images/products/product_1.png'
      },
      {
        imageUrl: '/images/products/product_2.png'
      },
      {
        imageUrl: '/images/products/product_3.png'
      }
    ];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return(
      <div className={classes.root} id="clients" style={{marginTop:30}}>
        <Grid container spacing={3} style={{marginTop:30}} id="clintSlider">
          <Grid item xl={4} md={4} xs={12}>
            <Typography variant="h2" style={{textAlign:'center', color:'lightgray', marginTop:15}}>Our Valueable Clients</Typography>
          </Grid>
          <Grid item xl={8} md={8} xs={12} style={{textAlign:'center'}}>
            <Carousel 
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
              autoPlay={true}
            >
                {
                  images.map(image=>(
                    <div className={classes.imageContainer}>
                      <img
                        alt="Product"
                        className={classes.image}
                        src={image.imageUrl}
                      />
                    </div>
                  ))
                }
            </Carousel>
          </Grid>
        </Grid>  
      </div>  
    )
}
export default Clients;