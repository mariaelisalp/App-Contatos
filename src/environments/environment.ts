// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,

  // Your web app's Firebase configuration
   firebaseConfig : {
    apiKey: "AIzaSyASq4yPVDXjXDOHPQAn_yECGE0tFpkS7q4",
    authDomain: "appcontatos-62ad2.firebaseapp.com",
    projectId: "appcontatos-62ad2",
    storageBucket: "appcontatos-62ad2.appspot.com",
    messagingSenderId: "337670928630",
    appId: "1:337670928630:web:dddffb2e5b9fb511db94d7"
  }
};

// Initialize Firebase


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
