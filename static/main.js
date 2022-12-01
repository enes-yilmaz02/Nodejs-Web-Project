

const numberInput=document.getElementById('number');
const textInput=document.getElementById('msg');
const button=document.getElementById('button');




function send(){
    console.log('tık1');
    const number=numberInput.value;
    const text =textInput.value;
    console.log(number,text);
    fetch('/', {
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            number:number,
            text:text
        })
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}
