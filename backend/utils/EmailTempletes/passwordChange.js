const passwordChange = (nameOfUser) =>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Changed - ansinsthapita.com</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F2F2F2; padding: 10px;">
                    <img src="path/to/your/logo.png" alt="Your App Logo" style="max-width: 150px; height: auto;">
                </div>
                <div style="padding: 20px 0;">
                    <h2>Password Changed Successfully!</h2>
                    <p>
                        Dear ${nameOfUser},
                    </p>
                    <p>
                        This is to confirm that your password for ansinsthapita.com has been successfully changed.
                    </p>
                    <p>
                        If you made this change, you may safely ignore this email.
                    </p>
                    <p>
                        If you did not request this password change or have any concerns about your account's security, please contact our support team immediately.
                    </p>
                    <p>
                        Thank you for using ansinsthapita.com. Your account security is essential to us.
                    </p>
                    <p>
                        Best regards,
                        <br>
                        Team ansinsthapita
                    </p>
                </div>
                <div style="text-align: center; padding-top: 20px; color: #888888;">
                    ansinsthapita.com &copy; 2023. All rights reserved.
                </div>
            </div>
        </body>
        </html>    
    `;
}
module.exports ={
    passwordChange
}