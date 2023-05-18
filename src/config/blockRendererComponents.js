import React from "react";
import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import {
  CallToActionButton,
  MediaText,
  Cover,
  TickItem,
  CarSearch,
} from "../components";
import { GatsbyImage } from "gatsby-plugin-image";
import numeral from "numeral";

export const BlockRendererComponents = (block) => {
  switch (block.name) {
    case "core/cover": {
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
    case "tgg/tickitem": {
      return (
        <TickItem key={block.id}>
          <BlockRenderer blocks={block.innerBlocks} />
        </TickItem>
      );
    }
    case "tgg/carprice": {
      return (
        <div className="flex justify-center">
          <div className="bg-black py-5 px-8 font-heading text-3xl text-white opacity-75">
            ${numeral(block.attributes.price).format("0,0")}
          </div>
        </div>
      );
    }
    case "tgg/carsearch": {
      return (
        <CarSearch
          key={block.id}
          style={getStyles(block)}
          className={getClasses(block)}
        ></CarSearch>
      );
    }
    default:
      return null;
  }
};
