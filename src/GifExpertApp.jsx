import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {    
    // Si el input a buscar, ya se encuentra en
    // las categorías, no ejecutar ninguna acción
    if(categories.includes(newCategory)) return;
    
    // Manipulamos el hook
    setCategories([newCategory, ...categories]);
    // setCategories([inputValue]);
  };

  return(
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={(category)} />
      ))}
      {/* <li>abc</li> */}
    

      {/* git item */}
    </>
  );
};