import React from 'react'
import './productList.css'
import Projects from '../../projects.json'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductList = () => {
  return (
    <div className='pl' id='products'>
      <h2 className='p-title'>My Projects</h2>
        <Container>
    <Grid container style={{display: 'flex', justifyContent: 'center'}}>
      {Projects.map((project, id) => (
        <Grid item key={id} xs={12} md={4} style={{padding: '15px'}}>
          <Card sx={{ maxWidth: 345 }} className='p-card'>
            <CardContent className='p-card-content'>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{minHeight: "100px"}}>
                {project.desc}
              </Typography>
            </CardContent>
            <CardActions className='p-card-button-sec'>
             <a href={project.link} className='p-card-a' target="_blank"><Button size="small" className='p-card-button'>More</Button></a>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </div>
  )
}

export default ProductList