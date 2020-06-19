const express=require('express');
const  loginRouter=express.Router();
function router(){


   loginRouter.post('/login',function(req,res,next)
   {
  
      console.log("Authenticating User")
      authenticate(req,res)
    });
    
   function authenticate(req,res){
      
      console.log("Im in the function");
       email = req.body.email;
        password = req.body.password;
        console.log("The username:  " + email);
          if(passworddb===password&&emaildb===email)
            {
               res.render("./index",
               {        
                 nav,
                 title:'Library'      
            });
        }
          else{
            res.render("./index",
               {        
                 nav,
                 title:'Library'      
            });
              res.send("Invalid login");
           }
     
    }
  

  
  return loginRouter;
} 

 module.exports=router;
  
  

  

  