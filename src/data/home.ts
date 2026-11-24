import type { PlaceholderIcon, ProductImage, Tint } from '../lib/types';

export interface Slide {
  // Short name on the slider tab
  tab: string;
  pill: string;
  script: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: ProductImage;
  placeholder: PlaceholderIcon;
  tint: Tint;
}

// Banner slides on the home page. Texts are placeholders until Sakura sends her own.
export const slides: Slide[] = [
  {
    tab: 'Bow clips',
    pill: 'New in',
    script: 'Angel wing',
    title: 'bow clips',
    text: 'Little wings for your hair, in soft pink and white. Made one by one, so every bow is a bit different.',
    primary: { label: 'Shop the bows', href: '/shop/?category=hair' },
    secondary: { label: 'All new releases', href: '/shop/?category=new' },
    placeholder: 'bow',
    tint: 'cream',
  },
  {
    tab: 'Pearl necklaces',
    pill: 'New in',
    script: 'Sweet pearl',
    title: 'necklaces',
    text: 'Soft pearls with a little pink heart. Wear one on its own or layer them for your coord.',
    primary: { label: 'Shop jewellery', href: '/shop/?category=jewellery' },
    secondary: { label: 'All new releases', href: '/shop/?category=new' },
    placeholder: 'necklace',
    tint: 'butter',
  },
  {
    tab: 'Pop-up · 21 Dec',
    pill: 'Pop-up',
    script: 'Come say hi',
    title: 'Pop-up on 21 December',
    text: 'Find me at Motion Coffee Café in Amsterdam. See the treasures up close and pick your favourites.',
    primary: { label: 'See pop-ups', href: '/#pop-ups' },
    placeholder: 'heart',
    tint: 'petal',
  },
  {
    tab: 'Customs open',
    pill: 'Customs',
    script: 'Make a wish',
    title: 'customs are open',
    text: 'Your own colours, theme or size? Tell me your idea and I make it for you.',
    primary: { label: 'Make a wish', href: '/custom-orders/' },
    secondary: { label: 'See prices', href: '/custom-orders/#prices' },
    placeholder: 'skirt',
    tint: 'blush',
  },
];
