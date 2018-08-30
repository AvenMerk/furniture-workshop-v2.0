import React from 'react'
import {connect} from 'react-redux'
import {fetchEmployees} from '../actions/employeesAction'
import Employees from '../components/Employees'

class EmployeesPage extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchEmployees())
    }

    render() {
        const {employees, isFetching} = this.props;
        const isEmpty = employees.length === 0;
        return <React.Fragment>
            {isEmpty
                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                : <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <h3>Our masters</h3>
                    <Employees employees={employees}/>
                </div>
            }
        </React.Fragment>
    }
}

// Функция, определяет что передать из редьюсера в props компоненты
const mapStateToProps = state => {
    const {employeesReducer} = state;
    const {
        isFetching,
        lastUpdated,
        employees
    } = employeesReducer || {isFetching: true, employees: []};

    return {
        isFetching,
        employees,
        lastUpdated,
    }
};

// props из редьюсера мапятся в компоненту в этом методе
export default connect(mapStateToProps)(EmployeesPage)