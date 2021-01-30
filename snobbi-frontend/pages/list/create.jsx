import {useState} from "react";
import {Tile} from "../../components/Tile";
import {CreateTile} from "../../components/forms/CreateTile";
import {Transition} from '@headlessui/react'
import {useForm} from "react-hook-form";
import List from "../../components/List";


export default function CreateList() {
    let [title, setTitle] = useState([])
    let [description, setDescription] = useState([])
    let [list, setList] = useState([])
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = (data,e) => {
        setList([{Simple: {Title: data.title, Description: data.description, Image: {url: URL.createObjectURL(data.image[0])}}}, ...list])
        e.target.reset()
    };

    return (
        <div>
            <CreateTile register={register} onSubmit={handleSubmit(onSubmit)} list={list}/>
            <div className="relative max-w-7xl mx-auto">
                <List title={title} description={description} list={list}/>
            </div>
        </div>
    )
}