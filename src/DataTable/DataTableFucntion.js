import React, { useEffect } from "react"
import MUIDataTable from "mui-datatables"
import { useDispatch, useSelector } from "react-redux"
import { DataTableAction } from "../Redux/Action/DataTableAction"
import { useState } from "react"
import { Link } from "react-router-dom"

const DataTableFucntion = () => {
    const [Loading, setLoading] = useState(true);
  const TableSelector = useSelector((data) => data.DataTableReducer?.listData)
  const dispatch = useDispatch()

  console.log("selector", TableSelector)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(DataTableAction(json))
        setLoading(false)
      })
  }, [])

  const columns = [
    {
      name: "id",
      label: "ID",
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
        sort: false,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
        name: "show",
        label: "Show",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta) => {
        //    console.log(tableMeta.rowData[0]);
        return ( <Link to={`/tab/${tableMeta.rowData[0]}`} className="btn btn-primary">data</Link>)
          },
        // onRowsSelect : (curRowSelected, allRowsSelected) => {
        //     console.log(curRowSelected)
        // }
        },
      },

      {
        name: "add",
        label: "Add",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta) => {
        //    console.log(tableMeta.rowData[0]);
        return ( <Link to={`/add`} className="btn btn-primary">Add</Link>)
          },
        // onRowsSelect : (curRowSelected, allRowsSelected) => {
        //     console.log(curRowSelected)
        // }
        },
      },
  ]

  const options = {
    filterType: "checkbox",
  }

  return (
    <div>
      <h1>Final Data Table</h1>
      {Loading ? <h1>Loading</h1> : 
      <MUIDataTable
        title={"Employee List"}
        data={TableSelector}
        columns={columns}
        options={options}
      />}
    </div>
  )
}

export default DataTableFucntion
