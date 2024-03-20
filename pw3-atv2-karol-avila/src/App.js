import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneResp, setTelefoneResp] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  function cadastrarUsuario(event){
    event.preventDefault();
    // alert('TESTE DE SUBMIT!');
    alert(`NOME: ${nome} CPF: ${cpf} RG: ${rg} TELEFONE: ${telefone} TELEFONE RESPONSÁVEL: ${telefoneResp} E-MAIL: ${email} SENHA: ${senha} DATA DE NASCIMENTO: ${dataNasc}`);
    
}

  // FUNÇÃO DE CADASTRAR
  return (
    <div className="App">
      <form onSubmit={cadastrarUsuario} className='form'>

        <h1>FORMULÁRIO DE CADASTRO</h1>

        <input
        type='text'
        placeholder="DIGITE SEU NOME"
        required
        value={nome}
        onChange={(event)=>{setNome(event.target.value)}}/>

        <input
        type='text'
        placeholder="DIGITE SEU CPF"
        required
        value={cpf}
        onChange={(event)=>{setCpf(event.target.value)}}/>

        <input
        type='text'
        placeholder="DIGITE SEU RG"
        required
        value={rg}
        onChange={(event)=>{setRg(event.target.value)}}/>

        <input
        type='text'
        placeholder="DIGITE SEU TELEFONE"
        required
        value={telefone}
        onChange={(event)=>{setTelefone(event.target.value)}}/>

        <input
        type='text'
        placeholder="DIGITE O TELEFONE DO RESPONSÁVEL"
        required
        value={telefoneResp}
        onChange={(event)=>{setTelefoneResp(event.target.value)}}/>

        <input
        type='email'
        placeholder="DIGITE SEU E-MAIL"
        required
        value={email}
        onChange={(event)=>{setEmail(event.target.value)}}/>

        <input
        type='password'
        placeholder="DIGITE SUA SENHA"
        required
        value={senha}
        onChange={(event)=>{setSenha(event.target.value)}}/>

        <input
        type='text'
        placeholder="DIGITE SUA DATA DE NASCIMENTO"
        required
        value={dataNasc}
        onChange={(event)=>{setDataNasc(event.target.value)}}/>
        
        <button type='submit'>CADASTRAR</button>

      </form>
    </div>
  );
}

export default App;