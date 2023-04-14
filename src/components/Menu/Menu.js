import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Menu = () => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      wp {
        acfOptionsMainMenu {
          mainMenu {
            callToAction {
              destination {
                ... on WpPage {
                  uri
                }
              }
            }
            menuItems {
              root {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
              subMenuItems {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    }
  `);
  console.log("Main Menu Data: ", data);
  const { menuItems } = data.wp.acfOptionsMainMenu.mainMenu;
  return (
    <div className="sticky top-0 z-20 flex h-16 justify-between bg-emerald-900 px-4 font-bold text-white">
      <div>Logo</div>
      <div className="flex h-full">
        {(menuItems || []).map((menuItem, index) => (
          <div
            key={index}
            className="group relative flex h-full cursor-pointer hover:bg-emerald-800"
          >
            <Link
              to={menuItem.root.destination.uri}
              className="flex h-full items-center px-4 text-white no-underline"
            >
              {menuItem.root.label}
            </Link>
            {!!menuItem.subMenuItems?.length && (
              <div className="absolute top-full right-0 hidden bg-emerald-800 text-right group-hover:block">
                {menuItem.subMenuItems.map((subMenuItem, index) => (
                  <Link
                    to={subMenuItem.destination.uri}
                    key={index}
                    className="block whitespace-nowrap p-4 text-white no-underline hover:bg-emerald-700"
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
