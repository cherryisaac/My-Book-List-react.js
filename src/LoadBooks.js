import { useState, useEffect } from "react";
import React from 'react'
import Book from './Book';
import ReactLoading from "react-loading";


function LoadBooks() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Loading screen timer 1 second
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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