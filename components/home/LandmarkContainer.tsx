import { fetchLandmarks, fetchFavoritesMap } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LandmarkCardProps } from "@/utils/type"
import Hero from "./hero/Hero"
import { Suspense, useState } from "react"
import LoadingCard from "../card/LoadingCard"
import CategoriesList from "./CategoriesList"
import LoadingHero from "./hero/LoadingHero"
import Search from "./Search"
import BreadcrumbHome from "./BreadcrumbHome"

const LandmarkContainer = async ({
  search,
  category,
  page = 1,      // page เริ่มต้น
  pageSize = 20  // จำนวนต่อ page
}: {
  search?: string
  category?: string
  page?: number
  pageSize?: number
}) => {

  const skip = (page - 1) * pageSize

  const [{ landmarks, total }, favoritesMap] = await Promise.all([
    fetchLandmarks({ search, category, take: pageSize, skip }),
    fetchFavoritesMap()
  ])

  const landmarksSwiper: LandmarkCardProps[] = landmarks.slice(0, 10)

  return (
    <div className="space-y-4">
      <BreadcrumbHome />
      <div className="sticky bg-white dark:bg-black max-w-md mx-auto w-full rounded-md top-4 z-50">
        <Search />
      </div>
      <Suspense fallback={<LoadingHero />}>
        <Hero landmark={landmarksSwiper} />
      </Suspense>
      <CategoriesList search={search} category={category} />
      <Suspense fallback={<LoadingCard />}>
        <LandmarkList landmarks={landmarks} favoritesMap={favoritesMap} />
      </Suspense>

      {/* Pagination */}
      {total > pageSize && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(total / pageSize) }).map((_, idx) => (
            <button
              key={idx}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LandmarkContainer
