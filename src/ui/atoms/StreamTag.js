import React from "react";
import styled from "styled-components";
import Colors from "../particles/Colors";

const TagWrapper = styled.span`
  background: ${Colors.neutral_grey};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 22px;
  color: white;
  font-family: Roobert, sans-serif;
  font-size: 10px;
`;

const StreamTag = props => {
    const { tags } = props;
    return <TagWrapper>{tags}</TagWrapper>;
};

export default StreamTag;
