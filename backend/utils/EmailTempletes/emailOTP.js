const emailOTPTemplate = (nameOfUser,resetPasswordLink)=>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset - ansinsthapita.com</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F2F2F2; padding: 10px;">
                    <img src="path/to/your/logo.png" alt="Your App Logo" style="max-width: 150px; height: auto;">
                </div>
                <div style="padding: 20px 0;">
                    <h2>Password Reset</h2>
                    <p>
                        Dear ${nameOfUser},
                    </p>
                    <p>
                        We have received a request to reset your password for ansinsthapita.com.
                    </p>
                    <p>
                        If you did not make this request, please ignore this email. Your password will remain unchanged.
                    </p>
                    <p>
                        To reset your password, please click the following link:
                    </p>
                    <p style="text-align: center;">
                        <a href=${resetPasswordLink} style="display: inline-block; background-color: #007BFF; color: #ffffff; padding: 3px 10px; text-decoration: none; border-radius: 4px;">Reset Password</a>
                    </p>
                    <p>
                        The link is only valid for 10 Min. If you continue to experience issues or need further assistance, please contact our support team.
                    </p>
                    <p>
                        Thank you for using ansinsthapita.com.
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
module.exports = {
    emailOTPTemplate
}