
const headerTh = ["ID", "NAME", "DESCRIPTION","OPCIONS"]


const THHeader = () => {

    

    return (
        <tr>
            {
                headerTh.map((field, index) => {
                   if(field === "ID"){
                    return (
                        <th className="todo-hidden-id" key={index}>{field}</th>
                    )
                   }
                    return (
                        <th key={index}>{field}</th>
                    )
                   
                })
            }

        </tr>
    )
}

export default THHeader