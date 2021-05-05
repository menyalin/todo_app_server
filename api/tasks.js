var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('task get end-point');
});

router.get('/:taskId', function(req, res, next) {
  const {taskId} = req.params
  res.send(`task GetById end-point, ${taskId}`);
});


router.post('/', function(req, res, next) {
  res.send('task POST end-point');
});


router.put('/:taskId', function(req, res, next) {
  const {taskId} = req.params
  res.send(`task PUT end-point, ${taskId}`);
});

router.delete('/:taskId', function(req, res, next) {
  const {taskId} = req.params
  res.send(`task DELETE end-point, ${taskId}`);
});

module.exports = router;