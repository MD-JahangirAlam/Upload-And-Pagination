const express =  require('express')
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const router = require('./routers/route');


app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.set(__dirname + 'userphoto')
app.set(express.static(__dirname + 'userphoto'))


app.use(router)


app.listen(3000, (err) =>{
    console.log(`server is runing on port ${3000}`)
})


