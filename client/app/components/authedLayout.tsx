import { AppShell, Burger, Flex, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router";

export default function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let navigate = useNavigate();
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
          <Image
            onClick={() => navigate("/")}
            src={"logo.png"}
            h={"100%"}
            width={"auto"}
            fit={"contain"}
            style={{ cursor: "pointer" }}
          />
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
