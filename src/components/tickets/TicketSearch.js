// Honey Rae - React 18 - Ticket Search
// https://watch.screencastify.com/v/QPYPLpdSszHkU2TaqFUg

export const TicketSearch = ({setterFunction}) => {
    return (
        <div>
            <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }   
            type="text" placeholder="Enter Search Terms"/>
        </div>
    )
}