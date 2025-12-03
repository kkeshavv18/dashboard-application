import { DataTable } from "@/components/shared/data-table";
import { useState, useMemo } from "react";
import { userColumns } from "./column";
import { FacetedFilter } from "../shared/faceted-filter";
import SearchInput from "../shared/search-input";
import { SharedPagination } from "../shared/shared-pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/hooks/useUsers";

function DataComponent() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["all"]);
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const TypeOptions = [
    { label: "ALL GENDERS", value: "all" },
    { label: "MALE", value: "male" },
    { label: "FEMALE", value: "female" },
  ];

  const params = useMemo(() => {
    const p: Record<string, string | number> = {
      limit: pageSize,
      skip: (currentPage - 1) * pageSize,
    };
    if (query) p.q = query;
    if (
      selectedTypes.includes("male") &&
      !selectedTypes.includes("female") &&
      !selectedTypes.includes("all")
    ) {
      p.key = "gender";
      p.value = "male";
    } else if (
      selectedTypes.includes("female") &&
      !selectedTypes.includes("male") &&
      !selectedTypes.includes("all")
    ) {
      p.key = "gender";
      p.value = "female";
    }
    return p;
  }, [query, selectedTypes, currentPage, pageSize]);

  const { data, loading, error } = useUsers(params);

  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="font-bold text-xl text-primary">Users Data</div>
            <div className="flex flex-row md:flex-row gap-4">
              <div className="w-72">
                <SearchInput placeholder="Search Users" />
              </div>
              <FacetedFilter
                title="Gender"
                options={TypeOptions}
                selectedValues={selectedTypes}
                onChange={setSelectedTypes}
              />
            </div>
          </div>
        </div>
        <div className="rounded-md border" style={{ height: "33rem" }}>
          <div className="h-full overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-20" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-16" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-24" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-12" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-28" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: pageSize }).map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 align-middle">
                      <Skeleton className="h-4 w-20" />
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-4 w-16" />
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-4 w-28" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <SharedPagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <p className="text-red-500">Error loading data: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="font-bold text-xl text-primary">Users Data</div>
          <div className="flex flex-row md:flex-row gap-4">
            <div className="w-72">
              <SearchInput
                placeholder="Search Users"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <FacetedFilter
              title="Gender"
              options={TypeOptions}
              selectedValues={selectedTypes}
              onChange={setSelectedTypes}
            />
          </div>
        </div>
      </div>
      <DataTable
        columns={userColumns}
        data={data?.users || []}
        height="33rem"
      />
      <SharedPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}

export default DataComponent;
