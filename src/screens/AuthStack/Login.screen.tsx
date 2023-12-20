import { SimpleButton } from "@/components/Buttons";
import { Card, Column, Row, ScreenContainer } from "@/components/Containers";
import { CustomInput, ErrorMessage } from "@/components/CustomFields";
import { Loading } from "@/components/Loadings";
import { StyledText } from "@/components/StyledText";
import { useIsLogged, useNormalLogin } from "@/services/hooks";
import { LoginSchema } from "@/utils";
import { Field, type FieldProps, Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Tela para realizar login atráves de um username e password
 */
const LoginScreen = (): JSX.Element => {
    const { mutateAsync: normalLoginMutation, isLoading, isSuccess } = useNormalLogin();
    const { data: isLogged, refetch } = useIsLogged({ enabled: false });

    const navigate = useNavigate();

    /**
     * Requisição de login
     */
    const handleSubmit = async (values: { username: string; password: string }) => {
        await normalLoginMutation({
            username: values.username,
            password: values.password,
        });
    };

    useEffect(() => {
        void refetch();
        if (isLogged) {
            navigate("/home");
        }
    }, [isLogged, isSuccess]);

    return (
        <ScreenContainer justifyContent="center" alignItems="center">
            <Loading isLoading={isLoading} />
            <Card width="400px">
                <Row mb="30px">
                    <StyledText size="24px" i18nKey={{ scope: "Login" }} />
                </Row>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}>
                    <Form>
                        <Column mb="15px">
                            <Field
                                name="myField"
                                render={({ field }: FieldProps) => (
                                    <CustomInput
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        id="username"
                                        onChange={field.onChange}
                                        value={field.value}
                                    />
                                )}
                            />
                            <ErrorMessage name="username" />
                        </Column>
                        <Column>
                            <Field
                                name="myField"
                                render={({ field }: FieldProps) => (
                                    <CustomInput
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        onChange={field.onChange}
                                        value={field.value}
                                    />
                                )}
                            />
                            <ErrorMessage name="password" />
                        </Column>
                        <Column mt="30px">
                            <SimpleButton type="submit">
                                <StyledText i18nKey={{ scope: "login.button" }} />
                            </SimpleButton>
                        </Column>
                    </Form>
                </Formik>
            </Card>
        </ScreenContainer>
    );
};

export default LoginScreen;
