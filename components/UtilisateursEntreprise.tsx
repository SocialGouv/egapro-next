import React from "react"
import { Box, Flex, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import { IconButton } from "@chakra-ui/button"
import { useBoolean, useDisclosure } from "@chakra-ui/hooks"

import Form from "@/components/Form"
import LabeledTextField from "@/components/LabeledTextField"
import { IconDrag, IconDelete } from "@/components/ds/Icons"
import ButtonAction from "@/components/ds/ButtonAction"
import Modal from "@/components/ds/Modal"
import { useOwnersOfSiren } from "@/models/useOwnersOfSiren"
import { fetcher } from "@/utils/fetcher"
import { useSoloToastMessage, useToastMessage } from "@/utils/toast"
import { EmailSchema } from "validations/email"

function UtilisateurItem({
  owner,
  siren,
  removeUser,
}: {
  owner: string
  siren: string
  // eslint-disable-next-line no-unused-vars
  removeUser: (owner: string, siren: string) => void
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ListItem key={owner} verticalAlign="center">
      <ListIcon as={IconDrag} color="green.500" />
      {owner}&nbsp;
      <IconButton
        variant="none"
        colorScheme="teal"
        aria-label="Supprimer cet utilisateur"
        icon={<IconDelete />}
        onClick={onOpen}
        h="6"
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Supprimer l'utilisateur"
        footer={
          <>
            <ButtonAction
              // colorScheme="red"
              onClick={() => removeUser(owner, siren)}
              label="Supprimer l'utilisateur"
              leftIcon={<IconDelete />}
            />
            <ButtonAction colorScheme="gray" onClick={onClose} label="Annuler" />
          </>
        }
      >
        <Text>Cette opération est irréversible.</Text>
      </Modal>
    </ListItem>
  )
}

export default function UtilisateursEntreprise({ siren }: { siren: string }) {
  const [email, setEmail] = React.useState("")
  const { toastSuccess, toastError } = useToastMessage({})
  const [showAddForm, setShowAddForm] = useBoolean()

  const { owners, message, isLoading, mutate } = useOwnersOfSiren(siren)
  useSoloToastMessage("utilisateurs-entreprise-toast", message)

  React.useEffect(() => {
    setShowAddForm.off()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setShowAddForm is not added because the properties returned by useBoolean are stable values.
  }, [siren])

  async function removeUser(owner: string, siren: string) {
    try {
      await fetcher(`/ownership/${siren}/${owner}`, {
        method: "DELETE",
      })
      mutate([]) // TODO ne pas tout supprimer
      toastSuccess("Le responsable a été supprimé.")
    } catch (error) {
      console.error(error)
      toastError("Erreur pour supprimer cet email.")
    }
  }

  return (
    <Box mt="4">
      {isLoading ? (
        <Box m="6">
          <Spinner />
        </Box>
      ) : (
        <>
          <Text fontSize="md" fontWeight="bold" color="green.500" mb="2">
            Responsables
          </Text>

          <List spacing={3}>
            {owners?.map((owner: string) => (
              <UtilisateurItem key={owner} owner={owner} siren={siren} removeUser={removeUser} />
            ))}
          </List>

          <Flex mt="6" direction="column">
            <ButtonAction
              variant="outline"
              onClick={setShowAddForm.toggle}
              label="Vous souhaitez ajouter un responsable ?"
              leftIcon={<span aria-hidden="true">🙋</span>}
            />

            {showAddForm && (
              <Box mt="4">
                <Form
                  schema={EmailSchema}
                  onSubmit={async function addUser(formData) {
                    setEmail(formData.email)

                    try {
                      await fetcher(`/ownership/${siren}/${formData.email}`, {
                        method: "PUT",
                      })
                      setEmail("")
                      setShowAddForm.off()
                      mutate([...owners, email])
                      toastSuccess("Le responsable a été ajouté.")
                    } catch (error) {
                      console.error(error)
                      toastError("Erreur pour ajouter cet email.")
                    }
                  }}
                >
                  <HStack spacing={4} align="flex-start" mb="8">
                    <LabeledTextField name="email" label="Email responsable" placeholder="jeanne.duval@yahoo.fr" />

                    <Box pt={8}>
                      <ButtonAction type="submit" label="Ajouter" />
                    </Box>
                  </HStack>
                </Form>
              </Box>
            )}
          </Flex>
        </>
      )}
    </Box>
  )
}
