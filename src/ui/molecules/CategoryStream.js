import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import StreamThumbnail from "../atoms/StreamThumbnail.js"
import Images from "../particles/Images";
import StreamTag from "../atoms/StreamTag";
import StreamTitle from "../atoms/StreamTitle";
import StreamViews from "../atoms/StreamViews";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roobert;
    font-weight: 400;
    src: url('./fonts/Roobert-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: Roobert;
    font-weight: 500;
    src: url('./fonts/Roobert-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: Roobert;
    font-weight: 600;
    src: url('./fonts/Roobert-Bold.ttf') format('truetype');
  }
  
  body {
    font-family: Roobert, sans-serif;
    font-weight: 400;
  }
`

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: ${ props => (props.orientation === "landscape" ? "row" : "column")};
  align-items: ${ props => (props.orientation === "landscape" ? "center" : "baseline")};
  margin-bottom: 1.5rem;
`;


const Category = props => {
  const { image, title, tags, views, type, orientation } = props;
  return <CategoryWrapper orientation={orientation}>
    
      <GlobalStyle />
      <StreamThumbnail image={image} type={type} orientation={orientation} />
      <div class="text-wrapper">
      <StreamTitle title={title} type={type} orientation={orientation} />
      {
      type !== 'onstream' && <StreamViews views={views} orientation={orientation} />
      }
      
      {
      type === 'classic' && <StreamTag tags={tags} />
      }
      </div>
    </CategoryWrapper>;
};

Category.propTypes = {
  image: PropTypes.oneOf(Object.keys(Images)),
  title: PropTypes.string,
  tags: PropTypes.string,
  views: PropTypes.string,
  type: PropTypes.string,
  orientation: PropTypes.string
};

Category.defaultProps = {
  image: "chatting",
  title: "Nom du jeu",
  tags: "IRL",
  views: "50k",
  orientation: "portait",
  type: "classic"
};

export default Category;