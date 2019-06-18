

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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './Game';
import Pictures from './Pictures';

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


function About() {

  return (
    <table>
      <tr>
        <td><Pictures /></td>
        <td><Pictures /></td>
      </tr>
      <tr>
        <td><Pictures /></td>
        <td><Pictures /></td>
      </tr>
    </table>


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


