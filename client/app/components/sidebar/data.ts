// component/sidebar/sidebarData.ts
import { useTranslation } from "react-i18next";

import { ChartColumn, Home, ShoppingCart, Tag, Warehouse } from "lucide-react";

import ids from "./ids.json";

export const sidebarData = () => {
  const { t } = useTranslation();
  return {
    [ids.main.home]: {
      id: ids.main.home,
      label: t("navigation.main.home"),
      icon: Home,
      url: "/",
    },
    [ids.main.inventory]: {
      id: ids.main.inventory,
      label: t("navigation.main.inventory"),
      icon: Warehouse,
      children: [
        {
          id: ids.inventory.items,
          label: t("navigation.inventory.items"),
          url: "inventory/items",
        },
        {
          id: ids.inventory.itemGroups,
          label: t("navigation.inventory.itemGroups"),
          url: "inventory/item-groups",
        },
        {
          id: ids.inventory.priceLists,
          label: t("navigation.inventory.priceLists"),
          url: "inventory/price-lists",
        },
        {
          id: ids.inventory.adjustments,
          label: t("navigation.inventory.adjustments"),
          url: "inventory/inventory-adjustments",
        },
      ],
    },
    [ids.main.sales]: {
      id: ids.main.sales,
      label: t("navigation.main.sales"),
      icon: ShoppingCart,
      children: [
        {
          id: ids.sales.customers,
          label: t("navigation.sales.customers"),
          url: "sales/customers",
        },
        {
          id: ids.sales.orders,
          label: t("navigation.sales.orders"),
          url: "sales/sales-orders",
        },
        {
          id: ids.sales.packages,
          label: t("navigation.sales.packages"),
          url: "sales/packages",
        },
        {
          id: ids.sales.shipments,
          label: t("navigation.sales.shipments"),
          url: "sales/shipments",
        },
        {
          id: ids.sales.invoices,
          label: t("navigation.sales.invoices"),
          url: "sales/invoices",
        },
        {
          id: ids.sales.receipts,
          label: t("navigation.sales.receipts"),
          url: "sales/sales-receipts",
        },
        {
          id: ids.sales.payments,
          label: t("navigation.sales.payments"),
          url: "sales/sales-payments-received",
        },
        {
          id: ids.sales.returns,
          label: t("navigation.sales.returns"),
          url: "sales/sales-returns",
        },
        {
          id: ids.sales.creditNotes,
          label: t("navigation.sales.creditNotes"),
          url: "sales/credit-notes",
        },
      ],
    },
    [ids.main.purchases]: {
      id: ids.main.purchases,
      label: t("navigation.main.purchases"),
      icon: Tag,
      children: [
        {
          id: ids.purchases.vendors,
          label: t("sidebar.purchases.vendors"),
          url: "purchases/vendors",
        },
        {
          id: ids.purchases.expenses,
          label: t("sidebar.purchases.expenses"),
          url: "purchases/expenses",
        },
        {
          id: ids.purchases.orders,
          label: t("sidebar.purchases.orders"),
          url: "purchases/purchases-orders",
        },
        {
          id: ids.purchases.receives,
          label: t("sidebar.purchases.receives"),
          url: "purchases/purchase-receives",
        },
        {
          id: ids.purchases.bills,
          label: t("sidebar.purchases.bills"),
          url: "purchases/bills",
        },
        {
          id: ids.purchases.payments,
          label: t("sidebar.purchases.payments"),
          url: "purchases/payments-made",
        },
        {
          id: ids.purchases.credits,
          label: t("sidebar.purchases.credits"),
          url: "purchases/vendor-credits",
        },
      ],
    },
    [ids.main.reports]: {
      id: ids.main.reports,
      label: t("navigation.main.reports"),
      icon: ChartColumn,
      url: "reports",
    },
  };
};
