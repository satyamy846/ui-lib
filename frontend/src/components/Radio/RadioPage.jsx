import { useState } from "react";
import ParentViewEditor from "../../utils/ParentViewEditor"
import BasicRadio from "./BasicRadio";

const RadioPage = () =>{
    const [selectedBasic, setSelectedBasic] = useState('option1');
    return (
        <>
            <ParentViewEditor 
                renderPreview={
                    <BasicRadio
                    name="basic" 
                    value="option1" 
                    checked={selectedBasic === 'option1'} 
                    onChange={(e) => setSelectedBasic(e.target.value)} 
                    label="Option One" 
                    />}  
             
             fileName="BasicRadio" 
             folderName="Radio"

             />
        {/* <ParentViewEditor renderPreview={<List2 />}  fileName="List2" folderName="Lists"/> */}
        </>
    )
}

export default RadioPage;