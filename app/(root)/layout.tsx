import React from "react";
import { Menu } from "./_components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:container max-md:px-[2px] w-full font-poppins  ">
      <Menu></Menu>
      <main className=" py-8 overflow-x-hidden">{children}</main>
    </div>
  );
}
