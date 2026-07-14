import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewLog = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-logs").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            <NavigationBar/>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Course</th>
                        <th scope="col">SystemNumber</th>
                        <th scope="col">LoginTime</th>
                        <th scope="col">LogoutTime</th>
                        <th scope="col">Date</th>
                
                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.dept}</td>
                                    <td>{data.course}</td>
                                    <td>{data.systemnumber}</td>
                                    <td>{data.loginTime}</td>
                                    <td>{data.logoutTime}</td>
                                    <td>{data.date}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>


        </div>
    )
}

export default ViewLog