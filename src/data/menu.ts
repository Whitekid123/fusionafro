export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Rice Akara / Puff Puff',
        description: 'Traditional West African bean cakes or fluffy deep-fried dough balls — a beloved street-food classic.',
        price: '$10',
      },
      {
        name: 'Spring Rolls',
        description: 'Crispy golden rolls filled with seasoned vegetables and meat, served with a dipping sauce.',
        price: '$10',
      },
      {
        name: 'Plantain',
        description: 'Sweet fried ripe plantains, golden and caramelised on the outside, tender within.',
        price: '$10',
      },
      {
        name: 'Moi Moi / Oleh Leh',
        description: 'Steamed bean pudding packed with peppers, onions, and spices — a Nigerian staple.',
        price: '$10',
      },
      {
        name: 'Samosa (Vegetarian)',
        description: 'Flaky pastry triangles filled with spiced vegetables, fried to golden perfection.',
        price: '$10',
      },
      {
        name: 'Southern Fried Chicken',
        description: 'Crispy, well-seasoned fried chicken bites with a Caribbean kick.',
        price: '$10',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      {
        name: 'Chicken & Jollof Rice',
        description: 'Tender grilled chicken served over our signature smoky, tomato-based jollof rice.',
        price: '$35',
      },
      {
        name: 'Cassava Leaves & White Rice',
        description: 'Slow-cooked cassava leaves in a rich, savoury sauce served with fluffy white rice.',
        price: '$35',
      },
      {
        name: 'Tomato & Basil Spaghetti',
        description: 'A fusion twist — classic spaghetti in a vibrant African-spiced tomato and fresh basil sauce.',
        price: '$20',
      },
      {
        name: 'Okra & Fufu',
        description: 'Silky, slow-drawn okra soup served with soft, stretchy fufu — West African comfort at its finest.',
        price: '$35',
      },
      {
        name: 'Jerk Chicken & Rice and Peas',
        description: 'Caribbean-style jerk chicken, smoky and aromatic, with traditional rice and peas.',
        price: '$35',
      },
      {
        name: 'Acheke',
        description: 'Light, fermented cassava couscous from Côte d\'Ivoire, served with grilled fish and attiéké sauce.',
        price: '$40',
      },
      {
        name: 'Fried Fish & Jollof',
        description: 'Whole or fillet fried fish, perfectly seasoned and crispy, with our house jollof rice.',
        price: '$40',
      },
      {
        name: 'Suya & Jollof Rice',
        description: 'Authentic Northern Nigerian suya — spiced skewered beef — served alongside smoky jollof.',
        price: '$35',
      },
      {
        name: 'Egusi Soup & Fufu',
        description: 'Ground melon seed soup cooked with leafy greens, meat, and bold spices. Served with fufu.',
        price: '$35',
      },
      {
        name: 'Suya Meat',
        description: 'Grilled suya skewers seasoned with yaji spice mix — a true West African street-food legend.',
        price: '$30',
      },
      {
        name: 'Steak & Jollof',
        description: 'Flame-grilled steak cooked to your preference, paired with our rich jollof rice.',
        price: '$35',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      {
        name: 'Seasonal Vegetables',
        description: 'Fresh, lightly seasoned vegetables of the season.',
        price: '$8',
      },
      {
        name: 'House Salad',
        description: 'Crisp mixed greens with our house vinaigrette dressing.',
        price: '$8',
      },
      {
        name: 'Coleslaw',
        description: 'Creamy, tangy homemade coleslaw — the perfect companion.',
        price: '$8',
      },
    ],
  },
  {
    id: 'kids',
    label: 'Kids',
    items: [
      {
        name: 'BBQ Chicken Wings',
        description: 'Tender chicken wings in a sweet BBQ glaze — kid-approved.',
        price: '$10',
      },
      {
        name: 'Nuggets & Chips',
        description: 'Golden chicken nuggets with crispy chips — a family favourite.',
        price: '$10',
      },
      {
        name: 'Fish Bites & Chips',
        description: 'Light, crispy fish bites served with chunky chips.',
        price: '$10',
      },
    ],
  },
];
