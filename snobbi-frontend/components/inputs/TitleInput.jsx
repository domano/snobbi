export default function TitleInput({register, name}) {
    return <div
        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="title"
               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Title
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name={name} id={name} ref={register({required: true})}
                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
            <p className="mt-2 text-sm text-gray-500">How is this list item called?</p>

        </div>

    </div>;
}