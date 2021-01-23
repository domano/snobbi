import {useState} from "react";
import {RecommendationTile} from "../components/RecommendationTile";
import {CreateRecommendationTile} from "../components/CreateRecommendationTile";

export default function CreateList() {
    let [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let title = formData.get("title")
        let description = formData.get("description")
        let image = formData.get("image")
        setList([{Simple:{Title:title, Description:description, Image: {url:URL.createObjectURL(image)} }}, ...list])

    };

    return (
<div>
        <CreateRecommendationTile onSubmit={handleSubmit} list={list}/>
    <div className="relative max-w-7xl mx-auto">

    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

    {list.map(r => <RecommendationTile key={r.Simple.Title} recommendation={r}/>)}
    </div>
    </div>
</div>
)
}