import React from "react";
import { useQuery, gql } from "@apollo/client";

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
              {car.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};