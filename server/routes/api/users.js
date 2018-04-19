const User = require('../../models/User');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://shaunasbabyshower:ShaunasBabyShower@ds247499.mlab.com:47499/shaunas-babyshower'

module.exports = (app) => {
	app.use(bodyParser.json())

  app.post('/api/users/confirm', function (req, res, next) {
		const user = new User()
		const name = req.body.name
		const answer = req.body.answer
		if(!name.length) {
			res.status(400)
			res.send('Please enter a valid name.')
		} else {
			MongoClient.connect(url, function(err, client) {
				let db = client.db('shaunas-babyshower')
				assert.equal(null, err)
				user.answer = answer
				user.name = name
				db.collection('users').insertOne(user, function(error, result){
					if(!error) {
						res.end()
					} else {
						res.status(400)
						res.send('Failed to add user')
					}
				})
				client.close()
			})
		}

  })

};
