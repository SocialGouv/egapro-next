import React from "react"
import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import type { EgaProPage } from "@/types/pages"

import { useUser } from "@/contexts/auth"
import InfoEntreprise from "@/components/InfoEntreprise"
import UtilisateursEntreprise from "@/components/UtilisateursEntreprise"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import { NoCompanyFound } from "@/components/NoCompanyFound"
import { AlertSpinner } from "@/components/ds/AlertSpinner"
import { SirenSchema } from "@/validations/siren"
import { useSiren } from "@/models/useSiren"

const GererUtilisateursPage: EgaProPage = () => {
  const { staff } = useUser()

  const {
    register,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<z.infer<typeof SirenSchema>>({
    mode: "onChange",
    resolver: zodResolver(SirenSchema),
    defaultValues: {
      siren: "",
    },
  })

  // Subscribe to change on siren input.
  const watchSiren = watch("siren")

  const { entreprise, isLoading } = useSiren(watchSiren)

  if (!staff) {
    return <Text>Vous n'êtes pas membre du staff.</Text>
  }

  return (
    <>
      <form>
        <FormControl>
          <FormLabel htmlFor="siren">SIREN</FormLabel>
          <Input
            id="siren"
            {...register("siren", {
              onChange: (e) => {
                // Remove spaces and limit to 9 numeric characters.
                const newSiren = e.target.value.replace(/\D/g, "")
                setValue("siren", newSiren.slice(0, 9))
              },
            })}
            placeholder="Saisissez le SIREN de l'entreprise"
          />
        </FormControl>
      </form>

      {isLoading && <AlertSpinner>Recherche en cours</AlertSpinner>}

      {isValid && !entreprise && <NoCompanyFound />}

      {entreprise && (
        <Flex mt="6" direction="column">
          <InfoEntreprise siren={watchSiren} />
          <UtilisateursEntreprise siren={watchSiren} />
        </Flex>
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
