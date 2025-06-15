import type { Route } from "./+types";

import HomeDashboard from "~/components/home/dashboard"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "Home" },
  ];
}

export default function Home() {
  
  return (<HomeDashboard/>);
}
