import React, { useEffect, useRef, useState, CSSProperties } from 'react'
import useFetchCode from '../hooks/useFetchCode';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark, color } from '@codemirror/theme-one-dark'; // Import the One Dark theme
import { apiEndPoints } from '../constants/Common';
import CodePreviewToggle from './CodePreviewToggle';
import { ClipLoader } from "react-spinners";
import { CheckCircle, CircleCheckBig, ClipboardCopy, Copy } from 'lucide-react';
import useTheme from '../hooks/useTheme';


const CodeEditor = ({ renderPreview, fileName, folderName }) => {
    const editorRef = useRef(null);
    const [activeTab, setActiveTab] = useState('code');
    const { code, loading, error, setCode } = useFetchCode(apiEndPoints.getCode + "?filename=" + fileName + `&foldername=${folderName}`);
    const [copied, setCopied] = useState(false);
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        if (editorRef.current) {
            console.log("editor ref", editorRef)
            // Create the editor state with One Dark theme
            const state = EditorState.create({
                doc: code || '', // Ensure `doc` is a string
                extensions: [
                    javascript(),
                    oneDark,
                    EditorView.updateListener.of((update) => {
                        if (update.docChanged) {
                            setCode(update.state.doc.toString());
                        }
                    }),
                ],
            });

            // Create and attach the editor view
            const view = new EditorView({
                state,
                parent: editorRef.current,
            });

            return () => view.destroy();
        }
    }, [code, setCode, activeTab]);


    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // reset after 1 second
        });
      };
    
    return (
        <>
            {
                loading ? <div className="flex items-center justify-center"><ClipLoader
                    loading={loading}
                    size={40}
                    color='oklch(62.7% 0.265 303.9)'
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                </div>
                    : (
                        <div className={`${activeTab ==='code' ? 'bg-[#282c34]' : 'bg-transparent'} rounded-lg p-2`}>
                        <div className="w-full flex justify-end mb-2">
                       {
                        activeTab === 'code' && (
                            <button onClick={handleCopy} className={`cursor-pointer text-white hover:text-gray-400 font-bold py-2 px-4 rounded`}>{copied ? <CheckCircle className="text-green-500" /> : <ClipboardCopy />}
                            </button>
                        )
                       }
                            <CodePreviewToggle activeTab={activeTab} setActiveTab={setActiveTab} />
                        </div>
                            
                            {
                                activeTab == 'code' && (
                                    <div
                                        ref={editorRef}
                                        style={{
                                            // border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            // height: '400px', // Set the fixed height to 400px
                                            maxHeight: '400px',
                                            overflowY: 'auto', // Make the editor scrollable if content exceeds 400px
                                            fontFamily: 'Monaco, monospace', // Ensure a monospaced font for code
                                        }}
                                    />
                                )


                            }
                            {
                                activeTab == 'preview' && (
                                    <div className='preview flex justify-center'>
                                        {renderPreview}
                                    </div>
                                )
                            }
                        </div>

                    )
            }
        </>
    )
}

export default CodeEditor