import ParentViewEditor from "../../utils/ParentViewEditor";
import BasicButton from "./BasicButton";
import OutlinedButton from "./OutlinedButton";
import GradientButton from "./GradientButton";
import IconButton from "./IconButton";
import SizeButton from "./SizeButton";
import RoundedButton from "./RoundedButton";
import AnimatedButton from "./AnimatedButton";
import LoadingButton from "./LoadingButton";
import FloatingButton from "./FloatingButton";

const ButtonPage = () => {
    return (
        <>
            {/* Basic Button */}
            <ParentViewEditor 
                renderPreview={<BasicButton />}  
                fileName="BasicButton" 
                folderName="Buttons"
            />

            {/* Outlined Button */}
            <ParentViewEditor 
                renderPreview={<OutlinedButton />}  
                fileName="OutlinedButton" 
                folderName="Buttons"
            />

            {/* Gradient Button */}
            <ParentViewEditor 
                renderPreview={<GradientButton />}  
                fileName="GradientButton" 
                folderName="Buttons"
            />

            {/* Icon Button */}
            <ParentViewEditor 
                renderPreview={<IconButton />}  
                fileName="IconButton" 
                folderName="Buttons"
            />

            {/* Size Button */}
            <ParentViewEditor 
                renderPreview={<SizeButton />}  
                fileName="SizeButton" 
                folderName="Buttons"
            />

            {/* Rounded Button */}
            <ParentViewEditor 
                renderPreview={<RoundedButton />}  
                fileName="RoundedButton" 
                folderName="Buttons"
            />

            {/* Animated Button */}
            <ParentViewEditor 
                renderPreview={<AnimatedButton />}  
                fileName="AnimatedButton" 
                folderName="Buttons"
            />

            {/* Loading Button */}
            <ParentViewEditor 
                renderPreview={<LoadingButton />}  
                fileName="LoadingButton" 
                folderName="Buttons"
            />

            {/* Floating Button */}
            <ParentViewEditor 
                renderPreview={<FloatingButton />}  
                fileName="FloatingButton" 
                folderName="Buttons"
            />
        </>
    );
};

export default ButtonPage;