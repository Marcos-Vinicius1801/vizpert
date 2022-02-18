
 
import {api} from '../../services/api';
import { Book } from '../Book';
import { useEffect, useState} from 'react'
import { Container, BookShelfUp, BookShelfDown } from '../BookCase/styles';

import bookCase from '../../assets/Bookcase_edt.svg';

export function BookCase(props){
    
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
 
    

    return(
        <Container>
            <img src={bookCase} alt="Book case"/>

            <BookShelfUp>
                {booksManagementUp.map((books, index) => {
           
                        console.log(`index prateleira de cima:${index}`)
                        return(
                            <Book  
                                id={props.id}
                                key={index}
                                src={books.img}
                                height={'150px'}
                                width={'39px'} 
                            />
                            ) 
                        })
                    } 
            </BookShelfUp>

            <BookShelfDown>      
                {booksManagementDown.map((books, index) => {
               
                             console.log(`index prateleira de baixo:${index}`)
                            return(
                                <Book 
                                    id={props.id}
                                    key={index}
                                    src={books.img}
                                    height={'150px'}
                                    width={'39px'} 
                                />
                            ) 
                        })
                    } 
            </BookShelfDown>
        </Container>
    );
}