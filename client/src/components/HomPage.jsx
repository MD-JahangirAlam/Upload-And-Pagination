import { useEffect, useState } from 'react';
import '../assets/todo.css'

function HomPage() {

    const [inputData, setInputData] = useState({name: '', age: '', email: '',});
    const [tableData, setTableData] = useState([])
    const [useEdit, setUseEdit] = useState(false)
    const [userId, setUserId] = useState('')

    const [pageIndex, setPageIndex] = useState(1)
    const [data, setData] = useState([])


    const inputHandle = e =>{
        setInputData(setData => ({...setData, [e.target.name]: e.target.value}))
    }

    const addHandleClick = () =>{
        if(!(inputData.name && inputData.age && inputData.email)){
            console.log('please input fill');
            return
        }

        const userInputData = {
            id: Date.now(),
            name: inputData.name,
            age: inputData.age,
            email: inputData.email
        }

        setTableData(data => [...data, userInputData])
        setInputData({name: '', age: '', email: ''})
    }

    const editHandle = e =>{
        setUseEdit(true);

        const currentEditValue = tableData.find(item => item.id === e);

        const {name, age, email, id} = currentEditValue;
        setUserId(id)

        setInputData(data => ({...data, name, age, email}))
    }

    const deletHandle = e =>{
        const removeData = tableData.filter(item => item.id !== e)

        setTableData(removeData)
        if(tableData.length == 1 || inputData){
             setUseEdit(false);
             setInputData({name: '', age: '', email: ''})
        }
    }

    const eidtHandleClick = (e) =>{
        if(!(inputData.name && inputData.age && inputData.email)){
            console.log('please input fill');
            return
        }
            for (let index = 0; index < tableData.length; index++) {
                if(tableData[index].id == e){
                    tableData[index].name = inputData.name;
                    tableData[index].age = inputData.age;
                    tableData[index].email = inputData.email;

                    setUseEdit(false);
                    setInputData({name: '', age: '', email: ''})
                }
            }

            console.log(tableData);
    }

    const editCnacleClick = () =>{
        setUseEdit(false);
        setInputData({name: '', age: '', email: ''})
    }

    const pageValue = 5;
    const paginateItems = Math.ceil(tableData.length / pageValue);
    const currentPage = (pageIndex - 1) * pageValue;


    useEffect(() =>{
        let paginateData = tableData.slice(currentPage, pageValue * pageIndex)
        setData(paginateData);

        console.log(currentPage);
    },[tableData,pageIndex])

    return (
        <div className="todo-container">
            <div className="todo-body">
                <h3>todo list and search pagination</h3>

                {/* user input field */}
                <div className="todo-input-body">
                    <div className="todo-input">
                        <input value={inputData.name} type="text" onChange={inputHandle} name="name" id="name" placeholder="Name" />
                        <input value={inputData.age} type="text" onChange={inputHandle} name="age" id="age" placeholder="Age" />
                        <input value={inputData.email} type="text" onChange={inputHandle} name="email" id="email" placeholder="Email" />
                    </div>
                    {
                        useEdit ? <button onClick={() =>eidtHandleClick(userId)}>save</button> :<button onClick={addHandleClick}>add</button>
                    }
                </div>

                {/* user all todo information here */}
                <div className="todo-info">
                    <div className="search-box">
                        <input type="text" name="search" id="user-search" placeholder='search' />
                    </div>

                    {/* for all contain table */}
                    <table className='todo-table'>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>age</th>
                                <th>email</th>
                                <th>action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((items, index) =>{
                                    return(
                                        <tr key={index}>
                                            <td>{items.name}</td>
                                            <td>{items.age}</td>
                                            <td>{items.email}</td>
                                            <td className='action-btn'>
                                                {
                                                    useEdit && items?.id === userId ? <button onClick={editCnacleClick}>cancle</button> : <button onClick={() => editHandle(items.id)}>edit</button>
                                                }
                                                <button onClick={()=> deletHandle(items.id)}>delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="todo-paginate">
                    
                    {[...Array(paginateItems).keys()].map((item, index) =>{
                        return(
                            <span onClick={() => setPageIndex(index + 1)} key={index}>{item+1}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomPage