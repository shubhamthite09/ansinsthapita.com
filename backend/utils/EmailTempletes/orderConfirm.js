const orderConfirmTemplate = (nameOfUser,trackOrderLink,id,date,price,payMethod,Address)=>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation - ansinsthapita.com</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F2F2F2; padding: 10px;">
                    <img src="path/to/your/logo.png" alt="Your App Logo" style="max-width: 150px; height: auto;">
                </div>
                <div style="padding: 20px 0;">
                    <h1>Order Successfully Placed!</h1>
                    <p>
                        Dear ${nameOfUser},
                    </p>
                    <p>
                        Thank you for placing an order with ansinsthapita.com. We're excited to let you know that your order has been successfully placed.
                    </p>
                    <h2>Order Details</h2>
                            <p>Order ID : ${id}</p>
                            <p>Order Date : ${date}</p>
                            <p>Order Price : ${price}</p>
                            <p>Payment Method : ${payMethod}</p>
                            <p>Billing Address : ${Address}</p>
                    <p>
                        Your order is now being processed, and you will receive further updates as it is shipped and delivered.
                    </p>
                    <p>
                        <a href=${trackOrderLink} style="display: inline-block; background-color: #007BFF; color: #ffffff; padding: 3px 10px; text-decoration: none; border-radius: 4px;">Track your Order</a>
                    </p>
                    <p>
                        If you have any questions or need assistance with your order, please feel free to contact our support team.
                    </p>
                    <p>
                        Thank you for choosing ansinsthapita.com. We hope you enjoy your purchase!
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
module.exports = {
    orderConfirmTemplate
}