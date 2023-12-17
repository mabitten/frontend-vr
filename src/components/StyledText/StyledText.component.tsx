import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

const Text = styled.p`
    font-family: "Roboto-regular";
`;

interface StyledTextProps {
    i18nKey: {
        scope: string;
        options?: Record<string, unknown>;
    };
}

/**
 *
 * @returns JSX.Element
 */
const StyledTextComponent = ({ i18nKey }: StyledTextProps): JSX.Element => {
    const { t } = useTranslation();

    return <Text>{t(i18nKey.scope, i18nKey?.options)}</Text>;
};

export default StyledTextComponent;
