import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

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
  const {menuItems} = data.wp.acfOptionsMainMenu.mainMenu
  return (
    <div className="bg-emerald-900 text-white px-4 font-bold sticky top-0 z-20 h-16 flex justify-between">
      <div>Logo</div>
      <div className='flex h-full'>
        {(menuItems || []).map((menuItem, index) => (
          <div key={index} className='flex h-full cursor-pointer hover:bg-emerald-800'>
            <Link to={menuItem.root.destination.uri} className='px-4 flex h-full items-center text-white no-underline'>
              {menuItem.root.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}