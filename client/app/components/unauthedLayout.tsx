import {
  AppShell,
  Burger,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router";

export default function UnauthedLayout({
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

      <AppShell.Navbar bg={"dark"} p={0}>
        <Flex gap={16} p={16} align={"end"} flex={1} direction={"column"}>
          <Text c={"white"} fw={600} size={"xl"}>
            Join the adventure
          </Text>
          <Stack>
            <Button onClick={() => navigate("/signup")}>Create Account</Button>
            <Button onClick={() => navigate("/signin")}>Sign in</Button>
          </Stack>
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Aside bg={"grape"}>Aside</AppShell.Aside>
    </AppShell>
  );
}
