import useSWR from "swr"

import { genericErrorMessage } from "@/utils/makeMessage"
import { FetcherReturn, genericFetch } from "@/utils/fetcher"
import { SirenSchema } from "@/validations/siren"

const API_SOCIAL_GOUV_SIREN = "https://search-recherche-entreprises.fabrique.social.gouv.fr/api/v1/entreprise/"

/**
 * Fetcher to call the Egapro API
 *
 * @param key the path to use after the API_URL (named key because it is used in cache for useSWR)
 * @param options the request options (optional)
 */
const fetcherSiren = async (siren: string) => {
  return genericFetch(API_SOCIAL_GOUV_SIREN + siren)
}

type ReturnApiType = {
  label: string
  firstMatchingEtablissement: { address: string }
}

export function useSiren(siren: string): FetcherReturn & { entreprise: any } {
  const { success: isValidSiren } = SirenSchema.safeParse({ siren })

  const { data, error, mutate } = useSWR<ReturnApiType>(isValidSiren ? siren : null, fetcherSiren, {
    onErrorRetry: (error) => {
      // Never retry on 404.
      if (error.status === 404) return
    },
    revalidateOnFocus: false,
  })

  const isLoading = isValidSiren && !data && !error
  const isError = Boolean(error)

  const entreprise = data ? { raison_sociale: data.label, adresse: data.firstMatchingEtablissement?.address } : null

  return { entreprise, error, message: genericErrorMessage(error), isLoading, isError, mutate }
}
