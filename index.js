/*
<!-- A3-->
<!-- Neelendra Mishra-->
<!-- Student ID 40224310-->
<!-- SOEN 287 WEB PROGRAMMING -->
*/

//                                                              --- START OF THE CODE ---
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Validation of given phone number

app.post('/validatePhoneNumber', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneRegex.test(phoneNumber)) {
        res.send('The phone number is correct.');
    } else {
        res.send('The phone number is incorrect.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//                                                              ----END-OF-THE-CODE----