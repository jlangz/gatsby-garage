import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { GatsbyImage } from "gatsby-plugin-image";

const Page = (props) => {
  console.log("Page props:", props);
  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={(block) => {
          switch (block.name) {
            case "core/media-text":
              console.log("RENDER BLOCKS: ", block);
              const content = (
                <div
                  className={`flex p-4 ${
                    block.attributes.verticalAlignment === "center"
                      ? "items-center"
                      : ""
                  }`}
                >
                  <div>
                    <BlockRenderer blocks={block.innerBlocks} />
                  </div>
                </div>
              );
              return (
                <div
                  key={block.id}
                  style={getStyles(block)}
                  className={getClasses(block)}
                >
                  {block.attributes.mediaPosition === "right" && content}
                  <div>
                    <GatsbyImage
                      image={block.attributes.gatsbyImage}
                      alt="Ok"
                    />
                  </div>
                  {block.attributes.mediaPosition !== "right" && content}
                </div>
              );
          }
        }}
      />
    </div>
  );
};

export default Page;
