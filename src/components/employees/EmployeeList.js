// Honey Rae - React 18 - Employee List 

import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=true`)
            .then(reponse => reponse.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        [] 
    )

    // Honey Rae - React 18 - Props for Employee Component
    // https://watch.screencastify.com/v/5cPG7B1egafRuw3365N1

    return (
        <>
         <h2>Employees</h2>
    <article className="employees">
        {
            employees.map(employee => <Employee key={`employee--${employee.id}`}
                id={employee.id} 
                fullName={employee.fullName} 
                email={employee.email}/>)
        }
    </article>
    </>
    )
}