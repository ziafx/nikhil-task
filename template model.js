const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  components: [{
    type: Schema.Types.ObjectId,
    ref: 'Component'
  }],
  state: {
    type: String,
    enum: ['draft', 'active'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Template = mongoose.model('Template', TemplateSchema);

module.exports = Template;
