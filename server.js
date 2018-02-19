const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const path = require('path');

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
    const server = express();

    // render the static files
    const staticDir = path.resolve('./src/.next/static');
    server.use('/_next/static', express.static(staticDir));

    server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query)
    })

    server.get('/index', (req, res) => {
        return app.render(req, res, '/index', req.query)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http:// localhost:${port}`);
    })
});