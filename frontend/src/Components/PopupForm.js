import React, { useEffect, useState } from "react";

const PopupForm = () => {

    const [showPop, setShowPop] = useState(false);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setShowPop(true)
        }, [5000])

        return () => clearTimeout(timeOut);
    },[])

    return (
        <>
            <div className={`PopUpmodal ${showPop ? "PopUpShow" : ""}`} id="MainParentPopup">
                <div className="modalPopUpcontent">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                            Update For Masterclass
                        </h4>
                        <button
                            type="button"
                            className="close close-button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={()=>{setShowPop(false)}}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="w3l-contacts-12 home_form">
                            <div className="contacts12-main">
                                <form className="main-input">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="Name"
                                        id="Name"
                                        required=""
                                    />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="Email"
                                            id="Email"
                                            required=""
                                        />
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            name="Phone"
                                            id="Phone"
                                            required=""
                                        />
                                    <div className="serSel">
                                        <select>
                                            <option value="Null">Courses</option>
                                            <option value="Brooklyn">Full Stack</option>
                                            <option value="Manhattan">Machine Learning & AI</option>
                                            <option value="Queens">DevOps</option>
                                            <option value="Queens">IOT</option>
                                        </select>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="MainButton">
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PopupForm;
