function($) {
  
  $.config_1 = {
    "id" : "mirador_viewer_1",
    "saveSession" : false,
    "layout" : "1x1",
    "data" : [
		   { manifestUri: "https://purl.stanford.edu/rs424xq9888/iiif/manifest.json", location: "Stanford University"}
    ],
    "buildPath" : "/",
    "i18nPath" : "mirador/locales/",
    "imagesPath" : "mirador/images/",
    "logosPath" : "mirador/images/logos/",
    "mainMenuSettings" : {
      "show" : true,
      "buttons" : {
        "bookmark" : false,
        "fullScreenViewer": true,
        "options": false
      },
      "userButtons" : [
      ],
      "userLogo" : {
        "label" : "Example 1",
        "attributes" : { "id" : "logo", "href" : "http://iiif.io", "target" : "_blank" }
      }
    },
    windowObjects: [
			  {
					"loadedManifest": ""//"https://purl.stanford.edu/rs424xq9888/iiif/manifest.json",
					"viewType" : "BookView",
					"canvasID": "http://oculus-dev.harvardx.harvard.edu/manifests/drs:5981093/canvas/canvas-5981104",
					//"bottomPanel" : false,
					"sidePanel" : false
					//"availableViews" : ['ThumbnailsView', 'ImageView', 'BookView']
					//"overlay" : false
			  }
			],
    "annotationLayer" : true,
    "annotationEndpoint" : { 
      "name": "Local Storage", 
      "module": "LocalStorageEndpoint"
    }
  };
  
})(MiradorExample);
