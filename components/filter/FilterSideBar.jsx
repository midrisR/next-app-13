"use client";
import { useEffect, useState, useCallback } from "react";
import { Filter, X } from "lucide-react";
import FilterBrands from "./brands";
import FilterCategories from "./categories";

/**
 * Responsive Filter Sidebar
 * - Desktop (lg+): persistent sidebar on the page's side
 * - Mobile/Tablet (<lg): hidden; a "Filters" button appears that opens a slide-over panel
 */
export default function FilterSideBar({ brands, categories, onReset }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const openPanel = useCallback(() => setOpen(true), []);

  // Close on ESC and lock scroll when panel is open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      // lock scroll
      const { overflow } = document.body.style;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = overflow;
      };
    }
  }, [open, close]);

  const SidebarContent = (
    <div className="w-72 bg-white shadow-md p-4 rounded-lg h-full overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <Filter size={18} /> Filters
        </div>
        {/* Close button only visible on mobile slide-over */}
        <button
          type="button"
          aria-label="Close filters"
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={close}
        >
          <X size={18} />
        </button>
      </div>

      {/* Categories */}
      <FilterCategories categories={categories} />
      {/* Brands */}
      <FilterBrands brands={brands} />

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-4">
        {/* <button className="bg-black text-white py-2 rounded-md">Apply</button> */}
        <button
          type="button"
          className="bg-gray-100 py-2 rounded-md"
          onClick={() => {
            onReset?.();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile trigger */}
      <div className="lg:hidden mb-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm shadow-sm hover:bg-gray-50"
          onClick={openPanel}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="filter-panel"
        >
          <Filter size={16} />
          Filters
        </button>
      </div>

      {/* Desktop persistent sidebar */}
      <aside className="hidden lg:block">{SidebarContent}</aside>

      {/* Mobile slide-over */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          id="filter-panel"
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 max-w-[85vw]">
            <div className="h-full translate-x-0 animate-[slideIn_.2s_ease-out]">
              {SidebarContent}
            </div>
          </div>

          {/* Keyframe for a tiny slide-in animation */}
          <style jsx global>{`
            @keyframes slideIn {
              from {
                transform: translateX(8%);
                opacity: 0.8;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
