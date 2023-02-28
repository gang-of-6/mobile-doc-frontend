import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({ details }) => {
    return (
        <div>
            {console.log(details)}
            <p>{details == null ? "" : (details.numeric_results == null ? "" : details.numeric_results.map(item => {
                return (
                    <>
                        {item.data_element} {item.data_value} {item.unit} &nbsp;
                    </>
                )
            }))}</p>
            <p>{details == null ? "" : (details.test_files == null ? "" : details.test_files.map(item => {
                return (
                    <>
                        <Link to={item.file_url}>{item.file_name}</Link> &nbsp;
                    </>
                )
            }))}</p>
        </div>
    )
}

export default Details
