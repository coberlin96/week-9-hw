const express = require('express')
const dotenv = require('dotenv');
const app = express()
const port = 3000
const path = require('path')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')

app.set('view engine', 'ejs')

dotenv.config();
connectDB()

const user = {
    firstName: 'Connor',
    lastName: 'Oberlin'
}

app.get('/', (req, res) =>{
    res.render('pages/index', {user:user})
})

app.get('/login', (req, res) =>{
    res.render('pages/login', {user:user})
})

app.get('/profile', (req, res) =>{
    res.render('pages/profile', {user:user})
})

app.get('/register', (req, res) =>{
    res.render('pages/register', {user:user})
})

app.get('/user', (req, res) =>{
    res.render('pages/user', {user:user})
})

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static(path.join(__dirname,'public')))