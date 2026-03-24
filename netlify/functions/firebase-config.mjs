export default async (req) => {
  const config = {
    apiKey:            process.env.FIREBASE_API_KEY,
    authDomain:        `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId:         process.env.FIREBASE_PROJECT_ID,
    storageBucket:     `${process.env.FIREBASE_PROJECT_ID}.firebasestorage.app`,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId:             process.env.FIREBASE_APP_ID,
  };

  return new Response(JSON.stringify(config), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
};

export const config = { path: '/api/firebase-config' };
