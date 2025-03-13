
import React from 'react'
import { Circles } from 'react-loader-spinner';
import "./loader.css"
export const Loader = () => {
    return (
        <div className='loader'>
            <div>

            <Circles
                height="180"
                width="180"
                color="#1976D2"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </div>

        </div>
    )
}
