import heroValley from "@/assets/hero-valley.jpg";
import tapolaLake from "@/assets/tapola-lake.jpg";
import cottageValley from "@/assets/cottage-valley.jpg";
import cottageInterior from "@/assets/cottage-interior.jpg";
import cottageCouple from "@/assets/cottage-couple.jpg";
import cottageDeluxe from "@/assets/cottage-deluxe.jpg";
import cottageFamily from "@/assets/cottage-family.jpg";
import bonfireNight from "@/assets/bonfire-night.jpg";
import pool from "@/assets/pool.jpg";
import strawberryFarm from "@/assets/strawberry-farm.jpg";
import restaurantFood from "@/assets/restaurant-food.jpg";
import natureWalk from "@/assets/nature-walk.jpg";

export const images = {
  heroValley,
  tapolaLake,
  cottageValley,
  cottageInterior,
  cottageCouple,
  cottageDeluxe,
  cottageFamily,
  bonfireNight,
  pool,
  strawberryFarm,
  restaurantFood,
  natureWalk,
};

export const resort = {
  name: "Mangalya Cottages Resort",
  shortName: "Mangalya Cottages",
  location: "Tapola Road, Wanavali Utekar, Mahabaleshwar, Maharashtra",
  tagline: "Escape To Nature, Experience Serenity At Mangalya Cottages",
  phone: "+91 82757 67701",
  phoneHref: "tel:+918275767701",
  whatsapp: "918275767701",
  email: "mangalyacottages76@gmail.com",
  mapEmbed:
    "https://www.google.com/maps?q=Tapola%20Road%2C%20Wanavali%20Utekar%2C%20Mahabaleshwar%2C%20Maharashtra&output=embed",
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Experiences", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "Attractions", to: "/attractions" },
  { label: "Contact", to: "/contact" },
] as const;

export type Room = {
  slug: string;
  name: string;
  image: string;
  occupancy: string;
  size: string;
  priceLabel: string;
  blurb: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "couple",
    name: "Couple Cottage",
    image: images.cottageCouple,
    occupancy: "2 Guests",
    size: "320 sq.ft",
    priceLabel: "Tariff on request",
    blurb:
      "An intimate retreat wrapped in blossoming gardens with a private balcony made for sunrises and quiet conversations.",
    amenities: ["Private Balcony", "King Bed", "Garden View", "Tea/Coffee", "Free WiFi"],
  },
  {
    slug: "deluxe",
    name: "Deluxe Cottage",
    image: images.cottageDeluxe,
    occupancy: "2–3 Guests",
    size: "420 sq.ft",
    priceLabel: "Tariff on request",
    blurb:
      "Handcrafted wooden interiors, a sun-soaked sit-out and lush surroundings for a refined slow-living escape.",
    amenities: ["Private Sit-out", "Premium Linen", "Mini Bar", "Hot Water", "Room Service"],
  },
  {
    slug: "family",
    name: "Family Cottage",
    image: images.cottageFamily,
    occupancy: "4–5 Guests",
    size: "650 sq.ft",
    priceLabel: "Tariff on request",
    blurb:
      "Spacious living for the whole family with a private lawn, play area nearby and uninterrupted mountain air.",
    amenities: ["Two Bedrooms", "Private Lawn", "Play Area", "Dining Nook", "Free WiFi"],
  },
  {
    slug: "premium-valley",
    name: "Valley View Cottage",
    image: images.cottageValley,
    occupancy: "2–4 Guests",
    size: "720 sq.ft",
    priceLabel: "Tariff on request",
    blurb:
      "Our signature stay cantilevered over the valley — floor-to-ceiling glass framing the Sahyadris and endless mist.",
    amenities: ["Valley Deck", "Glass Façade", "Bathtub", "Lounge Area", "Butler Service"],
  },
];

export type Amenity = { icon: string; title: string; desc: string };

