require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('login');
})

app.get('/otp', (req, res) => {
  const { email } = req.query;
  const otp = req.session.otp; 
  res.render('otp', { email, otp });
});

app.get('/failure', (req, res) => {
  res.render('failure');
});

app.get('/success', (req, res) => {
  res.render('success');
});

app.get('/mainpage', (req, res) => {
  res.render('mainpage');
});

app.post('/submitForm', (req, res) => {
  const { email, password } = req.body;
  if (email === password) {
    const otp = Math.floor(100000 + Math.random() * 900000); 
    console.log(`Generated OTP: ${otp}`);
    req.session.otp = otp; 
    res.redirect(`/otp`);
  } else {
    res.redirect('/failure');
  }
});

app.post('/verifyOTP', (req, res) => {
  const { email, enteredOTP } = req.body;
  const otp = req.session.otp; 

  const enteredOTPNumeric = Number(enteredOTP);
  const otpNumeric = Number(otp);
  if (enteredOTPNumeric === otpNumeric) {
    res.redirect('/success');
  } else {
    res.redirect('/failure');
  }
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));