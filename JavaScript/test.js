var request = require("request")

request('http://www.spotify.com', function(error, response, body){
    if(error){
        console.log("ERROR");
    }else if(response.statusCode === 200){
        console.log(body);
    }
});