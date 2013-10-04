require('./utils');

var Vote = require('../models/vote');

var voteOne = {
    userId: 1,
    productId: 32,
    rating: 8
};

var voteTwo = {
    userId: 0,
    productId: 30,
    rating: 4
};

var voteThree = {
    userId: 0,
    productId: 15,
    rating: 9
};

var voteFour = {
    userId: 2,
    productId: 4,
    rating: 10
};


describe('Votes', function(){

  describe('#create()', function () {
    it('should create without error', function (done) {
      Vote.create(voteOne, function (err) {
        if (err) throw err;
        done();
      })
    })
  })

});