import React, { ReactNode } from "react"
import { Box, Container, Flex } from "@chakra-ui/layout"

import Header from "@/components/ds/Header"
import Footer from "@/components/ds/Footer"
import Head from "next/head"

interface Props {
  children: ReactNode
  maxW?: string
  title?: string
}

export function SinglePageLayout({ children, maxW, title }: Props) {
  return (
    <Flex direction="column" minHeight="100vh">
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Header />
      <Box as="main" role="main" id="main" flexGrow={1} pt={10}>
        <Container maxW={maxW || "container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Flex>
  )
}
