import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { LinkButton } from "@/components/link-button";
import { BlogContent } from "@/types/homepage";
import { BaseLink } from "@/components/base-link";

export function BlogPostsBlock({ data }: { data: BlogContent }) {
  return (
    <section className="py-12 lg:py-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <div className="mx-auto mb-10 text-center text-lg font-normal leading-[1.3] lg:mb-14 lg:w-8/12">
          <h2 className="mb-5 font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]">
            {data.title}
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {data.posts.map((post) => (
            <div key={post.id}>
              <div className="relative isolate">
                <div className="group">
                  <div className="rounded-4xl mb-8 overflow-hidden">
                    <div className="relative w-full">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        width={800}
                        height={600}
                        className="w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-[103%]"
                      />
                    </div>
                  </div>
                  <h2 className="mb-3 text-2xl font-normal leading-[1.5] lg:mb-5">
                    {post.title}
                  </h2>
                  <BaseLink
                    href={post.link}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "padding-inline mb-5 text-lg font-semibold has-[>svg]:pl-0",
                    )}
                  >
                    {data.readMore}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </BaseLink>
                </div>
                <BaseLink
                  href={post.author.link}
                  className="mt-4 flex gap-3 text-lg"
                  aria-label={`See other posts from ${post.author.name}`}
                >
                  <div className="relative size-[50px]">
                    <Image
                      src={post.author.image.src}
                      alt={post.author.image.alt}
                      width={50}
                      height={50}
                      className="mr-3 rounded-full"
                    />
                  </div>
                  <div>
                    <span className="block font-semibold">
                      {post.author.name}
                    </span>
                    <span className="block">{post.author.role}</span>
                  </div>
                </BaseLink>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center lg:mt-8">
          <LinkButton
            showIcon={false}
            href={data.viewAll.href}
            className="w-full sm:w-auto"
          >
            {data.viewAll.text}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
