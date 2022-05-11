var express = require('express');
var router = express.Router();
const nanoid = require('nanoid');
const cors = require('cors');

express().use(cors());

users = [
    {id:nanoid.nanoid(), username:'gunde', password:'123', loggedIn:false},
    {id:nanoid.nanoid(), username:'roffe', password:'456', loggedIn:false},
    {id:nanoid.nanoid(), username:'berra', password:'789', loggedIn:false}
];


router.post('/login', function(req, res){

    let foundUser = users.find((user) => {
        return user.username == req.body.username && user.password == req.body.password;
    });

    if(foundUser){
        foundUser.loggedIn = true;
        res.send('You are now logged in. ' + foundUser.id);
    }

    else{
        res.send('Wrong username or password.');
    }

});

router.get('', function(req, res){
    res.send(users);
});


module.exports = router;

