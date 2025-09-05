'use client'
import classes from "./image-picker.module.css"
import { useRef } from "react"
import { useState } from "react"
import Image from "next/image"
export default function ImagePicker({label, name}){
    const input = useRef()
    function handleclick(){
        input.current.click()
    }
    const [PickedImage, setPickedImage] = useState()

function HandlePickedImage(event){
const file = event.target.files[0];
if (!file) {
    return;
}
const fileReader = new FileReader();
fileReader.onload =() =>{
  setPickedImage(fileReader.result) 
};
fileReader.readAsDataURL(file);
}

    return(
       <>
       <div className={classes.picker}>
        <label htmlFor={name}>
        {label}
        </label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!PickedImage && <p> No image picked yet</p>}
                {PickedImage && <Image src={PickedImage} fill alt="an image"/>}
            </div>
            <input 
            type="file"
             id={name} 
             accept="image/png, image/jpeg" 
            name={name} 
            className={classes.input} 
            ref={input} 
            onChange={HandlePickedImage}>
            </input>
            <button className={classes.button} type="button" onClick={handleclick}> pick an Image</button>
        </div>
      
       </div>
       </>
    )
}