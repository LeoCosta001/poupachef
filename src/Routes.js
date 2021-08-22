import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Login from './screens/Login/index.jsx';
import ListSuppliers from './screens/ListSuppliers/index.jsx';
import SupplierDetail from './screens/SupplierDetail/index.jsx';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/suppliers" component={ListSuppliers} />
        <Route path="/supplierDetail" component={SupplierDetail} />
      </Switch>
    </Router>
  )
}

export default Routes;