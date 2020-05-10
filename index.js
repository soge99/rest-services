var express = require('express');
var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes/index'));

app.set('PORT', 4000|| process.env.PORT);

app.listen(app.get('PORT'), ()=>{
    console.log('Server is ON | port', app.get('PORT'));
});

