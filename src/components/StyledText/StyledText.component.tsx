import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

type TStyledTextProps = {
    i18nKey: {
        scope: string;
        options?: Record<string, unknown>;
    };
    size?: string;
    color?: string;
};

const Text = styled.p<Omit<TStyledTextProps, "i18nKey">>`
    font-family: "Roboto-regular";
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;

/**
 * A lógica principal do componente de texto estilizado
 *
 * @returns JSX.Element
 */
const StyledTextComponent = ({
    i18nKey,
    color = "#fff",
    size = "14px",
}: TStyledTextProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Text size={size} color={color}>
            {t(i18nKey.scope, i18nKey?.options)}
        </Text>
    );
};

export default StyledTextComponent;
