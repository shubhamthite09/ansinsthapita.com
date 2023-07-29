const orderDeliveredTemplate = (nameOfUser,id)=>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Delivered - ansinsthapita.com</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F2F2F2; padding: 10px;">
                    <img src="path/to/your/logo.png" alt="Your App Logo" style="max-width: 150px; height: auto;">
                </div>
                <div style="padding: 20px 0;">
                    <h1>Order Delivered!</h1>
                    <p>
                        Dear ${nameOfUser},
                    </p>
                    <p>
                        We're excited to inform you that your order has been successfully delivered. Your package has arrived at the delivery address.
                    </p>
                    <h2>Order Details</h2>
                    <table>
                        <tr>
                            <th>Order ID:</th>
                            <td>${id}</td>
                        </tr>
                    </table>
                    <p>
                        If you have any questions or need assistance regarding your order, please don't hesitate to contact our support team.
                    </p>
                    <p>
                        We hope you had a pleasant shopping experience with ansinsthapita.com. Thank you for choosing us!
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
};
module.exports={
    orderDeliveredTemplate
}