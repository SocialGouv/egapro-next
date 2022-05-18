import React, { ReactElement } from "react"
import { Select, Flex, FormControl, FormLabel, Text } from "@chakra-ui/react"

import { useUser } from "@/contexts/auth"
import InfoEntreprise from "@/components/InfoEntreprise"
import UtilisateursEntreprise from "@/components/UtilisateursEntreprise"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"

const title = "Mes entreprises"

export default function MesEntreprises() {
  const { ownership: sirens } = useUser()
  const orderedSirens = sirens.sort()

  const [chosenSiren, setChosenSiren] = React.useState("")

  React.useEffect(() => {
    setChosenSiren(orderedSirens?.[0] || "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sirens])

  return (
    <>
      {!sirens?.length ? (
        <Text>Vous ne gérez pas encore d'entreprise.</Text>
      ) : (
        <>
          <FormControl id="siren">
            <FormLabel>SIREN</FormLabel>
            <Select
              onChange={(event) => setChosenSiren(event?.target?.value)}
              defaultValue={chosenSiren}
              aria-label="Liste des SIREN"
            >
              {orderedSirens.map((siren) => (
                <option key={siren} value={siren}>
                  {siren}
                </option>
              ))}
            </Select>
          </FormControl>

          <Flex mt="6" direction="column">
            <InfoEntreprise siren={chosenSiren} />
            <UtilisateursEntreprise siren={chosenSiren} />
          </Flex>
        </>
      )}
    </>
  )
}

MesEntreprises.getLayout = function getLayout(page: ReactElement) {
  return (
    <SinglePageLayout maxW="container.md" title={title}>
      {page}
    </SinglePageLayout>
  )
}
