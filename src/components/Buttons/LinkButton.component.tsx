import { type AnchorHTMLAttributes } from "react";
import styled from "styled-components";

type TSimpleButtonComponent = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: JSX.Element | JSX.Element[] | string | string[];
};

const LinkButton = styled.a`
    cursor: pointer;
    color: #fff;
    padding: 20px;
    font-size: 16px;
`;

/**
 * Um componente de botão simples
 *
 * @param children - Elementos filhos a serem renderizados na linha.
 */
const SimpleButtonComponent = ({ children, ...props }: TSimpleButtonComponent) => {
    return <LinkButton {...props}>{children}</LinkButton>;
};

export default SimpleButtonComponent;
