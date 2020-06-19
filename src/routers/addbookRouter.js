
const express=require('express');
const addbookRouter=express.Router();
function router(){

  
    addbookRouter.get('/',function(req,res){
  
     res.render("addbook",
     {
       
       // nav,
       title:'Library',
      //  //showFiles;
  
     });
  });
  
  function showFiles()
  {
      let inputFiled=document.getElementById('inputImage');
      let file=inputFiled.fles;
      console.log(file);
      console.log(file[0].name);
  }
  return addbookRouter;
} 
 // module.exports=bookRouter;
 module.exports=router;