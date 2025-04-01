import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "./container";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { format } from "date-fns";
import { strapiImage } from "@/lib/strapi/strapiImage";
import DynamicZoneManager from "./dynamic-zone/manager";
import { Project } from "@/types/types";

export async function BlogLayout({
  project,
  locale,
  children,
}: {
  project: Project;
  locale: string;
  children: React.ReactNode;
}) {

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="flex justify-between items-center px-2 py-8">
        <Link href="/blog" className="flex space-x-2 items-center">
          <IconArrowLeft className="w-4 h-4 text-muted" />
          <span className="text-sm text-muted">Back</span>
        </Link>
      </div>
      <div className="w-full mx-auto">
        {project.image ? (
          <Image
            src={strapiImage(project.image.url)}
            height="800"
            width="800"
            className="h-40 md:h-96 w-full aspect-square object-cover rounded-3xl [mask-image:radial-gradient(circle,white,transparent)]"
            alt={project.title}
          />
        ) : (
          <div className="h-40 md:h-96 w-full aspect-squace rounded-3xl shadow-derek bg-neutral-900 flex items-center justify-center">
            {/* <Logo /> */}
          </div>
        )}
      </div>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <project className="pb-8 pt-8">
            <div className="flex gap-4 flex-wrap ">
              {project.categories?.map((category, idx) => (
                <p
                  key={`category-${idx}`}
                  className="text-xs font-bold text-muted px-2 py-1 rounded-full bg-neutral-800 capitalize"
                >
                  {category.name}
                </p>
              ))}
            </div>
            <header className="flex flex-col">
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl ">
                {project.title}
              </h1>
            </header>
            <div className="mt-8 prose prose-sm prose-invert">
              {children}
            </div>
            <div className="flex space-x-2 items-center pt-12 border-t border-neutral-800 mt-12">
              <div className="flex space-x-2 items-center ">
                {/* <Image
                  src={project.authorAvatar}
                  alt={project.author}
                  width={20}
                  height={20}
                  className="rounded-full h-5 w-5"
                />
                <p className="text-sm font-normal text-muted">
                  {project.author}
                </p> */}
              </div>
              <div className="h-5 rounded-lg w-0.5 bg-neutral-700" />
              <time
                dateTime={project.publishedAt}
                className="flex items-center text-base "
              >
                <span className="text-muted text-sm">
                  {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                </span>
              </time>
            </div>
          </project>
        </div>
      </div>
      {project?.dynamic_zone && (<DynamicZoneManager dynamicZone={project?.dynamic_zone} locale={locale} />)}
    </Container>
  );
}
