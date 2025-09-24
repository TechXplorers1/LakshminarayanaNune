import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_FsW_GXxkX_heLVNw5lakh9SzlvMyiQc",
  authDomain: "lakshminarayanunetest.firebaseapp.com",
  projectId: "lakshminarayanunetest",
  storageBucket: "lakshminarayanunetest.appspot.com", // 🔥 fix: must end with .appspot.com
  messagingSenderId: "734743350473",
  appId: "1:734743350473:web:828f83dd7d7644a69b1118",
  measurementId: "G-BECZWPVZH3"
};

// ✅ Prevent re-initialization during hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Analytics only on client side
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  });
}

export { app, analytics };
