import { Book } from '../Book';

import { useEffect, useState} from 'react'
 
import BookContext from './context';

import { Container, BookShelfUp, BookShelfDown } from '../BookCase/styles';

import produce from 'immer';

import {api} from '../../services/api';

import bookCase from '../../assets/Bookcase_edt.svg';

export function BookCase(){
 
    const [booksManagementUp,  setBooksManagementUp, ] = useState([]);
    const  [booksManagementDown,  setBooksManagementDown ] = useState([]);
   
    useEffect(() => {
        api.get('/booksupershelf')
          .then(response => setBooksManagementUp(response.data.upperbooks));
         
    }, [])

    useEffect(() => {
        api.get('/booksdownshelf')
          .then(response => setBooksManagementDown(response.data.downbooks));
    }, [])
 
    
    function move(from, to){
       
    }
     
    return(
        <BookContext.Provider value={{booksManagementUp, booksManagementDown, move}}>
            <Container>
                <img src={bookCase} alt="Book case"/>
                <BookShelfUp >
                    {booksManagementUp.map((books, index) => {
                            return(
                                <Book  
                                    key={books.id}
                                    index={index}
                                    src={books.img}
                                    height={'150px'}
                                    width={'39px'} 
                                    data={books}
                                />
                                ) 
                            })
                        } 
                </BookShelfUp>
                <BookShelfDown>      
                    {booksManagementDown.map((books, index) => {
                            return(
                                <Book 
                                    key={books.id}
                                    index={index}
                                    src={books.img}
                                    height={'150px'}
                                    width={'39px'} 
                                    data={books}
                                />
                                ) 
                            })
                        } 
                </BookShelfDown>
            </Container>
        </BookContext.Provider>            
    );
}