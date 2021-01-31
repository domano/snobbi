import {useState} from "react";
import {Tile} from "../../components/Tile";
import {CreateTile} from "../../components/forms/CreateTile";
import {Transition} from '@headlessui/react'
import {useForm} from "react-hook-form";
import List from "../../components/List";
import {CreateListHeader} from "../../components/forms/CreateListHeader";


export default function CreateList() {
    let [formData, setFormData] = useState({title: "", description: "", list: []})
    const {
        register: registerIntroduction,
        handleSubmit: handleSubmitIntroduction,
        watch: watchIntroduction,
        errors: errorsIntroduction
    } = useForm();
    const {register, handleSubmit, watch, errors} = useForm();

    const onIntroductionSubmit = (data) => {
        setFormData(
            {
                ...formData,
                title: data.title,
                description: data.description,
            }
        )
    }
    const onItemSubmit = (data, e) => {
        setFormData(
            {
                ...formData,
                list: [
                    {
                        Simple: {
                            Title: data.title,
                            Description: data.description,
                            Image: {url: URL.createObjectURL(data.image[0])}
                        }
                    }
                    , ...formData.list]
            }
        )
        e.target.reset()
    };

    return (
        <div className="flex flex-col  lg:flex-row">
            <div className="flex flex-col lg:max-w-md">
                <CreateListHeader register={registerIntroduction}
                                  onSubmit={handleSubmitIntroduction(onIntroductionSubmit)}/>
                <CreateTile register={register} onSubmit={handleSubmit(onItemSubmit)}/>

            </div>
            <div className="relative max-w-7xl py-3 flex-grow">
                <List {...formData} />
            </div>
        </div>
    )
}