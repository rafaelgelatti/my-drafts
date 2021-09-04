import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PersonForm } from './components/personForm';
import { Transition } from './components/transition';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/transition'>
          <Transition />
        </Route>
        <Route exact path='/'>
          <PersonForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
