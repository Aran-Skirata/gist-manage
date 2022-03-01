import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import NewGist from './CreateGist'
import DeleteGist from './DeleteGist'
import UpdateGist from './UpdateGist'
import Wrapper from './Wrapper'
import ListGists from './ListGists'


 //token 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
function App()
{
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/private">Wyświetl gisty prywatne</Link>
            </li>
            <li>
              <Link to="/public">Wyświetl gisty publiczne</Link>
            </li>
            <li>
              <Link to="/new">Nowy Gist</Link>
            </li>
            <li>
              <Link to="/edit">Edytuj Gist</Link>
            </li>
            <li>
              <Link to="/delete">Usuń Gist</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/delete">
            <DeleteGist />
            <h4>Pobrane Gisty</h4>
            <Wrapper /> 
          </Route>
          <Route path="/new">
            <NewGist />
          </Route>
          <Route path="/edit">
            <UpdateGist />
            <h4>Pobrane Gisty</h4>
            <Wrapper />
          </Route>
          <Route path="/private">
            <h1>Pobrane Gisty</h1>
            <Wrapper />
          </Route>
          <Route path="/public">
            <h1>Publiczne gisty</h1>
            <ListGists />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
