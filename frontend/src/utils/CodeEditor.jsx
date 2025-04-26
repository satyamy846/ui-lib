import React, { useEffect, useRef, useState } from 'react'
import useFetchCode from '../hooks/useFetchCode';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark'; // Import the One Dark theme
import { apiEndPoints } from '../constants/Common';
import CodePreviewToggle from './CodePreviewToggle';

const CodeEditor = ({ renderPreview, fileName }) => {
    const editorRef = useRef(null);
    const [activeTab, setActiveTab] = useState('code');
    const { code, loading, error, setCode } = useFetchCode(apiEndPoints.getCode + "?filename=" + fileName + "&foldername=Buttons");
    // const [data, setData] = useState(null);
    console.log("coode --- ", code)

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
    return (
        <>
            {
                loading ? <div>Loading...</div>
                    : (
                        <div>
                            <h1>React Code Editor</h1>
                            <CodePreviewToggle activeTab={activeTab} setActiveTab={setActiveTab} />
                            {
                                activeTab == 'code' && (
                                    <div
                                        ref={editorRef}
                                        style={{
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            height: '400px', // Set the fixed height to 400px
                                            overflowY: 'auto', // Make the editor scrollable if content exceeds 400px
                                            fontFamily: 'Monaco, monospace', // Ensure a monospaced font for code
                                        }}
                                    />
                                )


                            }
                            {
                                activeTab == 'preview' && (
                                    <div className='preview'>
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