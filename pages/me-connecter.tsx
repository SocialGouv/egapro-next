import React from "react"
import { Box, Text } from "@chakra-ui/layout"
import { useRouter } from "next/router"

import type { EgaProPage } from "@/types/pages"

import { useCheckTokenInURL, useUser } from "contexts/auth"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"
import ButtonAction from "@/components/ds/ButtonAction"
import Form, { FORM_ERROR } from "@/components/Form"
import LabeledTextField from "@/components/LabeledTextField"
import { sendValidationEmail } from "@/models/email"
import { useToastMessage } from "@/utils/toast"
import { EmailSchema } from "validations/email"

const title = "Accéder à mes entreprises et déclarations transmises"

const MirePage: EgaProPage = () => {
  const router = useRouter()
  const { toastSuccess } = useToastMessage({})
  const [submittedEmail, setSubmittedEmail] = React.useState("")
  const { isAuthenticated, staff } = useUser()

  useCheckTokenInURL()

  if (staff) router.push("/tableauDeBord/gerer-utilisateurs")
  if (isAuthenticated) router.push("/tableauDeBord/mes-entreprises")

  return (
    <>
      {submittedEmail ? (
        <Box>
          <Text as="p" mb="4">
            Un mail vous a été envoyé.
          </Text>
          <Text as="p" mb="4">
            Si vous ne recevez pas ce mail sous peu, il se peut que l'email saisi (<strong>{submittedEmail}</strong>)
            soit incorrect, ou bien que le mail ait été déplacé dans votre dossier de courriers indésirables ou dans le
            dossier SPAM.
          </Text>
          <Text as="p" mb="4">
            En cas d'échec, la procédure devra être reprise avec un autre email.
          </Text>
          <ButtonAction
            mt={6}
            onClick={() => {
              setSubmittedEmail("")
              router.push("/me-connecter")
            }}
            label="Réessayer"
          />
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
            schema={EmailSchema}
            onSubmit={async (formData) => {
              try {
                await sendValidationEmail(formData)
                toastSuccess("Un mail vous a été envoyé")
                setSubmittedEmail(formData.email)
              } catch (error) {
                console.error(error)
                setSubmittedEmail("")

                return {
                  [FORM_ERROR]: "Erreur lors de l'envoi de l'email de validation, est-ce que l'email est valide ?",
                }
              }
            }}
            submitText="Envoyer"
          >
            <LabeledTextField name="email" label="Email" placeholder="Email" />
          </Form>
        </Box>
      )}
    </>
  )
}

MirePage.getLayout = (page) => (
  <SinglePageLayout maxW="container.md" title={title}>
    {page}
  </SinglePageLayout>
)

export default MirePage
