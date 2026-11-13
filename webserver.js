// Загружаем модуль http
var http = require('http');

// Создаем web-сервер с обработчиком запросов
var server = http.createServer(function (req, res) {
    console.log('Request processing started...');
    // Передаем код ответа и http-заголовки
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('This is my test page :) ' + (2 * 3));
});

// Запускаем web-сервер
var PORT = 2002;
server.listen(PORT, "127.0.0.1", function () {
    console.log('Server started http://127.0.0.1:' + PORT + '/');
});
