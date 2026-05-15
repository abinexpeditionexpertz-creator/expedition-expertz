export type Article = {
  id: number;
  category: 'Adventure' | 'Education' | 'Culture' | 'Nature';
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  size: 'large' | 'small' | 'wide';
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
  },
  {
    id: 2,
    category: 'Culture',
    title: 'The Lost Temples of Cambodia',
    excerpt: 'Uncovering the architectural marvels reclaimed by the forest in the heart of Southeast Asia.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAni4CFejTD_e34VdWzUBduY2YNgmme_plE1vh5ON9IBj6iYWbggPeCVeX42AZUnJg4_L8KO8bu31ZndGWzvgfq0nwNV0Ge8hO5lGxkjzqAfQcVDYuaIfO8lUOcVXEO1kfKoNHyLr4GKRvX7H1iXHXThliTqGVsaGUrApIAVN2yh1FJwLa23yVbzP_FOY-xSR1OwOgS7h-c6u2Tfs3A6qFg3tX5coHxxO3etL1_mlayGgqAkwqAvR13M8Xo_sJRSbS8704QeVwCoU',
    alt: 'Cambodia cultural artifacts',
    size: 'small',
  },
  {
    id: 3,
    category: 'Adventure',
    title: 'Summiting the Impossible Peak',
    excerpt: 'A first-hand account of the grueling 20-hour push to reach the peak of Mount Fitz Roy.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe1HtCVXZ71l7WH1U_C-HT7Fw7u0TcyPXZ4C3PLnFgUqZCihkNLnGAh7I4v6Cd9SSzogqGyRI6lTph_F0CrlQv6iJFfFaWdCsubGDpxK1tCI_vxI6FlWV03m8AFDn1mYeU6MUnZdH8CiqTQ1SyYEjjh3qYdRFD0r7llOM1VyjZX2w4YfFnl897t-RahBC5B0F7YvMoqifHYgBLA7lX5jjhwf5zlLwXDYQwJwBcKtAAMS1nnZL15_Us9iG51D0_fE0tAcjFfXWU9Mg',
    alt: 'Hiker on mountain ridge',
    size: 'small',
  },
  {
    id: 4,
    category: 'Education',
    title: 'History Reimagined: The Silk Road',
    excerpt: 'How modern archaeological techniques are rewriting the history of ancient trade routes between East and West.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtolupqjWI-R7_tocoI-pp5b82S-iYPGoujp3HxPij_B-TPldHwDjgJhiY6Fc_rWy4lnccZGSB6iYPJd1uMBYPqHHMXBSEWEp10QgLOF--v7GkL5AJ2KbZIsF5NLocIYy5ZLlpvlo5Pq1PuOgJuVmUur6mnKN-n3BgOtE5bKsGqKnXKsk0CkopOt64zWMr_Tj1iSYDI3s_RVUeqX-irL73HkGTpxl8fyVZULrvCWxzGX1g0Nmt3S6UsLX7c4olhRGYqjaBJeb98Qo',
    alt: 'Library historical building',
    size: 'wide',
  },
  {
    id: 5,
    category: 'Adventure',
    title: 'Nordic Ice Caves: A Winter Tale',
    excerpt: 'Exploring the mesmerizing blue ice caves of Iceland before the warm season closes them forever.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgtdR0DI3OioSwCRu0FxA_s01Bnb7i5fv8CaiEef1Eo6UuShCjnzqiwWkcCcyxkKal1eg1QYIPOhANC-AxiE0ctdBSD9pe21_T7nKOExG4H6RTwAGNnn9PFZvnM5JjzjWcWQRlYjfKDTPOheM55VeHbJuyUv-egSPOb41-pchu_LJK3RQnvqJELx4eclmlLumFiKno0tQQj7plRYKtkOu7wiA1n7dNJN9Diwf-xB4QH5DKgwzBsexdBq1tdHUmHbKmg6JiiKmQPFo',
    alt: 'Swiss alpine landscape',
    size: 'small',
  },
  {
    id: 6,
    category: 'Nature',
    title: 'Patagonia: Where Wind Speaks',
    excerpt: 'Trekking the legendary W Circuit through Torres del Paine, the crown jewel of South America.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_mpix_PxRiQHsf-Caz2o4GONHGqEXZAtkRhuTvP7x5ASfd8lYjLsmTB7DiOri9BWL-S36WJTr3LILwzQfKRhu9ZIhT6yNTJL4scruSWm2E-_wTybcV1WA1BaNpHZ_b0CIzsZ-WUez2GVjJofd1SkAkgWn1WQDLhOb2oCmHxibc53FizBlz7p6Gjzu-Znbz0r0k_0QXgFn1N0_YinaR6vHt7q7rbNuBOYAalma6mZVemlkQ2CF2QU3xxGBUYxucVLu-4ETQ5NGZs',
    alt: 'Patagonia peaks',
    size: 'small',
  },
];

export default articles;
