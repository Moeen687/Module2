// Mohiddeen Vilak Mohammad
// 1226829827
// 02-04-2024

const express = require('express')
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.render('form');
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


