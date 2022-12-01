const express=require("express");
const bodyParser=require("body-parser");
const Nexmo=require("nexmo");
const ejs=require("ejs");
//express 
const app= express();

//ejs

app.set('view engine','html');
app.engine('html', ejs.renderFile);

//Nexmo
const nexmo=new Nexmo({
    apiKey:  'c79e745e' ,
    apiSecret:'Y9HuyRdBNQW4R8qr'
},{
    debug:true
})

//datayı yakalamak

app.post('/' ,(req,res)=>{
    const number=req.body.number;
    const text=req.body.text;

    nexmo.message.sendSms('Vonage APIs' , number ,text);
})

//body-parser


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//routes

app.get('/',(req,res)=>{
    res.render('register_screen');
})
app.get('/getUserData',(req,res)=>{
    res.render('getUserData');
})
app.get('/login',(req,res)=>{
    res.render('login_screen');
})
app.get('/register',(req,res)=>{
    res.render('register_screen');
})
app.get('/mail',(req,res)=>{
    res.render('mail_control');
})
app.get('/userData',(req,res)=>{
    res.render('userData');
})
app.get('/dene',(req,res)=>{
    res.render('welcome');
})
app.get('/danismanInfo',(req,res)=>{
    res.render('danismanData');
})
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/tableSigorta',(req,res)=>{
    res.render('tableSigorta');
})


//dosya dizin belirtme
app.use(express.static('public'));
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/img' , express.static(__dirname + 'public/img'))
app.use(express.static(__dirname + '/static'));


//port
const port=3000;

const server=app.listen(3000 , ()=>{
    console.log('server ${port}. çalışmaya hazır');
});

