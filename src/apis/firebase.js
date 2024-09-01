import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

// export const verifyToken = async (idToken) => {
//   try {
//     const response = await fetch('{baseURL}/auth/verify-token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         idToken: idToken,
//       },
//       body: {},
//     });
//     const data = await response.json();
//     console.log('Token verification response:', data);
//   } catch (error) {
//     console.error('Error verifying token:', error);
//   }
// };

//일반 이메일 로그인
export const handleEmailLogin = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // const idToken = await userCredential.user.getIdToken();
    // verifyToken(idToken);
  } catch (error) {
    console.error('Error logging in with email:', error);
  }
};

//소셜 로그인 (여기서는 카카오 로그인이 쓰임)
export const handleKakaoLogin = async () => {
  try {
    const response = await fetch('{baseURL}/auth/kakao/oauth', {
      method: 'GET',
      credentials: 'include', // include cookies if your server uses sessions
    });
    if (response.ok) {
      const data = await response.json();
      const idToken = data.firebaseToken;
      // 여기서 받은 idToken을 클라이언트 애플리케이션에서 사용합니다.
      console.log('Received idToken:', idToken);
      // 추가적인 로직을 여기에 작성
      verifyToken(idToken);
    } else {
      console.error('Kakao login failed');
    }
  } catch (error) {
    console.error('Error during Kakao login:', error);
  }
};

export const logout = () => {
  auth.signOut();
};
