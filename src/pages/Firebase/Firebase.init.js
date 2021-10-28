
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

export default function InitializeFirebase(){
    return initializeApp(firebaseConfig);
}