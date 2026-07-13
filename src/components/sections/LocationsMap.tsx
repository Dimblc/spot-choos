"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { locations } from "@/lib/data";

const RED = "#F91814";

export default function LocationsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;
    initializedRef.current = true;

    let map: import("leaflet").Map | null = null;

    (async () => {
      const L = (await import("leaflet")).default;
      if (!containerRef.current) return;

      map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${RED}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" fill="${RED}"/><circle cx="12" cy="9" r="2.5" fill="#fff" stroke="#fff"/></svg>`,
        iconSize: [36, 36],
        iconAnchor: [18, 34],
        popupAnchor: [0, -30],
      });

      const bounds = L.latLngBounds([]);

      locations.forEach((loc) => {
        const marker = L.marker(loc.coords, { icon }).addTo(map!);
        bounds.extend(loc.coords);
        marker.bindPopup(
          `<div style="font-family:inherit;min-width:180px">
            <strong style="color:${RED};text-transform:uppercase">${loc.nameRu}</strong><br/>
            ${loc.address}<br/>
            <span style="color:#777">${loc.hours.join("<br/>")}</span><br/>
            <a href="tel:${loc.phone}" style="color:${RED}">${loc.phoneDisplay}</a>
          </div>`
        );
      });

      map.fitBounds(bounds, { padding: [40, 40] });
    })();

    return () => {
      map?.remove();
      initializedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Карта с точками Spot & Choo's в Новосибирске"
      className="w-full h-[360px] md:h-[480px] rounded-[24px] overflow-hidden border-2 border-red/20 z-0 relative"
    />
  );
}
