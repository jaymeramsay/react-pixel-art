import React from 'react';

import Pixel from './Pixel';

const PixelBoard = (props) => {
    console.log(props);
   return (
            <div className="pixelboard">
                {
                    props.pixels.map((pixel) => (
                        <Pixel 
                            key={pixel}
                        />
                    ))
                }
            </div>
    )
}

export default PixelBoard;