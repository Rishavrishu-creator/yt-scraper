var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs')
var fetch = require('node-fetch')
var ytscraper = require('yt-scraper')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static(__dirname+'/assets'));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
extended:true
}))

app.get('/',function(req,res){
     
   // var data = ytscraper.videoInfo("https://www.youtube.com/watch?v=Uv7cIJAymSs", options = {detailedChannelData:true})
    //data.then(function(data){
      
    //})
    res.render("index")
    
})
app.get('/error',function(req,res){
    res.render("error")
})
app.post('/index',function(req,res){
    var a = req.body.url;
    

    var data = ytscraper.videoInfo(a, options = {detailedChannelData:true})
    data.then(function(data){
             console.log(data)
            res.render("index",{'details':data})
    }).catch(function(error){
        res.render("error")
    })
   
})

app.listen(9000,function(req,res){
    console.log("Listening...")
})