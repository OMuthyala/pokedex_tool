import React, { useEffect, useState } from 'react';

export default function Sprites(props) {
    const [image, setImage] = useState(null)

    const getData = async() => {
        const url = props.url;
        const response = await fetch(url);
        const responseJSON = await response.json();

        const responsePokemon = <img src={responseJSON.sprites.front_default} 
            alt="" 
            onMouseOver={e => (e.currentTarget.src = responseJSON.sprites.front_shiny)}
            onMouseOut={e => (e.currentTarget.src = responseJSON.sprites.front_default)}
            />;

        setImage(responsePokemon)
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div>
      {image}
    </div>
  );
}