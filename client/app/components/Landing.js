import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import 'whatwg-fetch'
import Loading from './Loading'
import CastVote from './CastVote'
import Countdown from './Countdown'
import Confetti from './Confetti'

class Landing extends Component {
	constructor(props) {
		super(props)
		this.handleInput = this.handleInput.bind(this)
		this.castVote = this.castVote.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			mode: 'logIn',
			userNotLoggedIn: true,
			userVoted: false,
			name: '',
			className: ''
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		return false
	}

	handleInput(e) {
		const target = e.target,
		value = target.value,
		name = target.name

		this.setState({
			[name]: value
		})
	}

	castVote(e) {
		const answer = e.target.value
		e.preventDefault()
		if(this.state.name) {
			this.setState({
				loading: true,
				answer: answer
			})
			fetch('/api/users/confirm', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({name: this.state.name, answer: answer})
			})
				.then(res => {
					if(res.ok) {
						this.setState({
							userVoted: true,
							loading: false,
							className: ''
						})
					}
				})
					.catch(err => console.log(err))
		} else {
			this.setState({
				className: 'error'
			})
		}
	}

	render() {
		return (
			<div className="full-page">
				<Confetti />
				{ this.state.loading && <Loading /> }
				{	this.state.userVoted
					? <div className="modal">
						{ this.state.answer === 'coming'
							?	<div>
									<h1>Thanks, {this.state.name}!</h1>
									<h2>We can't wait to see you there!</h2>
									<Countdown />
								</div>
							: <div>
									<h1>That's too bad :(</h1>
									<h2>Thank you for letting us know!</h2>
								</div>
						}
						</div>

					: <div className="modal">
							<CastVote
								handleSubmit={this.handleSubmit}
								name={this.state.name}
								action={this.handleInput}
								castVote={this.castVote}
								inputClass={this.state.className}
							/>
						</div>
				}
			</div>
		)
	}
}

export default Landing
