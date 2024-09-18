import React from 'react';
import {useState} from 'react'; 


const SubmitForm = () => {
    
    //variable definitions
    const [videoUrl, setVideoUrl] = useState('');
    const [transcription, setTranscription] = useState('');

    //html block
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    YouTube Video URL:
                    <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required />
                </label>
                <button type="submit">Submit</button>
            </form>

            {transcription && (
                <div>
                    <h2>Transcription</h2>
                    <p>{transcription}</p>
                </div>
            )}
        </div>
    );


    //start of the function defenitions
    async function handleSubmit(event){

        event.preventDefault();

        try{
            const response = await fetch('/api/videosubmit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({url: videoUrl}),
            });

            const data = await response.json();
            setTranscription(data.transcription);

        }catch (error){
            console.error('Error: ', error);
        }

        return 0
    }


};

export default SubmitForm;