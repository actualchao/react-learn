import A from './modules/A'
import B from './modules/B'
import C from './modules/C'

import {
  HashRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'


const App = () => {

  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/A">A</Link></li>
          <li><Link to="/A/B">B</Link></li>
          <li><Link to="/C">C</Link></li>
        </ul>

        <Switch>
          <Route path="/A">
            <A />
          </Route>
          <Route path="/C/B" component={B}></Route>
          <Route path="/C">
            <C />
          </Route>
        </Switch>
      </div>
      <div>

      </div>
    </Router>
  )
}


export default App