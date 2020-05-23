import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Images from "../particles/Images";

const CategoryImage = styled.div `
  height: ${ props => (props.orientation === "landscape" ? "86px" : props.type === "onstream" ? "131.67px" : "112px" )};
  width: ${ props => (props.orientation === "landscape" ? "72px" : props.type === "onstream" ? "104px" : "88px" )};
  background: url('./images/${props => (Images[props.image] ? Images[props.image] : Images['chatting'])}');
  background-size: cover;
  margin-bottom: ${ props => (props.orientation === "landscape" ? "0" : "8px")};
  ${ props => (props.orientation === "landscape" && "margin-right: 16px;" )};
`;

const StreamThumbnail = props => {
    const { image, type, orientation } = props;
    return <CategoryImage image={image} type={type} orientation={orientation} ></CategoryImage>;
};

export default StreamThumbnail;