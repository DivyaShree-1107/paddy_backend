var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var nodemailer1 = require('../Model/Modelemail');


exports.nodemailer1 = function (req, res) {
    const reg_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    // console.log(req.body)
    // if(reg_email.test(req.body.email)){
    var mail = new nodemailer1(req.body);
    mail.save(function (err, data) {
        if (err)
            res.send(err.message);
        res.json(data);
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,

            auth: {
                user: 'drudregowdaostb2@gmail.com',
                pass: 'divya9108170632'
            }
        });
        mailOptions = {
            from: 'drudregowdaostb2@gmail.com',
            to: req.body.Email,
            subject: 'Receipt of the Crop Purchase',
            text: 'Hii, we have  credited your account with the respective amount' + ' http://localhost:3000/login'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    })
    // }
    // else {
    // res.send('Email is invalid');
    // }
};