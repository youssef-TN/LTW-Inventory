"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import ids from "~/components/inventory-items/ids.json";

// Mock data for Items
export type Item = {
  [ids.field.id]: string;
  [ids.field.type]: number; // 0: storable, 1: non-storable, 2: service
  [ids.field.name]: string;
  [ids.field.unit]: string;
  [ids.field.returnableItem]: boolean;
  [ids.field.dimensions]: {
    [ids.field.length]: number;
    [ids.field.width]: number;
    [ids.field.height]: number;
    [ids.field.unit]: string;
  };
  [ids.field.brand]: string;
  [ids.field.salesInformation]: {
    [ids.field.sellingPrice]: number;
    [ids.field.account]: string;
    [ids.field.description]: string;
    [ids.field.tax]: number;
  };
  [ids.field.purchaseInformation]: {
    [ids.field.costPrice]: number;
    [ids.field.account]: string;
    [ids.field.description]: string;
    [ids.field.tax]: number;
  };
  [ids.field.stockOnHand]: number;
  [ids.field.status]: number; // 0: active, 1: inactive
};

const data: Item[] = [
  {
    id: "ITEM-001",
    type: "storable",
    name: "Steel Bolt",
    unit: "pcs",
    "returnable-item": false,
    dimensions: {
      length: 5,
      width: 0.5,
      height: 0.5,
      unit: "cm",
    },
    weight: { value: 0.02, unit: "kg" },
    brand: "Fasteners Inc.",
    "sales-information": {
      "selling-price": 400,
      account: "sales account",
      description: "High tensile steel bolt",
      tax: 5,
    },
    "purchase-information": {
      "cost-price": 5000,
      account: "unregistered account",
      description: "Raw steel bolt",
      tax: 5,
    },
    "stock-on-hand": 1500,
    active: "active",
  },
];

export const useItemColumns = (): ColumnDef<Item>[] => {
  const { t } = useTranslation();
  return [
    {
      accessorKey: ids.field.id,
      header: t("common.labels.id"),
    },
    {
      accessorKey: ids.field.type,
      header: t("common.labels.type"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue(ids.field.type)}</div>
      ),
    },
    {
      accessorKey: ids.field.name,
      header: t("common.labels.name"),
    },
    {
      accessorKey: ids.field.unit,
      header: t("common.labels.unit"),
    },
    {
      accessorFn: (original) => {
        const dims = original[ids.field.dimensions] as {
          [key: string]: string | number;
        };
        return `${dims[ids.field.length]} x ${dims[ids.field.width]} x ${
          dims[ids.field.height]
        } ${dims[ids.field.unit]}`;
      },
      id: ids.field.dimensions,
      header: t("common.labels.dimensions"),
    },
    {
      accessorKey: ids.field.brand,
      header: t("common.labels.brand"),
    },
    {
      accessorKey: `${ids.field.salesInformation}.${ids.field.sellingPrice}`,
      header: t("pages.inventory.items.sales.sellingPrice"),
      cell: ({ row }) => (
        <div className="text-right">
          $
          {row.getValue(
            `${ids.field.salesInformation}.${ids.field.sellingPrice}`
          )}
        </div>
      ),
    },
    {
      accessorFn: (original) => {
        const purchaseInfo = original[ids.field.purchaseInformation] as {
          [key: string]: string | number;
        };
        console.log("purchaseInfo", purchaseInfo);
        return purchaseInfo[ids.field.costPrice];
      },
      header: t("pages.inventory.items.purchase.costPrice"),
      cell: ({ row }) => (
        <div className="text-right">
          $
          {row.getValue(ids.field.costPrice)}
        </div>
      ),
    },
    {
      accessorKey: ids.field.stockOnHand,
      header: t("pages.inventory.items.inventory.stockOnHand"),
      cell: ({ row }) => <div>{row.getValue(ids.field.stockOnHand)}</div>,
    },
  ];
};

export default function component() {
  const { t } = useTranslation();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const columns= useItemColumns()
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {t("pages.inventory.items.actions.customizeColumns")} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
