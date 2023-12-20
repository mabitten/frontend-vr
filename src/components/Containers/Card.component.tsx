import styled from "styled-components";
import { ColumnStyled } from "./Column.component";

type TCardComponent = {
    children: JSX.Element | JSX.Element[] | string | string[];
    width?: string;
};

const Card = styled(ColumnStyled)<Pick<TCardComponent, "width">>`
    max-width: ${(props) => props.width};
    width: 100%;
    padding: 20px 20px;
    background-color: #1e2437;
`;

/**
 * Retorna um card com fundo e padding pré-definido
 */
const CardComponent = ({ children, width = "fit-content" }: TCardComponent) => {
    return <Card width={width}>{children}</Card>;
};

export default CardComponent;
