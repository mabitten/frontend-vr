import { type ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type TSimpleButtonComponent = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: JSX.Element | JSX.Element[] | string | string[];
};

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 16px;
    width: 100%;
`;

/**
 * Um componente de botão simples
 *
 * @param children - Elementos filhos a serem renderizados na linha.
 */
const SimpleButtonComponent = ({ children, ...props }: TSimpleButtonComponent) => {
    return <Button {...props}>{children}</Button>;
};

export default SimpleButtonComponent;
