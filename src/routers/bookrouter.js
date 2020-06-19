const express=require('express');
const bookRouter=express.Router();
function router(nav){
var book=[
    {
       title:'tom and jerry',
       author:'joseph barbera',
        genre:'cartoon',
        img:"tomjerry.jpg"
  
     },
     {
      title:'Harry potter',
      author:'J K Rowling',
       genre:'Fantasy',
       img:"hari.jpg"
  
    },
    {
      title:'pattumade addu',
      author:'Basheer',
       genre:'Drama',
       img:"basheer.jpg"
  
    }
  
  ]
  
  
  bookRouter.get('/',function(req,res){
  
     res.render("book",
     {
       //nav:[{link:'/book',name:'Books'},{link:'/authors',name:'Authors'}],
       nav,
       title:'Library',
       book//book array//
  
     });
  });
  
  //**********single book content********* */
 
  bookRouter.get('/:id',function(req,res){
    const id=req.params.id;//req.param("id");
  res.render('single-book',{
    nav,
    //nav:[{link:'/book',name:'Books'},{link:'/authors',name:'Authors'}],
    title:'Library',
    book1:book[id]
  
  });
  
  });
  return bookRouter;
} 
 // module.exports=bookRouter;
 module.exports=router;
  
  //***************end********* */
  
  

  