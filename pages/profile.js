import Layout from "../components/Layout";
import { navigation, userNavigation } from "../components/Navigation";
import { useEffect, useState } from "react";
import { account } from "../components/Appwrite";
import { client } from "../components/Appwrite";
import { Avatars } from "appwrite";
import { withAuth } from "../components/Auth";

function Profile() {
  const modifiedNavigation = navigation.map((item) => ({
    ...item,
    current: item.name.toLowerCase() === "profile" ? true : false,
  }));

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState("");

  const getUser = async () => {
    await account.get().then((response) => {
      setUser(response);
      setLoading(false);
      setAvatar(new Avatars(client).getInitials().href);
    });
  };

  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <Layout navigation={modifiedNavigation} userNavigation={userNavigation}>
      <div className="flex flex-col bg-slate-100">
        <div className="bg-primary/10 p-10 xl:p-16">
          <div className="flex space-x-12 items-center">
            <img
              className="lg:h-32 h-24 w-24 lg:w-32 object-cover rounded-full"
              src={avatar}
            />
            <div>
              <p className="text-lg font-bold text-primary">
                {!loading && user.name}
              </p>
              <p className="text-sm font-semibold text-slate-600">
                {!loading && user.email}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mx-20 mx-4">
          <div className="bg-white shadow-lg flex justify-between lg:px-20 p-10 lg:py-16 items-start rounded-md my-10">
            <p className="font-bold text-xs lg:text-md">Update Name</p>
            <div className="flex flex-col xl:w-1/4">
              <label className="font-bold text-slate-700 text-xs mb-4">
                Name
              </label>
              <input
                type="email"
                className="form-input text-xs lg:text-sm"
                placeholder="Enter your email address..."
                defaultValue={!loading && user.name}
              />
              <button
                className="btn text-primary text-xs lg:text-sm bg-gray-100 hover:bg-gray-200 w-3/4 py-2 lg:py-3 rounded-lg  self-end lg:mt-10 mt-5 transition-all ease-in-out duration-300"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>{" "}
          <div className="bg-white shadow-lg flex justify-between lg:px-20 p-10 lg:py-16 items-start rounded-md my-10">
            <p className="font-bold text-xs lg:text-md">Update Email</p>
            <div className="flex flex-col xl:w-1/4">
              <label className="font-bold text-slate-700 text-xs mb-4">
                Email
              </label>
              <input
                type="email"
                className="form-input text-xs lg:text-sm"
                placeholder="Enter your email address..."
                defaultValue={!loading && user.email}
              />
              <button
                className="btn text-primary text-xs lg:text-sm bg-gray-100 hover:bg-gray-200 w-3/4 py-2 lg:py-3 rounded-lg  self-end lg:mt-10 mt-5 transition-all ease-in-out duration-300"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>{" "}
         
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Profile);
