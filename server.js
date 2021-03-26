//lecture going over this @  https://www.twitch.tv/videos/960622601

const express = require('express')  //this is how we get express
const app = express ()  //give us the functions and expressions that are a part of express
const cors = require('cors')
const PORT = 8000

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'    
    },
    'chance the rapper':{
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois'    
    },
    'unknown':{
        'age': 28,
        'birthName': 'unkown',
        'birthLocation': 'unknown'    
    }
}

app.use(cors()) //have to remember to tell it to use cors

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
}) //our server is listening for this ..get takes in two values. take in the request we're looking for...When would the server make a request to forward slash? When the normal/ base (home) page loads. once we hear the get for the main page we run a function. the function is just a callback. 
//request can also be shortened to rec and response shortens to res
//when people make the request we want to respond with some html...or a file.
//we have to tell node where to look for the file with __dirname whereever the server file is that's where i want you to start looking! look in the directory

app.get('/api/rappers/:rapperName',(request, response )=>{
    const rapName = request.params.rapperName.toLowerCase()
    // response.json(rappers[rapName])
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    } 
})  //instead of responding with whole rapper object we're now going to do a specific rapper. now think about parameters :rapperName. our api will now listen to any value inside the url. With that const rapperName whenever there's a request we're able to peel of :rapperName and just show that info. 
//conditional says if the name is in the object respond with their name...if their name is not there respond with unknown

 app.listen(process.env.PORT || PORT, ()=>{
     console.log(`Serve running on port ${PORT}`)
 }) // listen() is another method that comes with express...takes in a port and a callback
 //lets create the port as a variables. do it at the top

 //dont forget to install express! in the terminal... 'npm install express --save'

 //when you make a change you have to restart your server with ctrl c