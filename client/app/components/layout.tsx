import { useAuth } from "app/contexts/authContext";
import React from "react";
import AuthedLayout from "./authedLayout";
import UnauthedLayout from "./unauthedLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthed } = useAuth();

  return isAuthed ? (
    <AuthedLayout>{children}</AuthedLayout>
  ) : (
    <UnauthedLayout>{children}</UnauthedLayout>
  );
}
