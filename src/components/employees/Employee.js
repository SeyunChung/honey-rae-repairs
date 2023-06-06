// Honey Rae - React 18 - Props for Employee Component
// https://watch.screencastify.com/v/5cPG7B1egafRuw3365N1

import { Link } from "react-router-dom"

export const Employee = ({id, fullName, email}) => {
    return <section className="employee">
                <div>
                    <Link to={`/employees/${id}`}>fullName: {fullName}</Link>
                </div>
                <div>email: {email}</div>
                 </section>
}