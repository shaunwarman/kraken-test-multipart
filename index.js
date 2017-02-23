const Express = require('express');
const Kraken = require('kraken-js');

const App = Express();

const Options = {
  onconfig: function (config, next) {
    next(null, config);
  }
};

App.use(Kraken(Options));

App.listen(8000);
