import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

// pq purple = purple et pareil grey
export const colors = {
    purple: "purple",
    grey: "grey"
};

// Styled component, defini un style a une balise créer
const BadgeWrapper = styled.span`
  background: ${props => (props.color === colors.purple ? Colors.brand_primary : Colors.neutral_grey)};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 22px;
  color: white;
  font-family: sans-serif;
  font-size: 12px;
`;

// Const de l'affichage + set des props pour les récupérer, et nom balise en fonction de styledcomponent
const Badge = props => {
    const { text, color } = props;
    return <BadgeWrapper color={color}>{text}</BadgeWrapper>;
};


// PROPTYPES Déclaration du type et obligatoire ou non (erreur console log si pas bon)
Badge.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

// Value par défaut
Badge.defaultProps = {
    color: colors.grey
};

export default Badge;
