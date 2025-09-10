import { fetchLandmarks, fetchLandmarksSwiper } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/type";
import Hero from "./hero/Hero";
import { Suspense } from "react";
import LoadingCard from "../card/LoadingCard";
import CategoriesList from "./CategoriesList";
import LoadingHero from "./hero/LoadingHero";
import Search from "./Search";


const LandmarkContainer = async ({ search, category }: { search?: string, category?: string }) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search, category });
  const landmarksSwiper: LandmarkCardProps[] = await fetchLandmarksSwiper();
  return (
    <div className="space-y-4">
      <Search />
      <Suspense fallback={<LoadingHero />}>
        <Hero landmark={landmarksSwiper} />
      </Suspense>
      <CategoriesList search={search} category={category} />
      <Suspense fallback={<LoadingCard />}>
        <LandmarkList landmarks={landmarks} />
      </Suspense>
    </div>
  )
}
export default LandmarkContainer