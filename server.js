const express=require('express');

var app=express();

const hbs=require('hbs');


hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getcurrentyear" , () =>
{
		return new Date().getFullYear()
});

//using html page
app.set("view engine",'hbs');

app.use(express.static(__dirname + "/firsthtml.html"));


app.use((request,response,next)=>{
		console.log(request);
		next();
});
app.use((request,response,next)=>{
		response.render('coming_soon.hbs');

})


app.get('/' , (request,response)=>{
		response.render('home.hbs',{
			pagetitle: "home page",
			
		});
		
});

app.get('/about',(request,response)=>{
		response.render('about.hbs',{
			pagetitle:"chal bhaar yaha se",
			
		});
} );



app.listen(3000, function () {
  console.log('Intialization print 3000!')
})