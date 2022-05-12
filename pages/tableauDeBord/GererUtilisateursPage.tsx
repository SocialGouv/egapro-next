import React, { ReactElement } from "react"
import { Flex, FormControl, FormLabel, Text, Input } from "@chakra-ui/react"

import { useUser } from "contexts/auth"
import InfoEntreprise from "@/components/InfoEntreprise"
import UtilisateursEntreprise from "@/components/UtilisateursEntreprise"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"

const title = "Gérer les utilisateurs"

export default function GererUtilisateursPage() {
  const { staff } = useUser()

  const [siren, setSiren] = React.useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value
    setSiren(value ? value.replace(/\s/g, "") : value)
  }

  return (
    <>
      {!staff ? (
        <Text>Vous n'êtes pas membre du staff.</Text>
      ) : (
        <>
          <FormControl id="siren">
            <FormLabel>SIREN</FormLabel>
            <Input value={siren} onChange={handleChange} placeholder="Saisissez le SIREN de l'entreprise" />
          </FormControl>

          {siren?.length === 9 && (
            <Flex mt="6" direction="column">
              <InfoEntreprise siren={siren} />
              <UtilisateursEntreprise siren={siren} />
            </Flex>
          )}
        </>
      )}
    </>
  )
}

GererUtilisateursPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SinglePageLayout maxW="container.md" title={title}>
      {page}
    </SinglePageLayout>
  )
}
