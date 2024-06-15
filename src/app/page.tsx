import { Heading } from "@radix-ui/themes";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Heading>
        Pokemon Deck Builder
      </Heading>
    </main>
  );
}
