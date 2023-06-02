import React from "react";
import { useQuery, gql } from "@apollo/client";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { CallToActionButton } from "../CallToActionButton/CallToActionButton";

export const CarSearch = (style, className) => {
  const { data, loading, error } = useQuery(gql`
    query CarsQuery {
      cars {
        nodes {
          databaseId
          title
          uri
          carDetails {
            price
          }
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
  `);
  console.log("DATA: ", data, loading, error);

  return (
    <div style={style} className={`alignwide ${className}`}>
      {!loading && data?.cars?.nodes?.length && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.cars.nodes.map((car) => (
            <div
              className="flex flex-col border border-stone-200 bg-stone-100 p-2"
              key={car.databaseId}
            >
              {!!car.featuredImage?.node?.sourceUrl && (
                <img
                  className="h-[200px] w-full object-cover"
                  src={car.featuredImage.node.sourceUrl}
                  alt=""
                />
              )}
              <div className="my-2 justify-between gap-2 font-heading text-xl font-bold lg:flex">
                <div className="my-2">{car.title}</div>
                <div className="text-right">
                  <div className="inline-block whitespace-nowrap bg-emerald-900 p-2 text-white">
                    <FontAwesomeIcon icon={faTag} />$
                    {numeral(car.carDetails.price).format("0,0")}
                  </div>
                </div>
              </div>
              <div className="">
                <CallToActionButton
                  fullWidth
                  label="View more details"
                  destination={car.uri}
                ></CallToActionButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
