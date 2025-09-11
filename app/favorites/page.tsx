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
    <div className="space-y-4">
      <h1 className="text-3xl">รายการที่ถูกใจ</h1>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkList landmarks={favorites} favoritesMap={favoritesMap} />
      </Suspense>
    </div>
  )
}

export default FavoritePage
