const express=require('express');
const app =express();


const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please enter the url")
    }
   else if(req.query.age<18){
        resp.send("not elagible")
    }

    else{
   next();
    }

}
app.use(reqFilter)

app.get('/', (req, resp) => { 
    resp.send('Welcome to React JS');
  });
  app.get('/user', (req, resp) => { 
    resp.send('Welcome to React user');
  });


app.listen(8000)
