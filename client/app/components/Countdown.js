import React, { Component } from 'react'

class Countdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			days: ''
		}
	}

	componentDidMount() {
		const countdown = new Date('Jun 9, 2018')
		const that = this
		const x = setInterval(function() {
			const now = new Date()
			const distance = countdown - now
			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			that.setState({
				days: days
			})
		})
	}

	render() {
		return (
			<h2>{this.state.days} days to go..</h2>
		)
	}
}

export default Countdown
