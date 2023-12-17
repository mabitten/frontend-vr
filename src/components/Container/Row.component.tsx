import { styled } from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: Row;
    align-items: flex-start;
    justify-content: flex-start;
`;

interface IRowComponent {
    children?: JSX.Element | JSX.Element[] | string;
}

/**
 * A container to show content as Row.
 *
 * @returns JSX.Element
 */
const RowComponent = ({ children }: IRowComponent): JSX.Element => {
    return <Row>{children}</Row>;
};

export default RowComponent;
