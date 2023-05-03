import React from "react";
import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { CallToActionButton, MediaText, Cover } from "../components";
import { GatsbyImage } from "gatsby-plugin-image";

export const BlockRendererComponents = (block) => {
  switch (block.name) {
    case "core/cover": {
      console.log("COVER BLOCK: ", block)
      return (
        <Cover
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
      );
    }
    case "core/image": {
      return (
        <figure key={block.id} className={getClasses(block)}>
          <GatsbyImage
            style={getStyles(block)}
            image={block.attributes.gatsbyImage}
            alt={block.attributes.alt || ""}
            height={block.attributes.height}
            width={block.attributes.width}
          />
        </figure>
      );
    }
    case "tgg/ctabutton": {
      const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      };
      return (
        <div key={block.id} className={alignMap[block.attributes.data.align]}>
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
