"use client";

import React, { useEffect, useRef } from "react";

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // 1. Architecture Network Particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
      isPulse?: boolean;
      pulseRadius?: number;
    }

    // 2. Floating Cyber / Backend Code Glyphs
    interface Glyph {
      x: number;
      y: number;
      vy: number;
      text: string;
      alpha: number;
      size: number;
    }

    const colors = [
      "rgba(16, 185, 129, ", // Emerald
      "rgba(20, 184, 166, ", // Teal
      "rgba(6, 182, 212, ",  // Cyan
    ];

    const GLYPH_TEXTS = [
      "01", "10", "</>", "{ }", "GET", "POST", "200 OK", "0x7F",
      "SQL", "API", "RLS", "REST", "JSON", "JWT", "DB_SYNC",
      "::1", "AUTH", "FASTAPI", "SCHEMA", "QUERY", "201 CREATED"
    ];

    const particleCount = width < 768 ? 36 : 70;
    const maxDistance = width < 768 ? 95 : 135;

    const particles: Particle[] = Array.from({ length: particleCount }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.4 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      isPulse: idx % 8 === 0,
      pulseRadius: 0,
    }));

    // Floating digital glyphs drifting upwards
    const glyphCount = width < 768 ? 16 : 30;
    const glyphs: Glyph[] = Array.from({ length: glyphCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: Math.random() * 0.35 + 0.2,
      text: GLYPH_TEXTS[Math.floor(Math.random() * GLYPH_TEXTS.length)],
      alpha: Math.random() * 0.25 + 0.1,
      size: Math.floor(Math.random() * 3) + 10,
    }));

    // Mouse interactive coordinates
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- LAYER A: Floating Digital Glyphs & Embers ---
      for (const g of glyphs) {
        g.y -= g.vy;
        if (g.y < -30) {
          g.y = height + 20;
          g.x = Math.random() * width;
          g.text = GLYPH_TEXTS[Math.floor(Math.random() * GLYPH_TEXTS.length)];
        }

        ctx.font = `600 ${g.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillStyle = `rgba(16, 185, 129, ${g.alpha})`;
        ctx.fillText(g.text, g.x, g.y);
      }

      // --- LAYER B: Network Topology Connections ---
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // --- LAYER C: Network Nodes & Pulse Waves ---
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 150) {
            const force = (1 - mdist / 150) * 0.025;
            p.x += mdx * force;
            p.y += mdy * force;
          }
        }

        // Draw core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Radiating pulse wave for key nodes
        if (p.isPulse) {
          p.pulseRadius = (p.pulseRadius || 0) + 0.35;
          if (p.pulseRadius > 28) {
            p.pulseRadius = 0;
          }
          const pulseAlpha = Math.max(0, (1 - p.pulseRadius / 28) * 0.25);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(16, 185, 129, ${pulseAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* 1. Technical Dot Matrix Pattern with Smooth Fade Mask */}
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16, 185, 129, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      />

      {/* 2. Smooth Gradient Transition from Julian Hero to Body */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#061410] via-[#061410]/60 to-transparent pointer-events-none" />

      {/* 3. Deep Ethereal Ambient Glow Blooms */}
      <div className="absolute -top-10 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/5 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none" />

      {/* 4. Side HUD Margin Telemetry Guides (Desktop) */}
      <div className="hidden xl:flex flex-col justify-between absolute left-4 top-24 bottom-24 w-8 font-mono text-[9px] text-emerald-500/30 select-none pointer-events-none">
        <div className="space-y-3">
          <p className="[writing-mode:vertical-lr] tracking-[0.25em] font-bold">
            SYS::ARCH_CORE
          </p>
          <p className="[writing-mode:vertical-lr] text-[8px] opacity-70">
            LOC: 6°35&apos;S 106°49&apos;E
          </p>
          <div className="h-16 w-[1px] bg-gradient-to-b from-emerald-500/40 to-transparent mx-auto" />
        </div>
        <div className="space-y-2">
          <div className="h-16 w-[1px] bg-gradient-to-t from-emerald-500/40 to-transparent mx-auto" />
          <p className="[writing-mode:vertical-lr] tracking-widest text-[8px] opacity-70">
            PORT::3000_UP
          </p>
          <p className="[writing-mode:vertical-lr] font-bold text-emerald-400/40">
            STATUS::200_OK
          </p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col justify-between absolute right-4 top-24 bottom-24 w-8 font-mono text-[9px] text-emerald-500/30 select-none pointer-events-none items-end text-right">
        <div className="space-y-3">
          <p className="[writing-mode:vertical-lr] tracking-[0.25em] font-bold rotate-180">
            NODE::TOPOLOGY_LIVE
          </p>
          <p className="[writing-mode:vertical-lr] text-[8px] opacity-70 rotate-180">
            SEC: RLS_RBAC_ACTIVE
          </p>
          <div className="h-16 w-[1px] bg-gradient-to-b from-emerald-500/40 to-transparent mx-auto" />
        </div>
        <div className="space-y-2">
          <div className="h-16 w-[1px] bg-gradient-to-t from-emerald-500/40 to-transparent mx-auto" />
          <p className="[writing-mode:vertical-lr] tracking-widest text-[8px] opacity-70 rotate-180">
            IPB::UNIV_ENG
          </p>
          <p className="[writing-mode:vertical-lr] font-bold text-emerald-400/40 rotate-180">
            S-RANK::ARCHITECT
          </p>
        </div>
      </div>

      {/* 5. Decorative Cyber Crosshairs (+) at Strategic Intervals */}
      <div className="absolute left-8 top-1/4 font-mono text-xs text-emerald-400/25 pointer-events-none select-none">
        +
      </div>
      <div className="absolute right-12 top-1/3 font-mono text-xs text-cyan-400/25 pointer-events-none select-none">
        +
      </div>
      <div className="absolute left-14 top-2/3 font-mono text-xs text-teal-400/25 pointer-events-none select-none">
        +
      </div>
      <div className="absolute right-16 top-3/4 font-mono text-xs text-emerald-400/25 pointer-events-none select-none">
        +
      </div>

      {/* 6. Interactive Live Architecture Node & Glyph Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
