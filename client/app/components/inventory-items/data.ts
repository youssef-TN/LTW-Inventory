// component/sidebar/sidebarData.ts
import { useTranslation } from "react-i18next";

import { ChartColumn, Home, ShoppingCart, Tag, Warehouse } from "lucide-react";

import sidebarIds from "./ids.json";


export const sidebarData = () => {
  const { t } = useTranslation();
  return {
	[sidebarIds.home]: {
	  id: sidebarIds.home,
	  display: t("sidebar.home"),
	  icon: Home,
	  url: "/",
	},
	[sidebarIds.inventory]: {
	  id: sidebarIds.inventory,
	  display: t("sidebar.inventory.display"),
	  icon: Warehouse,
	  children: [
		{
		  id: sidebarIds.inventoryItems,
		  display: t("sidebar.inventory.items"),
		  url: "inventory/items",
		},
		{
		  id: sidebarIds.inventoryItemGroups,
		  display: t("sidebar.inventory.itemGroups"),
		  url: "inventory/item-groups",
		},
		{
		  id: sidebarIds.inventoryPriceLists,
		  display: t("sidebar.inventory.priceLists"),
		  url: "inventory/price-lists",
		},
		{
		  id: sidebarIds.inventoryInventoryAdjustments,
		  display: t("sidebar.inventory.inventoryAdjustments"),
		  url: "inventory/inventory-adjustments",
		},
	  ],
	},
	[sidebarIds.sales]: {
	  id: sidebarIds.sales,
	  display: t("sidebar.sales.display"),
	  icon: ShoppingCart,
	  children: [
		{
		  id: sidebarIds.salesCustomers,
		  display: t("sidebar.sales.customers"),
		  url: "sales/customers",
		},
		{
		  id: sidebarIds.salesSalesOrders,
		  display: t("sidebar.sales.salesOrders"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesPackages,
		  display: t("sidebar.sales.packages"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesShipments,
		  display: t("sidebar.sales.shipments"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesInvoices,
		  display: t("sidebar.sales.invoices"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesSalesReceived,
		  display: t("sidebar.sales.salesReceipts"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesSalesReceived,
		  display: t("sidebar.sales.paymentsReceived"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesSalesReturns,
		  display: t("sidebar.sales.salesReturns"),
		  url: "sales/sales-orders",
		},
		{
		  id: sidebarIds.salesCreditNotes,
		  display: t("sidebar.sales.creditNotes"),
		  url: "sales/sales-orders",
		},
	  ],
	},
	[sidebarIds.purchases]: {
	  id: sidebarIds.purchases,
	  display: t("sidebar.purchases.display"),
	  icon: Tag,
	  children: [
		{
		  id: sidebarIds.purchasesVendors,
		  display: t("sidebar.purchases.vendors"),
		  url: "purchases/vendors",
		},
		{
		  id: sidebarIds.purchasesExpenses,
		  display: t("sidebar.purchases.purchaseOrders"),
		  url: "purchases/purchases",
		},
		{
		  id: sidebarIds.purchasesPurchaseOrders,
		  display: t("sidebar.purchases.expenses"),
		  url: "purchases/purchases",
		},
		{
		  id: sidebarIds.purchasesReceives,
		  display: t("sidebar.purchases.purchaseReceives"),
		  url: "purchases/purchases",
		},
		{
		  id: sidebarIds.purchasesBills,
		  display: t("sidebar.purchases.bills"),
		  url: "purchases/purchases",
		},
		{
		  id: sidebarIds.purchasesPaymentsMade,
		  display: t("sidebar.purchases.paymentsMade"),
		  url: "purchases/purchases",
		},
		{
		  id: sidebarIds.purchasesVendorCredits,
		  display: t("sidebar.purchases.vendorCredits"),
		  url: "purchases/purchases",
		},
	  ],
	},
	[sidebarIds.reports]: {
	  id: sidebarIds.reports,
	  display: t("sidebar.reports"),
	  icon: ChartColumn,
	  url: "reports",
	},
  };
};

"dataType": {
      "display": "Data Type",
      "options": {
        "textInput": "Text Input",
        "number": "Number",
        "amount": "Amount",
        "percent": "Percent",
        "date": "Date",
        "dataAndTime": "Date and Time",
        "checkBox": "Check Box",
        "dropdown": "Dropdown",
        "multiSelect": "Multi Select",
        "autoGenerateNumber": "Auto Generate Number",
        "textArea": "Text Area",
        "attachment": "Attachment"
      }
    },"required": { "display": "Required" },
    "showAllInPDF": { "display": "Show All in PDF" },
    "status": {
      "display": "Status",
      "options": {
        "active": "Active",
        "inactive": "Inactive"
      }
    }