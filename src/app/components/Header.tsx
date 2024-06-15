import { Box, Flex, Heading } from '@radix-ui/themes'
import styles from './header.module.css'
import Link from 'next/link'

export default async function Header() {
    return (
        <Box className={styles.header} p="2" mb="3">
            <Flex>
                <Box flexGrow="1" p="2">
                    <Link href="/">
                        <Heading>Pokemon Deck Builder</Heading>
                    </Link>
                </Box>
                <Flex gap="2"></Flex>
            </Flex>
        </Box>
    )
}