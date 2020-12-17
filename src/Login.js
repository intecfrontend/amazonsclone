import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

import logo from "./imgs/amazon.png";
import "./Header.css";

import { useStateValue } from "./StateProvider";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Create from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = e => {
    e.preventdefault(); // this stops the refresh, allways in react!

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  const register = e => {
    e.preventdefault(); // this stops the refresh, allways in react!

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className="login__cont">
      <div className="login">
        <Link to="/">
          <img className="header__logo" src={logo} alt="amazon-logo" />
        </Link>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="login__paper">
          <div className="login__signintop">
            <Avatar className="login__avatar"></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </div>
          <form className="logon__form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              autoComplete="email"
              autoFocus
            />
            {console.log("testingvalidateemail" + email)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {console.log("testingvalidatepwd" + password)}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="login__btn1"
              onClick={Login}
            >
              {console.log("testingvalidatelogin", Login)}
              Sign In
            </Button>
            <p className="login__txt">
              By signing-in you agree to Amazon's Conditions of Use & Sape.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <div className="login__footer">
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  <Button type="submit" onClick={register}>
                    {console.log("testingvalidatelogin", login)}
                    register
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

// function Login() {
//   return (
//     <div>
//       <div className="login">
//         <Link to="/">
//           <img className="header__logo" src={logo} alt="amazon-logo" />
//         </Link>
//       </div>
//       <div className="login__container">
//         <h2>Sign in</h2>
//         <form action="">
//           <h5>E-mail</h5>
//           <div className="login__input">
//             <input type="text" className="login__inputter" />
//           </div>
//           <h5>Password</h5>
//           <button className="login__btn1">Sign in</button>

//           <button className="login__btn2">Create your Amazon Account</button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default Login;
