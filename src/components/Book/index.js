 
import { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container } from './styles';

import BookContext from '../BookCase/context';

export function Book({data, height, width, src, index}){
   
   const ref = useRef();  
    
   const {move} = useContext(BookContext);

   const [{ isDragging }, dragRef] = useDrag({
 
        type: 'BOOK',
        item: { type: 'BOOK', index, id:data.id  },
        Teste: () => 'teste',
        collect: monitor => ({
         isDragging: !!monitor.isDragging()
        }),
      });
   
      const [, dropRef] = useDrop({
        accept: 'BOOK',
        hover(item, monitor) {
            const draggedItemIndex = item.index;
            const targetItemIndex = index;

            if (draggedItemIndex === targetItemIndex){
                return;
            } 

            //Gets the current size element value from reference
            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.right - targetSize.left) / 2;
            
            const draggedOffSet = monitor.getClientOffset();
            const draggedSideMoved = draggedOffSet.x - targetSize.left;
            
            /*Both values can be used to compare if the current and target element
              are center aligned => console.log(draggedSideMoved, targetCenter)*/

            //Verifies if the current item is before or after the target
            if(draggedItemIndex < targetCenter && draggedSideMoved < targetCenter){
                return;
            }
       
             //Verifies if the current item is after or before the target
             if(draggedItemIndex > targetCenter && draggedSideMoved > targetCenter){
                return;
            }
            move(draggedItemIndex, targetItemIndex)
        }
    });
    
     
      
     
     const ref1 =dragRef(dropRef(ref))
    return(
        <Container 
            isDragging={isDragging} 
            ref={ref1}
        >
                <img 
                   
                    height={height}
                    width={width}
                    src={src}
                />
        </Container>
    );
}