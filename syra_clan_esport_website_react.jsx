import React from "react";

const teamMembers = [
  {
    name: "SyRa Shadow",
    role: "Leader",
  },
  {
    name: "SyRa Nova",
    role: "Competitive Player",
  },
  {
    name: "SyRa Ghost",
    role: "Content Creator",
  },
];

const games = [
  "Fortnite",
  "Valorant",
  "Rocket League",
  "Call Of Duty",
  "Minecraft",
  "EA FC",
  "CS2",
  "Multi-Gaming",
];

const socials = [
  {
    name: "Discord",
    url: "https://discord.gg/63Fhcn3pgw",
  },
  {
    name: "TikTok",
    url: "#",
  },
  {
    name: "Instagram",
    url: "#",
  },
  {
    name: "YouTube",
    url: "#",
  },
];

export default function SyRaClanWebsite(): JSX.Element {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-5xl">
          <h1 className="animate-pulse text-6xl font-black tracking-[0.2em] text-pink-500 drop-shadow-[0_0_20px_rgba(255,0,140,0.8)] md:text-8xl">
            SYRA CLAN
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-2xl">
            Multi-gaming E-sport Team • Competitive • Community • Cyberpunk
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://discord.gg/63Fhcn3pgw"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-pink-600 px-8 py-4 text-lg font-bold transition-all hover:bg-pink-500"
            >
              JOIN DISCORD
            </a>

            <button
              type="button"
              className="rounded-2xl border border-pink-500 px-8 py-4 text-lg font-bold transition-all hover:bg-pink-500/20"
            >
              RECRUTEMENT
            </button>
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-50 border-b border-pink-500/20 bg-black/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-black text-pink-500">SYRA</h2>

          <div className="hidden gap-6 text-sm uppercase tracking-wider md:flex">
            <a href="#home" className="transition-all hover:text-pink-500">
              Accueil
            </a>
            <a href="#team" className="transition-all hover:text-pink-500">
              Team
            </a>
            <a href="#games" className="transition-all hover:text-pink-500">
              Jeux
            </a>
            <a
              href="#recrutement"
              className="transition-all hover:text-pink-500"
            >
              Recrutement
            </a>
            <a href="#contact" className="transition-all hover:text-pink-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="team"
        className="bg-gradient-to-b from-black to-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-5xl font-black text-pink-500">
            NOTRE TEAM
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-pink-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 h-52 rounded-2xl bg-gradient-to-br from-pink-600/30 to-black" />

                <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>

                <p className="mb-4 text-pink-400">{member.role}</p>

                <p className="text-gray-400">
                  Membre officiel de SyRa Clan avec une mentalité compétitive.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-5xl font-black text-pink-500">
            NOS JEUX
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {games.map((game) => (
              <div
                key={game}
                className="rounded-3xl border border-pink-500/20 bg-zinc-900 p-10 transition-all hover:bg-pink-500/10"
              >
                <h3 className="text-2xl font-bold">{game}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="recrutement"
        className="bg-gradient-to-b from-zinc-900 to-black px-6 py-24"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-5xl font-black text-pink-500">
            RECRUTEMENT OUVERT
          </h2>

          <p className="text-xl leading-relaxed text-gray-300">
            SyRa Clan recherche des joueurs compétitifs, créateurs de contenu,
            managers et designers motivés pour développer la structure.
          </p>

          <a
            href="https://discord.gg/63Fhcn3pgw"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-2xl bg-pink-600 px-10 py-5 text-xl font-black transition-all hover:bg-pink-500"
          >
            POSTULER MAINTENANT
          </a>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-16 text-5xl font-black text-pink-500">
            RÉSEAUX
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-pink-500/20 bg-zinc-900 p-8 transition-all hover:border-pink-500"
              >
                <h3 className="text-2xl font-bold">{social.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-pink-500/20 bg-black py-10 text-center"
      >
        <h2 className="text-3xl font-black text-pink-500">SYRA CLAN</h2>

        <p className="mt-4 text-gray-400">
          © 2026 SyRa Clan • All Rights Reserved
        </p>

        <a
          href="https://discord.gg/63Fhcn3pgw"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-pink-500 hover:text-pink-400"
        >
          Rejoindre le Discord
        </a>
      </footer>
    </main>
  );
}
