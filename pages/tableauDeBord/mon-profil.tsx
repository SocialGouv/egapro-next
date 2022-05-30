import React, { ReactElement } from "react"
import { Avatar, Badge, Box, HStack, Text, VStack } from "@chakra-ui/react"

import { useUser } from "@/contexts/auth"
import { SinglePageLayout } from "@/components/ds/SinglePageLayout"

export default function MonProfil() {
  const { email, staff } = useUser()

  return (
    <>
      {email ? (
        <VStack spacing={8} alignItems="flex-start">
          <HStack spacing={4}>
            <Avatar size="sm" name={email} />
            <Box ml={4}>
              <VStack>
                <Text fontSize="lg">
                  {email}
                  {"  "}
                  {staff && <Badge colorScheme="green">Staff</Badge>}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      ) : (
        "Utilisateur non connecté"
      )}
    </>
  )
}

MonProfil.getLayout = function getLayout(page: ReactElement) {
  return (
    <SinglePageLayout maxW="container.md" title="Mon profil">
      {page}
    </SinglePageLayout>
  )
}
