export const getGifs = async(category) => {
  // Tomamos una url probada en POSTMAN
  const url = `https://api.giphy.com/v1/gifs/search?api_key=s9QuCu4NfhWTJyfxEOoWa1DSO3DqDT4p&q=${category}&limit=10`;
  
  // Mandamos una petición fetch y almacenamos
  // en resultado en una variable
  const resp = await fetch(url);
  
  // Extraemos el campo 'data' de la respuesta
  const {data} = await resp.json()

  // Creamos objeto con valores de 'data'
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  return gifs;
};