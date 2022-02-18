import { SortButton } from '../SortButton';

import { ButtonContainer, Container, ButtonOrganize } from './styles';

import sortDashboardImg from '../../assets/Dashboard.svg'
import colorSort from '../../assets/btn_sort_color.svg';
import sizeSort from '../../assets/btn_sort_size.svg';
import caracterSort from '../../assets/btn_sort_caracter.svg';
import btnOrganize from '../../assets/btn_organize.svg';


export function SortDashboard(){
    return(<>
            <ButtonContainer>
                <SortButton src={caracterSort}/>
                <SortButton src={colorSort}/>
                <SortButton src={sizeSort}/>
            </ButtonContainer>
            <Container>
                <img src={sortDashboardImg} alt="" />
            </Container>
            <ButtonOrganize>
                <img src={btnOrganize} alt="" />
            </ButtonOrganize>
            </>
    )
}