import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/privateRouter';

//pages
import Login from './screens/Login/index.jsx';
import ListSuppliers from './screens/ListSuppliers/index.jsx';
import SupplierDetail from './screens/SupplierDetail/index.jsx';
import NotFound from './screens/NotFound';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/suppliers" component={ListSuppliers} />
        <PrivateRoute path="/supplierDetail" component={SupplierDetail} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;