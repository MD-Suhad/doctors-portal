import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';

const Service = (props) => {
   const {name,description,img} = props.service;
   console.log(props);
   return (
      <Grid item xs={4} sm={4} md={4} >
          <Card  sx={{ minWidth: 275, border: 0 , boxShadow: 0}}>
          <CardMedia
          component="img"
          style = {{ width: 'auto',height:'80px',margin:'0 auto'}}
          image={img}
          title="green iguana"
        />
      <CardContent > 
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography  variant="body3" color="text.secondary">
          {description}
        </Typography>
       
      </CardContent>
    </Card>
      </Grid>
   );
};

export default Service;