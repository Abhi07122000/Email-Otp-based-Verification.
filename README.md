# Otp-based-Verification.
This project is a simple OTP (One-Time Password) verification system implemented using Node.js and Express.js. It allows users to enter their email and password, generates a random OTP if the email and password match, and verifies the entered OTP to determine success or failure.

Step 1 : Created a Views folder to store all the EJS files and moved the login.ejs file into view And changed the main to app.js inside the package.json file.


## Usage

1. Open the application in your browser.
2. Enter your email and password.
3. If the email and password match, an OTP will be generated in the console and displayed.
4. Enter the OTP in the provided input field.
5. If the entered OTP matches the generated OTP, you will be redirected to the success page. Otherwise, you will be redirected to the failure page which then follows to another mainpage.

## Dependencies

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- EJS: Embedded JavaScript templates
- Body-parser: Node.js body parsing middleware
- Express-session: Simple session middleware for Express.js
