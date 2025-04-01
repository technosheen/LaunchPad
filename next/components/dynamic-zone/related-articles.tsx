"use client";
import React from "react";
import { BlogCardVertical } from "../blog-card";

export const RelatedArticles = ({ heading, sub_heading, projects, locale }: { heading: string; sub_heading: string; projects: any[], locale: string }) => {
  return (
    <div className="mt-12 pb-20">
      <h2 className="text-2xl font-bold text-neutral-200 mb-10">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <BlogCardVertical key={project.title} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
};
