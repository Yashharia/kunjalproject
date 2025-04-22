import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  userData: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null); // New state

  const value = {
    currentUser,
    setCurrentUser,
    userData,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);

        const userSnap = await getDoc(doc(db, 'users', user.uid));
        if (userSnap.exists()) {
          setCurrentUser(user);
          setUserData(userSnap.data()); // Set additional Firestore user data
        } else {
          setCurrentUser(user);
          setUserData(null); // Clear if no Firestore data
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
