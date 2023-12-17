import { styled } from "styled-components";
import { type FlexAlignment } from "@/components/Container/types";

interface IColumnComponent {
    children?: JSX.Element | JSX.Element[] | string | string[];
    justifyContent?: FlexAlignment;
    alignItems?: FlexAlignment;
}

const Column = styled.div<IColumnComponent>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
`;

/**
 * A container to show content as Column.
 *
 * @returns JSX.Element
 */
const ColumnComponent = ({
    children,
    justifyContent = "flex-start",
    alignItems = "flex-start",
}: IColumnComponent): JSX.Element => {
    return (
        <Column justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </Column>
    );
};

export default ColumnComponent;
