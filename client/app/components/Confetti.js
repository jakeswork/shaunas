import React, {Component} from 'react'
import 'confetti-js/dist'

class Confetti extends Component {

	constructor(props) {
		super(props)
		this.state = {
			confettiSettings: {
				"target": "confetti-holder",
	      "max": "2000",
	      "size": "1",
	      "animate": true,
	      "props": ["circle"],
	      "colors": [
	        [
	          116, 185, 255
	        ],
	        [
	          9, 132, 227
	        ]
	      ],
	      "clock": "35"
			}
		}
	}

	componentDidMount() {
		const confetti = new window.ConfettiGenerator(this.state.confettiSettings)
		confetti.render()
	}

  render() {
    return (
			<canvas id="confetti-holder"></canvas>
		)
  }
}

export default Confetti
