import { AppShell, AppShellMain, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      bg={"#bfff00"}
      c="#000000"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
