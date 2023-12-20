import { Card, Column, Row, ScreenContainer } from "@/components/Container";
import { StyledText } from "@/components/StyledText";
import { useNormalLogout, useUserProfile } from "@/services/hooks";
import { ProfilePicture } from "./components";
import { LinkButton } from "@/components/Buttons";
import { Loading } from "@/components/Loading";

/**
 * Tela mostra informações do usuário logado
 */
const HomeScreen = (): JSX.Element => {
    const { mutate, isLoading: loadingLogout } = useNormalLogout();
    const { data: userProfile, isLoading } = useUserProfile();
    const { firstName, lastName, image } = userProfile ?? {};

    return (
        <ScreenContainer justifyContent="center" alignItems="center">
            <Loading isLoading={isLoading || loadingLogout} />
            <Card>
                <Column alignItems="center">
                    <Row alignItems="center">
                        <StyledText
                            i18nKey={{ scope: `Seja bem-vinda: ${firstName} ${lastName}` }}
                        />
                        <LinkButton
                            onClick={() => {
                                mutate();
                            }}>
                            Logout
                        </LinkButton>
                    </Row>
                    <Column mt="15px" />
                    <ProfilePicture src={image} />
                </Column>
            </Card>
        </ScreenContainer>
    );
};

export default HomeScreen;
