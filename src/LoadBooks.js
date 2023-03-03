import { useState, useEffect } from "react";
import React from 'react'
import Book from './Book';
import ReactLoading from "react-loading";


function LoadBooks() {
    const [isLoading, setIsLoading] = useState(true);
    const [done, setDone] = useState(undefined)

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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

    useEffect(() => {
        if (isLoading !== null) {
            document.body.classList.toggle("loading", !isLoading);
        }
    }, [!isLoading]);


  return (
      <div className={`booklist ${isLoading ? "loading" : ""}`}>
          {setLoading()}
      </div>
  )
}

export default LoadBooks