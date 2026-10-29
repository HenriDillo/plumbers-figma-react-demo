import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Phone,
  Check,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Smile,
  HeartHandshake,
  Mail,
  Clock,
  Play,
} from "lucide-react";
import { services, cities, faqs, articles, gallery } from "./data";

type Overlay = { title: string; text: string; image?: string };
const steps = [
  [
    "Tell us what is happening",
    "Describe the affected fixture, access and preferred timing.",
  ],
  [
    "Discuss the scope",
    "A real provider would confirm what needs assessing before quoting.",
  ],
  [
    "Agree before work begins",
    "Check the agreed work, cost and next step with your chosen provider.",
  ],
  [
    "Keep a clear record",
    "Save the scope and any product information for future reference.",
  ],
  [
    "Plan access",
    "Consider where fixtures, meters and visible pipework are located.",
  ],
  [
    "Ask about aftercare",
    "For real work, clarify follow-up questions with your qualified installer.",
  ],
];
function Logo() {
  return (
    <span className="logo">
      <span>PLUMB</span>ERS
    </span>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [slide, setSlide] = useState(0),
    [overlay, setOverlay] = useState<Overlay | null>(null),
    [newsletter, setNewsletter] = useState(false),
    [submitted, setSubmitted] = useState(false),
    [chosen, setChosen] = useState(""),
    [formError, setFormError] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null),
    dialog = useRef<HTMLDialogElement>(null),
    success = useRef<HTMLElement>(null),
    form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu) {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  useEffect(() => {
    if (!overlay) return;
    const element = dialog.current;
    const opener = document.activeElement as HTMLElement | null;
    element?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = old;
      opener?.focus();
    };
  }, [overlay]);
  useEffect(() => {
    if (submitted) success.current?.focus();
  }, [submitted]);
  function selectService(name: string) {
    setChosen(name);
    document
      .getElementById("quote")
      ?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    document.getElementById("full-name")?.focus({ preventScroll: true });
  }
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const data = new FormData(event.currentTarget);
    if (
      String(data.get("name")).trim().length < 2 ||
      String(data.get("message")).trim().length < 10
    ) {
      setFormError(
        "Please enter a name with at least 2 characters and a message with at least 10 non-space characters.",
      );
      return;
    }
    setSubmitted(true);
  }
  const hero =
    slide === 0
      ? {
          image: "hero.jpg",
          title: (
            <>
              Expert{" "}
              <em>
                Plumbing
                <br />
                Services
              </em>{" "}
              In Dallas.
            </>
          ),
        }
      : {
          image: "team.jpg",
          title: (
            <>
              A Clear Plan For
              <br />
              <em>Your Plumbing.</em>
            </>
          ),
        };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="demo-strip">
        Figma-to-React portfolio demo · Fictional business · No live service or
        bookings
      </div>
      <header className="topbar">
        <a href="#home" aria-label="Plumbers home">
          <Logo />
        </a>
        <a className="top-contact" href="#quote">
          <Phone size={19} />
          <span>Request a demo quote</span>
        </a>
      </header>
      <div className="site-shell" id="home">
        <div className="nav-wrap">
          <button
            className="menu-toggle"
            ref={menuButton}
            aria-controls="navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
            {menu ? "Close" : "Menu"}
          </button>
          <nav
            id="navigation"
            className={menu ? "open" : ""}
            aria-label="Main navigation"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["FAQs", "#faq"],
              ["Our approach", "#approach"],
              ["Guides", "#guides"],
              ["Contact", "#quote"],
            ].map(([text, url]) => (
              <a key={text} href={url} onClick={() => setMenu(false)}>
                {text}
              </a>
            ))}
          </nav>
        </div>
        <main id="main">
          <section className="hero" aria-label="Plumbing services">
            <img
              className="hero-photo"
              src={`/images/${hero.image}`}
              alt={
                slide === 0
                  ? "Plumbing professional wearing protective glasses and a hard hat"
                  : "Two professionals wearing safety equipment"
              }
              fetchPriority="high"
            />
            <div className="hero-shade" />
            <div className="hero-copy">
              <p className="hero-kicker">FAST, EFFECTIVE & AFFORDABLE</p>
              <h1>{hero.title}</h1>
              <a className="button white" href="#quote">
                Request a quote
              </a>
            </div>
            <button
              className="slide-control previous"
              aria-label="Previous hero slide"
              onClick={() => setSlide(slide === 0 ? 1 : 0)}
            >
              <ChevronLeft />
            </button>
            <button
              className="slide-control next"
              aria-label="Next hero slide"
              onClick={() => setSlide(slide === 0 ? 1 : 0)}
            >
              <ChevronRight />
            </button>
            <div className="slide-status" aria-live="polite">
              {slide + 1} / 2
            </div>
          </section>
          <section className="section inner cities" id="areas">
            <h2>We Serve These Cities</h2>
            <p className="section-note">
              Sample Dallas–Fort Worth service area for this fictional business.
            </p>
            <ul>
              {cities.map((city) => (
                <li key={city}>
                  <span className="check-dot">
                    <Check size={12} />
                  </span>
                  {city}
                </li>
              ))}
            </ul>
          </section>
          <section className="inner team-visual" id="about">
            <img
              src="/images/team.jpg"
              alt="Two professionals in hard hats standing together"
              width="1300"
              height="561"
              loading="lazy"
            />
            <button
              className="play-button"
              aria-label="Read about this demo"
              onClick={() =>
                setOverlay({
                  title: "About this project",
                  text: "This is a self-directed React and TypeScript implementation of the Plumbers Figma template by TemplatesJungle. The business, service areas and enquiry flow are fictional. The photographs are illustrative assets supplied with the template; they do not show Henri’s team or completed plumbing work.",
                })
              }
            >
              <Play fill="currentColor" />
            </button>
          </section>
          <section className="section inner" id="services">
            <h2>Our Plumbing Services</h2>
            <div className="services-grid">
              {services.map(({ name, icon: Icon, description }) => (
                <button
                  key={name}
                  className="service"
                  onClick={() =>
                    setOverlay({
                      title: name,
                      text:
                        description +
                        " Try the quote form to explore the demo enquiry flow.",
                    })
                  }
                >
                  <Icon size={38} strokeWidth={1.5} />
                  <span>{name}</span>
                  <span className="sr-only"> — view details</span>
                </button>
              ))}
            </div>
          </section>
          <section className="inner newsletter">
            <h2>Subscribe To Our Newsletter</h2>
            <p>Try the sample subscription flow. No emails are sent.</p>
            {newsletter ? (
              <div className="inline-success" role="status">
                <Check size={20} />
                Demo subscription confirmed.
                <button
                  className="text-button"
                  onClick={() => setNewsletter(false)}
                >
                  Try again
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setNewsletter(true);
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Sample email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your sample email address"
                  required
                  maxLength={254}
                />
                <button className="button dark" type="submit">
                  Subscribe
                </button>
              </form>
            )}
          </section>
          <section className="soft-band" id="approach">
            <div className="inner">
              <div className="guarantee">
                <div>
                  <h2>Right Ways To Fix It</h2>
                  <p>
                    Good service starts with understanding the problem. Explore
                    a clear enquiry process, from describing the issue to
                    discussing the next step with a qualified professional.
                  </p>
                  <a className="button white" href="#quote">
                    Plan your enquiry
                  </a>
                </div>
                <div className="promise-list">
                  {[
                    [
                      Smile,
                      "Clear communication",
                      "Describe the issue and clarify the scope before making a decision.",
                    ],
                    [
                      ShieldCheck,
                      "Professional assessment",
                      "Real plumbing work should be assessed by an appropriately qualified provider.",
                    ],
                    [
                      HeartHandshake,
                      "A considered next step",
                      "Discuss access, timing and any follow-up questions before work begins.",
                    ],
                  ].map(([Icon, title, text]) => {
                    const I = Icon as typeof Smile;
                    return (
                      <div key={String(title)}>
                        <I size={26} />
                        <div>
                          <h3>{String(title)}</h3>
                          <p>{String(text)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="expectations">
                <h2>What A Good Visit Looks Like</h2>
                <p className="section-note">
                  A simple plan for a clearer service conversation.
                </p>
                <div className="expectation-grid">
                  {steps.map(([title, text], index) => (
                    <article key={title}>
                      <span className="step-number">0{index + 1}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
                <div className="center-actions">
                  <a className="button white" href="#quote">
                    Request a quote
                  </a>
                  <a className="button dark" href="#faq">
                    Read the FAQs
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section inner works" id="work">
            <h2>Plumbing In Detail</h2>
            <p className="section-note">
              Illustrative template photography. These are not completed client
              projects.
            </p>
            <div className="gallery">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  aria-label={`View plumbing photograph ${index + 1}`}
                  onClick={() =>
                    setOverlay({
                      title: `Plumbing detail ${index + 1}`,
                      text: "Illustrative stock photography supplied with the TemplatesJungle Figma design. This is a design implementation sample, not a record of completed plumbing work.",
                      image,
                    })
                  }
                >
                  <img
                    src={`/images/${image}`}
                    alt={
                      [
                        "Bathroom sinks and fixtures",
                        "Industrial pipes and fittings",
                        "Bathroom tap and basin",
                        "Plumbing connections under a sink",
                        "Plumbing professional at work",
                        "Pipework installation detail",
                        "Modern kitchen tap",
                        "Tools used for pipework",
                      ][index]
                    }
                    width="310"
                    height="310"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <a className="button white outline" href="#quote">
              Discuss a sample project
            </a>
          </section>
          <section className="section inner faq" id="faq">
            <h2>Frequently Asked Questions</h2>
            <div>
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  name="faq"
                  open={index === 0 ? true : undefined}
                >
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <section className="section inner guides" id="guides">
            <h2>Stay Up To Date</h2>
            <div className="article-grid">
              {articles.map((article) => (
                <article key={article.title}>
                  <button
                    className="article-image"
                    aria-label={`Read ${article.title}`}
                    onClick={() => setOverlay(article)}
                  >
                    <img
                      src={`/images/${article.image}`}
                      alt="Illustrative plumbing maintenance photograph"
                      loading="lazy"
                      width="420"
                      height="240"
                    />
                  </button>
                  <button
                    className="article-title"
                    onClick={() => setOverlay(article)}
                  >
                    {article.title}
                    <ArrowUpRight size={16} />
                  </button>
                  <p className="sample-label">
                    Sample guide · General information
                  </p>
                  <p>{article.text.slice(0, 130)}…</p>
                </article>
              ))}
            </div>
          </section>
          <section className="soft-band contact-section" id="quote">
            <div className="inner contact-grid">
              <div>
                <h2>Our Team’s Service Area</h2>
                <p>Explore a fictional Dallas–Fort Worth service area.</p>
                <div
                  className="area-map"
                  aria-label="Illustrative service area, not a geographic map"
                >
                  <div className="map-ring ring-one" />
                  <div className="map-ring ring-two" />
                  <span className="map-label north">Plano</span>
                  <span className="map-label west">Fort Worth</span>
                  <strong>
                    <MapPin fill="currentColor" />
                    Dallas
                  </strong>
                  <span className="map-label east">Garland</span>
                  <span className="map-label south">Arlington</span>
                  <small>ILLUSTRATIVE SERVICE AREA</small>
                </div>
                <p className="small">
                  This demo does not arrange emergency assistance or real
                  appointments.
                </p>
              </div>
              <div>
                <h2>Need A Plumbing Service?</h2>
                <p className="form-note">
                  Demo form — use fictional details. Nothing is sent or stored
                  on a server.
                </p>
                {submitted && (
                  <section
                    className="quote-success"
                    ref={success}
                    tabIndex={-1}
                    aria-label="Demo quote confirmation"
                  >
                    <span className="success-icon">
                      <Check />
                    </span>
                    <h3>Your sample enquiry is ready.</h3>
                    <p>
                      This is a demo confirmation. No message was sent and no
                      appointment has been booked.
                    </p>
                    <p>
                      Service: <strong>{chosen}</strong>
                    </p>
                    <button
                      className="button dark"
                      onClick={() => {
                        setSubmitted(false);
                        requestAnimationFrame(() =>
                          document.getElementById("full-name")?.focus(),
                        );
                      }}
                    >
                      Edit sample enquiry
                    </button>
                    <button
                      className="text-button"
                      onClick={() => {
                        setSubmitted(false);
                        setChosen("");
                        requestAnimationFrame(() => {
                          form.current?.reset();
                          document.getElementById("full-name")?.focus();
                        });
                      }}
                    >
                      Start a new sample
                    </button>
                  </section>
                )}
                <form
                  hidden={submitted}
                  ref={form}
                  onSubmit={submitQuote}
                  className="quote-form"
                >
                  <div className="field-row">
                    <label>
                      Full name *
                      <input
                        id="full-name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={80}
                        autoComplete="off"
                        placeholder="Alex Sample"
                      />
                    </label>
                    <label>
                      Email *
                      <input
                        type="email"
                        name="email"
                        required
                        maxLength={254}
                        autoComplete="off"
                        placeholder="alex@example.com"
                      />
                    </label>
                  </div>
                  <div className="field-row">
                    <label>
                      Phone <span>(optional)</span>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={30}
                        autoComplete="off"
                        placeholder="Fictional phone number"
                      />
                    </label>
                    <label>
                      City *
                      <select name="city" required defaultValue="">
                        <option value="" disabled>
                          Select a city
                        </option>
                        {cities.map((city) => (
                          <option key={city}>{city}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label>
                    Plumbing service requested *
                    <select
                      value={chosen}
                      onChange={(event) => setChosen(event.target.value)}
                      required
                      name="service"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Message *
                    <textarea
                      name="message"
                      required
                      minLength={10}
                      maxLength={1500}
                      rows={4}
                      placeholder="Describe a sample project (at least 10 characters)"
                    />
                  </label>
                  {formError && (
                    <p className="form-error" role="alert">
                      {formError}
                    </p>
                  )}
                  <button className="button dark" type="submit">
                    Create sample enquiry
                  </button>
                  <p className="small">
                    Fields marked * are required. No payment or account needed.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="inner footer">
          <div className="footer-grid">
            <a href="#home" aria-label="Plumbers home">
              <Logo />
            </a>
            <div>
              <h3>Demo office</h3>
              <p>
                <MapPin size={15} />
                Dallas, Texas · Fictional
              </p>
              <p>
                <Mail size={15} />
                No live inbox
              </p>
              <p>
                <Clock size={15} />
                Sample service website
              </p>
            </div>
            <div>
              <h3>Quick links</h3>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#faq">FAQs</a>
              <a href="#quote">Demo quote</a>
            </div>
            <div>
              <h3>About this build</h3>
              <p>React + TypeScript implementation by Henri James Dillo.</p>
              <a
                href="https://templatesjungle.com/downloads/plumbers-figma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma design by TemplatesJungle ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Plumbers · Portfolio demo</span>
            <span>Fictional business. No live services.</span>
          </div>
        </footer>
      </div>
      {overlay && (
        <dialog
          ref={dialog}
          onCancel={(event) => {
            event.preventDefault();
            setOverlay(null);
          }}
          aria-labelledby="detail-title"
        >
          <button
            className="dialog-close"
            aria-label="Close details"
            onClick={() => setOverlay(null)}
          >
            <X />
          </button>
          {overlay.image && (
            <img
              className="dialog-photo"
              src={`/images/${overlay.image}`}
              alt="Illustrative plumbing photograph"
            />
          )}
          <h2 id="detail-title">{overlay.title}</h2>
          <p>{overlay.text}</p>
          <button
            className="button dark"
            onClick={() => {
              setOverlay(null);
              if (services.some((service) => service.name === overlay.title))
                requestAnimationFrame(() => selectService(overlay.title));
            }}
          >
            {services.some((service) => service.name === overlay.title)
              ? "Try this service in the quote form"
              : "Close"}
          </button>
        </dialog>
      )}
    </>
  );
}
export default App;
