import { AppShell, Burger, Flex, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding={"md"}
      header={{ height: 80 }}
      aside={{ width: 300, breakpoint: "sm", collapsed: { mobile: true } }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header p={6} bg={"indigo"}>
        <Flex direction={"row"} h={"100%"}>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom={"sm"}
            size={"sm"}
          />
          <Image src={"logo.png"} h={"100%"} width={"auto"} fit={"contain"} />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar bg={"cyan"} p={0}>
        Navbar
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Aside bg={"grape"}>aside</AppShell.Aside>
    </AppShell>
  );
}
