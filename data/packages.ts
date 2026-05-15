export type Package = {
  id: number;
  img: string;
  badge: string;
  rating: string;
  title: string;
  priceNum: number;
  price: string;
  daysNum: number;
  days: string;
  location: string;
  category: 'Holidays' | 'School Programs' | 'Custom Treks';
  href: string;
};

const packages: Package[] = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcnV9JGXr7rtxGQru1PEAoBJ35vjlrn-gPJoYKEscFcCcOWKJdivaIA26ty1oBgM1JQXbrjKeBgAY91fj2mtSESsgRBz0sFknXaAKX2zAngFNweOSxutTwMejO0fgyLlRHagKGtLFzSedXsMkQWeD0cZ0VfqvItTHo0zeJlNofworr5vTy7c0bX2lHOhS4byKRengnVonsZsIjEICWniB96qX9LHjOdH0IkOiuJo5jN6h6mNyqbe2qY6s8o5FRpML-M7f0z1PHNLY',
    badge: 'SCHOOL PROGRAM',
    rating: '4.9',
    title: 'Everest Base Camp Trek',
    priceNum: 3250,
    price: '$3,250',
    daysNum: 14,
    days: '14 Days',
    location: 'Nepal',
    category: 'School Programs',
    href: '/package/everest-trek',
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8DYx8iB_j1HzpoCvzeVMMrO02eASEUtUiah_fZdqsZJkhtwr04OM7T_x56JoUbCxJ90s8-HSOTuPoKnxmVcEyonlqNW4BiJpAzX8WpGcojEhtE9uE6FuvqPIQrl_AsA-L7Vqut7QaI__JtC9YeDRbou3gYDAEcUAWMFc_Ti19Tgmxwv2TlRAbv7iUZVTqWcE1Dq0McZpe6KpqXvJCE9wQFq8vPQgeEOlZURu8o7DQ_OB-soQvDPCSbML34mPXpDuKQ-XOdY402Ks',
    badge: 'BEST SELLER',
    rating: '4.8',
    title: 'Inca Trail Discovery',
    priceNum: 2800,
    price: '$2,800',
    daysNum: 8,
    days: '8 Days',
    location: 'Peru',
    category: 'Holidays',
    href: '/packages',
  },
  {
    id: 3,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYo9SLRa1I25ykLzRxl2xp4defGhf0cYKob2RBMenenFVT9y4D_smzjhviIqXZ9-ExUzqAk1p2nR87xImSZkiZL3PEPmyk6FEfM4HbrSc7-OtQ8caimDw4oSewLh23KncCQJkAZ-JLG70pnkzi1cmkF8WlABhIRpxNMJtnpyEEvnMgH472ngILB_ucEHP0f83CJeEpodos463ghWlJKpegyFQl6a5u2VjvwwUKCqqKu7HYldiJtiMqPWTBLk-om64lipZP5UY_B_0',
    badge: 'ECO TRAVEL',
    rating: '5.0',
    title: 'Icelandic Ring Road',
    priceNum: 4100,
    price: '$4,100',
    daysNum: 10,
    days: '10 Days',
    location: 'Iceland',
    category: 'Holidays',
    href: '/packages',
  },
  {
    id: 4,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxKvtI7wIQKIMNetSphpjUOag7BNBjRCzIV0Jr6VbIs68TyPejRxuWPsCmDabDpUXSY4_WXGXo35kGWecwKq1aEua-XEDFF40fCGD28kVJ_UR72ILKyxGJ-l8ioxzw6RgvTDBWSHMstWQm9S7Q12l3lXE79PY0_cCt3zVrMweeVKip3gqMaRu3gcVatB6-kwSW8KeMroldLjqcFIOeMmQofgUl6vWrFRkLaZrJyE1z7P2t5eJQfCQYfOEYZkx_hW_SlLc-opT_Wew',
    badge: 'NEW EXPEDITION',
    rating: '4.7',
    title: 'Serengeti Safari Quest',
    priceNum: 3800,
    price: '$3,800',
    daysNum: 7,
    days: '7 Days',
    location: 'Tanzania',
    category: 'Custom Treks',
    href: '/packages',
  },
  {
    id: 5,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_mpix_PxRiQHsf-Caz2o4GONHGqEXZAtkRhuTvP7x5ASfd8lYjLsmTB7DiOri9BWL-S36WJTr3LILwzQfKRhu9ZIhT6yNTJL4scruSWm2E-_wTybcV1WA1BaNpHZ_b0CIzsZ-WUez2GVjJofd1SkAkgWn1WQDLhOb2oCmHxibc53FizBlz7p6Gjzu-Znbz0r0k_0QXgFn1N0_YinaR6vHt7q7rbNuBOYAalma6mZVemlkQ2CF2QU3xxGBUYxucVLu-4ETQ5NGZs',
    badge: 'ADVENTURE',
    rating: '4.9',
    title: 'Patagonia Peaks',
    priceNum: 5200,
    price: '$5,200',
    daysNum: 12,
    days: '12 Days',
    location: 'Chile',
    category: 'Custom Treks',
    href: '/packages',
  },
  {
    id: 6,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVd1ti0qcrWxmFHb_f657rypIlYgkeLBwjFN_3j2kWri6goTmDQ29ikC2t3lUeUvmq3dqVKU5_TURPVFitI9jHSB54DyLjULRfFtBvvIVO_GhD8y-ydbeZMvJdAN4bPXHt7YHieCjkAJKOUmaTnOuiQ1nAti7LgITnEVy6PZoHvCFtabjnjToVPZK9PQ9KGcpSbKiW7NSCuA7UtRShyOQa1RIjiWJFMVPKaA3kGSbFIbw0hBeBPTo0ZcqDtKJRQQq3H41eok9G1jU',
    badge: 'LUXURY',
    rating: '5.0',
    title: 'Maldives Retreat',
    priceNum: 6500,
    price: '$6,500',
    daysNum: 5,
    days: '5 Days',
    location: 'Maldives',
    category: 'Holidays',
    href: '/packages',
  },
  {
    id: 7,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCinFTxOnEEiwjAAc5Sz19c7U0WVCwXuf_fYd7Q2DUgI5jCUSIY0Z62rWrr5fUKu9OkZtfZjoA7azCp8yUjS6EDEWufFxtSv7j43LnPqTvDGb8Qjy0ldIn1ZFdHJilvq4a8EzSnDrgitzEiawwb3JN9narfnJNgZ9HOsnI-dtxSH9oRKG15iuHsr9hjAlPbN5jkkiAGPGN-mlMGUYr8FsRk1oUgvVu6KgcrVTKsneANQf4PjzNyL65w-4BYHpy7SaZs4ln0INurwB4',
    badge: 'HIDDEN GEM',
    rating: '4.8',
    title: 'Madeira Island Trek',
    priceNum: 2100,
    price: '$2,100',
    daysNum: 12,
    days: '12 Days',
    location: 'Portugal',
    category: 'Custom Treks',
    href: '/packages',
  },
  {
    id: 8,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDicFM8eMHUBQMegurnZMazGhYMCxjVnOCF34wpfHhQ5DqOiiCVuBJO6tRy_VbZ5wDFrMxj2QH_dtkjz7CwNl-ilv4_dQHer12DU5HdhhFo6aSOc3_T0RrV5Ndnfmqsq7QapepxxOotNKQG3hjI09XlC3z0XGyUQfqkecHwbnPHo1U4uwfL8Y7r4qqOBeRlfSyy2Z5Nf5j1Zfh1Qj46Ni3jLjUIWyq_pXGn30DlyLxr8pXe7O3Dd81yvr1-h8l5medI-96aQ6UuR7I',
    badge: 'SCHOOL SPECIAL',
    rating: '4.9',
    title: 'Canadian Wilderness Week',
    priceNum: 3400,
    price: '$3,400',
    daysNum: 8,
    days: '8 Days',
    location: 'Canada',
    category: 'School Programs',
    href: '/packages',
  },
];

export default packages;
