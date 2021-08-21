import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Login from './screens/Login/index.jsx';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes;