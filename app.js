var express = require('express')
var app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.render('index');
})

app.get('*', function(req,res){
  res.render('404');
});


app.listen(process.env.PORT || 3000, function(){
  "Server is listening on port 3000. Yay!";
});