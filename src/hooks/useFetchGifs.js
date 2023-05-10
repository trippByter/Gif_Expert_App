import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  // Generamos hook para manipular imágenes en HTML
  // {
  //  images.map(({id, title}) => (
  //    <li key={id}>{title}</li>
  //  ))
  // }
  const [images, setImages] = useState([]);

  // Custom hook para mostrar mensaje mientras
  // cargan las imágenes
  const [isLoading, setIsLoading] = useState(true);
  
  // Tomamos la respuesta del fetch, y el
  // resultado lo enviamos como cambio de
  // estado del hook useState
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    // console.log(newImages);
  };


  // Con useEffect dispara efectos secundarios(proceso
  // a ejecutar cuando algo sucede) ejemplo: cambio en caegoría
  // Evita re-renderizaciones 
  useEffect(() => {
    getImages();
  }, []);

  return{
    images,
    isLoading
  };
};