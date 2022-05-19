import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react"
import { FunctionComponent } from "react"

/**
 * Blank component for no company found in search.
 */
export const NoCompanyFound: FunctionComponent = () => (
  <Alert
    status="info"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    mt={4}
    colorScheme="cyan"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Aucune entreprise trouvée
    </AlertTitle>
    <AlertDescription maxWidth="sm">Veuillez modifier vos paramètres de recherche.</AlertDescription>
  </Alert>
)
