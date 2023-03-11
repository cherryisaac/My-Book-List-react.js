import { useState, useEffect } from "react";
import React from 'react'
import Book from './Book';
import ReactLoading from "react-loading";


function LoadBooks() {
    const [isLoading, setIsLoading] = useState(true);

    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        // Loading screen timer between 0.5 - 2.5 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, randomIntFromInterval(500, 2500));
    }, []);

    const setLoading = () => {
        return (
            <>
                {isLoading ? (
                    <ReactLoading type={"bars"} color="green" height={0} width={0} 
                             {...document.body.classList.toggle("library-load")} />
                ) : (
                    <div>
                        <Book />
                    </div>
                )}
            </>
        );
    };

  return (
      <div className={`booklist ${isLoading ? "loading" : ""}`}>
          {setLoading()}
      </div>
  )
}

export default LoadBooks