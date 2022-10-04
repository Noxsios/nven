import type { NextPage } from "next";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { AppShell, Navbar, Header, Button, Group, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import { Logo } from "../components/logo";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <Group>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
              </ActionIcon>
              {session ? <Button onClick={() => signOut()}>Sign Out</Button> : <Button onClick={() => signIn()}>Sign In</Button>}
            </Group>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </AppShell>
  );
};

export default Home;
