var http = require('http');
var fs = require('fs');
var server = http.createServer((req, res) => {
    res.write(`
        <!doctype html>
        <html>
        <body>
            <form action="/message" method="POST">
                <p>Please enter a message below: </p>
                <input type="text" name="message" /><br>
                <button>Submit</button>
            </form>
        </body>
        </html>
    `);
    res.end();
});
server.listen(8080);