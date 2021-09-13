var tododbs = require('../model/model');

exports.create = (req,res) => {

  if(!req.body){
    res.status(400).send({message : 'Please put some todo !'});
    return;
  }

  const newTodo = new tododbs({
    todo: req.body.task
  }) 

  newTodo
    .save(newTodo)
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {})
}

exports.find = (req,res) => {

  if(req.query.id){
    const id = req.query.id;
    tododbs.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err.message);
    })
  }
  else{
    tododbs.find()
    .then(todo_object => {
      res.send(todo_object);
    })
    .catch(err => {
      res.send(err.message);
    })
  }
}

exports.update = (req,res) => {
  const id = req.params.id;

  tododbs.findByIdAndUpdate(id, req.body , {useFindAndModify : false})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send('could not update');
  })
}

exports.delete = (req,res) => {
  const id = req.params.id;

  tododbs.findByIdAndDelete(id)
  .then(data => {
    window.location.reload();
  })
  .catch(err => {
    res.send('could not update');
  })
}