import React from 'react';
import noticias from '../../assets/noticias.jpeg';
import '../../styles/Noticias.css';

const NoticiaInfo = () =>{
    return(
        <>
        <div className="noticia-container">
                <img src={noticias} alt="noticia"></img>
                <div>
                    <h1>Titulo de la noticia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vestibulum mauris, at venenatis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis lacinia elit. Vivamus viverra massa magna, id lacinia ipsum sagittis id. Etiam vitae magna vulputate, tempor ipsum fringilla, egestas arcu. Suspendisse pulvinar placerat eros sed suscipit. Aliquam lobortis elit eu libero mattis, a venenatis sapien efficitur. Aliquam a ligula ex. Duis at neque quis sem mollis lacinia sed et ipsum. Morbi ut tortor tortor. Sed cursus eget ligula a mollis.</p>
                    <div className="button-container">
                        <button>Editar noticia</button>
                        <button>Eliminar noticia</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default NoticiaInfo;