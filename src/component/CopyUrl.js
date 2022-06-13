import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CopyUrl = () => {

    const navigate = useNavigate();

    const [content, setContent] = useState({})
    const [url, setUrl] = useState("")

    let value, name;

    const handleInpute = (e) => {
        name = e.target.name;
        value = e.target.value;


        setContent(value)
        console.log(content, "msg")
    }

    const postData = async () => {
        const res = await fetch('http://localhost:3001/geturl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        });

        const data = await res.json();
        console.log(data, 'data from the DB')

        if (data) {
            setUrl(data);
            console.log(url, "hi url")
        }

        if (data.status === 422 || !data) {
            window.alert("Invalid content 👻");
            console.log("Invalid content 👻");
        } else {
            window.alert("successful 👻");
            console.log("successful 👻");


            navigate(
                '/PasteUrl',
                {
                    state: {
                        data
                    }
                }
            )
        }


    }

    return (
        <div className='container'>
            <div className="shape">
                <div className="content">
                    <input type="text" name='content' id='content' autoComplete='off'
                        value={content.name}
                        onChange={handleInpute}
                        placeholder='type content'

                    />
                    <br />
                    <div className="button"><button type='submit' onClick={postData}>Submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default CopyUrl