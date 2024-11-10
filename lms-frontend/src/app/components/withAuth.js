// components/withAuth.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import firebase from '../firebase/clientApp';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        }
      });
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
