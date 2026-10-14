export interface MenuItemRow {
  name: string;
  price?: string;
  halfPrice?: string;
  fullPrice?: string;
  platePrice?: string;
  volume?: string;
}

export interface MenuSection {
  badge: string;
  columns?: string[];
  items: MenuItemRow[];
}

export interface MenuPdfPage {
  pageNumber: number;
  hasHeaderLogo?: boolean;
  vegSymbol?: 'veg' | 'non-veg';
  hasBottomBanner?: boolean;
  sections: MenuSection[];
  photoSlots?: {
    position: 'top-right' | 'top-left' | 'mid-left' | 'mid-right' | 'bottom-left' | 'bottom-right';
    alt: string;
    imageType: string;
  }[];
}

export const REAL_MENU_PDF_PAGES: MenuPdfPage[] = [
  // ==========================================
  // PAGE 1
  // ==========================================
  {
    pageNumber: 1,
    hasHeaderLogo: true,
    vegSymbol: 'non-veg',
    hasBottomBanner: true,
    sections: [
      {
        badge: 'Soup',
        items: [
          { name: 'Chicken Manchow Soup', price: '159/-' },
          { name: 'Chicken Hot & Sour Soup', price: '159/-' },
          { name: 'Chicken Clear Soup', price: '149/-' },
          { name: 'Chicken Sweet Corn Soup', price: '169/-' },
          { name: 'Chicken Lemon Coriander Soup', price: '159/-' },
        ],
      },
      {
        badge: 'Chinese Starter',
        items: [
          { name: 'Chilly Chicken', price: '249/-' },
          { name: 'Chicken Manchurian', price: '249/-' },
          { name: 'Chicken Crispy', price: '259/-' },
          { name: 'Chicken 65', price: '259/-' },
          { name: 'Spanish Chicken', price: '259/-' },
          { name: 'Dragon Chicken', price: '269/-' },
          { name: 'Chicken Black Paper', price: '249/-' },
          { name: 'Chicken Lollipop', price: '249/-' },
          { name: 'Drumps of Heaven', price: '269/-' },
          { name: 'Chicken Shahi Tukda', price: '249/-' },
          { name: 'Chicken Garlic', price: '249/-' },
          { name: 'Chicken Pakoda', price: '249/-' },
          { name: 'Chicken Jungle Chilly', price: '266/-' },
          { name: 'Egg Chilly', price: '199/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Chicken Manchow Soup', imageType: 'soup' },
      { position: 'mid-left', alt: 'Chilly Chicken', imageType: 'chilly-chicken' },
      { position: 'bottom-left', alt: 'Chicken Lollipop & Pakoda', imageType: 'chicken-starter' },
    ],
  },

  // ==========================================
  // PAGE 2
  // ==========================================
  {
    pageNumber: 2,
    sections: [
      {
        badge: 'Mutton',
        columns: ['Plate', 'Half', 'Full'],
        items: [
          { name: 'Gaonkari Special Mutton', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Champaran', platePrice: '419/-' },
          { name: 'Kala Mutton', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Warhadi', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Gaoran Lal Mas', platePrice: '419/-' },
          { name: 'Mutton Dhuvedhar', platePrice: '419/-' },
          { name: 'Mutton Rogan josh', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Makhanwala', platePrice: '419/-', halfPrice: '649/-', fullPrice: '1299/-' },
          { name: 'Mutton Sagwala', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Korma', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Lahori', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton RaRa', platePrice: '429/-' },
          { name: 'Mutton Malwani', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Masala', platePrice: '419/-', halfPrice: '639/-', fullPrice: '1279/-' },
          { name: 'Mutton Curry', platePrice: '399/-', halfPrice: '629/-', fullPrice: '1269/-' },
          { name: 'Mutton Jungli', platePrice: '419/-' },
          { name: 'Mutton Banjara', platePrice: '399/-' },
          { name: 'Mutton Bhuna', platePrice: '399/-' },
          { name: 'Fish Curry', platePrice: '399/-' },
          { name: 'Egg Curry', platePrice: '169/-' },
          { name: 'Egg Masala', platePrice: '179/-' },
          { name: 'Egg Bhuna Masala', platePrice: '179/-' },
        ],
      },
      {
        badge: 'Non Veg Biryani',
        items: [
          { name: 'Chicken Biryani', price: '299/-' },
          { name: 'Chicken Hydrabadi Biryani', price: '339/-' },
          { name: 'Chicken Afghani Biryani', price: '349/-' },
          { name: 'Chicken Tikka Biryani', price: '349/-' },
          { name: 'Tandoori Chicken Biryani', price: '339/-' },
          { name: 'Mutton Biryani', price: '379/-' },
          { name: 'Mutton Hydrabadi Biryani', price: '399/-' },
          { name: 'Mutton Punjabi Biryani', price: '399/-' },
          { name: 'Egg Biryani', price: '199/-' },
        ],
      },
      {
        badge: 'Fish',
        items: [
          { name: 'Chilly Fish', price: '249/-' },
          { name: 'Fish Fry', price: '399/-' },
          { name: 'Fish Amrutsari', price: '399/-' },
          { name: 'Chilly Prawns', price: '249/-' },
          { name: 'Boil Egg', price: '49/-' },
          { name: 'Boil Egg Fry', price: '59/-' },
          { name: 'Plain Omlet', price: '69/-' },
          { name: 'Masala Omlet', price: '79/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Spicy Mutton Curry Handi', imageType: 'mutton-curry' },
      { position: 'mid-left', alt: 'Non Veg Biryani Handi', imageType: 'biryani' },
      { position: 'bottom-right', alt: 'Crispy Sizzling Fish', imageType: 'fish-fry' },
    ],
  },

  // ==========================================
  // PAGE 3
  // ==========================================
  {
    pageNumber: 3,
    sections: [
      {
        badge: 'Non Veg Tandoor',
        columns: ['Half', 'Full'],
        items: [
          { name: 'Gaonkari Special Tikka', fullPrice: '699/-' },
          { name: 'Tandoori Chicken', halfPrice: '210/-', fullPrice: '399/-' },
          { name: 'Malai Tandoori Chicken', halfPrice: '249/-', fullPrice: '479/-' },
          { name: 'Pahadi Tandoori Chicken', halfPrice: '249/-', fullPrice: '479/-' },
          { name: 'Garlic Tandoori Chicken', halfPrice: '229/-', fullPrice: '449/-' },
          { name: 'Chicken Chakori', fullPrice: '399/-' },
          { name: 'Chicken Tikka', fullPrice: '299/-' },
          { name: 'Chicken Achari Tikka', fullPrice: '299/-' },
          { name: 'Chicken Garlic Tikka', fullPrice: '299/-' },
          { name: 'Chicken Haryali Tikka', fullPrice: '289/-' },
          { name: 'Chicken Kali Miri Tikka', fullPrice: '299/-' },
          { name: 'Chicken Seekh Kabab', fullPrice: '349/-' },
          { name: 'Chicken Jungle Kabab', fullPrice: '349/-' },
          { name: 'Raja Rani Kabab', fullPrice: '249/-' },
          { name: 'Mutton Seekh Kabab', fullPrice: '399/-' },
          { name: 'Mutton Boti Kabab', fullPrice: '399/-' },
        ],
      },
      {
        badge: 'Non Veg Chinese',
        items: [
          { name: 'Chicken Fried Rice', price: '199/-' },
          { name: 'Chicken Triple Rice', price: '299/-' },
          { name: 'Chicken Schezwan Rice', price: '199/-' },
          { name: 'Egg Fried Rice', price: '149/-' },
          { name: 'Prawns Fried Rice', price: '199/-' },
          { name: 'Chicken Noodles', price: '199/-' },
          { name: 'Chicken Hakka Noodles', price: '189/-' },
          { name: 'Chicken Singapori Noodles', price: '219/-' },
          { name: 'Chicken Schezwan Noodles', price: '199/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Tandoori Chicken Platter', imageType: 'tandoori-chicken' },
      { position: 'bottom-left', alt: 'Chicken Fried Rice Bowl', imageType: 'chicken-rice' },
    ],
  },

  // ==========================================
  // PAGE 4
  // ==========================================
  {
    pageNumber: 4,
    sections: [
      {
        badge: 'Veg Tandoor Starter',
        items: [
          { name: 'Mashroom Tikka', price: '249/-' },
          { name: 'Veg Harabhara Kabab', price: '249/-' },
          { name: 'Veg Seekh Kabab', price: '249/-' },
          { name: 'Paneer Tikka', price: '249/-' },
          { name: 'Paneer Malai Tikka', price: '266/-' },
          { name: 'Paneer Haryali Tikka', price: '249/-' },
          { name: 'Paneer Achari Tikka', price: '259/-' },
          { name: 'Paneer Garlik Tikka', price: '259/-' },
          { name: 'Paneer Chakori', price: '249/-' },
          { name: 'Paneer Hurb Tikka', price: '259/-' },
          { name: 'Paneer Warhadi Tikka', price: '249/-' },
          { name: 'Tandoori Platler', price: '499/-' },
        ],
      },
      {
        badge: 'Dal',
        items: [
          { name: 'Dal Bhaji', price: '169/-' },
          { name: 'Dal Fry', price: '149/-' },
          { name: 'Jeera Dal', price: '139/-' },
          { name: 'Yellow Dal', price: '129/-' },
          { name: 'Dal Tadka', price: '159/-' },
          { name: 'Dal Kolhapuri', price: '159/-' },
          { name: 'Dal Amritsari', price: '179/-' },
          { name: 'Pandharkawda Dal', price: '179/-' },
          { name: 'Dhaba Dal', price: '149/-' },
          { name: 'Snack Dal', price: '229/-' },
          { name: 'Butter Dal', price: '179/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Paneer Tikka Platter with Mint Chutney', imageType: 'paneer-tikka' },
      { position: 'bottom-left', alt: 'Dal Tadka in Brass Bucket', imageType: 'dal-tadka' },
    ],
  },

  // ==========================================
  // PAGE 5
  // ==========================================
  {
    pageNumber: 5,
    sections: [
      {
        badge: 'Roti',
        items: [
          { name: 'Tawa Roti', price: '19/-' },
          { name: 'Bhakar', price: '29/-' },
          { name: 'Tandoori Roti', price: '19/-' },
          { name: 'Tandoori Butter Roti', price: '29/-' },
          { name: 'Laccha Paratha', price: '49/-' },
          { name: 'Butter Naan', price: '59/-' },
          { name: 'Garlic Butter Naan', price: '69/-' },
          { name: 'Plan Naan', price: '49/-' },
          { name: 'Plan Kulcha', price: '29/-' },
          { name: 'Staf Kulcha', price: '59/-' },
          { name: 'Family Naan', price: '79/-' },
        ],
      },
      {
        badge: 'Soup',
        items: [
          { name: 'Veg Manchau Soup', price: '139/-' },
          { name: 'Veg Hot & Sour Soup', price: '149/-' },
          { name: 'Sweet Corn Soup', price: '139/-' },
          { name: 'Lemon Coriander soup', price: '139/-' },
          { name: 'Cream of Tomato Soup', price: '139/-' },
          { name: 'Veg Clear Soup', price: '119/-' },
        ],
      },
      {
        badge: 'Rice',
        items: [
          { name: 'Steam Rice', price: '149/-' },
          { name: 'Jira Rice', price: '159/-' },
          { name: 'Jira Garlic Rice', price: '169/-' },
          { name: 'Lemon Rice', price: '169/-' },
          { name: 'Biryani Rice', price: '159/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Freshly Baked Roti & Naan Stack', imageType: 'roti-stack' },
      { position: 'mid-left', alt: 'Tomato & Vegetable Soup', imageType: 'veg-soup' },
      { position: 'bottom-right', alt: 'Steaming Basmati Rice', imageType: 'steam-rice' },
    ],
  },

  // ==========================================
  // PAGE 6
  // ==========================================
  {
    pageNumber: 6,
    sections: [
      {
        badge: 'Non Veg Main Course Chicken',
        columns: ['Plate', 'Half', 'Full'],
        items: [
          { name: 'Gaonkari Special Chicken', platePrice: '379/-', halfPrice: '559/-', fullPrice: '1129/-' },
          { name: 'Chicken Champarun', platePrice: '379/-', halfPrice: '559/-', fullPrice: '1129/-' },
          { name: 'Kala Chicken', platePrice: '339/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Malwani', platePrice: '339/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Warhadi', platePrice: '339/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Dhuvedar', platePrice: '379/-' },
          { name: 'Chicken Curry', platePrice: '339/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Kadhai', platePrice: '339/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Butter Masala', platePrice: '349/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Ra Ra', platePrice: '369/-', halfPrice: '549/-', fullPrice: '1099/-' },
          { name: 'Chicken Tikka Masala', platePrice: '349/-' },
          { name: 'Chicken Afghani', platePrice: '349/-' },
          { name: 'Chicken Lahori', platePrice: '349/-' },
          { name: 'Chicken Punjabi', platePrice: '369/-', halfPrice: '549/-', fullPrice: '1099/-' },
          { name: 'Chicken Rogan Josh', platePrice: '349/-' },
          { name: 'Murgh Musallam', platePrice: '349/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Korma', platePrice: '349/-' },
          { name: 'Chicken Mughlai', platePrice: '349/-' },
          { name: 'Chicken Patiyala', platePrice: '349/-' },
          { name: 'Chicken Sagwala', platePrice: '349/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Changezi', platePrice: '379/-' },
          { name: 'Chicken Lajawab', platePrice: '379/-' },
          { name: 'Chicken Masala', platePrice: '349/-', halfPrice: '499/-', fullPrice: '999/-' },
          { name: 'Chicken Bhuna', platePrice: '339/-' },
        ],
      },
    ],
  },

  // ==========================================
  // PAGE 7
  // ==========================================
  {
    pageNumber: 7,
    sections: [
      {
        badge: 'Gaonkari Swad',
        items: [
          { name: 'Kaccha Bharta', price: '149/-' },
          { name: 'Vanga Masala', price: '199/-' },
          { name: 'Vanga Bharta', price: '199/-' },
          { name: 'Tamator Chutney', price: '199/-' },
          { name: 'Bhendi Masala', price: '199/-' },
          { name: 'Zunka', price: '249/-' },
          { name: 'Pithal (Ambat Besan)', price: '199/-' },
          { name: 'Kadi', price: '99/-' },
          { name: 'Jeera Aloo', price: '199/-' },
          { name: 'Aloo Curry', price: '199/-' },
          { name: 'Aloo Mutter', price: '199/-' },
          { name: 'Aloo Gobi', price: '199/-' },
          { name: 'Shev Bhaji', price: '199/-' },
        ],
      },
      {
        badge: 'Kofta',
        items: [
          { name: 'Veg Anda Curry', price: '259/-' },
          { name: 'Veg Rajwadi Kofta', price: '299/-' },
          { name: 'Sham Sabera Kofta', price: '299/-' },
          { name: 'Veg Nargisi Kofta', price: '299/-' },
          { name: 'Veg Kofta Curry', price: '249/-' },
          { name: 'Malai Kofta', price: '299/-' },
          { name: 'Veg Lahori Kofta', price: '259/-' },
          { name: 'Rajastani Kofta', price: '249/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Bharli Vanga Masala', imageType: 'vanga-masala' },
      { position: 'mid-right', alt: 'Pithla Zunka Bowl', imageType: 'pithla-zunka' },
      { position: 'bottom-left', alt: 'Creamy Malai Kofta', imageType: 'malai-kofta' },
    ],
  },

  // ==========================================
  // PAGE 8
  // ==========================================
  {
    pageNumber: 8,
    sections: [
      {
        badge: 'Rice & Noodles Starter',
        items: [
          { name: 'Veg Noodles', price: '149/-' },
          { name: 'Veg Hakka Noodles', price: '159/-' },
          { name: 'Veg Singapuri Noodles', price: '179/-' },
          { name: 'Schezwan Noodles', price: '159/-' },
          { name: 'Paneer Noodles', price: '199/-' },
          { name: 'Manchurian Noodles', price: '169/-' },
          { name: 'Veg Fried Rice', price: '159/-' },
          { name: 'Schezwan Fried Rice', price: '169/-' },
          { name: 'Triple Schezwan Fried Rice', price: '249/-' },
          { name: 'Manchurian Fried Rice', price: '159/-' },
          { name: 'Paneer Fried Rice', price: '179/-' },
        ],
      },
      {
        badge: 'Biryani',
        items: [
          { name: 'Veg Pulao', price: '289/-' },
          { name: 'Veg Biryani', price: '299/-' },
          { name: 'Paneer Tikka Biryani', price: '359/-' },
          { name: 'Paneer Hydrabadi Biryani', price: '349/-' },
          { name: 'Paneer Punjabi Biryani', price: '349/-' },
          { name: 'Dal Khichdi', price: '199/-' },
          { name: 'Masala Dal Khichadi', price: '219/-' },
          { name: 'Namdev Dal Khichadi', price: '229/-' },
          { name: 'Butter Dal Khichdi', price: '239/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Veg Hakka Noodles with Fork', imageType: 'veg-noodles' },
      { position: 'bottom-left', alt: 'Veg Dum Biryani Bowl', imageType: 'veg-biryani' },
    ],
  },

  // ==========================================
  // PAGE 9
  // ==========================================
  {
    pageNumber: 9,
    sections: [
      {
        badge: 'Paneer',
        items: [
          { name: 'Gaonkari Special', price: '399/-' },
          { name: 'Tawa Panner', price: '299/-' },
          { name: 'Paneer Maratha', price: '299/-' },
          { name: 'Paneer Lajawab', price: '299/-' },
          { name: 'Paneer Taka Tak', price: '289/-' },
          { name: 'Paneer Lasuni', price: '249/-' },
          { name: 'Paneer Lahori', price: '249/-' },
          { name: 'Paneer Warhadi', price: '249/-' },
          { name: 'Paneer Butter Masala', price: '249/-' },
          { name: 'Sahi Paneer', price: '299/-' },
          { name: 'Paneer Tikka Masala', price: '289/-' },
          { name: 'Cheese Butter Masala', price: '299/-' },
          { name: 'Paneer Angara', price: '299/-' },
          { name: 'Kadhai Panner', price: '249/-' },
          { name: 'Paneer Kali Miri', price: '249/-' },
          { name: 'Paneer Malwani', price: '249/-' },
          { name: 'Palak Paneer', price: '249/-' },
          { name: 'Paneer Ra Ra Masala', price: '299/-' },
          { name: 'Mutter Paneer', price: '249/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Paneer Tawa Sizzler', imageType: 'paneer-tawa' },
      { position: 'mid-right', alt: 'Kadhai Paneer Handi', imageType: 'kadhai-paneer' },
    ],
  },

  // ==========================================
  // PAGE 10
  // ==========================================
  {
    pageNumber: 10,
    hasHeaderLogo: true,
    vegSymbol: 'veg',
    hasBottomBanner: true,
    sections: [
      {
        badge: 'Beverages',
        columns: ['Volume', 'Price'],
        items: [
          { name: 'Mineral Water', price: '20/-' },
          { name: 'Cold Drink', volume: '200 ml', price: '25/-' },
          { name: 'Cold Drink', volume: '500 ml', price: '60/-' },
          { name: 'Sweet Line Soda', price: '30/-' },
        ],
      },
      {
        badge: 'Papad',
        items: [
          { name: 'Masala Papad', price: '49/-' },
          { name: 'Fry Papad', price: '39/-' },
          { name: 'Rost Papad', price: '19/-' },
          { name: 'Rost Masala Papad', price: '29/-' },
        ],
      },
      {
        badge: 'Salad',
        items: [
          { name: 'Green Salad', price: '99/-' },
          { name: 'Tomato Salad', price: '89/-' },
          { name: 'Butter Milk', price: '49/-' },
          { name: 'Onion Salad', price: '89/-' },
          { name: 'Kuchumbar Salad', price: '119/-' },
          { name: 'Bundi Raita', price: '119/-' },
          { name: 'Mix Veg Raita', price: '119/-' },
          { name: 'Beats Fruit Salad', price: '129/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Iced Cold Drink Glass', imageType: 'cold-drink' },
      { position: 'mid-left', alt: 'Crispy Masala Papad', imageType: 'masala-papad' },
      { position: 'bottom-right', alt: 'Fresh Salad & Chilled Buttermilk', imageType: 'salad-buttermilk' },
    ],
  },

  // ==========================================
  // PAGE 11
  // ==========================================
  {
    pageNumber: 11,
    sections: [
      {
        badge: 'Main Course Veg',
        items: [
          { name: 'Veg Maharaja', price: '240/-' },
          { name: 'Tawa Veg', price: '240/-' },
          { name: 'Veg Jothpuri', price: '220/-' },
          { name: 'Veg Jaypuri', price: '220/-' },
          { name: 'Veg Lahori', price: '220/-' },
          { name: 'Veg Maratha', price: '220/-' },
          { name: 'Veg Malwani', price: '220/-' },
          { name: 'Veg Diwani Handi', price: '240/-' },
          { name: 'Veg Egg Curry', price: '260/-' },
          { name: 'Veg Khima Kasturi', price: '250/-' },
          { name: 'Veg Khima Masala', price: '250/-' },
          { name: 'Veg Angara Masala', price: '260/-' },
          { name: 'Veg Banjara', price: '240/-' },
          { name: 'Veg Lajwab', price: '240/-' },
          { name: 'Veg Warhadi', price: '240/-' },
        ],
      },
      {
        badge: 'Mushroom',
        items: [
          { name: 'Gaokari Special Mushroom', price: '249/-' },
          { name: 'Mushroom Masala', price: '249/-' },
          { name: 'Kadhai Mushroom', price: '259/-' },
          { name: 'Mashroom Do Pyaja', price: '249/-' },
          { name: 'Punjabi Mushroom', price: '249/-' },
          { name: 'Paneer Mushroom', price: '259/-' },
          { name: 'Mutter Mushroom', price: '239/-' },
          { name: 'Mushroom Angara Masala', price: '299/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Veg Diwani Handi', imageType: 'veg-curry' },
      { position: 'mid-right', alt: 'Shev Bhaji in Spicy Rassa', imageType: 'shev-bhaji' },
      { position: 'bottom-left', alt: 'Kadhai Mushroom Masala', imageType: 'mushroom-masala' },
    ],
  },

  // ==========================================
  // PAGE 12
  // ==========================================
  {
    pageNumber: 12,
    sections: [
      {
        badge: 'Veg Starter Chinese',
        items: [
          { name: 'Chilly Paneer', price: '239/-' },
          { name: 'Chilly Potato', price: '179/-' },
          { name: 'Paneer 65', price: '249/-' },
          { name: 'Paneer Manchurian', price: '239/-' },
          { name: 'Paneer Soti Boti', price: '249/-' },
          { name: 'Dragon Paneer', price: '249/-' },
          { name: 'Thread Paneer', price: '279/-' },
          { name: 'Paneer Black Paper', price: '249/-' },
          { name: 'Paneer Magestic', price: '279/-' },
          { name: 'Paneer Garlic', price: '239/-' },
          { name: 'Crispy Veg', price: '219/-' },
          { name: 'Veg Machurian', price: '219/-' },
          { name: 'Chilly Mashroom', price: '229/-' },
          { name: 'American Chopsy', price: '239/-' },
          { name: 'Salt & Paper Crispy Corn', price: '229/-' },
          { name: 'Crispy Corn', price: '219/-' },
          { name: 'Spanish Paneer', price: '239/-' },
          { name: 'Veg 65', price: '219/-' },
          { name: 'Honey Potato', price: '179/-' },
          { name: 'French Fries Plan', price: '139/-' },
          { name: 'French Fries Peri Peri', price: '149/-' },
        ],
      },
    ],
    photoSlots: [
      { position: 'top-right', alt: 'Chilly Paneer Appetizer', imageType: 'chilly-paneer' },
      { position: 'mid-right', alt: 'Golden Crispy French Fries', imageType: 'french-fries' },
      { position: 'bottom-right', alt: 'Crispy Veg Manchurian', imageType: 'veg-manchurian' },
    ],
  },
];
