import React, { ReactElement } from "react"
import { Box, Text } from "@chakra-ui/layout"
import { Form } from "react-final-form"
import { useRouter } from "next/router"

import { useCheckTokenInURL, useUser } from "contexts/auth"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import ButtonAction from "@/components/ds/ButtonAction"
import { FieldEmail } from "@/components/ds/FieldEmail"
import { useToastMessage } from "@/utils/toast"
import { sendValidationEmail } from "@/models/email"

const title = "Accéder à mes entreprises et déclarations transmises"

export default function Mire() {
  const router = useRouter()
  const { toastSuccess, toastError } = useToastMessage({})
  const [submitted, setSubmitted] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const { isAuthenticated, staff } = useUser()

  useCheckTokenInURL()

  const onSubmit = (formData: any) => {
    setEmail(formData.email)

    sendValidationEmail(formData.email)
      .then(() => {
        toastSuccess("Un mail vous a été envoyé")
        setSubmitted(true)
      })
      .catch((error: Error) => {
        console.error(error)
        toastError("Erreur lors de l'envoi de l'email de validation, est-ce que l'email est valide ?")
        setSubmitted(false)
      })
  }

  if (staff) router.push("/tableauDeBord/gerer-utilisateurs")
  if (isAuthenticated) router.push("/tableauDeBord/mes-entreprises")

  return (
    <>
      {submitted ? (
        <Box>
          <Text as="p" mb="4">
            Un mail vous a été envoyé.
          </Text>
          <Text as="p" mb="4">
            Si vous ne recevez pas ce mail sous peu, il se peut que l'email saisi (<strong>{email}</strong>) soit
            incorrect, ou bien que le mail ait été déplacé dans votre dossier de courriers indésirables ou dans le
            dossier SPAM.
          </Text>
          <Text as="p" mb="4">
            En cas d'échec, la procédure devra être reprise avec un autre email.
          </Text>
          <ButtonAction mt={6} onClick={() => router.push("/")} label="Réessayer" />
        </Box>
      ) : (
        <Box>
          <Box>
            <Text as="p" mb="4">
              Veuillez saisir votre email utilisé lors de la déclaration.
            </Text>
            <Text as="p" mb="4">
              Un lien vous sera envoyé pour pouvoir accéder à votre espace. Vous pourrez alors voir les entreprises que
              vous gérez ainsi que les déclarations déjà transmises.
            </Text>
          </Box>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <FieldEmail />

                <ButtonAction type="submit" disabled={submitting || pristine} mt={6} label="Envoyer" />
              </form>
            )}
          />
        </Box>
      )}
    </>
  )
}

Mire.getLayout = function getLayout(page: ReactElement) {
  return (
    <SinglePageLayout maxW="container.md" title={title}>
      {page}
    </SinglePageLayout>
  )
}
