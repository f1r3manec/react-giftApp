import React from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import GifGridItem from "./GifGridItem";
//import { getGifts } from "../helpers/getGifs";
const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      {loading && <p>Cargando</p>}
      <h3>{category}</h3>

      {images.length > 0 ? (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      ) : (
        <p>Sin Datos</p>
      )}
    </>
  );
};

export default GifGrid;
