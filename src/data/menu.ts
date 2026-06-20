export interface MenuItem {
  name: string;
  description: string;
  price: string;
  spice?: 'mild' | 'medium' | 'hot' | 'none';
  dietary?: ('vegan' | 'vegetarian' | 'gf' | 'contains-nuts')[];
  details?: string;
  image?: string;
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
        dietary: ['vegetarian', 'gf'],
        spice: 'none',
        details: 'Akara is made from seasoned black-eyed pea paste whipped with onions and fresh peppers, then deep-fried into light, crispy golden spheres. Paired with Puff Puff, a sweet, yeasted fried dough that is crispy outside and cloud-like inside.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Spring Rolls',
        description: 'Crispy golden rolls filled with seasoned vegetables and meat, served with a dipping sauce.',
        price: '$10',
        spice: 'none',
        details: 'Delicately rolled pastries packed with a savoury crunch of julienned vegetables, tender glass noodles, and local herbs, fried to perfection and paired with our house hot-and-sweet sauce.',
        image: '/suya-skewers.png'
      },
      {
        name: 'Plantain',
        description: 'Sweet fried ripe plantains, golden and caramelised on the outside, tender within.',
        price: '$10',
        dietary: ['vegan', 'vegetarian', 'gf'],
        spice: 'none',
        details: 'Known as Dodo in West Africa, we use perfectly ripe sweet plantains sliced diagonally and fried in vegetable oil until the natural sugars caramelise into a rich, sweet, and sticky culinary masterpiece.',
        image: '/plantain-dish.png'
      },
      {
        name: 'Moi Moi / Oleh Leh',
        description: 'Steamed bean pudding packed with peppers, onions, and spices — a Nigerian staple.',
        price: '$10',
        dietary: ['vegetarian', 'gf'],
        spice: 'mild',
        details: 'A protein-rich, steamed pudding made from pureed washed black-eyed peas, red bell peppers, habaneros, onions, and vegetable oil. Gently steamed in local leaves to lock in a rich, velvety texture.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Samosa (Vegetarian)',
        description: 'Flaky pastry triangles filled with spiced vegetables, fried to golden perfection.',
        price: '$10',
        dietary: ['vegetarian'],
        spice: 'mild',
        details: 'Crispy, hand-folded triangle pastries stuffed with a seasoned mixture of diced potatoes, green peas, carrots, sweet corn, and a blend of aromatic warm spices.',
        image: '/suya-skewers.png'
      },
      {
        name: 'Southern Fried Chicken',
        description: 'Crispy, well-seasoned fried chicken bites with a Caribbean kick.',
        price: '$10',
        spice: 'mild',
        details: 'Boneless chicken chunks marinated in buttermilk, garlic, thyme, and Caribbean scotch bonnet pepper sauce, dredged in double-seasoned flour and fried to a crisp, golden crunch.',
        image: '/catering-spread.png'
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
        dietary: ['gf'],
        spice: 'medium',
        details: 'Our crown jewel. Long-grain parboiled rice cooked in a slow-simmered reduction of tomatoes, red bell peppers, onions, and habaneros, infused with bay leaves and curry. Served with dry-spiced grilled chicken quarters.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Cassava Leaves & White Rice',
        description: 'Slow-cooked cassava leaves in a rich, savoury sauce served with fluffy white rice.',
        price: '$35',
        dietary: ['gf'],
        spice: 'mild',
        details: 'Finely ground fresh cassava leaves slow-stewed in pure palm oil, seasoned with garlic, onions, dried fish, and rich beef cuts, creating a deep earthy flavour profile. Served with jasmine rice.',
        image: '/catering-spread.png'
      },
      {
        name: 'Tomato & Basil Spaghetti',
        description: 'A fusion twist — classic spaghetti in a vibrant African-spiced tomato and fresh basil sauce.',
        price: '$20',
        dietary: ['vegetarian'],
        spice: 'none',
        details: 'Al dente spaghetti tossed in a rich, reduction sauce made from fresh plum tomatoes, garlic, extra virgin olive oil, sweet bell peppers, and warm spices, finished with a fresh hand-torn basil garnish.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Okra & Fufu',
        description: 'Silky, slow-drawn okra soup served with soft, stretchy fufu — West African comfort at its finest.',
        price: '$35',
        dietary: ['gf'],
        spice: 'medium',
        details: 'A rich stew of sliced fresh okra pods, cooked in palm oil with dried shrimp, fresh fish, beef, and tripe. Served hot alongside freshly pounded smooth, elastic cassava and plantain fufu.',
        image: '/catering-spread.png'
      },
      {
        name: 'Jerk Chicken & Rice and Peas',
        description: 'Caribbean-style jerk chicken, smoky and aromatic, with traditional rice and peas.',
        price: '$35',
        dietary: ['gf'],
        spice: 'hot',
        details: 'Chicken quarters heavily marinated in our authentic jerk paste — scotch bonnets, scallions, ginger, garlic, pimento (allspice), and fresh thyme. Slow-smoked to lock in moisture and heat. Served with coconut-infused kidney bean rice.',
        image: '/catering-spread.png'
      },
      {
        name: 'Acheke',
        description: 'Light, fermented cassava couscous from Côte d\'Ivoire, served with grilled fish and attiéké sauce.',
        price: '$40',
        dietary: ['gf'],
        spice: 'medium',
        details: 'A popular Ivorian dish made from steamed, fermented cassava pulp with a light, couscous-like texture. Paired with dry-spiced pan-seared red snapper, sautéed tomatoes and onions, and a spicy yaji dipping sauce.',
        image: '/catering-spread.png'
      },
      {
        name: 'Fried Fish & Jollof',
        description: 'Whole or fillet fried fish, perfectly seasoned and crispy, with our house jollof rice.',
        price: '$40',
        dietary: ['gf'],
        spice: 'medium',
        details: 'Whole fresh sea bream or tilapia, cross-cut and rubbed in a ginger-garlic-chilli paste, fried whole until the skin is extra crispy while keeping the white meat flaky and juicy. Served with jollof rice and plantain.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Suya & Jollof Rice',
        description: 'Authentic Northern Nigerian suya — spiced skewered beef — served alongside smoky jollof.',
        price: '$35',
        dietary: ['gf', 'contains-nuts'],
        spice: 'hot',
        details: 'Thinly sliced flank steak marinated in yaji (a traditional spice rub containing ground peanuts, cayenne pepper, ginger, garlic, and bouillon), skewered and chargrilled over open coals. Paired with fresh sliced onions, tomatoes, and smoky jollof.',
        image: '/suya-skewers.png'
      },
      {
        name: 'Egusi Soup & Fufu',
        description: 'Ground melon seed soup cooked with leafy greens, meat, and bold spices. Served with fufu.',
        price: '$35',
        dietary: ['gf', 'contains-nuts'],
        spice: 'medium',
        details: 'Ground egusi (white melon seeds) simmered in palm oil with spinach, waterleaf, and a rich array of seasoned beef, cowfoot, stockfish, and smoked fish. Extremely rich in flavour and texture. Served with warm fufu.',
        image: '/jollof-rice.png'
      },
      {
        name: 'Suya Meat',
        description: 'Grilled suya skewers seasoned with yaji spice mix — a true West African street-food legend.',
        price: '$30',
        dietary: ['gf', 'contains-nuts'],
        spice: 'hot',
        details: 'A generous platter of our chargrilled beef suya skewers, coated in ground peanut and chilli spice rub, grilled to order. Served with extra yaji spice, fresh sliced onions, and raw cabbage.',
        image: '/suya-skewers.png'
      },
      {
        name: 'Steak & Jollof',
        description: 'Flame-grilled steak cooked to your preference, paired with our rich jollof rice.',
        price: '$35',
        dietary: ['gf'],
        spice: 'medium',
        details: 'A premium cut of ribeye or sirloin, rubbed in a house barbecue-chilli seasoning and grilled to perfection. Served with a side of smoky jollof rice, sweet plantains, and green pepper sauce.',
        image: '/catering-spread.png'
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
        dietary: ['vegan', 'vegetarian', 'gf'],
        spice: 'none',
        details: 'A mix of fresh broccoli, bell peppers, baby carrots, and sugar snap peas lightly sautéed in cold-pressed coconut oil, seasoned with sea salt and black pepper.',
        image: '/catering-spread.png'
      },
      {
        name: 'House Salad',
        description: 'Crisp mixed greens with our house vinaigrette dressing.',
        price: '$8',
        dietary: ['vegan', 'vegetarian', 'gf'],
        spice: 'none',
        details: 'Crispy romaine lettuce, cucumber slices, cherry tomatoes, and red onions tossed in our tangy house honey-mustard vinaigrette dressing.',
        image: '/catering-spread.png'
      },
      {
        name: 'Coleslaw',
        description: 'Creamy, tangy homemade coleslaw — the perfect companion.',
        price: '$8',
        dietary: ['vegetarian', 'gf'],
        spice: 'none',
        details: 'Shredded red and green cabbage, grated carrots, and sweet onions folded into a velvety, seasoned mayonnaise dressing with a splash of apple cider vinegar.',
        image: '/catering-spread.png'
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
        spice: 'none',
        details: 'Juicy, oven-baked chicken wings tossed in a sweet, sticky hickory barbecue sauce, served with carrot sticks.',
        image: '/catering-spread.png'
      },
      {
        name: 'Nuggets & Chips',
        description: 'Golden chicken nuggets with crispy chips — a family favourite.',
        price: '$10',
        spice: 'none',
        details: 'Crispy breast meat chicken nuggets fried to a crunchy golden brown, served alongside hot, salted French fries and ketchup.',
        image: '/catering-spread.png'
      },
      {
        name: 'Fish Bites & Chips',
        description: 'Light, crispy fish bites served with chunky chips.',
        price: '$10',
        spice: 'none',
        details: 'Bite-sized pieces of fresh white fish fillets, breaded in light panko breadcrumbs and deep-fried, served with chunky cut fries.',
        image: '/catering-spread.png'
      },
    ],
  },
];
