// saperate file fore middleware
module.exports= reqFilter=(req,resp,next)=>{
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
