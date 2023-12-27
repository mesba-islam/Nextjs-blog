import Link from "next/link";

export default function Navebar(){
    return(
        <div className="max-w-3xl mx-auto px-4 sm:px6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-betweenitem-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium">
                            Next<span className="text-teal-500">Blog</span>

                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}