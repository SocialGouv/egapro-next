import React, { ReactElement } from "react"
import { Box, Center, Flex, Heading, Input, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { HiDownload } from "react-icons/hi"
import { useRouter } from "next/router"
import Head from "next/head"
import { format } from "date-fns"

import ButtonAction from "@/components/ds/ButtonAction"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import { LinkButton } from "@/components/ds/LinkButton"
import { AverageIndicator } from "@/components/AverageIndicator"

async function getDateCsv(): Promise<string> {
  try {
    const responseCsv = await fetch("/index-egalite-fh.csv", { method: "HEAD" })
    const date = responseCsv?.headers?.get("last-modified")

    if (date) {
      const lastModified = new Date(date)
      return format(lastModified, "dd/MM/yyyy")
    }
  } catch (error) {
    console.error("Error on fetch HEAD /index-egalite-fh.csv", error)
  }
  return ""
}

function FormSearchSiren() {
  const router = useRouter()
  const formRef = React.useRef(null)
  const bgSelect = useColorModeValue("white", "blue.700")

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const data = new FormData(formRef.current || undefined)

    const { query } = Object.fromEntries(data)

    router.push("/recherche" + (query ? `?query=${query}` : ""))
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }} ref={formRef} noValidate>
      <Heading as="h1" size="md" mb={["8", "12"]} mt={["0", "4"]}>
        Rechercher l'index de l'égalité professionnelle d'une entreprise
      </Heading>
      <Flex maxW="container.md" justify="center" align="center" margin="auto" mx={["4", "0"]}>
        <Input
          placeholder="Saisissez le nom ou le SIREN d'une entreprise"
          size="lg"
          name="query"
          type="text"
          bgColor={bgSelect}
          mr="4"
        />
        <ButtonAction label="Rechercher" type="submit" />
      </Flex>
    </form>
  )
}

function DownloadCsvFileZone() {
  const [dateCsv, setDateCsv] = React.useState("")

  React.useEffect(() => {
    async function runEffect() {
      setDateCsv(await getDateCsv())
    }
    runEffect()
  }, [])

  return (
    <>
      {dateCsv && (
        <Center w="100vw" paddingTop="0" paddingBottom="12">
          <Flex justify="center" align="center" mx={["4", "0"]} direction={["column", "row"]}>
            <Text fontSize={["md", "lg"]} mr={["0", "6"]} mb={["4", "0"]} textAlign="center">
              Télécharger le fichier des entreprises au {dateCsv}
            </Text>
            <LinkButton leftIcon={<HiDownload />} href="/index-egalite-fh.csv">
              <Text fontSize={["md", "lg"]}>Télécharger (CSV)</Text>
            </LinkButton>
          </Flex>
        </Center>
      )}
    </>
  )
}

export default function HomePage() {
  return (
    <VStack spacing={["6"]}>
      <Head>
        <title>Index Egapro</title>
      </Head>

      <FormSearchSiren />
      <Box h="8" />

      <DownloadCsvFileZone />

      <AverageIndicator />
    </VStack>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <SinglePageLayout>{page}</SinglePageLayout>
}
