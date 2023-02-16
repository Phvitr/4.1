const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const array = [
    {
        title: 'Kịch bản sốc Man City - Arsenal',
        content: 'Man City và Arsenal có thể phải nhận định ngôi vương bằng trận play-off. '
    },
    {
        title: 'Mbappe bất ngờ nổ súng',
        content: 'Mbappe vừa lập cú đúp trong trận gặp lion tối qua. '
    },
    {
        title: 'Haaland dẫn đầu danh sách vua phá lưới',
        content: 'Tiền đạo Erling Haaland đang có phong độ cực cao bỏ xa các ứng viên còn lại'
    },

]

app.get('/', (req, res) => {
    res.render('home', {data:array});
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})