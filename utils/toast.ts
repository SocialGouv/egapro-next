import React from "react"
import { useToast, UseToastOptions } from "@chakra-ui/react"
import { AlertMessageType } from "./fetcher"

function showToastMessage(toast: ReturnType<typeof useToast>, options?: UseToastOptions) {
  return function (message: AlertMessageType) {
    if (message?.text) {
      toast({
        title: message.kind === "success" ? "Succès" : "Erreur",
        description: message.text,
        status: message.kind,
        isClosable: true,
        ...(options || {}),
      })
    }
  }
}

function showToastMessageNoDuplicate(toast: ReturnType<typeof useToast>, id: string, options?: UseToastOptions) {
  return function (message: AlertMessageType) {
    if (message?.text && !toast.isActive(id)) {
      toast({
        id,
        title: message.kind === "success" ? "Succès" : "Erreur",
        description: message.text,
        status: message.kind,
        isClosable: true,
        ...(options || {}),
      })
    }
  }
}

/**
 * Return utility to show toast messages.
 */
export function useToastMessage(options?: UseToastOptions) {
  const toast = useToast()

  const toastMessage = showToastMessage(toast, options)

  const toastSuccess = (text: string) => toastMessage({ kind: "success", text })
  const toastError = (text: string) => toastMessage({ kind: "error", text })

  return { toastMessage, toastSuccess, toastError }
}

/**
 * Return utility to show toast messages. Version that does not duplicate messages and handle the useEffect.
 */
export function useSoloToastMessage(id: string, message?: AlertMessageType | null, options?: UseToastOptions) {
  const toast = useToast()
  const toastId = id

  const toastMessage = showToastMessageNoDuplicate(toast, toastId, options)

  React.useEffect(() => {
    if (message) {
      toastMessage(message)
    } else {
      toast.closeAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- toast and toastMessage are utilities we don't need to subscribe to.
  }, [message])
}
