import { StyledText } from "@/components/StyledText";
import { useUserProfile } from "@/services/hooks";

/**
 * Tela mostra informações do usuário logado
 */
const HomeScreen = (): JSX.Element => {
    const { data: userProfile } = useUserProfile();

    return <StyledText i18nKey={{ scope: "home.title" }} />;
};

export default HomeScreen;
