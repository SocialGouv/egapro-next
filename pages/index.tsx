import React, { ReactElement } from "react"
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

import ButtonAction from "../components/ds/ButtonAction"
import Card from "../components/ds/Card"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import Head from "next/head"

export default function HomePage() {
  const router = useRouter()

  const onClick = () => {
    router.push("/simulateur/nouvelle-simulation")
  }

  return (
    <>
      <Head>
        <title>Index Egapro</title>
      </Head>

      <Heading as="h1" size="lg">
        Bienvenue sur Index Egapro
      </Heading>
      <Text mt={4}>
        L'Index de l'égalité professionnelle a été conçu pour faire progresser au sein des entreprises l'égalité
        salariale entre les femmes et les hommes.
      </Text>

      <Text mt={4}>
        Il permet aux entreprises de mesurer, en toute transparence, les écarts de rémunération entre les sexes et de
        mettre en évidence leurs points de progression. Lorsque des disparités salariales sont constatées, des mesures
        de correction doivent être prises.
      </Text>

      <Heading as="h2" size="md" my={6}>
        Comment calculer et déclarer l'index égalité femmes-hommes&nbsp;?
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <Card
          img={{
            url: "illustration-simulator.svg",
          }}
          legend="Choix 1"
          title={{
            node: "h3",
            text: "Calcul et déclaration de l'index",
          }}
          content="Vous pouvez calculer votre index égalité professionnelle F/H sur Index Egapro et le déclarer, si vous le souhaitez, suite au calcul."
          action={<ButtonAction onClick={onClick} label="Commencer le calcul" fullWidth />}
        />
        <Card
          img={{
            url: "illustration-publish.svg",
          }}
          legend="Choix 2"
          title={{
            node: "h3",
            text: "Déclaration directe de l'index",
          }}
          content="Vous pouvez déclarer votre index égalité professionnelle F/H calculé par ailleurs directement via le
                formulaire suivant."
          action={<ButtonAction onClick={() => router.push("/declaration")} label="Déclarer directement" fullWidth />}
        />
      </SimpleGrid>
      {/* <Heading as="h2" size="md" my={6}>
        Consulter l'index égalité femmes-hommes
      </Heading> */}
      <Box textAlign="center">
        <ButtonAction
          variant="outline"
          label="Consulter  l'index égalité femmes-hommes"
          onClick={() => router.push("/consulter-index")}
          my="16"
        />
      </Box>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <SinglePageLayout maxW="container.md">{page}</SinglePageLayout>
}
