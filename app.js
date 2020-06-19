const express=require('express');
const app=new express(); 
const nav=[
  { 
    link:'/book',name:'Books' 
  },
  { 
    link:'/authors',name:'Authors'
  },
  { 
    link:'/addbook',name:'Add Newbook'
  }
];
var bodyParser = require('body-parser');
const bookRouter=require('./src/routers/bookrouter')(nav);
const authorsrouter=require('./src/routers/author-router')(nav);
const addbookRouter=require('./src/routers/addbookRouter')(nav);
app.use(express.static('./src/views/public'));
app.set('view engine','ejs');    
app.set('views','./src/views');
app.use('/book',bookRouter);
 app.use('/authors',authorsrouter);
 app.use('/addbook',addbookRouter);
 
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 const emaildb="vsmanumol@gmail.com";
 const passworddb="123";

app.get('/',function(req,res){
    
    res.render("home",
    {        
      title:'Library'
  
     });
  });
  app.get('/login', function (req, res) {
    res.render('login',{
      title:'Library'
    });
});
app.post('/Login',function(req,res,next){
  
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
           //res.send("Invalid login");
           res.render('login',{title:'invalide password'});
          
       }
 
}

app.get('/sinup', function (req, res) {
  res.render('sinup',{
    title:'Library'
  });
});
app.post('/sinup',function(req,res,next){
  console.log("Authenticating User")
  sinupauthenticate(req,res)
});
function sinupauthenticate(req,res)
{

  res.render("login",{
    title:'Library'

  });
                
}  


app.listen(4000)
