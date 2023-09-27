import { Table } from "@tanstack/react-table";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>) {
    return (
    <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
      <div className="tw-flex-1 tw-text-sm tw-font-bold tw-text-slate-600 dark:tw-text-slate-400">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-4">
        <div className="tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-bold tw-text-slate-600 dark:tw-text-slate-400">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="tw-border-slate-400 tw-divide-slate-400 tw-bg-slate-200 dark:tw-bg-slate-800 tw-flex tw-text-2xl  tw-items-center tw-space-x-1 tw-border tw-rounded dark:tw-border-slate-600  tw-divide-x dark:tw-divide-slate-600">
          <button
            className="tw-hidden lg:tw-flex dark:disabled:tw-text-slate-600 disabled:tw-text-slate-400"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="tw-sr-only">Go to first page</span>
            <BiChevronsLeft />
          </button>
          <button
            className="dark:disabled:tw-text-slate-600 disabled:tw-text-slate-400"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="tw-sr-only">Go to previous page</span>
            <BiChevronLeft />
          </button>
          <button
          className="dark:disabled:tw-text-slate-600 disabled:tw-text-slate-400"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="tw-sr-only">Go to next page</span>
            <BiChevronRight />
          </button>
          <button
            className="tw-hidden lg:tw-flex dark:disabled:tw-text-slate-600 disabled:tw-text-slate-400"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="tw-sr-only">Go to last page</span>
            <BiChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
}
