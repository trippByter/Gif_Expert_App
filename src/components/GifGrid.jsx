import {GifItem} from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

// Este componente muestra lo buscado en el HTML
export const GifGrid = ({category}) => {

  // Custom hook para mostrar mensaje de carga
  const {images, isLoading} = useFetchGifs(category);
  // console.log({images, isLoading});
  
  return (
    <>
      <h3>{category}</h3>
      {/* Mostramos mensaje de carga si 'isLoading' está en 'true' */}
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem  
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};