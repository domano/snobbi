export function Tile({item}) {
    return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        {item.Simple.Image?<div className="flex-shrink-0">
            <img className="h-48 w-full object-cover"
                 src={item.Simple.Image.url}
                 alt=""/>
        </div>:null}
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">

                <a href={item.Simple.Link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                        {item.Simple.Title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {item.Simple.Description}
                    </p>
                </a>
            </div>
        </div>
    </div>;
}