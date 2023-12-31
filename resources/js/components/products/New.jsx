import React from "react"

const New = ()=>{
    return(
        <div className="container">
            <div className="products_create">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Add Product</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn">
                            Save
                        </button>
                    </div>
                </div>
                <div className="card_wrapper">
                    <div className="wrapper_left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text"/>
                            <p>Desciption (Optional)</p>
                            <textarea cols="10" rows="5"></textarea>
                            <div className="media">
                                <ul className="images_list">
                                    <li className="image_item">
                                        <div className="image_item-img">
                                            <img src="" width="117px" height="100px" />
                                        </div>
                                    </li>
                                    <li className="image_item">
                                        <form action="" className="image_item-form">
                                            <label className="image_item-form--label">Add Image</label>
                                            <input type="file" className="image_item-form--input" />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper_right">
                        wrapper right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New