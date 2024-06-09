import '../../global.css';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const AnimalCard = () => {
  return (
      <div className='card'>

      <div className='card_container'>
        <img class="img_animal" src="/sloth.svg" alt="Animal"></img>
        <h3 className='card_title'>Sloth</h3>

        <p className='info_animal'>If you look closely at the sloth, it immediately becomes clear why it got its name.</p>
        <p className='info_animal'>All its life, the sloth hangs on a tree, clinging to a branch with its hooked claws, and practically does not move.</p>
      </div>
      </div>
  );
};

