
import React,{useState} from 'react';
import { Input } from '../component/Input';

import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const history = useNavigate();
  const token = sessionStorage.getItem('accessToken');

  const createPost = (e) => {
    e.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("body", body);
        fetch('https://pencarikhuntul.lol/post/create', {
            method: 'POST',
            headers: {
               
                Authorization : `bearer ${token}`
            },
            body: formData,    
        })
        .then(res => res.json())
        .then((st) => {
          if(st.body){
            alert("sukses tambah postingan");
            history("/dashboard");
          }
          else {
            alert("gagal");
          }
        })
  }

  const handleSave = (e)=> {
    let upload = e.target.files[0];
    setImage(upload);
  }
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [image, setImage] = useState(''); 
  
  return (
    <div className="container mt-5">
    <form onSubmit={createPost}>
    <Input id={"Title"} title={"Title"} set={(e) => setTitle(e.target.value)}/>
    <Input id={"body"} title={"body"} set={(e) => setBody(e.target.value)}/>
    <Input id={"image"} type={"file"} title={"image"} set={handleSave}/>
    <Button type={"submit"} class={"btn btn-primary"} name={"submit"} />

    </form>
</div>
  )
}

export default AddPost