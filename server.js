const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require('path');

// add passport and auth0 settings
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const env = require('./auth0.config.json');

// configure passport to use Auth0 Strategy
const strategy = new Auth0Strategy(
    {
        domain: 'recoil.auth0.com',
        clientID: 'UtSVwHMRSxkrQmb0DuH7wZ6sU8HrnBTK',
        clientSecret: '5G6yqhWubD8PvidJrDIQOAlOPKp94qSOTZD4moBzFifmWgIEI_c5jQH0QwWdU__P',
        callbackURL: '/auth/loggedIn',
        scope: 'openid profile email phone'
    },
    (accessToken, refreshToken, extraParams, profile, done) => {

        var info = {
            "profile": profile,
            "accessToken": accessToken,
            "refreshToken": refreshToken,
            "extraParams": extraParams
        };

        return done(null, info);
    }
);

// helper functions
async function getUserInfo(req) {
    return await req.user;
}

// prepare and run server
mobxReact.useStaticRendering(true);

app.prepare().then(() => {
    const server = express();

    passport.use(strategy);

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    // lets express server render next.js static folder
    const staticDir = path.resolve('.next/static');
    server.use('/_next/static', express.static(staticDir));

    server.use(passport.initialize());
    server.use(passport.session());

    server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query);
    })

    server.get('/index', (req, res) => {
        return app.render(req, res, '/index', req.query);
    })

    server.get(
        '/login',
        passport.authenticate('auth0', {
            clientID: env.AUTH0_CLIENT_ID,
            domain: env.AUTH0_DOMAIN,
            redirectUri: env.AUTH0_CALLBACK_URL,
            audience: 'https://recoil.auth0.com/api/v2/',
            scope: 'openid profile email phone'
        }),
        function (req, res) {
            return app.render(req, res, '/', req.query);
        }
    );

    server.get(
        '/auth/loggedIn',
        passport.authenticate('auth0', {
            failureRedirect: '/errors'
        }), (req, res) => {
            getUserInfo(req)
                .then(function (userinfo) {
                    console.log(userinfo.profile._json);
                    res.cookie('access_token', userinfo.extraParams.access_token);
                    res.cookie('id_token', userinfo.extraParams.id_token);
                    res.cookie('user_profile', userinfo.profile);
                    console.log(req.query);
                    return app.render(req, res, '/auth/loggedIn', req.query);
                })
        }
    );

    server.get('/auth/logOut', (req, res) => {
        req.logout();
        // res.redirect('/');
        return app.render(req, res, '/auth/logOut', req.query);
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http:// localhost:${port}`);
    })
});