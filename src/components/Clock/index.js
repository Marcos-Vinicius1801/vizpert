
import { Container } from '../Clock/styles';

import clock from '../../assets/clock_edt.svg';

export function Clock(){
    return(
        <Container>
            <img src={clock} alt="Clock"/>
        </Container>
    );
}