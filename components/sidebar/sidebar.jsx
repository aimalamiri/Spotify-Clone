import NextImage from 'next/image'
import NextLink from 'next/link'

import {
  Box,
  List,
  ListItem,
  Divider,
  // Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'
import MenuItem from './menuItem';

const Sidebar = () => {
  const navMenu = [
    {
      name: 'Home',
      icon: MdHome,
      route: '/',
    },
    {
      name: 'Search',
      icon: MdSearch,
      route: '/search',
    },
    {
      name: 'Your Library',
      icon: MdLibraryMusic,
      route: '/library',
    },
  ]

  const musicMenu = [
    {
      name: 'Create Playlist',
      icon: MdPlaylistAdd,
      route: '/',
    },
    {
      name: 'Favorites',
      icon: MdFavorite,
      route: '/favorites',
    },
  ]

  const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i}`)

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120}/>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <MenuItem menu={menu} />
            ))}
          </List>
        </Box>
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <MenuItem menu={menu} />
            ))}
          </List>
        </Box>
        <Divider borderColor="gray.800" marginTop="20px"/>
        <Box height="61%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/">
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
