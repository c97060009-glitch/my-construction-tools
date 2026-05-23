import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCopptmJdm37BtRY34GB_TPWXy12tkZh34",
  authDomain: "my-construction-tools.firebaseapp.com",
  projectId: "my-construction-tools",
  storageBucket: "my-construction-tools.firebasestorage.app",
  messagingSenderId: "551410890720",
  appId: "1:551410890720:web:14d2ad93ce37e29d651d85",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
