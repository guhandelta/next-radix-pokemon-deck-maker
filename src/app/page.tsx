import { Box, Button, Card, Heading } from "@radix-ui/themes";

import Header from "./components/Header";
import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  // Get the user information when the user is authenticated/logged in
  const { user } = await getUser();
  // Get the SignIn URL if the user is not authenticated/logged in
  const signInUrl = await getSignInUrl();

  return (
    <main>
      {user?(
        <>
          <Header />
          <Heading>
            Pokemon Deck Builder
          </Heading>
          {user.firstName}
        </>
        ):(
          <Card mt="9">
            <Box p="5">
              <Heading>Sign in to start creating Pokemon Decks</Heading>
              <Box mt="5">
                <Button size="3">
                  <a href={signInUrl}>Sign In</a>
                </Button>
              </Box>
            </Box>
          </Card>
        )}
    </main>
  );
}
