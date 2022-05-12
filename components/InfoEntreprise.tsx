import React from "react"
import { Skeleton } from "@chakra-ui/react"
import { Flex, HStack, Stack, Text } from "@chakra-ui/layout"

import { IconOfficeBuilding } from "@/components/ds/Icons"
import { useSoloToastMessage } from "@/utils/toast"
import { useSiren } from "@/models/useSiren"

export default function InfoEntreprise({ siren }: { siren: string }) {
  const { entreprise, message, isLoading } = useSiren(siren)
  useSoloToastMessage("info-entreprise-toast", message)

  return (
    <HStack borderWidth="3px" borderRadius="lg" as="section" spacing="4" p="6" pt="4" pb="4">
      <Flex>
        <IconOfficeBuilding boxSize="8" color="gray.500" />
      </Flex>

      {isLoading ? (
        <Stack>
          <Skeleton height="20px" w="200px" />
        </Stack>
      ) : (
        <Text fontWeight="semibold" lineHeight="tight" noOfLines={2}>
          {entreprise?.raison_sociale}
        </Text>
      )}
    </HStack>
  )
}
