import {Tile} from "./Tile";
import {Transition} from "@headlessui/react";

export default function List({title, description, list}) {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        {description}
                    </p>
                </div>
                <Transition appear={true} show={list.length > 0}
                            className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {list.map((r) => <Transition.Child
                        enter="transition duration-500"
                        enterFrom="transform -translate-y-40 opacity-0"
                        enterTo="transform translate-y-0 opacity-100">
                        <Tile key={r.id} item={r}/>
                    </Transition.Child>)}
                </Transition>
            </div>
        </div>
    )
}