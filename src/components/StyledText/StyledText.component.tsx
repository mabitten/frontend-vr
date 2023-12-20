import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

type TStyledTextProps = {
    children?: string | number | null | JSX.Element | JSX.Element[];
    i18nKey?: {
        scope: string | undefined;
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
    children = undefined,
    i18nKey = { scope: undefined },
    color = "#fff",
    size = "14px",
}: TStyledTextProps): JSX.Element => {
    const { t } = useTranslation();

    if (i18nKey?.scope) {
        return (
            <Text size={size} color={color}>
                {t(i18nKey.scope, i18nKey?.options)}
            </Text>
        );
    }

    return (
        <Text size={size} color={color}>
            {children}
        </Text>
    );
};

export default StyledTextComponent;
