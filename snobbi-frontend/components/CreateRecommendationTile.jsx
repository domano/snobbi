function DescriptionInput() {
    return <div
        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="description"
               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Description
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea id="description" name="description" rows="3"
                                              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"></textarea>
            <p className="mt-2 text-sm text-gray-500">Write a few sentences about your recommendation.</p>
        </div>
    </div>;
}

function FileInput() {
    return <div
        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Image
        </label>
        <div className="mt-2 sm:mt-0 sm:col-span-2">
            <div
                className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                         viewBox="0 0 48 48" aria-hidden="true">
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="flex text-sm text-gray-600">
                        <label htmlFor="image"
                               className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="image" name="image" type="file" className="sr-only"
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                    </p>
                </div>
            </div>
        </div>
    </div>;
}

function TitleInput() {
    return <div
        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="title"
               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Title
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="title" id="title" autoComplete="given-name"
                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
            <p className="mt-2 text-sm text-gray-500">How is this list item called?</p>

        </div>

    </div>;
}

export function CreateRecommendationTile(props) {
    return <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg overflow-hidden">
        <p className="text-xl font-semibold text-gray-900">
            New Recommendation
        </p>
        <form onSubmit={props.onSubmit}>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <TitleInput/>

                <DescriptionInput/>

                <FileInput/>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <button type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                    </button>
                    <button type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
            </div>
        </form>


    </div>;
}