import { LandmarkCardProps } from "@/utils/type"
import LandmarkCard from "../card/LandmarkCard"

const LandmarkList = (
  { landmarks, favoritesMap }: { landmarks: LandmarkCardProps[], favoritesMap: Record<string, string> }
) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {landmarks.map((landmark) => (
        <LandmarkCard
          key={landmark.id}
          landmark={landmark}
          favoriteID={favoritesMap[landmark.id] || null}
        />
      ))}
    </section>
  )
}
export default LandmarkList
