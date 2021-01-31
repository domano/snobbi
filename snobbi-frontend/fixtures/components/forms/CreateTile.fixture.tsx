import React, {useState} from "react";
import {CreateTile} from "../../../components/forms/CreateTile";
export default function () {
    let [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let title = formData.get("title")
        let description = formData.get("description")
        let image = formData.get("image")
        setList([{Simple:{Title:title, Description:description, Image: {url:URL.createObjectURL(image)} }}, ...list])

    };
    return <CreateTile onSubmit={handleSubmit}/>
}
