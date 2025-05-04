export function Header() {
  // Navigation menu items data
  const navItems = [
    {
      id: "2fb1640a-e701-4e6a-97a2-ce16e095219b",
      label: "Platform",
      href: "/platform/",
      subItems: [
        { label: "Careers website platform", href: "/platform/" },
        {
          label: "Analytics dashboard",
          href: "/platform/analytics-dashboard/",
        },
      ],
    },
    {
      id: "c08a77fd-2b89-4ecd-9abd-e90b97733953",
      label: "Solutions",
      href: "/solutions/",
      subItems: [],
    },
    {
      id: "47f594c0-5674-4735-aaed-1847cf1f1874",
      label: "Company",
      href: "/company/",
      subItems: [],
    },
    {
      id: "8608ecd0-a3cf-4578-a3bf-c794ad670f53",
      label: "Resources",
      href: "/resources/",
      subItems: [],
    },
  ];

  // Featured case study data
  const featuredCaseStudy = {
    title: "Domino's",
    image: {
      webp: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,width=800,height=600,format=webp,quality=95/media/okxonuna/dominoes-header.jpg",
      jpg: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,quality=95/media/okxonuna/dominoes-header.jpg",
      alt: "multiple screenshots of the Domino's website",
    },
    href: "/customer-experiences/dominos/",
  };

  return (
    <header
      id="header"
      data-js-control="main-header"
      data-test-id="main-header"
      className="{/* Added for state targeting */} {/* Explicitly no bottom rounding initially */} {/* Before Pseudo-element Styling for Background */} {/* Initial state: no height */} {/* Sticky State Styling for ::before */} {/* Replaced shadow-header */} {/* Expanded State Styling for ::before & Header */} group-[.expanded]:before:bg-[#fffdf6]! {/* !important override */} group-[.expanded]:max-lg:bg-[#fffdf6]! {/* !important override for header itself on mobile */} group fixed top-0 z-40 w-full rounded-b-none transition-all duration-300 ease-in-out before:absolute before:inset-0 before:h-0 before:max-h-0 before:bg-transparent before:transition-all before:duration-200 before:ease-in-out group-[.expanded]:before:h-full group-[.is-sticky]:before:h-full group-[.expanded]:before:max-h-full group-[.is-sticky]:before:max-h-full group-[.is-sticky]:before:bg-[#fffdf6] group-[.expanded]:before:shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] group-[.is-sticky]:before:shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] group-[.expanded]:max-lg:h-full group-[.expanded]:before:max-lg:shadow-none group-[.expanded]:before:lg:rounded-b-[30px]"
    >
      <div className="relative isolate group-[.expanded]:max-lg:flex group-[.expanded]:max-lg:h-full group-[.expanded]:max-lg:flex-col">
        {/* Top Bar Content */}
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-[18px] lg:py-5">
          {/* Logo */}
          <a
            className="{/* Replaced focus-state */} block p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212]"
            href="/"
            data-js-control="site-logo"
            data-test-id="site-logo"
            style={{ transform: "none", opacity: 1 }}
          >
            <img
              src="/assets/img/brand/logo.svg"
              width="202"
              height="37"
              className="[.is-sticky_&]:invert-0! {/* !important override */} h-[27px] w-auto lg:h-[37px] dark:invert [.invert-header_&]:invert [.invert-header_.expanded_&]:invert-0 [.invert-header_.is-sticky_&]:invert-0"
              alt="HappyDance"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav
              className="flex flex-col lg:flex-row"
              data-test-id="main-navigation"
            >
              <ul
                className="flex flex-row items-center gap-4"
                data-js-control="menu-items"
                data-test-id="menu-items"
              >
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="relative"
                    data-test-id="nav-item"
                    style={{ transform: "none", opacity: 1 }}
                  >
                    <button
                      type="button"
                      aria-controls={`mega-menu-panel-${item.id}`}
                      aria-expanded="false"
                      data-js-control="mega-menu-trigger"
                      className="group/navitem {/* Replaced focus-state */} flex items-center p-1 pr-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212]"
                      data-test-id="mega-menu-trigger"
                    >
                      <span className="text-base group-hover/navitem:underline group-focus-visible:underline [.invert-header_&]:invert [.invert-header_header.expanded_&]:invert-0 [.invert-header_header.is-sticky_&]:invert">
                        {item.label}
                      </span>
                      {/* Chevron Span */}
                      <span className="absolute bottom-[5px] right-0 isolate size-4 before:absolute before:left-0 before:top-0 before:inline-block before:h-4 before:w-[1.5px] before:-rotate-[135deg] before:border-b-[8px] before:border-black before:bg-transparent before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-4 after:w-[1.5px] after:rotate-[135deg] after:border-b-[8px] after:border-black after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:content-[''] group-aria-expanded:-translate-y-[5px] group-aria-expanded:rotate-0 group-aria-expanded:before:-rotate-45 group-aria-expanded:after:rotate-45 [.invert-header_&]:invert [.invert-header_header.expanded_&]:invert-0 [.invert-header_header.is-sticky_&]:invert-0"></span>
                    </button>
                  </li>
                ))}

                {/* Desktop CTA Button */}
                <li
                  className="relative"
                  data-test-id="landing-page-link"
                  style={{ transform: "none", opacity: 1 }}
                >
                  <a
                    className="{/* Base padding from .btn.btn-small */} {/* Font from .btn.btn-small */} {/* Base: btn-tertiary */} {/* Hover: btn-tertiary */} py-3! {/* !important override */} group inline-flex items-center justify-center gap-2 rounded-full border border-[#ff784a] bg-[#ff784a] px-6 py-4 text-center text-base font-semibold leading-tight text-black transition-colors duration-500 ease-in-out hover:border-black hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:py-4 lg:py-4 dark:focus-visible:ring-offset-[#121212]"
                    id="js-landing-page-link-nav"
                    data-test-id="js-landing-page-link-nav"
                    href="/book-a-demo/"
                  >
                    <span className="relative top-[1px] mr-1 leading-[1.5]">
                      Book a demo
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Area */}
        <div
          className="h-0 overflow-hidden group-[.expanded]:max-lg:flex-1"
          data-js-control="mobile-focus-trap"
        >
          {/* Mobile Menu Trigger */}
          <div className="absolute right-4 top-[18px] flex items-center lg:hidden">
            <button
              id="menubutton"
              type="button"
              className="[.invert-header_&]:invert [.invert-header_.expanded_&]:invert-0 [.invert-header_.is-sticky_&]:invert-0 [.is-sticky_&]:!invert-0"
              aria-controls="mobile-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-js-control="mobile-menu-button"
              data-test-id="mobile-menu-button"
            >
              <svg
                className="mobile-menu-icon w-8"
                aria-hidden="true"
                viewBox="0 0 100 100"
              >
                <path
                  className="line top"
                  d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
                />
                <path className="line middle" d="m 70,50 h -40" />
                <path
                  className="line bottom"
                  d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Panel */}
          <nav
            id="mobile-nav"
            aria-labelledby="menubutton"
            data-js-control="mobile-menu"
            className="lg:hidden! {/* Initial state, !important lg override */} {/* Transition for JS */} invisible hidden h-full overflow-hidden opacity-0 transition-all duration-300 ease-in-out"
            data-test-id="mobile-nav"
          >
            <div className="flex h-[calc(100%_-_var(--site-banner-height))] flex-col">
              <div className="flex-1 overflow-y-scroll">
                <ul
                  className="flex h-full flex-col overflow-y-auto px-4 pb-8 pt-4 md:px-6 md:pt-6"
                  data-test-id="mobile-nav-list"
                >
                  {navItems.map((item) => (
                    <li
                      key={item.id}
                      className="relative"
                      data-test-id={`mobile-nav-item-${item.id}`}
                    >
                      <button
                        id={`mobile-menu-button-${item.id}`}
                        type="button"
                        className="hs-collapse-toggle {/* Focus State */} group block w-full py-4 pr-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212]"
                        aria-expanded="false"
                        aria-controls={`mobile-menu-dropdown-${item.id}`}
                        data-hs-collapse={`#mobile-menu-dropdown-${item.id}`}
                      >
                        <span className="text-lg font-normal font-semibold leading-[1.3] text-black group-focus-visible:underline [.invert-header_&]:invert [.invert-header_header.expanded_&]:invert-0 [.invert-header_header.is-sticky_&]:invert-0">
                          {item.label}
                        </span>
                        {/* Chevron Span */}
                        <span className="absolute right-0 top-[22px] isolate size-4 before:absolute before:left-0 before:top-0 before:inline-block before:h-4 before:w-[1.5px] before:-rotate-[135deg] before:border-b-[8px] before:border-black before:bg-transparent before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-4 after:w-[1.5px] after:rotate-[135deg] after:border-b-[8px] after:border-black after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:content-[''] group-aria-expanded:-translate-y-[5px] group-aria-expanded:rotate-0 group-aria-expanded:before:-rotate-45 group-aria-expanded:after:rotate-45 [.invert-header_&]:invert [.invert-header_header.expanded_&]:invert-0 [.invert-header_header.is-sticky_&]:invert-0"></span>
                      </button>
                      {/* Mobile Dropdown Panel */}
                      <div
                        id={`mobile-menu-dropdown-${item.id}`}
                        className="hs-collapse hidden w-full overflow-hidden p-[2px] transition-[height] duration-300"
                        aria-labelledby={`mobile-menu-button-${item.id}`}
                        data-test-id="mobile-menu-dropdown"
                      >
                        {item.subItems.length > 0 && (
                          <nav data-test-id="mobile-nav-secondary-nav">
                            <ul
                              aria-label={item.label.toUpperCase()}
                              data-test-id="mobile-nav-secondary-nav-list"
                            >
                              {item.subItems.map((subItem, index) => (
                                <li
                                  key={index}
                                  data-test-id="mobile-nav-secondary-nav-link"
                                >
                                  <a
                                    className="group block py-3"
                                    href={subItem.href}
                                  >
                                    <span className="block text-lg font-normal leading-[1.3] text-[#5c5c5c] group-focus-visible:underline">
                                      {subItem.label}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Mobile CTA Button */}
              <div
                className="shrink-0 border-t p-4"
                data-test-id="mobile-nav-landing-page-link"
              >
                <a
                  className="{/* Changed from */} {/* Base padding from .btn.btn-small */} {/* Font from .btn.btn-small */} {/* Base: btn-tertiary */} {/* Hover: btn-tertiary */} group flex inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#ff784a] bg-[#ff784a] px-6 py-4 text-center text-base font-semibold leading-tight text-black transition-colors duration-500 ease-in-out hover:border-black hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:py-4 lg:py-4 dark:focus-visible:ring-offset-[#121212]"
                  id="js-landing-page-link-mobile-nav"
                  href="/book-a-demo/"
                >
                  <span className="relative top-[1px] mr-1 leading-[1.5]">
                    Book a demo
                  </span>
                  <svg
                    className="h-[13px] w-[15px] -translate-x-1 fill-current transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <use xlinkHref="/assets/img/svg-sprite.svg#icon-arrow-right-long" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Mega Menu Container */}
        <div
          id="mega-menu"
          className="invisible hidden grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] lg:grid"
          data-js-control="mega-menu-container"
          data-test-id="main-navigation-panels"
        >
          <div className="overflow-hidden">
            <div className="mx-auto max-w-[1600px] px-4 lg:py-5">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  id={`mega-menu-panel-${item.id}`}
                  className="hidden"
                  data-js-control="mega-menu-panel"
                  data-test-id="mega-menu-panel"
                >
                  <div className="grid grid-cols-8 gap-6 py-8 xl:gap-12">
                    {/* Secondary Nav Columns */}
                    <nav
                      className="col-span-2 flex flex-col gap-4"
                      data-test-id="secondary-nav-item"
                    >
                      <span
                        className="block text-sm font-normal uppercase leading-[1.2] tracking-[.2em]"
                        aria-hidden="true"
                        data-test-id="secondary-nav-item-heading"
                      >
                        {item.label.toUpperCase()}
                      </span>
                      <ul
                        className="grid grid-cols-1 gap-x-6 gap-y-8"
                        aria-label={item.label.toUpperCase()}
                        data-test-id="secondary-nav-item-links"
                      >
                        {item.subItems.map((subItem, index) => (
                          <li
                            key={index}
                            data-test-id="secondary-nav-item-link"
                          >
                            <a
                              className="group/navitem group block"
                              href={subItem.href}
                            >
                              <span className="block font-semibold group-hover/navitem:underline">
                                {subItem.label}
                              </span>
                              <span aria-hidden="true" className="block">
                                Engineered to optimize user experiences and
                                improve hiring outcomes.
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* Featured Case Study CTA */}
                    <div
                      className="col-span-2 col-start-7 flex flex-col gap-4"
                      data-js-control="mega-menu-cta"
                      data-test-id="featured-case-study"
                    >
                      <div>
                        <h2 className="text-sm font-normal uppercase leading-[1.2] tracking-[.2em]">
                          Featured case study
                        </h2>
                      </div>
                      <div
                        className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-black"
                        data-test-id="featured-case-study-content"
                      >
                        <div
                          className="aspect-[366/205] h-full w-full overflow-hidden"
                          data-test-id="featured-case-study-image"
                        >
                          <picture>
                            <source
                              srcSet={featuredCaseStudy.image.webp}
                              type="image/webp"
                            />
                            <img
                              alt={featuredCaseStudy.image.alt}
                              className="aspect-[366/205] h-full w-full scale-[102%] transform object-cover transition-all duration-300 ease-in-out group-hover:scale-[107%]"
                              height="600"
                              loading="lazy"
                              src={featuredCaseStudy.image.jpg}
                              width="800"
                            />
                          </picture>
                        </div>
                        <div
                          className="w-full px-6 py-8"
                          data-test-id="featured-case-study-details"
                        >
                          <a
                            href={featuredCaseStudy.href}
                            className="before:absolute before:inset-0 before:block before:content-['']"
                            data-test-id="featured-case-study-link"
                          >
                            <h3
                              className="mb-2 text-xl font-normal text-white"
                              data-test-id="featured-case-study-name"
                            >
                              {featuredCaseStudy.title}
                            </h3>
                          </a>
                          <span
                            aria-hidden="true"
                            className="inline-flex items-center gap-1.5 text-lg text-[#ff784a] group-hover:underline"
                            data-test-id="featured-case-study-read-more"
                          >
                            <span>Read more</span>
                            <svg
                              className="relative right-0 h-4 w-4 transition-all duration-300 ease-in-out group-hover:-right-0.5"
                              aria-hidden="true"
                            >
                              <use xlinkHref="/assets/img/svg-sprite.svg#icon-arrow-right-long" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
