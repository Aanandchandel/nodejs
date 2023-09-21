const express=require('express');
const reqFilter=require('./middleware');
const app =express();
const route=express.Router()
// route.use(reqFilter);
// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please enter the url")
//     }
//    else if(req.query.age<18){
//         resp.send("not elagible")
//     }
//     else{
//    next();
//     }
// }
// app.use(reqFilter)
app.get('/', (req, resp) => { 
    resp.send('Welcome to React JS');
  });
  // route level middleware...................................................... 
  app.get('/user',reqFilter, (req, resp) => { 
  // route.get('/user', (req, resp) => { 
    resp.send('Welcome to React user');
  });
  app.get('/about',reqFilter, (req, resp) => {
  // route.get('/about', (req, resp) => { 
    resp.send('Welcome to React about');
  });
// app.use('./',route); 
app.listen(8000) 