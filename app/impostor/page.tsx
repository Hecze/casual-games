import type { Metadata } from 'next';
import Game from '@/components/Game';

export const metadata: Metadata = { title: 'El impostor' };

export default function Page() {
  return <Game mode="words" />;
}
