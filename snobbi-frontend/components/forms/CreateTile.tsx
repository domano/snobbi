import TitleInput from "../inputs/TitleInput";
import DescriptionInput from "../inputs/DescriptionInput";
import FileInput from "../inputs/FileInput";

export function CreateTile({register, onSubmit}) {
    return <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg overflow-hidden">
        <p className="text-xl font-semibold text-gray-900">
            New List Item
        </p>
        <form onSubmit={onSubmit}>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <TitleInput register={register} name={"title"}/>

                <DescriptionInput register={register} name={"description"}/>

                <FileInput register={register} name={"image"}/>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <button type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add another
                    </button>
                    <button type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Preview
                    </button>
                </div>
            </div>
        </form>


    </div>;
}