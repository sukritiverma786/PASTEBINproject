import React from 'react'
import './modal.css';

const MailTo = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    console.log(children, "children")
    return (
        <div className={showHideClassName}>
            <section className="modal-main">

                {children}


                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>

        </div>
    )
}

export default MailTo