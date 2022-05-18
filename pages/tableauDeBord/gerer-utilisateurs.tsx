import React from "react"
import { Flex, Text } from "@chakra-ui/react"

import type { EgaProPage } from "@/types/pages"

import { useUser } from "@/contexts/auth"
import InfoEntreprise from "@/components/InfoEntreprise"
import UtilisateursEntreprise from "@/components/UtilisateursEntreprise"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import Form from "@/components/Form"
import { SirenSchema } from "@/validations/siren"
import LabeledTextField from "@/components/LabeledTextField"

const GererUtilisateursPage: EgaProPage = () => {
  const { staff } = useUser()

  const [siren, setSiren] = React.useState("")

  return (
    <>
      {!staff ? (
        <Text>Vous n'êtes pas membre du staff.</Text>
      ) : (
        <>
          <Form
            schema={SirenSchema}
            onSubmit={async ({ siren }) => {
              if (siren?.length === 9) {
                setSiren(siren ? siren.replace(/\s/g, "") : siren)
              }
            }}
            submitText="Envoyer"
          >
            <LabeledTextField name="siren" label="SIREN" placeholder="Saisissez le SIREN de l'entreprise" />
          </Form>

          <Flex mt="6" direction="column">
            <InfoEntreprise siren={siren} />
            <UtilisateursEntreprise siren={siren} />
          </Flex>
        </>
      )}
    </>
  )
}

GererUtilisateursPage.getLayout = (page) => (
  <SinglePageLayout maxW="container.md" title="Gérer les utilisateurs">
    {page}
  </SinglePageLayout>
)

export default GererUtilisateursPage
