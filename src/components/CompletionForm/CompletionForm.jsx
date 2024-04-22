import { useState } from 'react';
import getCompletion from '../../services/completionService';

const CompletionForm = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        const result = await getCompletion(text);
        setResponse(result);
    };

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSend}>Send</button>
            <p>{response}</p>
        </div>
    );
};

export default CompletionForm;