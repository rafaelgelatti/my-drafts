import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Vanilla from './pages/Vanilla';
import BurningCrusade from './pages/BurningCrusade';
import WrathOfTheLichKing from './pages/WrathOfTheLichKing';
import Cataclysm from './pages/Cataclysm';
import MistsOfPandaria from './pages/MistsOfPandaria';
import WarlordsOfDraenor from './pages/WarlordsOfDraenor';
import Legion from './pages/Legion';
import BattleForAzeroth from './pages/BattleForAzeroth';
import Shadowlands from './pages/Shadowlands';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/burning_crusade' component={ BurningCrusade } />
      <Route path='/vanilla' component={ Vanilla } />
      <Route path='/wrath_of_the_lich_king' component={ WrathOfTheLichKing } />
      <Route path='/cataclysm' component={ Cataclysm } />
      <Route path='/mists_of_pandaria' component={ MistsOfPandaria } />
      <Route path='/warlords_of_draenor' component={ WarlordsOfDraenor } />
      <Route path='/legion' component={ Legion } />
      <Route path='/battle_for_azeroth' component={ BattleForAzeroth } />
      <Route path='/shadowlands' component={ Shadowlands } />
      <Route exact path='/' component={ Welcome } />
    </Switch>
  )
}

export default App;
