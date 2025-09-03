import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);
// Initialize Firestore database
const db = getFirestore(app);
// Initialize Firebase Analytics
const analytics = getAnalytics(app);
// Initialize Firebase Performance Monitoring
const performance = getPerformance(app);

export default app;
export { auth, db, analytics, performance };