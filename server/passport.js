const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/user');


const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

// authoraization
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey: 'noobCoder'
},(payload, done)=>{
    User.findById({
        _id : payload.sub
    }, (err, user)=>{
        if(err)
            return done(err, false);
        if(user)
            return done(nul, user);
        else
            return done(null, false);
    })
}))


//authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done)=>{
    User.findOne(username, (err, user)=>{
        //something wrong in the database
        if (err)
            return done(err);
        if (!user)
            return done(null, false);
        //check if password is correct
        user.comparePassword(password, done)
    })
}))