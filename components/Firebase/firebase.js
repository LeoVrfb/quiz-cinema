import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBLS9DV-AF5OMGDPaGwf8d39h10zm8ylUM",
    authDomain: "usa-presidents-quiz-d17cd.firebaseapp.com",
    databaseURL: "https://usa-presidents-quiz-d17cd.firebaseio.com",
    projectId: "usa-presidents-quiz-d17cd",
    storageBucket: "usa-presidents-quiz-d17cd.appspot.com",
    messagingSenderId: "259409065321",
    appId: "1:259409065321:web:b4cdbe150929d9b65079f8"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    signOutUser = () => this.auth.signOut();

    // récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase