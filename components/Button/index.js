import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../theme/";
const Button = styled.button`
    font-size : ${props => props.fontSize}px;
    margin : 0 auto;
    padding : ${props => props.padding}px;
    position : ${props => props.position};
    border-radius : 3px;
    color: ${props => props.color ? props.color : colors.magentaOld};
    border-radius : ${({ borderRadius }) => borderRadius};
    border: none;
    outline: none;
    font-family : "OpenSans-ExtraBold";
    margin : ${({ margin }) => margin ? margin : "auto"};
    background-color :${({ backgroundColor }) => backgroundColor ? backgroundColor : "none"};
    width : ${({ width }) => width ? width + "%" : "auto"};
`;



function ButtonComponent({ text, padding, fontSize, borderRadius, color, margin, backgroundColor, width }) {
    return (
        <Button
            padding={padding} fontSize={fontSize} borderRadius={borderRadius} color={color}
            margin={margin}
            backgroundColor={backgroundColor}
            width={width}
        > { text}</Button >
    )
}

export default ButtonComponent;