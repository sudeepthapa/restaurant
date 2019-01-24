
import React, { Component } from 'react';
import {storage} from '../firebase/index';

export default class ImageUpload extends Component {

  state={
    image:'',
    url:'',
    progress:0
  }

  handleFileChange = (e)=>{
    const image = e.target.files[0];
    if(image){
      this.setState({image});
    }
  }

  handleUpload = () =>{
    const {image} =this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed' , 
                    (snapshot)=>{ 
                      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                      console.log(progress);
                      this.setState({progress})
                    },
                    (error)=>{console.log(error)},
                    ()=>{storage.ref('images').child(image.name).getDownloadURL().then(url=>this.setState({url}))}
    )
  }

  render() {
    const style = {
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }
    return (
      <div style ={style}>
        <progress value={this.state.progress} max='100' /> <br />
        <input type='file' onChange={this.handleFileChange} />
        <button onClick ={this.handleUpload}>Upload</button>

        <br />
        <img src={this.state.url || 'https://via.placeholder.com/400'} width='400' />
      </div>
    )
  }
}

