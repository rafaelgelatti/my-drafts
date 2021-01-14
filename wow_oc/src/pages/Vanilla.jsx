import React from 'react';
import '../pages.css';

class Vanilla extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false,
      instance: '',
    }
  }

  toggleContent(target) {
    target.classList.toggle("active");
    const content = target.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  render() {
    const { showContent } = this.state;
    return (
      <div className='whole'>
        <header className='header'>
          <h2>Vanilla</h2>
        </header>
        <div className='body'>
          <section className='navbar'>
            <button
              className='collapsible'
              type='button'
              onClick={ ({ target }) => this.toggleContent(target) }
            >
              Dungeons
            </button>
            <ul className='content'>
              <li>Blackfathom Deeps</li>
              <li>Blackrock Depths</li>
              <li>Blackrock Spire</li>
              <li>Dire Maul</li>
              <li>Gnomeregan</li>
              <li>Maraudon</li>
              <li>Ragefire Chasm</li>
              <li>Razorfen Downs</li>
              <li>Razorfen Kraul</li>
              <li>Scarlet Monastery</li>
              <li>Scholomance</li>
              <li>Shadowfang Keep</li>
              <li>Stratholme</li>
              <li>Sunken Temple</li>
              <li>The Deadmines</li>
              <li>The Stockade</li>
              <li>Uldaman</li>
              <button
                id='vd18'
                onClick={ ({ target }) => this.setState({ instance: target.id, showContent: true }) }
              >
                Wailing Caverns
              </button>
              <li>Zul'Farrak</li>
            </ul>
            <button
              className='collapsible'
              type='button'
              onClick={ ({ target }) => this.toggleContent(target) }
            >
              Raids
            </button>
            <ul className='content'>
              <li>Blackwing Lair</li>
              <li>Molten Core</li>
              <li>Ruins of Ahn'Qiraj</li>
              <li>Temple of Ahn'Qiraj</li>
            </ul>
          </section>
          {showContent &&
            <section className='content-show'>
              <h3>Bosses</h3>
              <ul>
                <li>Lady Anacondra</li>
                <li>Lord Cobrahn</li>
                <li>Kresh</li>
                <li>Lord Pythas</li>
                <li>Skum</li>
                <li>Lord Serpentis</li>
                <li>Verdan the Everliving</li>
                <li>Mutanus the Devourer</li>
              </ul>
            </section>
          }
        </div>
      </div>
    )
  }
}

export default Vanilla;
