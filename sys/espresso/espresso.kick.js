// sys/espresso/espresso.kick.js – Digitaler Doppelter
// Kurz, stark, konzentriert – für dein FOGth-System

export const ESPRESSO = {

  MOD: 'ESPRESSO.kick',
  TYPE: 'digital-doppelter',
  VERSION: '2.0', // doppelt so stark

  // ─── 1. Der erste Schuss – Kickstart ───
  shot1(system) {
    return {
      impulse: system.flow * 1.5,
      mode: 'wach',
      status: 'kick-1-aktiv'
    };
  },

  // ─── 2. Der zweite Schuss – Verstärkung ───
  shot2(system) {
    return {
      impulse: system.energy * 2.0,
      mode: 'fokussiert',
      status: 'kick-2-aktiv'
    };
  },

  // ─── 3. Der Doppelte – beides zusammen ───
  double(system) {
    const s1 = this.shot1(system);
    const s2 = this.shot2(system);
    return {
      impulse: (s1.impulse + s2.impulse) / 2,
      mode: 'doppelt-espresso',
      status: 'kick-doppelt-aktiv',
      shots: [s1, s2]
    };
  },

  // ─── 4. Espresso-Kick für WHIRL.sync ───
  kickWhirl(whirl) {
    return this.double({
      flow: whirl.QI || 0.5,
      energy: whirl.IQQ || 0.5
    });
  },

  // ─── 5. Espresso-Kick für MC FLY ───
  kickMCFLY(mcfly, time) {
    const kick = this.double({
      flow: Math.sin(time * 0.5) * 0.5 + 0.5,
      energy: Math.cos(time * 0.3) * 0.5 + 0.5
    });
    return {
      ...mcfly,
      flux: mcfly.flux * kick.impulse,
      speed: mcfly.speed * (1 + kick.impulse * 0.2)
    };
  }
};
