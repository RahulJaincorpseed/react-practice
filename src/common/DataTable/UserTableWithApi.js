import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { TableData } from "../../Redux/Action/ProductAction"
import { Link } from "react-router-dom"

const UserTableWithApi = () => {
    const [responsive, setResponsive] = useState('simple');
    const TableDataSelector = useSelector((state) => state.TableDataReducer.posts)
  const dispatch = useDispatch()
  console.log("i am selector", TableDataSelector)
 
  useEffect(() => {
    const apiData = async () => {
      const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(data.data)
      dispatch(TableData(data.data))
      setResponsive("true")
    }
    apiData()
  }, [])

  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "body",
      label: "Description",
      options: {
        filter: true,
        sort: true,
        // customBodyRenderLite: (value) => {    
        //     return (
        //        <>
                  
        //              <Link to={`${value}`} >{value}</Link>
        //         </>
        //      )
        //   }
        }
    },
    {
      name: "userId",
      label: "User Id",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, dataIndex, rowIndex) => {
            return (
              <>
              <button onClick={() => { console.log("value", value, "table", tableMeta.rowData[0]) }}>
                Delete 
              </button>
              <Link to={`${tableMeta.rowData[0]}`}>data</Link>
              </>
            );
          }
      },
    },
    
  ]

  const options = {
    filterType: "checkbox",
    responsive,
  }

  return (
    <div>
      <h1>datatables</h1>
      <div className="container">
        <MUIDataTable
          title={"Employee List"}
          data={TableDataSelector}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  )
}

export default UserTableWithApi
