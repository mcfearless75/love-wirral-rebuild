export const PHONE = "0151 513 1279";
export const PHONE_HREF = "tel:+441515131279";
export const EMAIL = "info@love-wirral.com";
export const READER_URL = "https://digital.magmanager.co.uk/Reader/Index/2855574";
export const COVER_URL = "https://magmanagerpublic.s3-eu-west-1.amazonaws.com/1790/2855574/pages/1.jpg";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/magazines", label: "Magazines" },
  { href: "/rates", label: "Rates" },
  { href: "/distribution", label: "Distribution" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/puzzle-solutions", label: "Puzzle Solutions" },
  { href: "/contact", label: "Contact" },
];

export const AREAS = [
  "New Brighton", "Wallasey", "Liscard", "Seacombe", "Hamilton Square", "Oxton", "Claughton",
  "Prenton", "Bebington", "Port Sunlight", "New Ferry", "Bromborough", "Eastham", "Spital",
  "Thornton Hough", "Clatterbridge", "Heswall", "Gayton", "Parkgate", "Neston", "Ness",
  "Burton", "Willaston", "Pensby", "Thingwall", "Barnston", "Brimstage", "Irby", "Thurstaston",
  "Frankby", "Greasby", "Upton", "Arrowe Park", "Moreton", "Meols", "Hoylake", "West Kirby",
  "Little Sutton", "Great Sutton", "Ellesmere Port", "Whitby", "Hooton", "Childer Thornton",
  "Little Neston", "Overpool", "Helsby", "Saughall",
];

export const CHANNELS = [
  "High streets", "Supermarkets & staff rooms", "Hotels", "Golf clubs", "Business centres",
  "Libraries", "Social clubs", "Garden centres", "Bars, restaurants & cafés", "Hairdressers & salons",
  "Solicitors & opticians", "Council offices", "Arrowe Park & Clatterbridge hospitals",
];

export const RATES = [
  { size: "Quarter page", price: 50, note: "Portrait or landscape" },
  { size: "Half page", price: 90, note: "Portrait or landscape" },
  { size: "Three-quarter page", price: 130, note: "High-impact editorial slot" },
  { size: "Full page", price: 170, note: "The most popular position", featured: true },
];

export const PREMIUM = [
  { size: "Inside front cover", price: 210 },
  { size: "Back cover", price: 230 },
  { size: "Centre spread — single page", price: 200 },
  { size: "Centre spread — double", price: 360 },
];

export const INCLUDED: [string, string][] = [
  ["No contracts", "Book month to month. Stay because it works, not because you're tied in."],
  ["Free artwork & photography", "Every advert individually designed for your business — no design fees, ever."],
  ["Online interactive edition", "Your advert links straight to your website and socials in the digital issue, at no extra cost."],
  ["Loyalty discounts", "10% and more off for 3 and 6 consecutive months."],
  ["Free QR codes", "Readers scan straight from the page to your website."],
  ["Hand-delivered, every copy", "We deliver the magazines ourselves, so we know they land where they should."],
];

// SAMPLE CONTENT — replace with real advertiser testimonials before go-live
export const TESTIMONIALS = [
  {
    quote: "We picked up more trade from one issue of Love Wirral than a month of boosted social posts. The QR code straight to our booking page did the work.",
    name: "Claire Whitfield",
    business: "The Green Door Café, Heswall",
  },
  {
    quote: "No contract, no pressure, and they redesigned our advert for free when we rebranded. Can't ask for more than that.",
    name: "Danny Roberts",
    business: "Roberts & Sons Locksmiths, Bebington",
  },
  {
    quote: "Our phone genuinely rings the week the new issue lands. That's rare for print in 2026.",
    name: "Priya Nair",
    business: "Nair Opticians, West Kirby",
  },
  {
    quote: "Being hand-delivered matters more than people think — our copies actually end up on the counter, not in a recycling bin.",
    name: "Tom Ashcroft",
    business: "Ashcroft's Hardware, Moreton",
  },
  {
    quote: "Six months in and we've already had three new regulars say they found us in the magazine.",
    name: "Sadie Kowalski",
    business: "Sadie's Hair Studio, Oxton",
  },
];

// SAMPLE CONTENT — replace with real monthly answer files before go-live
export const PUZZLE_MONTHS = [
  "July 2026", "June 2026", "May 2026", "April 2026", "March 2026", "February 2026", "January 2026",
];

// SAMPLE CONTENT — replace with real back issues (cover + reader URL) before go-live
export const ISSUES = [
  { issue: 171, label: "July 2026", cover: COVER_URL, readerUrl: READER_URL },
  { issue: 170, label: "June 2026", cover: COVER_URL, readerUrl: READER_URL },
  { issue: 169, label: "May 2026", cover: COVER_URL, readerUrl: READER_URL },
  { issue: 168, label: "April 2026", cover: COVER_URL, readerUrl: READER_URL },
  { issue: 167, label: "March 2026", cover: COVER_URL, readerUrl: READER_URL },
  { issue: 166, label: "February 2026", cover: COVER_URL, readerUrl: READER_URL },
];

// Real current advertisers from the live site's "Our Clients" banner strip — swap in their
// actual logo artwork before go-live; this is a clean text-tile stand-in, not a logo recreation.
// On the live site these are actual paying advertisers' banner images, each linking to their
// own website — the online half of the "your advert links straight to your website" promise.
export const ADVERTISERS = [
  { name: "Printmaster", category: "Paving & driveways", href: "http://printmasterltd.co.uk/" },
  { name: "CED Stone Wirral Depot", category: "Landscape & stone supplies", href: "https://www.corfestone.com/" },
  { name: "Elliott Build & Glaze", category: "Building & glazing", href: "http://www.elliottbuildandglazeltd.co.uk/" },
  { name: "Les Hill's Carpets and Flooring", category: "Carpets & flooring", href: "https://leshillsflooringcentre.co.uk/" },
  { name: "Croft Car Sales", category: "Used car sales", href: "http://www.croftcarsales.com/" },
];
