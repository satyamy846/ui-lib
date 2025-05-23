import Button from "../components/Buttons/Button";
import CodeEditor from "./CodeEditor";


const ParentViewEditor = ({ renderPreview, fileName, folderName }) => {
    return (
        <>
            <div className="p-4 max-w-4xl mx-auto break-words whitespace-pre-wrap">
                <CodeEditor renderPreview={renderPreview} fileName={fileName} folderName={folderName} />
            </div>
        </>
    )
}

export default ParentViewEditor;