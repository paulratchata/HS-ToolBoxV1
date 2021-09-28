// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { domain, clientId } from "../app/auth_config.json";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCtzkT-t0D_SWlII30HObombyuEJq-Ki-Q",
    authDomain: "hs-toolbox.firebaseapp.com",
    projectId: "hs-toolbox",
    storageBucket: "hs-toolbox.appspot.com",
    messagingSenderId: "245507989201",
    appId: "1:245507989201:web:8f0f09990b560543986ff0",
    measurementId: "G-YFZYYSP7L9",
  },
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
