'use strict';

const User = require('../schema/users');

function loginNewHandler(req, res) {

    let email = req.body.email;
    console.log("hi",email);
    // console.log("User",User);

    User.findOne({email:email}, (err, data) => {
        console.log('inside User');
        if (data){
            console.log(data);

        }else{

            let newUser = new User({
                name: '',
                email: email,
                image:'',
                favoriteAnime: [],
                favoriteMovie: [],
                favoriteGame: [],
            });
            newUser.save();
        }

        
        res.send("hello")

    });
    
}

module.exports = loginNewHandler;