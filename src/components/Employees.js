import React from 'react'

const Employees = ({employees}) => (
    <ul>
        {employees.map((employee, index) =>
            <li key={index}>
                {`id: ${employee.id},
                name: ${employee.last_name} ${employee.first_name} ${employee.middle_name}`}
            </li>
        )}
    </ul>
);

export default Employees;
