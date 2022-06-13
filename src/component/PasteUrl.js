import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import MailTo from './MailTo';


const PasteUrl = () => {

    const location = useLocation();
    const [getUrl, setGetUrl] = useState("");
    const [show, setShow] = useState(false);
    const [mailTo, setMailTo] = useState("");
    const [msg, setMsg] = useState("");



    const handleInpute = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        console.log(name, value, "msg");
        setMailTo(value);
        //console.log(getID, "hii id")
        setMsg(getUrl);


    }

    const sendUrl = async () => {

        let reqBody = {
            mailTo: mailTo,
            msg: msg
        }

        const res = await fetch('http://localhost:3001/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });

        if (res.status === 200) {
            window.alert("URL send successfully 👻");

        }

        const data = await res.json();
        console.log(data, "this my data");
        //  console.log(getID, 'data from the DB')
        //  console.log(takeUrl, 'this is url')



        if (data.status === 422 || !data) {
            window.alert("Invalid url 👻");
            console.log("Invalid url 👻");
        }
        else {
            window.alert("successful 👻");
            console.log("successful 👻");
        }


    }

    const handlePaste = () => {

        const linkUrl = location.state.data.link;

        setGetUrl(linkUrl);
    }

    const handleEmail = () => {
        setShow(true);

    }

    const hideModal = () => {
        setShow(false);
    }


    return (
        <>
            <div className='container'>
                <div className="content">
                    <input type="text" id='content' autoComplete='off'
                        value={getUrl}
                        placeholder='get content url'

                    />
                    <br />
                    <div className="button">
                        <button type='submit' onClick={handlePaste}>get url</button>
                        <button type='submit' onClick={handleEmail}>Send</button>
                    </div>


                </div>
            </div>

            <div className="mailto">
                <MailTo show={show} handleClose={hideModal}>
                    <label for="email">Enter your email:</label>
                    <input type="email" id="email" name="mailTo" value={mailTo} onChange={handleInpute} />
                    <input type="text" id="content" name='msg' value={getUrl} onChange={handleInpute} />
                    <button type='submit' onClick={sendUrl}>Send mail</button>
                </MailTo>
            </div>
        </>
    )
}

//onChange={(e) => setEmail(e.target.value)}

export default PasteUrl