
/********************************************************************************/
/*  Created 7/18/2018															*/
/*  Author: Joseph Banegas, USDA Forest Service - Region 3						*/
/*  Email: josephpbanegas@fs.fed.us 											*/
/*  Companion CSS: /Internet/FSE_DOCUMENTS/fseprd58648.CSS 						*/
/*																				*/
/*  This script and accompanying style sheet is used on the Region 3 Motor		*/
/*  Vehicle use pages, located in the Maps & Publications node.					*/
/*																				*/
/*																				*/			
/*  Please DO NOT modify this script or the accompanying stylesheet. If needed	*/
/*  for a project please download a new copy so that the original pages are NOT */
/*  altered when files are modified to fit your needs							*/
/*																				*/
/********************************************************************************/
/*                                                                              */
/*                        DOCUMENTATION                                         */
/*                                                                              */ 
/*******************************************************************************//*

USAGE
   - Call the following link & script tags on each page the menu is needed.

   <link href="/Internet/FSE_DOCUMENTS/fseprd586548.css" rel="stylesheet" />
   <script src="/Internet/FSE_DOCUMENTS/fseprd586425.js"> </script>

   Ensure that the source from the menu object is called using document.write(menu.menuItems())
_________________________________________________________________________________________________________________________________

IMPORTANT CSS CLASS
   - className holds the CSS class of needed for the styling. It's saved as a ojbect variable for quick change.
   	 **PLEASE NOTE: If changed in this file it must also be updated in the CSS file /Internet/FSE_DOCUMENTS/fseprd586548.css

_________________________________________________________________________________________________________________________________

FOREST NAME
   - .match() with RegEx /\w*(?=\/maps)/ is used to match only the forest name part of the url.
   		-This allows for the dynamic url building of the menu links.
_________________________________________________________________________________________________________________________________

HTML SOURCE
   - Each html element consists of an item in array variable titled 'source' which is then joined by the "\n" character
   - The Dynamic links are built by combining menu.forestName & menu.links.[forest variable]
_________________________________________________________________________________________________________________________________

ADDING FOREST PAGES OR ADDITIONAL MENU LINKS
   - To add a forest page simply add the forest will need to be added in two places.
   		1. Locate the forest's new CID.
   		2. Place the CID in the menu.cid object
   		3. Within the menu.source array add list item in appropriate place following the other list item format.
   			-EXAMPLE: '<li><a href="' + this.link() +  this.cid.[NAME THAT WAS CREATED IN menu.links Object]   + '">  [Link Name Here]  </a></li>',
_________________________________________________________________________________________________________________________________

EDITING MENU LINKS
   - If a page location changes for whatever reason the update only needs to occur within the menu.links object by updating the CID#
   - If a link name needs to be changed that will need to be done within the menuItems function.
_________________________________________________________________________________________________________________________________
*/

var menu = {

		"forestName" :  window.location.href.match(/\w*(?=\/maps)/),

		"className" : "side_vmenu",

		"cid": {
            //Forests
			"Carson"  : "FSEPRD585896",
			"Cibola"  : "FSEPRD585904",
			"Coconino": "FSEPRD585910",
			"Coronado": "FSEPRD585913",
			"Gila"    : "FSEPRD585917",
			"Kaibab"  : "FSEPRD585918",
			"Lincoln" : "FSEPRD585921",
			"Prescott": "FSEPRD585923",
			"SantaFe" : "FSEPRD585925",

			//Additional links
            "Overview"  : "FSEPRD586426",
            "Downloads" : "FSEPRD586296",
            "QrCodes"   : "FSEPRD586306",
            "TravelAids": "FSEPRD586307"
		},
        
        link : function(){return "/detailfull/" + this.forestName + "/maps-pubs/?width=full&cid="},

 		menuItems : function(){
 			var source = [
					'<div class="' + this.className + '">',
	                   '<p>MVUM Menu</p>',
	                       '<ul>',
		                     '<li><a href="' + this.link() + this.cid.Overview  + '">MVUM Overview</a></li>',
		                     '<li><a href="' + this.link() + this.cid.Downloads + '">Download Maps</a>',
			                 '   <ul>',
				             '       <li><a href="' + this.link() + this.cid.Carson + '">Carson National Forest</a></li>',
				             '       <li><a href="' + this.link() + this.cid.Cibola   + '">Cibola National Forest</a>    </li>',
				             '       <li><a href="' + this.link() + this.cid.Coconino + '">Coconino National Forest</a>  </li>',
				             '       <li><a href="' + this.link() + this.cid.Coronado + '">Coronado National Forest</a>  </li>',
				             '       <li><a href="' + this.link() + this.cid.Gila     + '">Gila National Forest</a>      </li>',
				             '       <li><a href="' + this.link() + this.cid.Kaibab   + '">Kaibab National Forest</a>    </li>',
				             '       <li><a href="' + this.link() + this.cid.Lincoln  + '">Lincoln National Forest</a>   </li>',
				             '       <li><a href="' + this.link() + this.cid.Prescott + '">Prescott National Forest</a>  </li>',
				             '       <li><a href="' + this.link() + this.cid.SantaFe  + '">Santa Fe National Forest</a>  </li>',
			                 '   </ul>',
		                     '</li>',
		                     '<li><a href="' + this.link() + this.cid.QrCodes    + '">QR Codes</a></li>',
		                     '<li><a href="' + this.link() + this.cid.TravelAids + '">Travel Aids</a></li>',
	                       '</ul>',
                    '</div>'
                    ].join("\n")

              return source;
 		}                                 
}

document.write(menu.menuItems())