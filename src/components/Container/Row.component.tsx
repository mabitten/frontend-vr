import { styled } from "styled-components";
import { type FlexAlignment } from "@/components/Container/types";

type TRowComponent = {
    children?: JSX.Element | JSX.Element[] | string;
    justifyContent?: FlexAlignment;
    alignItems?: FlexAlignment;
    mr?: string;
    ml?: string;
    mt?: string;
    mb?: string;
};

export const RowStyled = styled.div<Omit<TRowComponent, "children">>`
    display: flex;
    flex-direction: Row;
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    margin-right: ${(props) => props.mr};
    margin-left: ${(props) => props.ml};
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};
`;

/**
 * Componente que representa uma linha flexível.
 *
 * @param children - Elementos filhos a serem renderizados na linha.
 * @param justifyContent Alinhamento principal dos elementos filhos no eixo transversal.
 * @param alignItems Alinhamento dos elementos filhos no eixo principal.
 * @param mr - Margem à direita.
 * @param ml - Margem à esquerda.
 * @param mt - Margem superior.
 * @param mb - Margem inferior.
 * @returns JSX.Element
 */
const RowComponent = ({
    children,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    mr = "0",
    ml = "0",
    mt = "0",
    mb = "0",
}: TRowComponent): JSX.Element => {
    return (
        <RowStyled
            justifyContent={justifyContent}
            alignItems={alignItems}
            mr={mr}
            ml={ml}
            mt={mt}
            mb={mb}>
            {children}
        </RowStyled>
    );
};

export default RowComponent;
