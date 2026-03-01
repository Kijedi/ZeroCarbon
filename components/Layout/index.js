"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  BellIcon,
  Bars2Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { account, client } from "../Appwrite";
import { Avatars } from "appwrite";
import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children, navigation, userNavigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  const getUser = async () => {
    try {
      await account.get();
      setAvatar(new Avatars(client).getInitials().href);
    } catch {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-40 md:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-600/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-linear data-leave:duration-300 data-leave:ease-linear"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-300 pt-5 pb-4 transition data-closed:-translate-x-full data-enter:duration-300 data-enter:ease-in-out data-leave:duration-300 data-leave:ease-in-out"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="logo"
                />
              </div>

              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <DisclosureButton
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-buttercup"
                              )}
                            >
                              <item.icon
                                className="mr-3 shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-gray-400 rotate-90"
                                    : "text-gray-300",
                                  "ml-3 shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </DisclosureButton>
                            <DisclosurePanel className="space-y-1">
                              {item.children.map((subItem) => (
                                <DisclosureButton
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </DisclosureButton>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
            </DialogPanel>
            <div className="shrink-0 w-14" aria-hidden="true" />
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col grow pt-5 bg-white border-r overflow-y-auto">
            <div className="flex items-center shrink-0 px-4">
              <img
                className="h-14 w-auto"
                src="/images/logo.png"
                alt="Zero Carbon logo"
              />
            </div>
            <div className="mt-20 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-3" aria-label="Sidebar">
                <div className="mb-24">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name} className="my-1">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-800"
                              : "bg-white text-gray-600 hover:bg-gray-50",
                            "group w-full flex items-center pl-2 py-3 text-sm rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-primary"
                                : "text-gray-800 group-hover:text-green-800",
                              "mr-3 shrink-0 h-4 w-4"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <DisclosureButton
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900 font-bold"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-600",
                                "group w-full flex items-center pl-2 pr-1 py-3 text-left text-sm font-normal rounded-md focus:outline-none focus:ring-2"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-primary"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-3 shrink-0 h-4 w-4"
                                )}
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-primary rotate-90"
                                    : "text-gray-300",
                                  "ml-3 shrink-0 h-5 w-5 transform group-hover:text-[#ffab00] transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </DisclosureButton>
                            <DisclosurePanel className="space-y-1">
                              {item.children.map((subItem) => (
                                <DisclosureButton
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-normal text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </DisclosureButton>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </div>
                <button
                  onClick={() => {
                    const promise = account.deleteSession("current");
                    promise.then(
                      function () {
                        router.push("/");
                      },
                      function (error) {
                        console.log(error);
                      }
                    );
                  }}
                  className="bg-gray-400 text-white hover:bg-gray-500 flex items-center rounded-lg px-3 py-2 w-full shadow-lg"
                >
                  <ArrowLeftOnRectangleIcon
                    className="text-gray-100 mr-3 shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  <p className="text-white text-xs">Logout</p>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-buttercup md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-end">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttercup"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <MenuButton className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttercup">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black/5 focus:outline-none transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