export const amenities: Amenity[] = [
  { icon: "Wifi", title: "Free High-Speed WiFi", desc: "Stay connected across every cottage and common area." },
  { icon: "Car", title: "Free Parking", desc: "Secure parking for guests arriving by car." },
  { icon: "UtensilsCrossed", title: "Restaurant", desc: "Fresh local Maharashtrian meals and comforting resort dining." },
  { icon: "Trees", title: "Family Garden", desc: "Green lawns and open-air corners for relaxed family time." },
  { icon: "Flame", title: "Bonfire Area", desc: "Crackling bonfire evenings under the Mahabaleshwar sky." },
  { icon: "Dices", title: "Indoor Games", desc: "Carrom, chess, table tennis and board game evenings." },
  { icon: "Mountain", title: "Outdoor Activities", desc: "Guided treks, cycling and valley adventures." },
  { icon: "Eye", title: "Scenic Viewpoints", desc: "Panoramic vantage points to soak in the Sahyadri region." },
  { icon: "BellRing", title: "Room Service", desc: "Thoughtful in-cottage dining whenever you wish." },
  { icon: "Headphones", title: "24/7 Support", desc: "A warm, attentive team at your service round the clock." },
  { icon: "Sprout", title: "Agro Tourism Activities", desc: "Farm visits, local produce experiences and nature-led learning." },
  { icon: "ToyBrick", title: "Kids Play Area", desc: "A safe, joyful outdoor zone for little explorers." },
  { icon: "Waves", title: "Swimming Pool", desc: "A refreshing pool experience after a day around the hills." },
];

export type Experience = { title: string; image: string; desc: string };

export const experiences: Experience[] = [
  { title: "Nature Walks", image: images.natureWalk, desc: "Wander misty forest trails alive with birdsong and ferns." },
  { title: "Strawberry Farm Visit", image: images.strawberryFarm, desc: "Hand-pick ripe strawberries straight from the hillside farms." },
  { title: "Campfire Nights", image: images.bonfireNight, desc: "Gather around the fire for music, stories and warm cocoa." },
  { title: "Tapola Lake Visit", image: images.tapolaLake, desc: "A short scenic drive to the serene Tapola backwaters." },
  { title: "Boating & Kayaking", image: images.pool, desc: "Glide across calm waters cradled by green mountains." },
  { title: "Photography Tours", image: images.heroValley, desc: "Chase golden light over valleys, cliffs and waterfalls." },
  { title: "Family Activities", image: images.cottageFamily, desc: "Lawn games, treasure hunts and joyful family moments." },
  { title: "Adventure Experiences", image: images.cottageValley, desc: "Guided treks and cliff-top viewpoints for the bold." },
];

export type Attraction = { name: string; distance: string; image: string; desc: string };

export const attractions: Attraction[] = [
  { name: "Tapola Lake", distance: "Nearby", image: images.tapolaLake, desc: "The Mini Kashmir backwaters for boating, quiet views and lakeside time." },
  { name: "Koyna Backwaters", distance: "Nearby", image: images.tapolaLake, desc: "Expansive blue-green waters framed by forested slopes near Tapola." },
  { name: "Pratapgad Fort", distance: "Scenic drive", image: images.cottageValley, desc: "A historic hill fort with stories of Shivaji Maharaj and sweeping valley views." },
  { name: "Venna Lake", distance: "Mahabaleshwar", image: images.tapolaLake, desc: "Boating and lakeside strolls in the heart of Mahabaleshwar." },
  { name: "Lingmala Waterfall", distance: "Mahabaleshwar", image: images.natureWalk, desc: "A dramatic monsoon-fed cascade amid lush green surroundings." },
  { name: "Arthur Seat Point", distance: "Mahabaleshwar", image: images.heroValley, desc: "A celebrated viewpoint with sweeping Sahyadri valley vistas." },
  { name: "Mapro Garden", distance: "Mahabaleshwar", image: images.strawberryFarm, desc: "Strawberry orchards, fresh produce and famous farm food." },
  { name: "Elephant Head Point", distance: "Mahabaleshwar", image: images.heroValley, desc: "Iconic cliff formations and memorable photo stops." },
];

export type Testimonial = { name: string; place: string; rating: number; quote: string; initials: string };

