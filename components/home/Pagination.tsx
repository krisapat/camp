// @/components/home/Pagination.tsx

"use client";

import { useSearchParams, useRouter } from "next/navigation";

const Pagination = ({
  total,
  pageSize,
  currentPage,
}: {
  total: number;
  pageSize: number;
  currentPage: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => handlePageChange(idx + 1)}
          className={`px-3 py-1 rounded transition-colors duration-200 ${
            currentPage === idx + 1
              ? "bg-orange-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;