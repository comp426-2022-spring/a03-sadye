const express = require('express')
const args = require('minimist')(process.argv.slice(2)) 
const app = express()

args['port']
var port = args[port] | 5000 // add command line argument

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%',port))
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")

})

app.get('/app/', (req, res) => {
    //Respond w status 200
    res.statusCode = 200;
    //Respond w status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, {
        'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' + res.statusMessage)
});

app.get('/app/flips/:number', (req, res) => {
	//Some
	//expressions
	//go
	//here
});

app.get('/app/flip/call/:call', (req, res) => {
	//Some
	//expressions
	//go
	//here
});

function coinFlip() {
    return(Math.floor(Math.random()*2)==0)? 'heads':'tails';
  }

app.get('/app/flip/', (req, res) => {
    var flip = coinFlip()
	res.statusCode(200).json({ 'flip ' : flip})
});