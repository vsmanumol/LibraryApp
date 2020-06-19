const express=require('express');
const authorsrouter=express.Router();
function router(nav){
var authors=[
    {
      
       author:'Kamala Sur̲ayya',        
        img:"aouthor-mathavi.jpg"
  
     },
     {
      
      author:'Suzanna Arundhati Roy',
      
       img:"author-arun.jpg"
  
    },
    {
     
      author:'Benyamin',
       
       img:"author-beneya.jpg"
  
    }
  
  ]
  
  
  authorsrouter.get('/',function(req,res){
  
     res.render("authors",
     {
     
       nav,
       title:'Library',
       authors//book array//
  
     });
  });
  
  //**********single book content********* */
 
  authorsrouter.get('/:id',function(req,res){
    const id=req.params.id;//req.param("id");
  res.render('author',{
    nav,
    //nav:[{link:'/book',name:'Books'},{link:'/authors',name:'Authors'}],
    title:'Library',
    authors1:authors[id]
  
  });
  
  });
  return authorsrouter;
} 
 // module.exports=bookRouter;
 module.exports=router;
  
  //***************end********* */
  
  

  