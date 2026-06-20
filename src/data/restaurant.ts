export const restaurant = {
  name: 'Fusion Afro',
  tagline: 'Afro Caribbean Restaurant',
  fullName: 'Fusion Afro Caribbean Restaurant',
  description:
    'A bold celebration of African and Caribbean flavours. We bring the soul of West Africa and the vibrant spice of the Caribbean to your table — cooked fresh, served with heart.',
  services: ['Dine In', 'Take Away', 'Catering Service'] as const,
  phone: '+1 (555) 123-4567',
  email: 'info@fusionafro.com',
  address: '123 Fusion Street, London, UK',
  social: {
    instagram: 'https://instagram.com/fusionafro',
    facebook: 'https://facebook.com/fusionafro',
    tiktok: 'https://tiktok.com/@fusionafro',
  },
};

export interface DayHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export const operatingHours: DayHours[] = [
  { day: 'Monday', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', hours: '2:30 PM – 8:00 PM' },
  { day: 'Wednesday', hours: '2:30 PM – 8:00 PM' },
  { day: 'Thursday', hours: '2:30 PM – 10:00 PM' },
  { day: 'Friday', hours: '2:30 PM – 10:00 PM' },
  { day: 'Saturday', hours: '3:00 PM – 10:00 PM' },
  { day: 'Sunday', hours: '3:00 PM – 10:00 PM' },
];

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Amara J.',
    text: 'The jollof rice transported me straight back to Lagos. Authentic flavours, beautiful presentation, and the warmest hospitality. This is the real deal.',
    rating: 5,
  },
  {
    name: 'David K.',
    text: 'We booked the catering for our wedding and every single guest raved about the food. The suya platter was gone in minutes. Absolutely phenomenal service.',
    rating: 5,
  },
  {
    name: 'Sophie M.',
    text: 'A hidden gem! The egusi soup with fufu was perfection. The atmosphere is vibrant yet intimate — perfect for a Friday night out. We will definitely be back.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    text: 'Best jerk chicken outside of Jamaica, no debate. The fusion approach is genius — you get Caribbean soul with West African warmth on every plate.',
    rating: 5,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Catering', href: '#catering' },
  { label: 'Contact', href: '#contact' },
];
