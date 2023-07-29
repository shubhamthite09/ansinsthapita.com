require("dotenv").config();
const welcomeEmailTemplate = (nameOfUser,verificationLink)=>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to ansinsthapita.com</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F2F2F2; padding: 10px;">
                    <img src="path/to/your/logo.png" alt="Your App Logo" style="max-width: 150px; height: auto;">
                </div>
                <div style="padding: 20px 0;">
                    <h2>Welcome to ansinsthapita.com</h2>
                    <p>
                        Dear ${nameOfUser},
                    </p>
                    <p>
                        Thank you for joining our store! We're excited to have you on board.
                        With ansinsthapita.com, you can enjoy a seamless and delightful experience.
                    </p>
                    <p>
                        To get started, please click the following link to verify your account:
                    </p>
                    <p style="text-align: center;">
                        <a href=${verificationLink} style="display: inline-block; background-color: #007BFF; color: #ffffff; padding: 3px 10px; text-decoration: none; border-radius: 4px;">Verify Account</a>
                    </p>
                    <p>
                        If you have any questions or need assistance, please feel free to reach out to our support team.
                    </p>
                    <p>
                        Happy using ansinsthapita.com!
                    </p>
                    <p>
                        Best regards,
                        <br>
                        Team ansinsthapita
                    </p>
                    <p>
                        <a href=${process.env.baseSiteURL} style="display: inline-block; background-color: #007BFF; color: #ffffff; padding: 3px 10px; text-decoration: none; border-radius: 4px;">Visit Site</a>
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
    welcomeEmailTemplate
}