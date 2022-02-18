
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
 
import { BookCase } from "./components/BookCase";
import { Clock } from "./components/Clock";
import { SortDashboard } from "./components/SortDashboard";
import { GlobalStyle, Container, ComponentWrapper } from "./styles/global";
 


export function App() {
  return (
      <DndProvider backend={HTML5Backend}>
          <Container>
            <ComponentWrapper>
              <Clock />
              <BookCase />
            </ComponentWrapper>
            <SortDashboard />
          </Container> 
          <GlobalStyle />
      </DndProvider>
  );
}

export default App;
