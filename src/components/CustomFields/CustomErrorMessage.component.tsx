import { useField } from "formik";
import { StyledText } from "@/components/StyledText";
import { Column } from "@/components/Containers";

/**
 * Componente de erro customizado
 */
const CustomErrorMessage = ({ name }: { name: string }) => {
    const [, meta] = useField(name);

    return (
        <Column>
            {meta.touched && meta.error ? (
                <StyledText color="red" size="14px" i18nKey={{ scope: meta.error }} />
            ) : (
                <></>
            )}
        </Column>
    );
};

export default CustomErrorMessage;
