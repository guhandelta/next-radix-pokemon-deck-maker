import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme, ThemePanel } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import "./globals.css";

// RadixUI works out of the box, even though it is client component or a server component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Deck Builder",
  description: "A simple NextJS app with Radix UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <Container>
              {children}
          </Container>
          {/* 
            Displays a Theme panel to play around with many different colors, styling and much more
            <ThemePanel /> 
          */}
        </Theme>
      </body>
    </html>
  );
}
