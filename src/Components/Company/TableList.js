import React from 'react';
import MaterialTable from 'material-table';
import { useTranslation } from 'react-i18next';

const TableList = () => {
  const { t } = useTranslation();
  
  const data = [
        {id:1,first_name:"Jennine",last_name:"Fivey"},
        {id:2,first_name:"Vivie",last_name:"Pietesch"},
        {id:3,first_name:"Neila",last_name:"Darwen"},
        {id:4,first_name:"Salvatore",last_name:"MacIlraith"},
        {id:5,first_name:"Jaine",last_name:"Ealles"},
        {id:6,first_name:"Melisandra",last_name:"Franz"},
        {id:7,first_name:"Kanya",last_name:"Beilby"},
        {id:8,first_name:"Shanan",last_name:"Robens"},
        {id:9,first_name:"Carlie",last_name:"Hepher"},
        {id:10,first_name:"Adolphus",last_name:"Liggett"},
        {id:11,first_name:"Jania",last_name:"Runacres"},
        {id:12,first_name:"Carmelia",last_name:"Wyrill"},
        {id:13,first_name:"Marilee",last_name:"Bleasdale"},
        {id:14,first_name:"Julietta",last_name:"Dundredge"},
        {id:15,first_name:"Rusty",last_name:"Bartolozzi"},
        {id:16,first_name:"Fawnia",last_name:"Wintour"},
        {id:17,first_name:"Jeremy",last_name:"Minifie"},
        {id:18,first_name:"Kane",last_name:"idewell"},
        {id:19,first_name:"Maryjo",last_name:"Rekes"},
        {id:20,first_name:"Karina",last_name:"Button"}
]

  const columns = [
    {
      title: t("Company.2"), field: 'first_name'
    },
    {
      title: t("Company.3"), field: 'last_name'
    }
  ]
  return (
    <div>
      <MaterialTable title={t("Company.4")}
                     data={data}
                     columns={columns}
                     options={{
                       search: true,
                       paging: true,
                       filtering: false,
                       exportButton: false
                     }}
                    />
    </div>
  )
}

export default TableList;
