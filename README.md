# Portal-menu
Javascript file used for shared site content on the Portal
					
This script and accompanying style sheet is used on the Region 3 Motor Vehicle use pages, located in the Maps & Publications node.					
Please DO NOT modify this script or the accompanying stylesheet. If neededfor a project please download a new copy so that the original pages are NOT altered when files are modified to fit your needs						


## USAGE
Call the following link & script tags on each page the menu is needed.

`<link href="/Internet/FSE_DOCUMENTS/fseprd586548.css" rel="stylesheet" />`
`<script src="/Internet/FSE_DOCUMENTS/fseprd586425.js"> </script>`

Ensure that the source from the menu object is called using `document.write(menu.menuItems())`

## IMPORTANT CSS CLASS
className holds the CSS class of needed for the styling. It's saved as a ojbect variable for quick change.
**PLEASE NOTE: If changed in this file it must also be updated in the CSS file /Internet/FSE_DOCUMENTS/fseprd586548.css

## FOREST NAME
.match() with RegEx /\w*(?=\/maps)/ is used to match only the forest name part of the url.This allows for the dynamic url building of the menu links.

## HTML SOURCE
   - Each html element consists of an item in array variable titled 'source' which is then joined by the "\n" character
   - The Dynamic links are built by combining menu.forestName & menu.links.[forest variable]

## ADDING FOREST PAGES OR ADDITIONAL MENU LINKS
To add a forest page simply add the forest will need to be added in two places.
   		1. Locate the forest's new CID.
   		2. Place the CID in the menu.cid object
   		3. Within the menu.source array add list item in appropriate place following the other list item format.
         EXAMPLE: 
         ```javascript
         '<li><a href="' + this.link() +  this.cid.[NAME THAT WAS CREATED IN menu.links Object]   + '">  Link Name Here  </a></li>'
         ```

## EDITING MENU LINKS
   - If a page location changes for whatever reason the update only needs to occur within the menu.links object by updating the CID#
   - If a link name needs to be changed that will need to be done within the menuItems function.
