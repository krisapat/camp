import { LandmarkCardProps } from "@/utils/type"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Tag } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import FavoriteToggleButton from "./FavoriteToggleButton"

const LandmarkCard = (
  { landmark, favoriteID }: { landmark: LandmarkCardProps, favoriteID: string | null }
) => {
  const { name, image, description, province, category, price, id } = landmark
  return (
    <article className="group relative">
      <Link href={`/landmark/${id}`}>
        <Card className="overflow-hidden rounded-md border border-white/20 h-95 p-0 shadow-md 
                transition-all hover:scale-[1.03] hover:shadow-2xl duration-300
        ">
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          <CardContent className="absolute bottom-0 w-full z-10 p-4 text-white backdrop-blur-sm bg-white/10">
            <div className="flex justify-between items-start gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h3 className="text-lg font-semibold leading-tight drop-shadow-md truncate max-w-[70%] cursor-default">
                      {name}
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <p className="text-sm leading-tight truncate opacity-90">{description}</p>
            <p className="text-sm leading-tight truncate opacity-90">ค่าเข้าชม : {price} บาท</p>
            <div className="flex flex-col md:flex-row md:justify-between ">
              <div className="flex items-center gap-2 text-sm opacity-90">
                <MapPin size={16} className="text-pink-300" />
                <span>{province}</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Tag size={16} className="text-emerald-300" />
                <span>{category}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-1 right-1">
        <FavoriteToggleButton landmarkId={id} favoriteID={favoriteID}/>
      </div>
    </article>
  )
}

export default LandmarkCard
