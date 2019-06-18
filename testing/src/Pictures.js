import React from "react";


class Pictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            desc: 'Show Pictures!',
            number: 0,
            images: [
                'https://www.w3schools.com/w3css/img_lights.jpg',
                'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ]
        }
    }
    showPicture() {
        if (this.state.number == this.state.images.length) {
            this.setState({
                number: 0,
                desc: 'Show Image!',
            })
        } else {
            this.setState({
                number: this.state.number + 1,
                desc: 'Next Image!',
            })
        }
        this.setState({
            image: this.state.images[this.state.number],

        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.showPicture()}>{this.state.desc}</button>
                <br></br>
                <img src={this.state.image} alt='No Image =(' height="250" width="500" />
                <h3>Picture number: {this.state.number}</h3>
            </div>
        )
    }
}

export default Pictures;