const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

todoSchema.statics.add = async function (data) {
  let todo = new this({
    title: data.title,
  });
  todo.id = todo._id;
  todo = await todo.save();
  return todo;
};

todoSchema.statics.getAll = async function () {
  return await this.find();
};

const Todo = mongoose.model('Todo', todoSchema);
exports.Todo = Todo;
