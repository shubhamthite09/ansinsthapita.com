# Amezone

system design

Amezone Link Clone App (E-comerce);

1. Data ====>
    1. Category’s
        1. Electronics
		i. Mobiles
		ii. Cameras
		iii. Computers
		iV. Smart Watchs 
        2. Home Appliencs  
            1. Tv
            2. Refrigerator
            3. Washing Machine
            4. Ac
        3. Fashion
            1. Girls Cloths
            2. Boys cloths
            3. Shoes
            4. Makeup
        4. Books
            1. Fictional 
            2. Bio graphy
            3. Philosophy 
            4. Self help
        5. Camping Equipment
            1. Tents
            2. Sleeping bag
            3. Utincels
            4. Accessories

Backend =====>

1. Login signup logout / google
2. Reset password / verify registration
3. CRUD on products / admin
4. User base authorization
5. Getting all routes
6. Search in products
7. Cart 
8. Order summary
9. Payments
10. Monitoring loging
11. Rate limiter
12. Email Notification on every action
13. Ci/cd

User Schema
Name:string
Email: string
Password: string
Mobile:number
Role: enum [admin,seler,user]
Adress: [
{
	street:number
	city:string
	state:string
	Pin:number
	Mobile:Number
}
]
Avatar:string


Product scheme
Title:string
Created by:id
Discount:number
Discretion : string
Price_strike : number
Price : number
Rating:number
Warranty : number
Seler name:string
Reviews: [
{
	userId: string
	user name: string
	review: string
} 
]
Image:[string]
Ranking:Number


Cart schema
Userid:id
Products : id
quantity: number

Order Schema
Timestamp on
Userid: id
Products:[
{
product id: id,
Quantity:number
}
]
Delivery status: emun[orderd , dispatch,Transit,dilivered]
Payment type : enum [prepaid , cod]


Frontend ====>

Home page
Product display page
Product single product page
Login signup forgot password verify 
User profile
Cart page
Order summary before placemeant of order
Admin console CRUD admin
Selers page My orders  
Seler admin console



Certainly! For an e-commerce app, you can consider the Sanskrit name:

"व्यापारिन्" (Vyāpārin)
"व्यापारसूर्या" (Vyapārasūryā)
"व्यापारयन्त्र" (Vyāpārayantra)
"व्यापारवाहिनी" (Vyāpāravāhinī)
"व्यवसायसौध" (Vyavasāyasaudha)
"पुस्तकारम्भ" (Pustakārambha)
pustkalya
puskatbhandar

