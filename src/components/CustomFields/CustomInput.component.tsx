import { type InputHTMLAttributes } from "react";
import styled from "styled-components";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

export const CustomInput = styled.input`
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid #fff;
    height: 30px;
    color: #fff;
    width: 100%;

    &::placeholder {
        color: #fff;
    }
`;

/**
 * Tag Input customizada
 */
const CustomInputComponent = (props: CustomInputProps) => {
    return <CustomInput {...props} />;
};

export default CustomInputComponent;
