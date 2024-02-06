import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-db2d4","appId":"1:601326967533:web:cc00d8126e20d6bb648ae4","storageBucket":"ring-of-fire-db2d4.appspot.com","apiKey":"AIzaSyBohOYLQ-K3lN9S0eX0gqh2VWks2El5k1s","authDomain":"ring-of-fire-db2d4.firebaseapp.com","messagingSenderId":"601326967533"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
