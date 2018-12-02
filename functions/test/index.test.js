const myFunctions = require('../index.js')(
  // const req = { query: { text: 'Sunny' } }
  // const res = {
  //   redirect: (code, url) => {
  //     assert.equal(code, 303);
  //     assert.equal(url, 'new_ref');
  //     done();
  //   }
  // };

  // myFunctions.flicker()

  // indexTest
  () => {
    const res = {
      redirect: (code, url) => {
        assert.equal(code, 303)
        assert.equal(url, 'new_ref')
        done()
      }
    }

    myFunctions.helloWorld(req, res)
  }
)()

test.cleanup()
