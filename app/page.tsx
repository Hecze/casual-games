import Link from 'next/link';

export default function Home() {
  return (
    <main className="screen">
      <div className="center" style={{ alignItems: 'stretch', textAlign: 'left' }}>
        <div>
          <h1>Juegos en persona</h1>
          <p className="muted" style={{ marginTop: 8 }}>
            Un solo celular. Pásalo en ronda.
          </p>
        </div>
        <nav className="games">
          <Link href="/impostor/" className="game-card">
            <span className="emoji" aria-hidden>
              🕵️
            </span>
            <div>
              <h2>El impostor</h2>
              <p className="muted">Todos saben la palabra… menos uno.</p>
            </div>
          </Link>
          <Link href="/impostor-artista/" className="game-card">
            <span className="emoji" aria-hidden>
              🎨
            </span>
            <div>
              <h2>El artista impostor</h2>
              <p className="muted">Todos saben qué dibujar… menos uno.</p>
            </div>
          </Link>
        </nav>
      </div>
    </main>
  );
}
