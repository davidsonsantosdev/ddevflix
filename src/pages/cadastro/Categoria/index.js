import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  // Reeferencia do custom Hooks
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  
  const [categorias, setCategorias] = useState([]);
  
  // ============Carregando os Dados Externos==========
  useEffect(() => {
      const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8082/categorias'
      : 'https://ddevflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        })
    
  }, []);
  /**
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://ddevflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        })
    }
  }, []);
  */

// comentário
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm(); // Limpando formulário pelo customHooks.
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button>
          Cadastrar
            </button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;