var newman = require('newman'); // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/pet.postman_collection.json'),
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
          'option-name': 'option-value' // this is optional
        }
      }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});