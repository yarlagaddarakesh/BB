//const commonModel = require('./models/common.model');

const express = require("express");
const slug = require("slug");

var cors = require('cors')

const mongoose = require('mongoose');


const todoData = require("./todo_model");

const app = express();
app.use(cors())

app.use(express.json({ limit: '50mb' }));


mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://pscmr:z3ObZSAEBWQIUcfq@cluster0.okby5il.mongodb.net/todo?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('DB connected')).catch(err => console.log(err))


app.post('/add', async(req, res) => {
    const { task } = req.body;

    const todoDoc = new todoData({
        task: task,
        status: 1
    });

    try {
        await todoDoc.save();
        return res.json({ status: true, msg: 'Task added successfully' });
    } catch (err) {
        console.log(err.message)
    }
})

app.post('/list', async(req, res) => {

    try {
        const allData = await todoData.find();
        return res.json({ status: true, data: allData });
    } catch (err) {
        console.log(err.message)
    }
})
app.post('/delete/:id', async(req, res) => {
    try {
        const datarow = await todoData.deleteOne(req.params._id);
        return res.json({ status: true, msg: 'Task deleted successfully' });
    } catch (err) {
        console.log(err.message)
    }
})
app.post('/todorow/:id', async(req, res) => {
    try {
        const datarow = await todoData.findById(req.params.id);


        return res.json({ status: true, msg: '', data: datarow });

    } catch (err) {
        console.log(err.message)
    }
})

app.post('/update', async(req, res) => {
    const { _id, task } = req.body;


    var data = ({
        task: task,
        updatedAt: new Date(),
        status: 1,
    });


    try {
        await todoData.findByIdAndUpdate(mongoose.Types.ObjectId(_id), data);
        const result = await todoData.findOne({ _id: mongoose.Types.ObjectId(_id) });
        return res.json({ status: true, msg: 'Task updated successfully', data: result });
    } catch (err) {
        console.log(err.message)
    }

})

app.get("/", (req, res) => {
    res.send("Express");
})


app.listen(3000, () => console.log("Server running"));