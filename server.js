const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;




app.use(express.static(__dirname+'/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // res.send('Hola Mundo Express');


 //  	let salida ={
	// 	nombre: 'Sergio',
	// 	edad: 32,
	// 	url: req.url
	// }


	res.render('home', {
		nombre: 'Sergio Pomex',
	});


});
 

app.get('/about', (req, res) => {
  // res.send('Hola Mundo Express');


 //  	let salida ={
	// 	nombre: 'Sergio',
	// 	edad: 32,
	// 	url: req.url
	// }



	res.render('about', {

	});


});
 



app.get('/data', (req, res) => {
  res.send('Hola Mundo Data');



});

//Puerto
app.listen(port, ()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`)
});