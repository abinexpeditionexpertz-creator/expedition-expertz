export type Article = {
  id: number;
  category: 'Adventure' | 'Education' | 'Culture' | 'Nature';
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  size: 'large' | 'small' | 'wide';
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

const articles: Article[] = [
  {
    id: 1,
    category: 'Nature',
    title: "Deep into the Amazon: A Biologist's Log",
    excerpt: "Discover the hidden micro-ecosystems flourishing within the world's largest rainforest canopy.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtOl8GL4MLQ3iGbGL2G5GdYLa4oyixtiFYwRJqWiuFgonMYQDJfqBJgWjdZRNveABYurGfGJT15mFStVSRwzdytrbpen5AV7fURvC47wuJjd6OVvZQZP_q8PDG6tiGLnN7DMLVv0DAKfMhc2mwv4nXdHg34ze86DNFXJk3hYWxlx0NdJwxROm4QCGyoIstnos98CDNr0Cz1l0lsPOn8iz2rIZ-M0qSWGYqKuEJvW1Ag_AoMISF5AYGYHBacQMNa6E4rWgXmUVuY54',
    alt: 'Amazon Basin aerial view',
    size: 'large',
    author: 'Dr. Elena Rostova',
    date: 'May 12, 2026',
    readTime: '6 min read',
    content: [
      "Deep in the heart of the Amazon Basin, the canopy rises like a green cathedral, holding secrets that have existed for millions of years. Our team of biologists embarked on a 14-day field expedition to study the micro-ecosystems thriving eighty feet above the forest floor.",
      "Using customized suspension rigs and high-altitude climbing equipment, we established observation platforms within the branches of giant Kapok trees. What we discovered was a universe in miniature: rare orchids collecting rainwater to host tiny glass frogs, and undiscovered insects playing crucial roles in canopy pollination.",
      "This biologist's log serves as a testament to the sheer scale of life in the Amazon. Every leaf is a habitat, and every tree is a monument of evolutionary history. Safeguarding these ancient forests isn't just about conservation — it is about keeping our planet's greatest library of life intact."
    ]
  },
  {
    id: 2,
    category: 'Culture',
    title: 'The Lost Temples of Cambodia',
    excerpt: 'Uncovering the architectural marvels reclaimed by the forest in the heart of Southeast Asia.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAni4CFejTD_e34VdWzUBduY2YNgmme_plE1vh5ON9IBj6iYWbggPeCVeX42AZUnJg4_L8KO8bu31ZndGWzvgfq0nwNV0Ge8hO5lGxkjzqAfQcVDYuaIfO8lUOcVXEO1kfKoNHyLr4GKRvX7H1iXHXThliTqGVsaGUrApIAVN2yh1FJwLa23yVbzP_FOY-xSR1OwOgS7h-c6u2Tfs3A6qFg3tX5coHxxO3etL1_mlayGgqAkwqAvR13M8Xo_sJRSbS8704QeVwCoU',
    alt: 'Cambodia cultural artifacts',
    size: 'small',
    author: 'Siddharth Mehta',
    date: 'April 28, 2026',
    readTime: '5 min read',
    content: [
      "Beyond the famous towers of Angkor Wat lies a labyrinth of ancient temples swallowed whole by the Cambodian jungle. Over the centuries, massive Banyan trees have wrapped their root structures around carved stone walls, creating a stunning fusion of art and nature.",
      "Our cultural exploration took us off the beaten track to Beng Mealea and Koh Ker, where we collaborated with local Khmer guides to document the ancient bas-relief carvings. Every stone block tells a story of mythological kings, celestial dancers, and ancient empires.",
      "By understanding the historical significance of these structures and supporting local guides, we help preserve this rich heritage for generations to come. It's a humbling reminder that nature eventually reclaims everything, leaving behind monuments of breathtaking beauty."
    ]
  },
  {
    id: 3,
    category: 'Adventure',
    title: 'Summiting the Impossible Peak',
    excerpt: 'A first-hand account of the grueling 20-hour push to reach the peak of Mount Fitz Roy.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe1HtCVXZ71l7WH1U_C-HT7Fw7u0TcyPXZ4C3PLnFgUqZCihkNLnGAh7I4v6Cd9SSzogqGyRI6lTph_F0CrlQv6iJFfFaWdCsubGDpxK1tCI_vxI6FlWV03m8AFDn1mYeU6MUnZdH8CiqTQ1SyYEjjh3qYdRFD0r7llOM1VyjZX2w4YfFnl897t-RahBC5B0F7YvMoqifHYgBLA7lX5jjhwf5zlLwXDYQwJwBcKtAAMS1nnZL15_Us9iG51D0_fE0tAcjFfXWU9Mg',
    alt: 'Hiker on mountain ridge',
    size: 'small',
    author: 'Julian Sterling',
    date: 'March 15, 2026',
    readTime: '8 min read',
    content: [
      "Mount Fitz Roy rises like a jagged granite tooth from the Patagonian ice fields, notorious for its fierce winds and sheer vertical faces. The window of opportunity to climb is notoriously thin, demanding perfection in strategy and physical stamina.",
      "We began our final push from Rio Blanco camp at 2:00 AM under a canopy of starlight. The final vertical scramble involved technical ice climbing and vertical rock maneuvers against freezing winds. The reward? Reaching the summit at noon to gaze across a limitless sea of peaks and blue glaciers.",
      "Adventure isn't about reckless danger; it is about meticulous preparation, mental resilience, and absolute respect for the mountains. In climbing Fitz Roy, we didn't conquer the peak — we conquered our own limits."
    ]
  },
  {
    id: 4,
    category: 'Education',
    title: 'History Reimagined: The Silk Road',
    excerpt: 'How modern archaeological techniques are rewriting the history of ancient trade routes between East and West.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtolupqjWI-R7_tocoI-pp5b82S-iYPGoujp3HxPij_B-TPldHwDjgJhiY6Fc_rWy4lnccZGSB6iYPJd1uMBYPqHHMXBSEWEp10QgLOF--v7GkL5AJ2KbZIsF5NLocIYy5ZLlpvlo5Pq1PuOgJuVmUur6mnKN-n3BgOtE5bKsGqKnXKsk0CkopOt64zWMr_Tj1iSYDI3s_RVUeqX-irL73HkGTpxl8fyVZULrvCWxzGX1g0Nmt3S6UsLX7c4olhRGYqjaBJeb98Qo',
    alt: 'Library historical building',
    size: 'wide',
    author: 'Prof. Clara Higgins',
    date: 'February 10, 2026',
    readTime: '7 min read',
    content: [
      "The Silk Road was never a single highway, but rather an intricate network of desert tracks, mountain passes, and river crossings connecting Asia with the Mediterranean. Our educational expedition followed the footprints of ancient merchants through the oasis cities of Central Asia.",
      "Equipped with portable multi-spectral scanners and satellite imaging data, students analyzed the architecture of ancient caravanserais. These mudbrick outposts served as ancient hotels where ideas, religions, and science were exchanged as freely as spices and silk.",
      "Experiential learning brings history out of the textbooks and into the light. By standing in the very spots where East met West, students gained a profound understanding of global interconnectedness and the roots of modern globalization."
    ]
  },
  {
    id: 5,
    category: 'Adventure',
    title: 'Nordic Ice Caves: A Winter Tale',
    excerpt: 'Exploring the mesmerizing blue ice caves of Iceland before the warm season closes them forever.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgtdR0DI3OioSwCRu0FxA_s01Bnb7i5fv8CaiEef1Eo6UuShCjnzqiwWkcCcyxkKal1eg1QYIPOhANC-AxiE0ctdBSD9pe21_T7nKOExG4H6RTwAGNnn9PFZvnM5JjzjWcWQRlYjfKDTPOheM55VeHbJuyUv-egSPOb41-pchu_LJK3RQnvqJELx4eclmlLumFiKno0tQQj7plRYKtkOu7wiA1n7dNJN9Diwf-xB4QH5DKgwzBsexdBq1tdHUmHbKmg6JiiKmQPFo',
    alt: 'Swiss alpine landscape',
    size: 'small',
    author: 'Elias Thorne',
    date: 'January 5, 2026',
    readTime: '5 min read',
    content: [
      "Underneath the vast Vatnajökull glacier, water carves elaborate tunnels through crystal-clear blue ice during the autumn months. These ice caves are temporary masterpieces of nature, shifting in shape, color, and structure with every passing day.",
      "Equipped with crampons, helmets, and heavy-duty lighting, we ventured into the glacier's interior. The deep cobalt hues of the ice, caused by centuries of extreme pressure squeezing out oxygen, felt like walking inside a frozen geode.",
      "Capturing these caves through photography is a race against time, as summer heat will collapse the tunnels entirely. This winter tale reminds us of the delicate balance of our planet's ice reserves and the breathtaking transience of natural art."
    ]
  },
  {
    id: 6,
    category: 'Nature',
    title: 'Patagonia: Where Wind Speaks',
    excerpt: 'Trekking the legendary W Circuit through Torres del Paine, the crown jewel of South America.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_mpix_PxRiQHsf-Caz2o4GONHGqEXZAtkRhuTvP7x5ASfd8lYjLsmTB7DiOri9BWL-S36WJTr3LILwzQfKRhu9ZIhT6yNTJL4scruSWm2E-_wTybcV1WA1BaNpHZ_b0CIzsZ-WUez2GVjJofd1SkAkgWn1WQDLhOb2oCmHxibc53FizBlz7p6Gjzu-Znbz0r0k_0QXgFn1N0_YinaR6vHt7q7rbNuBOYAalma6mZVemlkQ2CF2QU3xxGBUYxucVLu-4ETQ5NGZs',
    alt: 'Patagonia peaks',
    size: 'small',
    author: 'Mateo Silva',
    date: 'December 18, 2025',
    readTime: '6 min read',
    content: [
      "In Patagonia, the wind is not just a weather pattern; it is a permanent resident. It sweeps across the Southern Ice Field, carving granite towers, flattening grasslands, and producing dramatic, fast-shifting cloud structures.",
      "Trekking the classic W Circuit, our expedition group experienced four seasons in a single day. From sun-drenched valleys to sudden blizzard sweeps in the French Valley, the sheer scale of Patagonia demands humble flexibility and outdoor expertise.",
      "Gazing up at the three granite towers of Torres del Paine as a pink sunrise lit their vertical faces was a moment of pure silence. Patagonia reminds us that the best things in life require effort, sweat, and a willingness to listen to the wilderness."
    ]
  }
];

export default articles;
