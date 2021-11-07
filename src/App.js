import { Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/Form/logInForm';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login">
          </Redirect>
            <p>First page</p>
        </Route>        
        <Route path="/login">
          <LoginForm/>
        </Route>
        <Route path="*"><p>404 error: Page not error</p></Route>
      </Switch>
      </div>
  );
}

export default App;
