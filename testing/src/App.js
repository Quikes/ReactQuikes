

/*import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>
    <li>
      <Link to="/about/">About</Link>
      <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
    </li>
    About
    </h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter; */


import React from "react";
import { ImageBackground, Text } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './Game';

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/images" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/tictactoe" component={Game} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h2>Welcome to my page =)</h2>
  );
}
class Background extends React.Component {
  render() {
    return (
      <h1>
        Front Page
      </h1>

    )
  }
}

class Picture extends React.Component {
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
        <img src={this.state.image} alt='No Image =(' height="500" width="800" />
        <h3>Picture number: {this.state.number}</h3>
      </div>
    )
  }
}
function About() {

  return (
    <Picture />
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Testing </h2>

      <ul>
        <li>
          <Link to={`${match.url}/test1`}>Test1</Link>
        </li>
        <li>
          <Link to={`${match.url}/test2`}>Test2</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}



function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/images">Images</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/tictactoe">TicTacToe</Link>
      </li>
    </ul>
  );
}

export default App;


