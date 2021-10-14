import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCFMO0R0iWIanGNCo37CKyAHmKYznp04UU',
  authDomain: 'crown-react-ecommerce-6dd45.firebaseapp.com',
  projectId: 'crown-react-ecommerce-6dd45',
  storageBucket: 'crown-react-ecommerce-6dd45.appspot.com',
  messagingSenderId: '975388577084',
  appId: '1:975388577084:web:acf619c526aebfef746239',
}

const app = initializeApp(firebaseConfig)

// checked in firebase docs, this is proper way of doing this
export const auth = getAuth(app)
// checked in firebase docs, this is proper way of doing this
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()

// always trigger the Google popup whenever we use this google auth provider for authentication and sign in
provider.setCustomParameters({
  prompt: 'select_account',
})

export const signInWithGoogle = () => signInWithPopup(auth, provider)

// export default firebase
