import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const Views = styled.p`
margin: 0;
font-size: ${ props => (props.orientation === "landscape" ? "12px" : "10px" )};
margin-bottom: 8px;
`;


const StreamViews = props => {
  const { views, orientation } = props;
  return <Views orientation={orientation}>{views} spectateurs</Views>;
};

export default StreamViews;
