import Button from "../components/Buttons/Button";
import CodeEditor from "./CodeEditor";


const ParentViewEditor = ({ renderPreview, fileName, folderName }) => {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
                <p>This is where your main content would go. The sidebar can be collapsed or expanded.</p>
                <CodeEditor renderPreview={renderPreview} fileName={fileName} folderName={folderName} />
            </div>
        </>
    )
}

export default ParentViewEditor;