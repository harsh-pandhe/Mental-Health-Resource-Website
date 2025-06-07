// Firebase configuration - this would typically be initialized with environment variables
// For this implementation, we'll use the REST API backend instead of direct Firebase integration
// but this file provides the structure for future Firebase integration

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Environment variables would be used in production
export const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.VITE_FIREBASE_APP_ID || "",
};

// For now, we'll use the backend API endpoints
// This provides the foundation for future Firebase integration
export const FIREBASE_ENDPOINTS = {
  feedback: "/api/feedback",
  mood: "/api/mood",
  breathing: "/api/breathing",
} as const;
