"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

// Zones d'intervention dans le Puy-de-Dôme (anonymisées)
const interventionZones = [
  { name: "Clermont-Ferrand", lat: 45.7772, lng: 3.087, projects: 45 },
  { name: "Riom", lat: 45.8942, lng: 3.1125, projects: 28 },
  { name: "Issoire", lat: 45.5433, lng: 3.2483, projects: 22 },
  { name: "Thiers", lat: 45.8564, lng: 3.5475, projects: 18 },
  { name: "Cournon-d'Auvergne", lat: 45.7411, lng: 3.1953, projects: 15 },
  { name: "Beaumont", lat: 45.7517, lng: 3.0858, projects: 12 },
  { name: "Aubière", lat: 45.7506, lng: 3.1089, projects: 11 },
  { name: "Chamalières", lat: 45.7744, lng: 3.0658, projects: 10 },
];

export function InterventionMapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically import Leaflet (client-side only)
    const loadMap = async () => {
      if (typeof window === "undefined") return;

      const L = (await import("leaflet")).default;

      // Import Leaflet CSS dynamically
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Fix for default markers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      if (mapRef.current && !mapRef.current.hasChildNodes()) {
        // Initialize map centered on Puy-de-Dôme
        const map = L.map(mapRef.current).setView([45.7772, 3.287], 10);
        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map);

        // Custom icon
        const customIcon = L.divIcon({
          className: "custom-map-marker",
          html: `
            <div style="
              background: #a18072;
              width: 32px;
              height: 32px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            ">
              <div style="
                transform: rotate(45deg);
                margin-top: 4px;
                margin-left: 4px;
                color: white;
                font-size: 16px;
              ">📍</div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        // Add markers for intervention zones
        interventionZones.forEach((zone) => {
          const marker = L.marker([zone.lat, zone.lng], { icon: customIcon }).addTo(map);

          marker.bindPopup(`
            <div style="text-align: center; padding: 8px;">
              <strong style="color: #47614a; font-size: 16px;">${zone.name}</strong><br/>
              <span style="color: #7d957f; font-size: 14px;">${zone.projects} projets réalisés</span>
            </div>
          `);
        });

        // Add circle overlay for intervention zone
        L.circle([45.7772, 3.287], {
          color: "#a18072",
          fillColor: "#a18072",
          fillOpacity: 0.1,
          radius: 25000, // 25km radius
        }).addTo(map);
      }
    };

    loadMap();

    // Cleanup: remove map instance on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-terra-50 via-sand-100 to-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-terra-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Nos Interventions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Présents partout dans
            <br />
            <span className="text-terra-600">le Puy-de-Dôme</span>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed max-w-2xl mx-auto">
            Découvrez les zones où nous avons réalisé nos projets d'aménagement extérieur.
            Plus de 150 chantiers dans tout le département.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <div
              ref={mapRef}
              className="w-full h-[500px] bg-sand-100"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sand-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-terra-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-terra-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-forest-900">150+</div>
                  <div className="text-sm text-sage-600">Projets réalisés</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-forest-700 to-forest-900 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="font-heading text-xl font-bold mb-4">
                Villes principales
              </h3>
              <div className="space-y-3">
                {interventionZones.slice(0, 5).map((zone, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sand-100">{zone.name}</span>
                    <span className="text-terra-300 font-semibold">
                      {zone.projects} projets
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-terra-50 rounded-2xl p-6 border-2 border-terra-200">
              <p className="text-sm text-forest-800 leading-relaxed">
                <strong className="text-terra-700">Rayon d'intervention :</strong> Nous
                intervenons dans tout le Puy-de-Dôme et jusqu'à 25km autour de
                Clermont-Ferrand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
