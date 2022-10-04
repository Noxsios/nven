import type { NextPage } from "next";
import { AppShell, Navbar, Header, Button } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
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
          {/* Header content */}
          {session ? <Button onClick={() => signOut()}>Sign out</Button> : <Button onClick={() => signIn()}>Sign in</Button>}
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
