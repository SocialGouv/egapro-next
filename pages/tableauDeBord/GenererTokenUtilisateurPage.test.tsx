import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"

import * as mockContext from "@/contexts/auth"
import * as mockApi from "@/models/token"
import GenererTokenUtilisateurPage from "./GenererTokenUtilisateurPage"

afterAll(() => {
  jest.restoreAllMocks()
})

test("Generer token page is only for staff member", () => {
  render(<GenererTokenUtilisateurPage />)

  expect(screen.getByText("Vous n'êtes pas membre du staff.")).toBeInTheDocument()
})

test("Generer token page should not accept empty email", async () => {
  // @ts-ignore -- We only care of staff property for this test.
  jest.spyOn(mockContext, "useUser").mockReturnValue({ staff: true })

  render(<GenererTokenUtilisateurPage />)
  expect(screen.getByLabelText(/Email/i)).toHaveValue("")
  fireEvent.submit(screen.getByRole("button", { name: /générer/i }))
  await screen.findByText(/L'email est incorrect/i)
})

test("Generer token page should be ok with a valid email", async () => {
  // @ts-ignore -- We only care of staff property for this test.
  jest.spyOn(mockContext, "useUser").mockReturnValue({ staff: true })

  jest.spyOn(mockApi, "generateImpersonateToken").mockReturnValue(Promise.resolve({ token: "token-123456789" }))

  render(<GenererTokenUtilisateurPage />)
  userEvent.type(screen.getByLabelText(/email/i), "john@maclane.com")
  fireEvent.submit(screen.getByRole("button", { name: /générer/i }))
  await screen.findByText(/Lien d'authentification vers le simulateur/i)
  await screen.findByText(/Lien d'authentification vers la déclaration/i)
})
