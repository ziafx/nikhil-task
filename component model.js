const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  state: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Component = mongoose.model('Component', ComponentSchema);

module.exports = Component;
