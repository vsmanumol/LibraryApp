const express=require('express');
const  sinupRouter=express.Router();
function router(){

    sinupRouter.get('/sinup', function (req, res) {
      res.render('sinup',{
        title:'Library'
      });
    });
    sinupRouter.post('/sinup',function(req,res,next){
      console.log("Authenticating User")
      sinupauthenticate(req,res)
    });
    function sinupauthenticate(req,res)
    {
    
      res.render("login",{
        title:'Library'
    
      });
                    
    } 

  
  return sinupRouter;
} 

 module.exports=router;
  
  

  

  