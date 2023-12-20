import { Card, Column, Row, ScreenContainer } from "@/components/Containers";
import { StyledText } from "@/components/StyledText";
import { useNormalLogout, useUserProfile } from "@/services/hooks";
import { ProfilePicture } from "./components";
import { LinkButton } from "@/components/Buttons";
import { Loading } from "@/components/Loadings";
import { format } from "date-fns";

/**
 * Tela mostra informações do usuário logado
 */
const HomeScreen = (): JSX.Element => {
    const { mutate, isLoading: loadingLogout } = useNormalLogout();
    const { data: userProfile, isLoading } = useUserProfile();
    const { firstName, lastName, image, email, username, gender, birthDay, phone } =
        userProfile ?? {};

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
                            <StyledText i18nKey={{ scope: "home.logout" }} />
                        </LinkButton>
                    </Row>
                    <Column>
                        <StyledText>{email}</StyledText>
                    </Column>
                    <Column>
                        <StyledText>{username}</StyledText>
                    </Column>
                    <Column>
                        <StyledText>{gender}</StyledText>
                    </Column>
                    <Column>
                        <StyledText>{format(birthDay ?? new Date(), "MM/dd/yyyy")}</StyledText>
                    </Column>
                    <Column>
                        <StyledText>{phone}</StyledText>
                    </Column>
                    <Column mt="15px" />
                    <ProfilePicture src={image} />
                </Column>
            </Card>
        </ScreenContainer>
    );
};

export default HomeScreen;
