import React, { Component } from 'react';
import './App.css';

 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Dados pessoais'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  
  entrar(){
    // this.state.nome = 'Joseffe Oliveira'
    this.setState({
      idade: <b>Idade</b>,
      idade2: '19 anos',
      nome: 'Jean Pedro da Silva Korla  ',
      data_de_nascimento:<b>Data_de_nascimento</b>,
      data_de_nascimento2: '22/02/2002',
      genero: 'Masculino',
      endereco: <b>Endereço</b>,
      endereco2: ' Rua SÃO MIGUEL, 496',
      formacao: <b>Formação</b>,
      formacao2:' desenvolvimento de sistemas ',
      experiencia: <b>Experiência</b>,
      experiencia2: 'Controlador de acesso',
      projetomaster: <b>Projetos</b>,
      projeto1: <a href = 'https://github.com/jeankorla/Web-NodeJS-ReactJS/tree/main/tarefa-projetos' >Projeto 1</a>,
      projeto2: <a href = 'https://github.com/jeankorla/Web-NodeJS-ReactJS/tree/main/react-multiplicador' >Projeto 2</a>,
      projeto3: <a href = 'https://github.com/jeankorla/Web-NodeJS-ReactJS/tree/main/cadastro-alunos' >Projeto 3</a>,
      projeto4: <a href = 'https://github.com/jeankorla/Web-NodeJS-ReactJS/tree/main/contador-react' >Projeto 4</a>
      }
    );
  }
    
 
  render(){
    return(
      <div>
        <Meuperfil />
        <right>
          <center>
          <button onClick={this.entrar}>Mostrar</button>
          <h2>
          {this.state.nome}
          </h2>
          </center>
          <center>
          <div style={{ height: 20 }}> 
            {this.state.idade} <br />
            {this.state.idade2} <br />
            {this.state.data_de_nascimento} <br />
            {this.state.data_de_nascimento2} <br />
            {this.state.endereco} <br />
            {this.state.endereco2} <br />
            {this.state.formacao} <br />
            {this.state.formacao2} <br />
            {this.state.experiencia} <br />
            {this.state.experiencia2} <br />
            {this.state.projetomaster} <br />
            {this.state.projeto1} <br />
            {this.state.projeto2} <br />
            {this.state.projeto3} <br />
            {this.state.projeto4}
          </div>
          </center>

        </right>
      </div>
    );
  }}
 
 
export default App;

 class Meuperfil extends Component {
   
   render(){
     
    let img = '';
    
    return(
      <center>
      <img src={img} width={250} height={250} />
      </center>
      
    );
   }
 }
