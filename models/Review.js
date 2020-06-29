const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must provide an author!'
  },
  text: {
    type: String,
    trim: true,
    required: 'Your review must have text!'
  },
  created: {
    type: Date,
    default: Date.now,
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store',
    required: 'You must provide a store!'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: 'You must provide a rating!'
  }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

function autopopulate(next) {
  this.populate('author');
  next();
}

reviewSchema.pre('find', autopopulate);
reviewSchema.pre('findOne', autopopulate);


module.exports = mongoose.model('Review', reviewSchema);