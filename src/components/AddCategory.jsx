import { useState } from 'react';

// Este componente agrega categoría en el HTML.
// 'onNewCategory' es un prop.
export const AddCategory = ({onNewCategory}) => {
  
  // Usamos hooks para modificar el 'input'.
  const [inputValue, setInputValue] = useState('');

  // Desestructuramos el 'event'. El 'target.value'
  // es el string ingresado en el 'input'.
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };

  // Agregamos lo escrito en el 'input' a la
  // lista que se encuentra debajo.
  const onSubmit = (event) => {
    // No borrar consola
    event.preventDefault();
    
    // No permitir input de menos de un char
    if(inputValue.trim().length <= 1) return;
    
    // setCategories(categories => [inputValue, ...categories]);
    
    // Limpiar el input cada vez
    // que se ingresa un elemento
    setInputValue('');

    // Mandamos el input limpio a 'onNewCategory'
    onNewCategory(inputValue.trim());
  };

  return(
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
