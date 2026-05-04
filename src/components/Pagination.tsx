"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `/listings?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      {currentPage > 1 && (
        <Link href={getPageUrl(currentPage - 1)} className="px-4 py-2 border rounded hover:bg-gray-100">
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={getPageUrl(page)}
          className={`px-4 py-2 border rounded ${
            page === currentPage ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link href={getPageUrl(currentPage + 1)} className="px-4 py-2 border rounded hover:bg-gray-100">
          Next
        </Link>
      )}
    </div>
  );
}
