export function HouseScene() {
  const lights = [
    [188, 392],
    [230, 348],
    [274, 308],
    [318, 286],
    [362, 308],
    [406, 348],
    [448, 392],
    [214, 468],
    [268, 476],
    [322, 480],
    [376, 476],
    [430, 468],
    [196, 612],
    [236, 628],
    [430, 624],
    [470, 608],
  ];

  return (
    <svg
      viewBox="0 0 640 760"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4650" />
          <stop offset="42%" stopColor="#1b3834" />
          <stop offset="100%" stopColor="#10211c" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6df" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#f0d7a4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f0d7a4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1cf" />
          <stop offset="100%" stopColor="#e2ae5b" />
        </linearGradient>
      </defs>

      <rect width="640" height="760" fill="url(#hero-sky)" />
      <circle cx="508" cy="108" r="78" fill="#f3e6c8" opacity="0.08" />
      <circle cx="508" cy="108" r="28" fill="#f6edd8" opacity="0.55" />

      <path d="M40 430 118 250 196 430Z" fill="#1a3a32" />
      <path d="M92 455 168 285 244 455Z" fill="#14302a" />
      <path d="M430 470 512 300 594 470Z" fill="#16342c" />
      <path d="M488 445 558 310 628 445Z" fill="#102820" />

      <path d="M0 520C140 470 220 560 340 515 470 466 540 545 640 500V760H0Z" fill="#1a3830" />
      <path d="M0 610C150 560 250 650 390 600 500 566 560 620 640 590V760H0Z" fill="#10211c" />

      <rect x="392" y="268" width="28" height="78" fill="#2a2420" />
      <polygon points="170,400 320,268 470,400" fill="#241c18" />
      <rect x="198" y="392" width="244" height="176" fill="#3a312b" />
      <rect x="176" y="452" width="288" height="16" fill="#2a221e" />
      <rect x="188" y="548" width="264" height="14" fill="#2c241f" />

      <rect x="228" y="430" width="62" height="72" rx="2" fill="url(#hero-window)" />
      <rect x="350" y="430" width="62" height="72" rx="2" fill="url(#hero-window)" />
      <rect x="257" y="430" width="4" height="72" fill="#3a312b" opacity="0.45" />
      <rect x="379" y="430" width="4" height="72" fill="#3a312b" opacity="0.45" />
      <rect x="228" y="464" width="62" height="4" fill="#3a312b" opacity="0.45" />
      <rect x="350" y="464" width="62" height="4" fill="#3a312b" opacity="0.45" />
      <circle cx="259" cy="466" r="46" fill="url(#hero-glow)" />
      <circle cx="381" cy="466" r="46" fill="url(#hero-glow)" />

      <rect x="292" y="478" width="56" height="84" rx="2" fill="#2a211c" />
      <circle cx="336" cy="522" r="3" fill="#d4b483" />

      <ellipse cx="168" cy="600" rx="46" ry="22" fill="#1c3b32" />
      <ellipse cx="486" cy="596" rx="42" ry="20" fill="#1c3b32" />

      {lights.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="14" fill="url(#hero-glow)" />
          <circle cx={x} cy={y} r="3.2" fill="#fff8ea" />
        </g>
      ))}
    </svg>
  );
}
