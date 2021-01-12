import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Wow old content</h1>
      <Link to='/vanilla'>Vanilla</Link>
      <br />
      <Link to='/burning_crusade'>Burning Crusade</Link>
      <br />
      <Link to='/wrath_of_the_lich_king'>Wrath of the Lich King</Link>
      <br />
      <Link to='/cataclysm'>Cataclysm</Link>
      <br />
      <Link to='/mists_of_pandaria'>Mists of Pandaria</Link>
      <br />
      <Link to='/warlords_of_draenor'>Warlords of Draenor</Link>
      <br />
      <Link to='/legion'>Legion</Link>
    </div>
  );
};

export default Welcome;
