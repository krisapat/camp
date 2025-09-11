import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camping",
  description: "Favorite your camping",
};

const Page = ({ searchParams }: { searchParams: { search?: string, category?: string, page?: string } }) => {
  const { search, category, page } = searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;

  return (
    <section>
      <LandmarkContainer search={search} category={category} page={currentPage} />
    </section>
  );
};

export default Page;