export const testimonials: Testimonial[] = [
  { name: "Aarti & Rohan Deshpande", place: "Pune", rating: 5, initials: "AD", quote: "The valley view cottage was magical — we woke up above the clouds. The campfire night and the staff's warmth made it unforgettable." },
  { name: "Sneha Kulkarni", place: "Mumbai", rating: 5, initials: "SK", quote: "Spotless cottages, delicious home-style food and the most peaceful mornings I've had in years. Already planning our return." },
  { name: "The Mehta Family", place: "Ahmedabad", rating: 5, initials: "MF", quote: "Our kids loved the play area and strawberry farm visit. A genuinely family-friendly luxury resort surrounded by nature." },
  { name: "Vikram Iyer", place: "Bengaluru", rating: 5, initials: "VI", quote: "From the infinity pool to the Tapola lake trip, everything was thoughtfully arranged. Premium experience, honest pricing." },
  { name: "Priya & Aman", place: "Delhi", rating: 5, initials: "PA", quote: "Booked the couple cottage for our anniversary — private, romantic and beautifully done. The valley deck at sunset is unreal." },
];

export const galleryCategories = ["All", "Resort", "Rooms", "Nature", "Food", "Activities", "Events"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = { src: string; category: Exclude<GalleryCategory, "All">; alt: string };

export const gallery: GalleryItem[] = [
  { src: images.heroValley, category: "Resort", alt: "Cottages overlooking the Mahabaleshwar valley at sunrise" },
  { src: images.pool, category: "Resort", alt: "Infinity pool overlooking a green valley" },
  { src: images.cottageInterior, category: "Rooms", alt: "Warm wooden cottage bedroom interior with mountain view" },
  { src: images.cottageValley, category: "Rooms", alt: "Premium valley view cottage with glass façade at dusk" },
  { src: images.cottageCouple, category: "Rooms", alt: "Romantic couple cottage surrounded by flowers" },
  { src: images.natureWalk, category: "Nature", alt: "Misty forest nature trail in the Sahyadris" },
  { src: images.tapolaLake, category: "Nature", alt: "Serene Tapola backwaters at dawn" },
  { src: images.restaurantFood, category: "Food", alt: "Traditional Maharashtrian thali with valley view" },
  { src: images.strawberryFarm, category: "Activities", alt: "Strawberry farm picking experience" },
  { src: images.cottageFamily, category: "Activities", alt: "Family cottage with garden and play area" },
  { src: images.bonfireNight, category: "Events", alt: "Bonfire night under the stars" },
  { src: images.cottageDeluxe, category: "Resort", alt: "Deluxe cottage exterior in landscaped gardens" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of Hospitality" },
  { value: 28, suffix: "", label: "Luxury Cottages" },
  { value: 15000, suffix: "+", label: "Happy Guests" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
];

export const whyChooseUs = [
  { icon: "Leaf", title: "Nestled in Nature", desc: "Surrounded by Sahyadri peaks, valleys and strawberry farms — true serenity, far from the city noise." },
  { icon: "Sparkles", title: "Understated Luxury", desc: "Handcrafted cottages, premium linens and thoughtful service that feels personal, never excessive." },
  { icon: "Sprout", title: "Agro & Eco Tourism", desc: "Farm-to-table dining, strawberry picking and immersive experiences rooted in the land." },
  { icon: "HeartHandshake", title: "Warm Hospitality", desc: "A caring team available 24/7 to craft your perfect mountain getaway." },
];

export const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 1:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are subject to availability." },
  { q: "Is the resort family and kids friendly?", a: "Absolutely. We have a dedicated kids' play area, spacious family cottages, indoor games and supervised outdoor activities." },
  { q: "Do you allow campfires?", a: "Yes, we host crackling campfire nights every evening (weather permitting), complimentary for in-house guests." },
  { q: "How far is Tapola Lake from the resort?", a: "Tapola backwaters are roughly 8 km away — about a 20 minute scenic drive. We can arrange boating and day trips." },
  { q: "Is food included in the tariff?", a: "Our packages include breakfast. Lunch, dinner and full-board plans are available — please mention preferences while booking." },
  { q: "Do you have parking?", a: "Yes, secure covered parking is available free of charge right beside the cottages." },
];
