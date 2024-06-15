import { Avatar, Box, Button, Flex, Heading } from '@radix-ui/themes'
import styles from './header.module.css'
import Link from 'next/link'
import { getUser, signOut } from '@workos-inc/authkit-nextjs';

export default async function Header() {
    
    const { user } = await getUser();

    return (
        <Box className={styles.header} p="2" mb="3">
            <Flex>
                <Box flexGrow="1" p="2">
                    <Link href="/">
                        <Heading>Pokemon Deck Builder</Heading>
                    </Link>
                </Box>
                {<Flex gap="2">
                    <Avatar
                        src={user?.profilePictureUrl ?? undefined}
                        fallback={user?.firstName ?? ""}
                        size="3"
                    />
                    <form 
                        action={async () => {
                            // A server action to sign out the user
                            "use server";
                            await signOut();
                        }}>
                        <Button size="3" type="submit"> 
                            Sign Out
                        </Button>
                    </form>    
                </Flex>}
            </Flex>
        </Box>
    )
}