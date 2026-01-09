import { PrismTheme } from 'prism-react-renderer';

export const MIST_THEME: PrismTheme = {
  plain: {
    color: '#1e3a8a',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['tag', 'class-name'],
      style: { color: '#2563eb', fontWeight: '600' },
    },
    {
      types: ['keyword'],
      style: { color: '#4338ca' },
    },
    {
      types: ['attr-name'],
      style: { color: '#3b82f6' },
    },
    {
      types: ['string'],
      style: { color: '#0891b2' },
    },
    {
      // Komentari - Izblijedjela plava
      types: ['comment'],
      style: { color: '#64748b', fontStyle: 'italic' },
    },
  ],
};
