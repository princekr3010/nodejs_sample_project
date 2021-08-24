const cron = require('node-cron');
const express = require('express');

app = express();

cron.schedule('* * * * * *', function() {
console.log('application is running');
});

app.listen(3000);
