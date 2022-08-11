import React, { useState } from 'react';
import './contact.css'
import { styled } from '@mui/material/styles';
import { Grid, TextField, Button, Card, CardContent, Typography, Paper } from '@material-ui/core';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { db } from './firebase';

 const Contact = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [num, setNum] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    db.collection('contacts').add({
      name: name,
      email: email,
      num: num,
      message: message,
    })
    .then(() => {
      alert("Message has been submitted.")
    })
    .catch(err => {
      alert(err.message)
    })

    setName("")
    setEmail("")
    setNum("")
    setMessage("")
  }


  return (
    <div className="c"> 
    <Grid container spacing={2}>
  <Grid item md={4}>
  <h1 className="c-title">Ask me anything</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="portfolio-icon" className="c-icon" />
             <a href="tel:+381612595029"> +381 61 259 50 29 </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="portfolio-icon" />
             <a href="mailto:djordjevasiljevic46@gmail.com">djordjevasiljevic46@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="portfolio-icon" />
              Čačak, Serbia
            </div>
          </div>
  </Grid>
  <Grid item md={8}>
      <Grid>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact me
          </Typography> 
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" className='c-button' variant="contained" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
  </Grid>
</Grid>
    </div>
  );
};

export default Contact