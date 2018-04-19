import React, { Component } from 'react'

class CastVote extends Component {

	render() {
		return (
			<div>
				<h1>Oh, Baby!</h1>
				<form onSubmit={this.props.handleSubmit}>
					<div className="text">
						<p>Join us for a baby shower celebrating</p>
						<p><span className="shauna">Shauna Flynn</span></p>
						<p><span>Saturday, June 9th, 3pm</span></p>
						<p><span>189 Haslucks Green Road</span></p>
						<p><span>Shirley, Solihull</span></p>
						<p><span>B90 2LH</span></p>
					</div>
					<div>
						{
							this.props.inputClass &&
							<p className="error-text">Please enter your full name.</p>
						}
						<input
							name="name"
							type="text"
							placeholder="Enter Your Name"
							onChange={this.props.action}
							className={this.props.inputClass}
						/>
					</div>
					<div>
						<button onClick={this.props.castVote} value="coming">See you there!</button>
						<button className="alternate-button" onClick={this.props.castVote} value="not-coming">Sorry, I can't make it!</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CastVote
