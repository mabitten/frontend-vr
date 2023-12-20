import { FadeLoader } from "react-spinners";
import styled from "styled-components";

type TLoadingComponent = {
    isLoading: boolean;
};

export const ContainerLoading = styled.div<TLoadingComponent>`
    width: 100%;
    height: 100%;
    position: absolute;
    display: ${(props) => (props.isLoading ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: #1f1e1e90;
`;

/**
 * Gerenciamento de loading
 *
 * @param isLoading boolean
 */
const LoadingComponent = ({ isLoading = false }: TLoadingComponent) => {
    return (
        <ContainerLoading isLoading={isLoading}>
            <FadeLoader color="#36d7b7" />
        </ContainerLoading>
    );
};

export default LoadingComponent;
