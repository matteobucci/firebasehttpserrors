import * as functions from 'firebase-functions';
import {HttpsError} from "firebase-functions/lib/providers/https";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
     throw new HttpsError("unauthenticated", "Request had invalid credentials");
     response.send("Hello from Firebase!");
 });
