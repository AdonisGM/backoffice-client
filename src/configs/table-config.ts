import { AccessorColumnDef, GroupColumnDef } from '@tanstack/table-core';

export function getDefaultColumnAccessor<TData>(): Partial<AccessorColumnDef<TData, unknown>> {
  return {
    cell: (info) => info.getValue(),
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
  };
}

export function getDefaultColumnGroup<TData>(): Partial<GroupColumnDef<TData, unknown>> {
  return {
    cell: (info) => info.getValue(),
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
  };
}

export const pageSizeOptions = [10, 20, 50, 100];
