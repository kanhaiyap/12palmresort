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
  
    heroImage: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=1880&auto=format&fit=crop",
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
    
    
    export const GALLERY = [
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    ];
    
    
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