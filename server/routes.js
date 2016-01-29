import { getRandomUsers, addMatch, getMatchSet } from '../db/dbHelpers';
import path from 'path';
import bodyParser from 'body-parser'
import store from './scoreboard'

export default function (app, express) {
	// test route, use this to get data for redux
	app.get('/api/candidates', function(req, res) {
		getMatchSet().then(function(rows) {
			res.json([rows.prospects[0], rows.prospects[1], rows.target])
		})
	})

	app.post('/api/pairs', (req, res) => {
		store.dispatch({type: 'UPDATE_LATEST', latestMatch: req.body})
		addMatch(req.body).then(() => {
			getMatchSet().then((rows) => {
				res.json([rows.prospects[0], rows.prospects[1], rows.target])
			})
		})	
	})

	// app.get('/api/matchSet', (req, res) => {
	// 	getMatchSet().then((matchSet) => {
	// 		console.log(matchSet)
	// 		res.json(matchSet)
	// 	})
	// })


}