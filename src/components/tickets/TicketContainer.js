// Honey Rae - React 18 - Ticket Search
// https://watch.screencastify.com/v/QPYPLpdSszHkU2TaqFUg
// Props: setterFunction, searchTermState

import { useState } from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <TicketSearch setterFunction = {setSearchTerms}/>
        <TicketList searchTermState = {searchTerms}/>
    </>
}