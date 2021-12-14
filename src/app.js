const express = require('express');
const app = express();

const PORT =  3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));

app.use('/', require('./routes/main'));
app.use('/admin', require('./routes/admin'));
app.use((req, res, next) => {
    res.render('404');
});
app.listen(PORT, ()=>{
    console.log('Server is listening on port ' + PORT);
});