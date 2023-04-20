import React from "react";
import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { CallToActionButton, MediaText } from "../components";

export const BlockRendererComponents = (block) => {
  switch (block.name) {
    case "tgg/ctabutton": {
      console.log("CTA BUTTON DATA:", block);
      const alignMap = {
        'left': "text-left",
        'center': "text-center",
        'right': "text-right"
      }
      return (
        <div className={alignMap[block.attributes.data.align]}>
          <CallToActionButton
            destination={block.attributes.data.destination}
            label={block.attributes.data.label}
          />
        </div>
      );
    }
    case "core/media-text": {
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticalAlignment={block.attributes.verticalAlignment}
          gatsbyImage={block.attributes.gatsbyImage}
          mediaPosition={block.attributes.mediaPosition}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }
    default:
      return null;
  }
};
