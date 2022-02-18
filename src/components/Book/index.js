 
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container } from './styles';


export function Book(props){
     /* const ref = useRef();
      console.log(ref)
*/
  

      
      const [{ isDragging }, dragRef] = useDrag({
        type: 'Book',
        item: { type: 'Book', id: props.id},
        collect: monitor => ({
         isDragging: !!monitor.isDragging()
        }),
      });
       /*
      const [, dropRef] = useDrop({
        accept: 'Book',
        hover(item: any, monitor) {
            console.log(item)
       
         
        }
      });
      dragRef(dropRef(ref));
      
      */

    return(
        <Container isDragging={isDragging} ref= {dragRef}
            >
                <img 
                   
                    height={props.height}
                    width={props.width}
                    src={props.src}
                />
        </Container>
    );
}