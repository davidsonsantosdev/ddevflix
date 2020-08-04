import config from '../config'

const URL_CATEGORIAS = `${config.URL}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIAS}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (respostaDoServer) => {
            //Valida resposta do servidor
            if (respostaDoServer.ok) {
                const resposta = await respostaDoServer.json();
                return resposta;
            }
            throw new Error('Servidor: ' + URL_CATEGORIAS + ' endereço não encontrado!');
        });
}

export default {
    getAllWithVideos,
    getAll,
}