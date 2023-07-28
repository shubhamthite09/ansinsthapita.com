require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.senderEmail,
        pass: process.env.gmailSecreteKey
    }
});

const sendEmail = (email,subject,text,html) =>{
    
    const mailOptions = {
        from: process.env.senderEmail,
        to: email,
        subject,
        text,
        html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return false;
            // Handle error sending email
        } else {
            console.log('Email sent: ' + info.response);
            return true;
            // Handle successful email sending
        }
    })
}

module.exports ={
    sendEmail
}