// FILE: src/config.js
export const HOTEL = {
    name: "Palm Resorts",
    tagline: "Discover rooms in nature",
    phone: "+91 9904652707",
    whatsapp: "+91 9904652707",
    address: "1204/c Kennaikwada, near Laxmi Super Market, Pernem, Morjim 403512",
  
    // Keep original long link for the button
    gmapsLink: "https://www.google.com/maps/place/Palm+Resorts/@21.2847807,81.6959761,15.44z/data=!4m6!3m5!1s0x3a28e80f1c0677df:0x6174e17f88306531!8m2!3d21.2850617!4d81.6984716!16s%2Fg%2F11ggm0mj27!5m1!1e1?entry=ttu",
  
    // Use the coordinates from @... for embedding
    coords: { lat: 21.2847807, lng: 81.6959761 },
    heroImage: `${import.meta.env.BASE_URL}hero.jpeg`,

    logoText: "Palm Resorts",
  };
  
  
    
    
    export const ROOMS = [
        {
          name: "Luxury Room",
          price: null,
          images: undefined,
          badges: [
            "AC",
            "Refrigerator",
            "Smart TV",
            "WiFi",
            "Electric Kettle",
            "Personal Locker",
            "Safe Locker",
            "Sofa Bed",
            "King Size Bed",
          ],
        },
        {
          name: "Exotic Room",
          price: null,
          images: undefined,
          badges: [
            "AC",
            "Smart TV",
            "WiFi",
            "Electric Kettle",
            "Personal Locker",
            "Safe Locker",
            "Sofa Cum Bed",
            "King Size Bed",
          ],
        },
      ];
      
    
    
      export const AMENITIES = [
        { key: "ac", label: "AC" },
        { key: "parking", label: "Free Parking" },
        { key: "restaurant", label: "Inhouse Restaurant" },
        { key: "yoga", label: "Meditation and Yoga on Roof Top" },
        { key: "garden", label: "Lush Green Garden" },
        { key: "cctv", label: "CCTV Camera" },
        { key: "checkin", label: "24x7 Check-in & Reception" },
        { key: "laundry", label: "Laundry" },
        ];
    
    
 // FILE: src/config.js

// Auto-import all images in src/assets/gallery/*.jpeg
const galleryModules = import.meta.glob("./assets/gallery/*.jpeg", {
    eager: true,
    import: "default",
  });
  
  export const GALLERY = Object.values(galleryModules);
  
    
    export const TESTIMONIALS = [
    {
    name: "Ravi Kumar",
    text: "Super clean rooms and a fantastic breakfast. Staff was warm and helpful!",
    rating: 5,
    },
    {
    name: "Ananya Singh",
    text: "Loved the location—close to everything. Great value for money.",
    rating: 5,
    },
    {
    name: "Mohit Patel",
    text: "Quiet, comfortable, and classy! Will definitely return.",
    rating: 4,
    },
    ];