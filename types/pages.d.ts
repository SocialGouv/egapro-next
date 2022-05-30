import { NextPage } from "next/types"

export declare type EgaProPage<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (component: JSX.Element) => JSX.Element
}
