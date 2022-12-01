const Twilio=require("twilio");

var sid = "ACc5410ee24b0fe38e0c3f68494050d7f9";
var auth_token = "65e0fa36f6957a786e6fb8100d228ae1";

var Twilio = require("twilio")(sid, auth_token);

Twilio.messages
  .create({
    from: "+12058584654",
    to: "+905313342209",
    body: "this is a testing message",
  })
  .then(function(res) {console.log("message has sent!")})
 .catch(function(err)  {
    console.log(err);
  });

  //datayı yakalamak

app.post('/' ,(req,res)=>{
  const number=req.body.number;
  const text=req.body.text;

  nexmo.message.sendSms('Vonage APIs' , number ,text);
})

//Nexmo
const nexmo=new Nexmo({
  apiKey:  'c79e745e' ,
  apiSecret:'Y9HuyRdBNQW4R8qr'
},{
  debug:true
})