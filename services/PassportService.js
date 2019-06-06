const passport = require('passport');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');

const localStrategy = require('./service_stragegies/localStrategy');
const facebookStrategy = require('./service_stragegies/facebookStrategy');
const googleStrategy = require('./service_stragegies/googleStrategy');

passport.use('local', new LocalStrategy(localStrategy.credentials, localStrategy.handler));
passport.use('facebook', new FacebookStrategy(facebookStrategy.credentials, facebookStrategy.handler));
passport.use('google', new GoogleStrategy(googleStrategy.credentials, googleStrategy.handler));