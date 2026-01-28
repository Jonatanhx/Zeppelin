import Cookies from "js-cookie";
import React from "react";
import AuthedLayout from "./authedLayout";
import UnauthedLayout from "./unauthedLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isAuthed = Cookies.get("user");
  return isAuthed ? (
    <AuthedLayout>{children}</AuthedLayout>
  ) : (
    <UnauthedLayout>{children}</UnauthedLayout>
  );
}
