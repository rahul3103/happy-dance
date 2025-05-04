import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { LinkButton } from "@/components/link-button";
const blogPosts = [
  {
    id: "hidden-taxes",
    title: "The hidden 'taxes' in talent acquisition",
    image: {
      src: "/hidden-taxes.jpg",
      alt: "Hidden Taxes",
      width: 800,
      height: 600,
    },
    author: {
      name: "Bryan Adams",
      role: "CEO",
      image: {
        src: "/bryan-adams-happydance.jpg",
        alt: "a person smiling at the camera",
        width: 50,
        height: 50,
      },
      link: "/insights/authors/bryan-adams/",
    },
    link: "/insights/posts/the-hidden-taxes-in-talent-acquisition/",
  },
  {
    id: "jobpixel",
    title: "Partner spotlight: JobPixel",
    image: {
      src: "/partner-spotlight-jobpixel.jpg",
      alt: "Partner Spotlight Jobpixel",
      width: 800,
      height: 600,
    },
    author: {
      name: "Melanie Murphy",
      role: "CMO",
      image: {
        src: "/melanie-murphy-happydance.jpg",
        alt: "a person smiling at camera",
        width: 50,
        height: 50,
      },
      link: "/insights/authors/melanie-murphy/",
    },
    link: "/insights/posts/partner-spotlight-jobpixel/",
  },
  {
    id: "apply-to-offer",
    title: "From apply to offer: Where candidates drop off and how to fix it",
    image: {
      src: "/apply-to-offer.jpg",
      alt: "Apply To Offer",
      width: 800,
      height: 600,
    },
    author: {
      name: "Melanie Murphy",
      role: "CMO",
      image: {
        src: "/melanie-murphy-happydance.jpg",
        alt: "a person smiling at camera",
        width: 50,
        height: 50,
      },
      link: "/insights/authors/melanie-murphy/",
    },
    link: "/insights/posts/from-apply-to-offer-where-candidates-drop-off-and-how-to-fix-it/",
  },
];

export function BlogPostsBlock() {
  return (
    <section className="py-12 lg:py-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <div className="mx-auto mb-10 text-center text-lg font-normal leading-[1.3] lg:mb-14 lg:w-8/12">
          <h2 className="mb-5 font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]">
            Latest insights
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="relative isolate">
                <div className="group">
                  <div className="rounded-4xl mb-8 overflow-hidden">
                    <div className="relative w-full">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        width={post.image.width}
                        height={post.image.height}
                        className="w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-[103%]"
                      />
                    </div>
                  </div>
                  <h2 className="mb-3 text-2xl font-normal leading-[1.5] lg:mb-5">
                    {post.title}
                  </h2>
                  <Link
                    href={post.link}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "padding-inline mb-5 text-lg font-semibold has-[>svg]:pl-0",
                    )}
                  >
                    Read more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <Link
                  href={post.author.link}
                  className="mt-4 flex gap-3 text-lg"
                  aria-label={`See other posts from ${post.author.name}`}
                >
                  <div className="relative size-[50px]">
                    <Image
                      src={post.author.image.src}
                      alt={post.author.image.alt}
                      width={post.author.image.width}
                      height={post.author.image.height}
                      className="mr-3 rounded-full"
                    />
                  </div>
                  <div>
                    <span className="block font-semibold">
                      {post.author.name}
                    </span>
                    <span className="block">{post.author.role}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center lg:mt-8">
          <LinkButton showIcon={false} href="/insights/posts/">
            View all posts
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
