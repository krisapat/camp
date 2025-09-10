import { categories } from "@/utils/categories"
import Link from "next/link"

const CategoriesList = ({ search, category }: { search?: string, category?: string }) => {
    const searchTerm = search ? `&search=${search}` : ""
    return (
        <div className="flex justify-between">
            {
                categories.map((item) => {
                    const isActive = item.label === category
                    return (
                        <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
                            <article className={`flex flex-col justify-center items-center 
                                transition-all hover:scale-110 hover:text-primary duration-300
                                ${isActive ? "text-primary" : ""}`}>
                                <item.icon />
                                <p>{item.label}</p>
                            </article>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default CategoriesList