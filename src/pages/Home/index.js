/**Bibliotecas */
import React, { useEffect, useState } from 'react';

/**Estilos */
import './index.css';

/**Components */
//import Menu from '../../components/Menu'
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//  import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  // Preparando o carregamento dos dados
  // ============Carregando os Dados Externos==========
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
      //  console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
        return;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);// sem o , []) entra em lopping de carregamento
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              {/**Somente o primeiro video */}
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
       /**Todos os outros montando o carrossel*/
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })
    };

      {/* 
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando área..."}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
  */}

     
    </PageDefault>
  );
}


export default Home;
