const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
        title:'samsung z flip 4',
        src: 'image/flip4.jpg',
    },
    {
        title:'samsung z fold 4',
        src: './image/fold4.jpg',
    },
    {
        title:'iphone15',
        src: './image/iphone15.jpg',
    }
]

app.get('/', (req, res) => {
    res.render('home',{data:products})
})

app.listen(port,() => {
    console.log(`app listening at http://localhost:${port}`)
});