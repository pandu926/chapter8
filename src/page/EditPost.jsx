import React,{useState} from 'react';
import { Input } from '../component/Input';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../component/Button';
const EditPost = () => {
  const history = useNavigate();
    const {id} = useParams();
   const token = sessionStorage.getItem('accessToken');
    const createPost = (e) => {
      e.preventDefault();
          let formData = new FormData();
          formData.append("image", image);
          formData.append("title", title);
          formData.append("body", body);
          fetch(`https://pencarikhuntul.lol/post/update/${id}`, {
              method: 'PUT',
              headers: {
                 
                  Authorization : `bearer ${token}`
              },
              body: formData,    
          })
          .then(res => res.json())
          .then((st) => {
            console.log(st[1][0]);
            if(st[1][0].id){
              alert("sukses edit postingan");
              history('/dashboard');
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

export default EditPost;