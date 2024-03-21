import { useState } from 'react';
import InputMask from 'react-input-mask';
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

  function cadastrarUsuario(event) {
    event.preventDefault();
    // alert('TESTE DE SUBMIT!');
    alert(`NOME: ${nome} CPF: ${cpf} RG: ${rg} TELEFONE: ${telefone} TELEFONE RESPONSÁVEL: ${telefoneResp} E-MAIL: ${email} SENHA: ${senha} DATA DE NASCIMENTO: ${dataNasc}`);
  }

  // FUNÇÃO DE CADASTRAR
  return (
    <div className="App">
      <form onSubmit={cadastrarUsuario} className='form'>
        <h1>FORMULÁRIO DE CADASTRO</h1>

        <label className="nome">Nome:</label>
        <input
          type='text'
          placeholder="Ex: Ana"
          required
          value={nome}
          onChange={(event) => { setNome(event.target.value) }} />


        <label className="cpf">CPF:</label>
        <InputMask
          mask="999.999.999-99"
          maskChar={null}
          placeholder="Ex: 999.999.999-99"
          required
          value={cpf}
          onChange={(event) => { setCpf(event.target.value) }} />


        <label className="rg">RG:</label>
        <InputMask
          mask="99.999.999-9"
          maskChar={null}
          placeholder="Ex: 99.999.999.-9"
          required
          value={rg}
          onChange={(event) => { setRg(event.target.value) }} />


        <label className="telefone">Telefone:</label>
        <InputMask
          mask="(99) 99999-9999"
          maskChar={null}
          placeholder="Ex: (99) 99999-9999"
          required
          value={telefone}
          onChange={(event) => { setTelefone(event.target.value) }} />


        <label className="telefoneResp">Telefone Resposável:</label>
        <InputMask
          mask="(99) 99999-9999"
          maskChar={null}
          placeholder="Ex: (99) 99999-9999"
          required
          value={telefoneResp}
          onChange={(event) => { setTelefoneResp(event.target.value) }} />


        <label className="email">E-mail:</label>
        <input
          type='email'
          placeholder="Ex: ana@gmail.com"
          required
          value={email}
          onChange={(event) => { setEmail(event.target.value) }} />


        <label className="senha">Senha:</label>
        <input
          type='password'
          required
          value={senha}
          onChange={(event) => { setSenha(event.target.value) }} />


        <div>
          <label className="dataNasc">Data de nascimento:</label>
          <input
            id="dataNasc"
            type='date'
            required
            value={dataNasc}
            onChange={(event) => { setDataNasc(event.target.value) }} />
        </div>

        <button type='submit'>CADASTRAR</button>
      </form>
    </div>
  );
}

export default App;
