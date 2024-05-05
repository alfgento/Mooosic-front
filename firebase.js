import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBe6GQ5FHh6GrnfMV_NioNmKnGrSENwGw",
    authDomain: "finalchallenge-64e8d.firebaseapp.com",
    projectId: "finalchallenge-64e8d",
    storageBucket: "finalchallenge-64e8d.appspot.com",
    messagingSenderId: "912581488194",
    appId: "1:912581488194:web:8bc9290b583a1b14dc07db",
    measurementId: "G-RLZLHJC3XR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

