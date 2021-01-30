
export default function DescriptionInput({register, name}) {
    return <div
        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="description"
               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Description
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea id={name} name={name} rows="3"
                                              ref={register({required: true})}
                                              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"></textarea>
            <p className="mt-2 text-sm text-gray-500">Write a few sentences about it!</p>
        </div>
    </div>;
}