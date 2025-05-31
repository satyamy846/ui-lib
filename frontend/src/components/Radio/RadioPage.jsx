import ParentViewEditor from "../../utils/ParentViewEditor";
import BasicRadio from "./BasicRadio";
import ColoredRadio from "./ColoredRadio";
import CardRadio from "./CardRadio";
import ButtonRadio from "./ButtonRadio";
import CustomRadio from "./CustomRadio";
import SizedRadio from "./SizedRadio";

const RadioPage = () => {
    return (
        <>
            {/* Basic Radio */}
            <ParentViewEditor 
                renderPreview={<BasicRadio />}  
                fileName="BasicRadio" 
                folderName="Radio"
            />

            {/* Colored Radio */}
            {/* <ParentViewEditor 
                renderPreview={<ColoredRadio />}  
                fileName="ColoredRadio" 
                folderName="Radio"
            /> */}

            {/* Sized Radio */}
            <ParentViewEditor 
                renderPreview={<SizedRadio />}  
                fileName="SizedRadio" 
                folderName="Radio"
            />

            {/* Card Radio */}
            <ParentViewEditor 
                renderPreview={<CardRadio />}  
                fileName="CardRadio" 
                folderName="Radio"
            />

            {/* Button Radio */}
            <ParentViewEditor 
                renderPreview={<ButtonRadio />}  
                fileName="ButtonRadio" 
                folderName="Radio"
            />

            {/* Custom Radio */}
            <ParentViewEditor 
                renderPreview={<CustomRadio />}  
                fileName="CustomRadio" 
                folderName="Radio"
            />
        </>
    );
};

export default RadioPage;