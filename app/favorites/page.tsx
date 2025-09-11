import { fetchFavorites } from "@/actions/actions"
import LoadingCard from "@/components/card/LoadingCard"
import LandmarkList from "@/components/home/LandmarkList"
import { Suspense } from "react"

const FavoritePage = async () => {
  const favorites = await fetchFavorites()

  // map สำหรับบอกว่า landmark ไหน favorite อยู่แล้ว
  const favoritesMap = Object.fromEntries(
    favorites.map((landmark) => [landmark.id, landmark.id])
  )

  return (
    <Suspense fallback={<LoadingCard />}>
      <LandmarkList landmarks={favorites} favoritesMap={favoritesMap} />
    </Suspense>
  )
}

export default FavoritePage
