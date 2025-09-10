import { fetchFavorites } from "@/actions/actions"
import LoadingCard from "@/components/card/LoadingCard"
import LandmarkList from "@/components/home/LandmarkList"
import { Suspense } from "react"

const favorite = async () => {
  const favorites = await fetchFavorites()
  return (
    <Suspense fallback={<LoadingCard />}>
      <LandmarkList landmarks={favorites} />
    </Suspense>
  )
}
export default favorite
