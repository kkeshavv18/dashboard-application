import { DataTable } from "@/components/shared/data-table";
import { useState } from "react";
import { userColumns } from "./column";
import { FacetedFilter } from "../shared/faceted-filter";
import SearchInput from "../shared/search-input";
import { SharedPagination } from "../shared/shared-pagination";
import { users } from "@/data/users";
function DataComponent() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const TypeOptions = [
    { label: "ALL GENDERS", value: "all" },
    { label: "MALE", value: "male" },
    { label: "FEMALE", value: "female" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="font-bold text-xl text-primary"> Users Data</div>
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
      <DataTable columns={userColumns} data={users} />
      <SharedPagination
        currentPage={1}
        totalPages={10}
        pageSize={10}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
    </div>
  );
}

export default DataComponent;
