import { ColumnStyled, type TColumnComponent } from "./Column.component";
import styled from "styled-components";

type TScreenContainerComponent = TColumnComponent;

const ScreenContainer = styled(ColumnStyled)`
    width: 100%;
    height: 100vh;
    background-color: #444d6c;
    flex: 1;
`;

/**
 * Componente que representa o contêiner principal de uma tela.
 *
 * Este componente estende as propriedades do componente `ColumnStyled` e adiciona
 * estilos específicos para criar um contêiner de tela.
 *
 * @param children Elementos filhos a serem renderizados dentro do componente.
 * @param justifyContent Alinhamento principal dos elementos filhos no eixo transversal.
 * @param alignItems Alinhamento dos elementos filhos no eixo principal.
 */
const ScreenContainerComponent = ({
    children,
    justifyContent,
    alignItems,
}: TScreenContainerComponent) => {
    return (
        <ScreenContainer justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </ScreenContainer>
    );
};

export default ScreenContainerComponent;
