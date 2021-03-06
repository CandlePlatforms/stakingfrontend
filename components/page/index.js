import { Box, Flex } from '@chakra-ui/layout'
import Footer from './footer'
import Header from './header'
import Alerts from './alerts'
import React from 'react'
import Head from 'next/head'

import { useColorModeValue } from '@chakra-ui/color-mode'

const Layout = ({ children, title }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={bgColor}
      px={[4, 4, 12]}
    >
      <Head>
        <title>{title ? title + ` - Candle Staker` : `Candle Staker`}</title>
        <link rel="icon" href="/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Candle_labs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stake.candlelabs.org" />
        <meta property="og:title" content="Candle (CNDL) staker" />
        <meta
          property="og:description"
          content="A staking UI for the Candle reward program."
        />
        <meta property="og:site_name" content="Candle V3 staker" />
        <meta
          property="og:image"
          content="https://stake.candlelabs.org/image.png"
        />
      </Head>
      <Alerts />
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}
export default Layout
