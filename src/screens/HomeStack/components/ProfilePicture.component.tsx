import styled from "styled-components";

const PictureProfile = styled.img`
    width: 100px;
    border-radius: 50px;
    border: 2px solid #fff;
`;

/**
 * Retorna imagem do usuário estilizada
 *
 * @param picture URL da imagem
 */
const ProfilePictureComponent = ({ ...props }) => {
    return <PictureProfile {...props} />;
};

export default ProfilePictureComponent;
