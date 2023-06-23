import { useRouter } from "next/router";
import { useEffect } from "react";
import { account } from "../Appwrite";

/* eslint-disable react/display-name */
export const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const getAccount = async () => {
     await account
        .get()
        .then((response) => {
          return;
        })
        .catch((error) => router.push("/login"));
    };

    useEffect(() => {
      getAccount();
    },[]);
    return <WrappedComponent {...props} />;
  };
};

withAuth.displayName = 'WithAuth';

