export interface MenuItem {
  name: string;
  price: string;
  description?: string;
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
      { name: 'Rice Akara / Puff Puff', price: '$10.00', description: 'Crispy golden fritters served with spicy dipping sauce' },
      { name: 'Spring Rolls', price: '$10.00', description: 'Crispy rolls filled with seasoned vegetables' },
      { name: 'Plantain', price: '$10.00', description: 'Sweet ripe plantain fried to golden perfection' },
      { name: 'Moi Moi / Oleh Leh', price: '$10.00', description: 'Steamed bean pudding with peppers and spices' },
      { name: 'Samosa (Vegetarian)', price: '$10.00', description: 'Flaky pastry filled with spiced vegetables' },
      { name: 'Southern Fried Chicken', price: '$10.00', description: 'Crispy seasoned chicken with a bold spice crust' },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      { name: 'Chicken & Jollof Rice', price: '$35.00', description: 'Smoky tomato rice served with seasoned grilled chicken' },
      { name: 'Cassava Leaves & White Rice', price: '$35.00', description: 'Slow-cooked cassava leaves in a rich palm oil sauce' },
      { name: 'Tomato & Basil Spaghetti', price: '$20.00', description: 'Classic pasta in a fragrant tomato basil sauce' },
      { name: 'Okra & Fufu', price: '$35.00', description: 'Hearty okra soup with smooth pounded fufu' },
      { name: 'Jerk Chicken & Rice and Peas', price: '$35.00', description: 'Caribbean jerk-spiced chicken with coconut rice' },
      { name: 'Acheke', price: '$40.00', description: 'Ivorian cassava couscous with grilled protein' },
      { name: 'Fried Fish & Jollof', price: '$40.00', description: 'Whole crispy fried fish paired with smoky jollof rice' },
      { name: 'Suya & Jollof Rice', price: '$35.00', description: 'Spiced grilled beef skewers with party jollof' },
      { name: 'Egusi Soup & Fufu', price: '$35.00', description: 'Rich melon seed soup with tender meat and fufu' },
      { name: 'Pepper Soup (Fish or Goat)', price: '$35.00', description: 'Fiery aromatic broth with your choice of protein' },
      { name: 'Thieboudienne', price: '$40.00', description: 'Senegalese national dish — fish and rice in tomato sauce' },
      { name: 'Garba', price: '$30.00', description: 'Ivorian street food with attiéké and fried tuna' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Chin Chin', price: '$15.00', description: 'Crunchy fried dough strips with a sweet glaze' },
      { name: 'Puff Puff with Chocolate', price: '$15.00', description: 'Warm doughnut bites drizzled with rich chocolate' },
      { name: 'Banana Fritters', price: '$15.00', description: 'Caramelised banana in a crispy golden batter' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { name: 'Chapman', price: '$10.00', description: 'Nigeria\'s signature cocktail with citrus and bitters' },
      { name: 'Zobo (Hibiscus Tea)', price: '$8.00', description: 'Chilled hibiscus flower drink with ginger and spices' },
      { name: 'Palm Wine', price: '$12.00', description: 'Traditional naturally fermented palm sap' },
      { name: 'Ginger Beer', price: '$8.00', description: 'Fiery homemade ginger brew' },
      { name: 'Bissap Juice', price: '$8.00', description: 'West African hibiscus and mint cooler' },
      { name: 'Fresh Fruit Smoothie', price: '$10.00', description: 'Seasonal tropical fruit blend' },
      { name: 'Soft Drinks', price: '$5.00', description: 'Coca-Cola, Fanta, Sprite and more' },
    ],
  },
  {
    id: 'small-chops',
    label: 'Small Chops',
    items: [
      { name: 'Small Chops Platter (Small)', price: '$35.00', description: 'Assorted bites — samosa, spring rolls, puff puff, chicken' },
      { name: 'Small Chops Platter (Medium)', price: '$55.00', description: 'Generous mixed platter for sharing' },
      { name: 'Small Chops Platter (Large)', price: '$80.00', description: 'Full party-size selection of all favourites' },
    ],
  },
  {
    id: 'platters',
    label: 'Platters',
    items: [
      { name: 'Jollof Rice Party Tray', price: '$95.00', description: 'Large tray of smoky party jollof — feeds 8-10' },
      { name: 'Suya Platter', price: '$100.00', description: 'Generous spread of spiced beef suya skewers' },
      { name: 'Mixed Grill Platter', price: '$120.00', description: 'Grilled chicken, suya, plantain and sides' },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      { name: 'Extra Rice', price: '$5.00', description: 'White or jollof rice' },
      { name: 'Fried Plantain', price: '$7.00', description: 'Sweet ripe plantain slices' },
      { name: 'Coleslaw', price: '$5.00', description: 'Fresh creamy coleslaw' },
      { name: 'Side Salad', price: '$8.00', description: 'Mixed greens with house dressing' },
      { name: 'Garlic Bread', price: '$6.00', description: 'Toasted with herb garlic butter' },
      { name: 'Extra Fufu', price: '$10.00', description: 'Additional pounded yam or cassava fufu' },
    ],
  },
];
