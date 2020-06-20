const express=require('express')
const app=express()
app.set('view engine','ejs')
require('dotenv/config')
const mongoose=require('mongoose')
const Login=require('./modals/modal')

app.use(express.urlencoded())

app.get('/',(req,res) =>{
    res.render('pages/login')
})

app.get('/register',  (req,res) =>{
    res.render('pages/register')
})

app.get('/about',(req,res) =>{
    res.render('pages/about')
})

app.post('/register', async (req,res) =>{
    const fname=req.body.fname
    const lname=req.body.lname
    const uname=req.body.uname
    const pwd=req.body.pwd
    
    try {
        const insertdata=new Login({
            FirstName:fname,
            LastName:lname,
            UserName:uname,
            Password:pwd})
        await insertdata.save()
        res.render('pages/login')

} catch (error) {
        res.send("Error no found!")
        
    }
})

app.post('/login',async (req,res) =>{
    const uname=req.body.uname
    const pwd=req.body.pwd
    try {
        
            const user=await Login.findOne({
            
                    UserName:uname,
                    Password:pwd  });

            if(user){
                res.render('pages/dashboard')
                
            }
            else{
                res.send("please login again")
                
            }

        } catch (error) {
            res.render('pages/404')
        
    }
})


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true } ,()=>console.log('connected to Db'))


app.listen(5000,() =>console.log("Server is running at the Port 5000"))