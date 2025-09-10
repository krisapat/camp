import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Metadata } from "next";
import { promise } from "zod";
export const metadata: Metadata = {
  title: "Camping",
  description: "Favorite your camping",
};
const Page = async ({ searchParams }:{ searchParams: Promise<{ search?: string, category?: string }> }) => {
  // Search
  console.log(searchParams)
  const { search, category } = await searchParams
  return (
    <section>
      <LandmarkContainer search={search} category={category} />
    </section>
  )
}
export default Page