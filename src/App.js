import React from "react";
import "./App.css";
/* import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom" */
import Carousel from "nuka-carousel";

/* import CarouselGuide from './assets/icons/carrousel-guide.svg'; */
import GreenLike from './assets/icons/green-button-like.svg';
import GreyHeart from './assets/icons/grey-heart.svg';
import Flechinha from './assets/icons/open-close.svg';
import PurpleIcon from './assets/icons/purple-icon.svg';
import Setinha from './assets/icons/setinha.svg';
/* import Search from './assets/icons/Search.svg'; */

import Movie1 from './assets/movies/capitao-fantastico.png';
import Movie2 from './assets/movies/emicida.jpeg';
import Movie3 from './assets/movies/hoje-eu-quero-voltar-sozinho.png';
import Movie4 from './assets/movies/homem-aranha.png';
import Movie5 from './assets/movies/que-horas-ela-volta.png';
import Movie6 from './assets/movies/rocketman.jpeg';
import Movie7 from './assets/movies/sherek.png';
import Movie8 from './assets/movies/um-sonho-de-liberdade.png';
import Movie9 from './assets/movies/fuga-das-galinhas.jpeg'

import "./App.css";

class App extends React.Component {
  state={
    Movies:[
      {poster:Movie1,Name:"Capitão Fantástico", likeValue:"4/5", description:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.", },
      {poster:Movie2,Name:"AmarElo", likeValue:"5/5", description:"Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.", },
      {poster:Movie3,Name:"Hoje Eu Quero Voltar Sozinho", likeValue:"-", description:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.", },
      {poster:Movie4,Name:"Homem Aranha", likeValue:"3/5", description:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.", },
      {poster:Movie5,Name:"Que Horas Ela Volta?", likeValue:"-", description:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.", },
      {poster:Movie6,Name:"Rocketman", likeValue:"-", description:"Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.", },
      {poster:Movie7,Name:"Sherek", likeValue:"4/5", description:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.", },
      {poster:Movie8,Name:"Um Sonho de Liberdade", likeValue:"4,5/5", description:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.", },
      {poster:Movie9, Name:"A Fuga das Galinhas", likeValue:"2/5",description:"O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",},
    ],
    MoviesResult: [],
    
    inputValue: ""

  }

 moviesResults = (event) => {
   const MoviesFiltrados = this.state.Movies.filter(item => {
     if(item.Name.toLowerCase().includes(event.target.value.toLowerCase()) && event.target.value != "" ){
        return true
     }
   }
   )

  this.setState({
    MoviesResult:MoviesFiltrados,
    inputValue: event.target.value
  })
   
 }

render() {
  return (
    <div>

      <header className="header">
        <div className="header1">
          <h1 className="todoflix">TODOFLIX</h1>
          <p className="inicioButton" >Início</p>
          <div className="Category-mom">  
              <div className="Category-title"> 
                <p>Categorias</p>
                <img src={Setinha} alt="triângulo pra baixo"/>
              </div>
              <ul className="Category">
              
              <li>Todos</li>
              <li>Favoritos</li>
              <li>Já vistos</li>
              <li>Adicionados</li>
              
              </ul>
            
            </div>
        
        </div>

        <div className="header1">

      <button className="addMovie">Adicionar Filme</button>

      <form>
          <input onChange={this.moviesResults} type="text"className="pesquisar" placeholder="pesquisar"/>
      </form>
      
          <img className="userIcon" src={PurpleIcon} alt="icon pro usuário"/>

          <div>
            <img className="flechinha" src={Flechinha} alt="flecha para baixo" />
          </div>
        
      </div>
      </header>
      {this.state.inputValue != ""?
      <section>
        <h2 className="Results" > Resultado</h2>
      <div class="ResultPage">
        {this.state.MoviesResult.map(item =>(
            
            <div className="caixa-filmes" >
            <figure className="Figure">
          <img className="CarouselMoviesSon" src={item.poster} alt="imagem do filme"/>
              <img className="favoritar" src={GreyHeart} alt="botão de coração para favoritar"/>
            </figure>
            <div className="infos-base">
            <h3 className="nome-filmes">{item.Name}</h3>
            <div className="assessement" >
              <p className="likeValue" >{item.likeValue}</p>
              <img className="greenLike" src={GreenLike} alt="botão de like verde"/>
            </div>
            </div>
            <p>{item.description}</p>
            
          </div>

        ))}
      </div>
      </section>: false}
      
      {this.state.inputValue == ""? <main>



          <div className="seeingRecently">
            <img src={this.state.Movies[0].poster} alt="Capitão Fantástico"/>

            <div className="fantasticCapitain">
              <img src={GreyHeart} alt="botão de coração para favoritar"/>
              <p>Visto recentemente</p>
              <h3>Capitão Fantástico</h3>
              <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
                <div className="">
                  <p>4/5</p>
                  <img src={GreenLike} alt="botão de like verde"/>
                </div>
            </div>

          </div>

          <div className="Carrosel-movies">





            <h3 className="destaque">Destaques</h3>

            <Carousel
            autoplay={true}
            pauseOnHover={true}
            autoplayInterval={3500}
            speed={800}
            renderCenterLeftControls={({ previousSlide }) => (
              <svg className="carouselMovies"
                id="Rotate"
                onClick={previousSlide}
                xmlns="http://www.w3.org/2000/svg" 
                width="68" height="68"
                viewBox="0 0 68 68"
                 >
                <g id="Group_8" data-name="Group 8" transform="translate(-1309 -621)">
                  <rect id="Box" width="68" height="68" transform="translate(1309 621)" fill="none"/>
                  <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" transform="translate(1353.483 637.15) rotate(90)" fill="#fff"/>
                </g>
              </svg>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <svg className="carouselMovies"
                onClick={nextSlide}
                xmlns="http://www.w3.org/2000/svg" 
                width="68" height="68"
                viewBox="0 0 68 68"
                 >
                <g id="Group_8" data-name="Group 8" transform="translate(-1309 -621)">
                  <rect id="Box" width="68" height="68" transform="translate(1309 621)" fill="none"/>
                  <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" transform="translate(1353.483 637.15) rotate(90)" fill="#fff"/>
                </g>
              </svg>
            )}
            defaultControlsConfig={{
  nextButtonText: ' ',
  prevButtonText: ' ',
  
}} adaptiveHeight="false" slidesToShow={5} slidesToScroll={4} scrollMode="page"
              >
              {this.state.Movies.map(item=>(
                <div className="caixa-filmes" >
                  <figure className="Figure">
                <img className="CarouselMoviesSon" src={item.poster} alt="imagem do filme"/>
                    <img className="favoritar" src={GreyHeart} alt="botão de coração para favoritar"/>
                  </figure>
                  <div className="infos-base">
                  <h3 className="nome-filmes">{item.Name}</h3>
                  <div className="assessement" >
                    <p className="likeValue" >{item.likeValue}</p>
                    <img className="greenLike" src={GreenLike} alt="botão de like verde"/>
                  </div>
                  </div>
                  <p>{item.description}</p>
                  
                </div>
              ))}
            </Carousel>
          </div>
        </main> : false}

    </div>
  )
}
}

export default App