import React,{useState} from 'react';
import { Input } from '../component/Input';
import { useGlobal } from '../context/GlobalContext';
const AddPost = () => {
  const [state] = useGlobal();
  const token = state.accessToken;

  const createPost = (e) => {
    e.preventDefault();
        const data = {
            'title': title,
            'body': body,
            'image': image
        }
        fetch('http://localhost:8000/post/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
                Authorization : `bearer ${token}`
            },
            body: JSON.stringify(data),    
        })
        .then(res => res.json())
        .then(st => console.log(st))
  }

  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [image, setImage] = useState(''); 
  
  return (
    <div className="container mt-5">
    <form onSubmit={createPost}>
    <Input id={"Title"} title={"Title"} set={(e) => setTitle(e.target.value)}/>
    <Input id={"body"} title={"body"} set={(e) => setBody(e.target.value)}/>
    <Input id={"image"} title={"image"} set={(e) => setImage(e.target.value)}/>
    <button type="submit" className="btn btn-primary">
        Login
    </button>

    </form>
</div>
  )
}

export default AddPost