import type { Route } from "./+types";

import InventoryItems from "~/components/inventory-items/index"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "inventory Items" },
    { name: "inventory Items" },
  ];
}

export default function Items() {
  
  return (<InventoryItems/>);
}
