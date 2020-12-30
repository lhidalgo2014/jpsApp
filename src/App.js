import './App.css';
import logo from './assets/img/logo-blanco.png'
import facebook from './assets/img/facebook.svg';
import youtube from './assets/img/youtube.svg';
import deBien from '../src/assets/img/75debien.png';
import logoChances from './assets/img/logo_chances.png';
import logoLoteria from './assets/img/logo_loteria.jpg';
import logoLotto from './assets/img/logo_lotto.png';

function App() {
  return (
    <>
    <header>
        <img className="logo" src={logo} alt="logo de jps"></img>
        <a>Junta de Protección Social</a>

        <nav>
          <ul>
              <li><a href="">¿Quines somos?</a></li>
              <li><a href="">Productos</a></li>
              <li><a href="">Gestión Social</a></li>
              <li><a href="">Cementerios</a></li>
          </ul>
        </nav>
        <div className="social-header">
            <ul>
                <li><a><img src={facebook} alt="facebook"></img></a></li>
                <li><a><img src={youtube} alt="youtube"></img></a></li>
            </ul>
        </div>
    </header>
    <hr></hr>
    <div className="content">
        <div className="left">
            <div className="">
                <h1>Sorteando los mejores premios</h1>
                <p>La Junta de Protección Social contribuye 
                con la salud pública, el bienestar y la calidad 
                de vida de las poblaciones en pobreza y 
                vulnerabilidad social por medio de la administración 
                de las Loterías, Juegos de Azar y la prestación de 
                Servicios en los Camposantos.</p>
                <button>Sortear</button>
            </div>
        </div>
        <div className="right">
            <img src={deBien} alt="75 años de hacer el bien"></img>
            <ul>
                <li><img src={logoChances} alt="logo-chances"></img></li>
                <li><img src={logoLoteria} alt="logo-loteria"></img></li>
                <li><img src={logoLotto} alt="logo-lotto"></img></li>
            </ul>
        </div>
        <footer>
          <p>SI CONOCE SOBRE LOTERÍA ILEGAL DENÚNCIELO AL 22584474</p>
        </footer>
    </div>
    </>
  );
}

export default App;
