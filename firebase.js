import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDeH2jVcOqCX8giThz2AmTth2JTpAweiVA",
  authDomain: "distinctiion.firebaseapp.com",
  projectId: "distinctiion",
  storageBucket: "distinctiion.appspot.com",
  messagingSenderId: "905682830212",
  appId: "1:905682830212:web:914b1c3e146d73130293d1"
};



const app = initializeApp(firebaseConfig); 


const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };