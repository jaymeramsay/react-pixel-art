import React from 'react';

import Pixel from './Pixel';

const PixelBoard = (props) => {
    console.log(props);
   return (
        <div>
        This is my pixel art board yay!
            <div>
                {
                    props.pixels.map((pixel) => (
                        <Pixel 
                            key={pixel}
                            className='pixel'
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PixelBoard;