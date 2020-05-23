import React from "react";
import styled from "styled-components";
import Colors from "../particles/Colors";

const Title = styled.h3`
  margin:0;
  font-size: ${ props => (props.orientation === "landscape" ? "16px" : props.type === "onstream" ? "14px" : "12px" )};
  font-weight: 600;
  margin-bottom: 4px;
`;

const StreamTitle = props => {
  const { title, orientation, type } = props;
  return <Title type={type} orientation={orientation}>{title}</Title>;
};

export default StreamTitle;
