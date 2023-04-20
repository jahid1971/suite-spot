const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
// const nodemailer = require('nodemailer')
require('dotenv').config()
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

// Middlewares
const whitelist = ['http://localhost:5173', 'http://localhost:5000', 'https://aircnc-a740e.web.app']
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json())

// Decode JWT
// function verifyJWT(req, res, next) {
//     const authHeader = req.headers.authorization

//     if (!authHeader) {
//         return res.status(401).send({ message: 'unauthorized access' })
//     }
//     const token = authHeader.split(' ')[1]

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
//         if (err) {
//             return res.status(403).send({ message: 'Forbidden access' })
//         }
//         console.log(decoded)
//         req.decoded = decoded
//         next()
//     })
// }

// // Send Email
// const sendMail = (emailData, email) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASS,
//         },
//     })

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: email,
//         subject: emailData?.subject,
//         html: `<p>${emailData?.message}</p>`,
//     }

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log('Email sent: ' + info.response)
//         }
//     })
// }



// Database Connection
const uri = 'mongodb+srv://db3:cXU04uIMwe1o5fPo@cluster3.273qcag.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
})



async function run() {
    try {
        const homesCollection = client.db('suite-spot').collection('homes')
        const usersCollection = client.db('suite-spot').collection('users')
        const bookingCollection = client.db('suite-spot').collection('bookings')



        // Save user email & generate JWT
        app.put('/user/:email', async (req, res) => {
            const email = req.params.email
            const user = req.body
            // console.log(user);

            const filter = { email: email }
            const options = { upsert: true }
            const updateDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(filter, updateDoc, options)

            const token = jwt.sign(user, process.env.API_ACCESS_TOKEN, {
                expiresIn: '180d',
            })
            console.log(result)
            res.send({ result, token })
        })


        // get a single user 

        app.get('/user/:email', async (req, res) => {
            const email = req.params.email

            const query = { email: email }
            const user = await usersCollection.findOne(query)
            console.log(user);
            res.send(user)
        })

        //getAllUsers

        app.get('/users', async (req, res) => {
            const query = {}
            const cursor = usersCollection.find(query)
            const users = await cursor.toArray()
            console.log(users);
            res.send(users)
        })




        //save bookings 

        app.post('/bookings', async (req, res) => {
            const bookings = req.body
            const result = await bookingCollection.insertOne(bookings)
            console.log(result);
            res.send(result)
        })

        //Get Bookings 

        app.get('/bookings', async (req, res) => {
            let query = {}
            const email = req.query.email
            if (email) {
                query = {
                    guestEmail: email,
                }
            }

            const cursor = bookingCollection.find(query)
            const bookings = await cursor.toArray()
            res.send(bookings)

            console.log(bookings);

        })

        //save  Homes
        app.post('/homes', async (req, res) => {
            const home = req.body
            const result = await homesCollection.insertOne(home)
            console.log(result)
            res.send(result)
        })

        //  get all gomes
        app.get('/homes', async (req, res) => {
            const query = {}
            const cursor = homesCollection.find(query)
            const homes = await cursor.toArray()
            res.send(homes)
        })

        // get Homes for a host 

        app.get('/homes/:email', async (req, res) => {
            const email = req.params.email
            // const decodedEmail = req.decoded.email

            // if (email !== decodedEmail) {
            //   return res.status(403).send({ message: 'forbidden access' })
            // }
            const query = {
                'host.email': email,
            }
            const cursor = homesCollection.find(query)
            const homes = await cursor.toArray()
            res.send(homes)
        })

        // Get Single Home
        app.get('/home/:id', async (req, res) => {
            const id = req.params.id
            const query = {_id:new ObjectId(id)}
            const home = await homesCollection.findOne(query)
            res.send(home)
        })



        console.log('Database Connected...')
    } finally {
    }
}

run().catch(err => console.error(err))

app.get('/', (req, res) => {
    res.send('Server is running.......... in session')
})

app.listen(port, () => {
    console.log(`Server is running.......... on ${port}`)
})
