// @/components/home/LandmarkContainer.tsx

import { fetchLandmarks, fetchFavoritesMap } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/type";
import Hero from "./hero/Hero";
import { Suspense } from "react";
import LoadingCard from "../cards/LoadingCard";
import CategoriesList from "./CategoriesList";
import LoadingHero from "./hero/LoadingHero";
import Search from "./Search";
import BreadcrumbHome from "./BreadcrumbHome";
import Pagination from "./Pagination";


const LandmarkContainer = async ({
  search,
  category,
  page = 1,
  pageSize = 20,
}: {
  search?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}) => {
  const skip = (page - 1) * pageSize;

  const [{ landmarks, total }, favoritesMap] = await Promise.all([
    fetchLandmarks({ search, category, take: pageSize, skip }),
    fetchFavoritesMap(),
  ]);

  const landmarksSwiper: LandmarkCardProps[] = landmarks.slice(0, 10);

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
      {/* Use the new Pagination component here */}
      <Pagination total={total} pageSize={pageSize} currentPage={page} />
    </div>
  );
};

export default LandmarkContainer;