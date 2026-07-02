"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";
import PortfolioLightbox from "./PortfolioLightbox";

export default function PortfolioGrid({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-bg-card hover:bg-accent/10 text-gray-400 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-bg-card border border-white/5 hover:border-accent/30 transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => setLightboxImage(project.image)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:scale-110"
                aria-label="Expand image"
              >
                <Expand size={18} />
              </button>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-lg text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <PortfolioLightbox
        image={lightboxImage}
        alt="Portfolio project"
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}