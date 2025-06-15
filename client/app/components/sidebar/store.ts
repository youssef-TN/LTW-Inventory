import { create } from "zustand";

// Define the sidebar store's state and actions
interface SidebarState {
  collapsibleMenuId: string | null;
  setCollapsibleMenuId: (menuId: string | null) => void;
}

/**
 * Zustand store for managing the sidebar's state.
 *
 * @property collapsibleMenuId - ID of the currently collapsible menu (null if none are open).
 *
 * @method setCollapsibleMenuId - Sets which submenu section is expanded (pass null to collapse all).
 **/
export const useSidebarStore = create<SidebarState>((set) => ({
  collapsibleMenuId: null,
  setCollapsibleMenuId: (menuId: string | null) =>
    set(() => ({ collapsibleMenuId: menuId })),
}));
