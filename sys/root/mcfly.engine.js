// sys/root/mcfly.engine.js – MC FLY Engine für FOGth
// Verbindet g.js, WHIRL.sync, quant.axio, syn.axio

import { G } from './g.js';
import { WHIRL_sync } from '../WHIRL/WHIRL.sync.js';
import { quant_axio } from '../quant/quant.axio.js';
import { syn_axio } from '../syn/syn.axio.js';

export const MCFLY = {

  MOD: 'MCFLY.engine',
  TYPE: 'flux-compensator',
  VERSION: '1.21', // Gigawatt

  // ─── 1. Flux – Zellen mit Leben füllen ───
  flux(matrix, time) {
    return matrix.map((row, i) =>
      row.map((cell, j) => {
        const flux = 0.5 + 0.5 * Math.sin(time * 0.5 + i * 1.3 + j * 0.7);
        return {
          ...cell,
          flux,
          glow: 0.1 + flux * 0.9,
          size: 18 + flux * 12,
          color: `rgb(${50 + flux * 200}, 255, ${50 + flux * 100})`
        };
      })
    );
  },

  // ─── 2. Tornado-Zeitlinie ───
  tornado(cx, cy, angle, t) {
    const points = [];
    for (let i = 0; i < 200; i++) {
      const wave = Math.sin(i * 0.05 + angle * 2) * 30;
      const x = cx + Math.cos(angle + i * 0.08) * (i * 1.2 + wave);
      const y = cy + Math.sin(angle + i * 0.08) * (i * 1.2 + wave);
      points.push({ x, y });
    }
    return points;
  },

  // ─── 3. Zeit-Pulse ───
  pulses(cx, cy, angle, count = 5) {
    const pulses = [];
    for (let p = 0; p < count; p++) {
      const phase = (p / count) * Math.PI * 2 + angle * 0.5;
      const r = 50 + Math.sin(phase) * 30;
      pulses.push({
        x: cx + Math.cos(phase) * r,
        y: cy + Math.sin(phase) * r,
        size: 3 + Math.sin(phase + angle) * 2,
        opacity: 0.3 + Math.sin(phase) * 0.2
      });
    }
    return pulses;
  },

  // ─── 4. Verbindungen zwischen Zellen ───
  connections(matrix, cx, cy, angle, radius) {
    const lines = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        for (let k = 0; k < matrix.length; k++) {
          if (k === j) continue;
          const x1 = cx + Math.cos(angle + (i + j)) * radius * (i + 1);
          const y1 = cy + Math.sin(angle + (i + j)) * radius * (j + 1);
          const x2 = cx + Math.cos(angle + (i + k)) * radius * (i + 1);
          const y2 = cy + Math.sin(angle + (i + k)) * radius * (k + 1);
          lines.push({ x1, y1, x2, y2 });
        }
      }
    }
    return lines;
  },

  // ─── 5. Kompletter Render-Block ───
  render(ctx, canvas, time) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = 140 + Math.sin(time * 0.3) * 20;

    // Root-Baum laden
    const root = G.build();
    const matrix = root.matrix || [
      [{ axis: 'A' }, { axis: 'B' }, { axis: 'C' }],
      [{ axis: 'B' }, { axis: 'C' }, { axis: 'A' }],
      [{ axis: 'C' }, { axis: 'A' }, { axis: 'B' }]
    ];

    // Flux anwenden
    const fluxed = this.flux(matrix, time);

    // Zellen zeichnen
    for (let i = 0; i < fluxed.length; i++) {
      for (let j = 0; j < fluxed[i].length; j++) {
        const cell = fluxed[i][j];
        const x = cx + Math.cos(time + (i + j)) * radius * (i + 1);
        const y = cy + Math.sin(time + (i + j)) * radius * (j + 1);

        // Glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, cell.size + 10);
        grad.addColorStop(0, `rgba(0, 255, 0, ${0.1 + cell.flux * 0.2})`);
        grad.addColorStop(1, 'rgba(0, 255, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, cell.size + 10, 0, Math.PI * 2);
        ctx.fill();

        // Kreis
        ctx.beginPath();
        ctx.arc(x, y, cell.size, 0, Math.PI * 2);
        ctx.strokeStyle = cell.color;
        ctx.lineWidth = 1.5 + cell.flux * 1.5;
        ctx.shadowColor = '#0f0';
        ctx.shadowBlur = 10 + cell.flux * 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = `rgb(200, 255, ${150 + cell.flux * 100})`;
        ctx.font = `${14 + cell.flux * 6}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cell.axis || cell.name || '?', x, y + 2);
      }
    }

    // Verbindungen
    const connections = this.connections(matrix, cx, cy, time, radius);
    connections.forEach(line => {
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.strokeStyle = `rgba(0, 255, 0, 0.05)`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });

    // Tornado-Zeitlinie
    const tornado = this.tornado(cx, cy, time, time);
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 255, 200, 0.15)';
    ctx.lineWidth = 1;
    tornado.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Zeit-Pulse
    const pulses = this.pulses(cx, cy, time);
    pulses.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 200, ${p.opacity})`;
      ctx.fill();
    });
  }
};
