var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var productSchema = new Schema({
    _id         : Schema.Types.ObjectId
  , name        : String
  , description : String
  , imageURL    : String
  , rating      : Number
  , categories  : [String]
  , price       : Number
  , related     : [String]
});

module.exports = mongoose.model('Product', productSchema);
