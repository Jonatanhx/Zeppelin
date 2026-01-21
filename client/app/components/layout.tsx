import React, { useState } from "react";
import AuthedLayout from "./authedLayout";
import UnauthedLayout from "./unauthedLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);
  return isAuthed ? (
    <AuthedLayout>{children}</AuthedLayout>
  ) : (
    <UnauthedLayout>{children}</UnauthedLayout>
  );
}
