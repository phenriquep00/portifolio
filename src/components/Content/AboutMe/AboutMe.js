import { Contact } from "../Contact/Contact";
import { Editor } from "./CodeEditor/CodeEditor";
import { CodePreview } from "./CodePreview/CodePreview";

export function AboutMe() {
    return (
        <>
            <Contact />
            <div className="w-[100%] h-[100%] flex flex-row">
                <Editor />
                <CodePreview />
            </div>
        </>

    )
}