import { ScreenContainer } from "@/components/Containers";
import { StyledText } from "@/components/StyledText";

/**
 * Exibe uma tela de error básica
 */
const NotFoundScreen = () => {
    return (
        <ScreenContainer justifyContent="center" alignItems="center">
            <StyledText i18nKey={{ scope: "error.message" }} />
        </ScreenContainer>
    );
};

export default NotFoundScreen;
