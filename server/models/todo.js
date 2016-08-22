const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now }
});

stockSchema.statics.toggle = function(id, cb) {
  // this === Todo model
  this.findById(id, (err, stock) => {
    if(err) return cb(err);

    stock.isComplete = !stock.isComplete;
    stock.save(cb);
  })
};

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
