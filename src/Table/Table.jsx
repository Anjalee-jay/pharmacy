import React from 'react'
import DataTable from 'react-data-table-component'

function Table() {
    const columns= [
        {
        name: 'Medicine Name',
        selector: row => row.name
    },
    {
        name: 'Batch No',
        selector: row => row.batch
    },
    {
        name: 'Quantity',
        selector: row => row.quantity
    }


    ];
    const data =[
        {
            id:1,
            name:'Panadol',
            batch:234,
            quantity:8,
        },
        {
            id:2,
            name:'Panadol',
            batch:234,
            quantity:8,
        }, 
        {
            id:3,
            name:'Panadol',
            batch:234,
            quantity:8,
        },
        {
            id:4,
            name:'Panadol',
            batch:234,
            quantity:8,
        },

    ]
  return (
    <div className='container3'>
        <DataTable
        columns={columns}
        data={data}
        
        ></DataTable>
      
    </div>
  )
}

export default Table
