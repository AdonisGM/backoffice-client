import { AccessorColumnDef } from '@tanstack/table-core';

export function getDefaultColumnAccessor<TData>(): Partial<AccessorColumnDef<TData, any>> {
  return {
    cell: (info) => info.getValue(),
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
  };
}
