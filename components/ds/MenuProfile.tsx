import React, { FunctionComponent } from "react"
import RouterLink from "next/link"
import { useRouter } from "next/router"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
import { Button, Link } from "@chakra-ui/react"

import { IconPeopleCircle } from "@/components/ds/Icons"
import ButtonLink from "@/components/ds/ButtonLink"
import { useUser } from "@/contexts/auth"

type MenuLinkProps = {
  children: React.ReactNode
  to: string
}

const MenuLink: FunctionComponent<MenuLinkProps> = ({ children, to }) => {
  return (
    <Link as={RouterLink} href={to} color="gray.600" _hover={{ textDecoration: "none" }}>
      {children}
    </Link>
  )
}

const MenuProfile: FunctionComponent = () => {
  const router = useRouter()
  const { email, logout, staff } = useUser()

  const disconnectUser = () => {
    logout()
    router.push("/")
  }

  if (email) {
    return (
      <Menu>
        <MenuButton as={Button} variant="ghost" colorScheme="primary" leftIcon={<IconPeopleCircle boxSize={6} />}>
          Mon compte
        </MenuButton>
        <MenuList>
          <MenuItem>
            <MenuLink to="/tableauDeBord/mon-profil">Mon Profil</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/tableauDeBord/mes-entreprises">Mes entreprises</MenuLink>
          </MenuItem>
          {staff && (
            <React.Fragment>
              <MenuDivider />
              <MenuItem>
                <MenuLink to="/tableauDeBord/gerer-utilisateurs">Gérer utilisateurs</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/tableauDeBord/generer-token-utilisateur">Générer token</MenuLink>
              </MenuItem>
            </React.Fragment>
          )}
          <MenuDivider />
          <MenuItem onClick={disconnectUser} color="orange.500">
            Déconnexion
          </MenuItem>
        </MenuList>
      </Menu>
    )
  } else {
    return <ButtonLink to="/me-connecter" label="Me connecter" variant="ghost" colorScheme="primary" />
  }
}

export default MenuProfile
