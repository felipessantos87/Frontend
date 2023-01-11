/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Profile from './assets/felipe.png';

function App() {
  return (
    <div className="container">
      <header>
        <h2>Felipe.dev</h2>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </header>
      <section>
        <div className='left'>
          <img src={Profile} alt="profile imagem" />
          <strong>
            Felipe Santos</strong>
          <span>
            <br/>
            Eu sou o Felipe Santos, estudante de Desenvolvimento na Cubos Academy, estou me especializando para me tornar um desenvolvedor fullstack.

          Sou apaixonado pelo Brasil!
          </span>
        </div>
        <div className='right'>
          <strong> 22 de Novembro de 2030</strong>
          <h2>Introdução ao React</h2>
          <span>Nesse post nós iremos falar sobre como o React, é importante para o desenvolvedor frontend moderno.
          </span>
        <a href="#">Ler mais</a>
        </div>
      </section>
      <footer>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
