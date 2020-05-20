import React from 'react';
import './App.css';
import './style.css';
importer  imageInSrc à  partir de  './imageInSrc.jpg' ;
importer la  vidéo  de  'react-player'
function App() {
  return (
    < div  style = { { border : "solid 1px black" , maxWidth : "100vw" } }>  
 
        < h1  className = { "title red" } > amine </ h1 >  

        < Br / >  

        < img  src = { imageInSrc }  alt = "amine" />
       
        < Br / > 

        < img  src = { "imageInPublic.jpg" }  alt = "amine" />  

      < / div >  

      < Video   url = { "../myVideo.mp4" }  width = { 320 }  height = { 240 }  contrôles />  
    < / div >
  ) ;
}

exporter l' application par défaut;