import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

import Header from "./components/Header";
import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";
import { DeckCreator, PokemonGrid } from "../components";
import { getDecks } from "@/db";

export default async function Home() {
  // Get the user information when the user is authenticated/logged in
  const { user } = await getUser();
  // Get the SignIn URL if the user is not authenticated/logged in
  const signInUrl = await getSignInUrl();
  // Get the decks from the database || Returns an empty array if the user is not authenticated/logged in
  const decks = await getDecks();

  return (
    <main>
      {user?(
        <>
          <Header />
          <Heading> Pokemon Deck Builder</Heading>
          <DeckCreator />
          <Flex direction="column" gap="3">
            {decks.map((deck) => (
              <Card key={deck.id} my="2">
                <Link href={`/deck/${deck.id}`}>
                  <Heading as="h2">{deck.name}</Heading>
                  <Box p="2">
                    {deck.cards.length > 0 ? (
                      <PokemonGrid pokemon={deck.cards.slice(0, 5)} />
                    ) : (
                      <Box mb="3">
                        <Text>
                          No Pokemon in this deck, yet. You should add some!
                        </Text>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Card>
            ))}
          </Flex>
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
