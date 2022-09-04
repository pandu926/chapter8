import React,{useState} from 'react';
import { Input } from '../component/Input';
import { useGlobal } from '../context/GlobalContext';
import {useParams} from 'react-router-dom';
const EditPost = () => {
    const {id} = useParams();
    const [state] = useGlobal();
    const data = state.post;
    const [filterData] = data.filter((dt) => dt.id === Number(id))
    console.log(data,id, filterData);

    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 
    const [image, setImage] = useState(''); 
  return (
    <div className='container'>
    <Input id={"Title"} title={"Title"} value={filterData.title}  set={(e) => setTitle(e.target.value)}/>
    <Input id={"body"} title={"body"} value={filterData.body} set={(e) => setBody(e.target.value)}/>
    <Input id={"gambar"} title={"image"} value={filterData.image} set={(e) => setImage(e.target.value)}/>
    </div>
  )
}

export default EditPost;