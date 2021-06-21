import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {register} from '../services/RegisterService';
export default function Register() {
    const [email,setEmail] = React.useState("")
    const [firstName,setFirstName] = React.useState("")
    const [lastName,setlastName] = React.useState("")
    const [phone,setphone] = React.useState("")
    const [password,setpassword] = React.useState("")
  
  const onButtonClick = (e) => {
    e.preventDefault()
    console.log("on click");
    let userData = {
      fname : firstName,
      lname : lastName,
      emailid : email,
      password : password,
      phoneno : phone
    }
    register(userData)
  }
    return (
      <div>
        <br></br><br></br>
      <Container component="main" maxWidth="xs">
        <div>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={lastName} 
                  onChange={(e) => setlastName(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={phone} 
                  onChange={(e) => setphone(e.target.value)}
                  autoComplete="Phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password} 
                  onChange={(e) => setpassword(e.target.value)}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <br></br>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onButtonClick}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
    );
    }

