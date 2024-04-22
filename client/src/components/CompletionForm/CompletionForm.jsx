import { useState } from 'react';
import getCompletion from '../../services/completionService';
import getEmbeddings from '../../services/embeddingsService';

const CompletionForm = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleCompletionSend = async () => {
        const result = await getCompletion(text);
        setResponse(result);
    };

    const handleEmbeddingsSend = async () => {
        const result = await getEmbeddings(text);
        setResponse(result);
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleCompletionSend}>Get Completion</button>
            <button onClick={handleEmbeddingsSend}>Get Embeddings</button>
            <p>{response}</p>
        </div>
    );
};

export default CompletionForm;