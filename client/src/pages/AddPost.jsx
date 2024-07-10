// import React from 'react'
import Header from '../components/Header';
import '../App.css'
import React, {useState, useEffect}from 'react'
import { supabase } from '../createClient'
import { Link } from 'react-router-dom';



export default function AddPost() {
    const [users, setUsers] = useState([])

    const [user,setUser] = useState({
      name:'',
      post: ''
    })
  
    useEffect(() => {
      fetchUsers()
    },[])
    
  async function fetchUsers(){
    const { data } = await supabase
    .from('posts')
    .select('*')
    setUsers(data) 
  }
  
  function handleChange(e) {
    setUser(prevFormData=>({
        ...prevFormData, 
        [e.target.name]: e.target.value
    }))
  }
  
  async function createPost(e){
    e.preventDefault();
  
    await supabase
      .from('posts')
      .insert({ 
        name: user.name,
        post: user.post,
       })
  
    //fetch updated list of users and posts
    fetchUsers();
  
    setUser({
      name: '',
      post: '',
    });
  
  }


  
  async function deleteUser(userId) {
    const { data, error } = await supabase
      .from('posts')
      .delete()
      .eq('id', userId)
  
    fetchUsers()
  
    if(error) {
      console.log(error)
    }
    if(data) {
      console.log(data)
    }
  
  }


    return (
        <>
            <Header name="AddPost Page" />
            <h1 className='addPost-header'> 1. Type your name in the "username" box. <br />2. Write a fact that you know about one of the planets of our solar system.</h1>

            <form onSubmit={createPost}>
                <input 
                    type = "text"
                    placeholder = 'Your name'
                    name = 'name'
                    required
                    value ={user.name}
                    onChange={handleChange}
                />

                <input 
                    type = "text"
                    placeholder = 'Your comment / fact'
                    name = 'post'
                    required
                    value={user.post}
                    onChange={handleChange}
                />
                {/* <select 
                  className='select-category'
                  value={user.category_id}
                  onChange={handleCategoryChange}
                  >

                  <option value="0">Select Category</option>
                  <option value="1">Sun</option>
                  <option value="2">Mercury</option>
                  <option value="3">Venus</option>
                  <option value="4">Earth </option>
                  <option value="5">Mars</option>
                  <option value="6">Jupiter</option>
                  <option value="7">Saturn</option>
                  <option value="8">Uranus</option>
                  <option value="9">Neptune</option>
                </select> */}

                <button className='submit-btn' type='submit'>Post </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user)=>
                        <tr className='first-row' key={user.id}>
                            <td>{user.id} </td>
                            <td >{user.name}</td>
                            <td className='table-row'>{user.post}</td>

                            <td>
                              <button className='delete-btn' onClick={() => {deleteUser(user.id)}}>Delete</button>
                              {/* <button className='edit-btn' onClick={() => {updatePost(user)}}>Edit</button> */}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
      )
}
