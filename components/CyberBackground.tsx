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

    // Node particle definition representing network / backend architecture nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
    }

    const colors = [
      "rgba(16, 185, 129, ", // Emerald
      "rgba(20, 184, 166, ", // Teal
      "rgba(6, 182, 212, ",  // Cyan
    ];

    // Responsive particle count based on screen width
    const particleCount = width < 768 ? 32 : 60;
    const maxDistance = width < 768 ? 90 : 130;

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      baseAlpha: Math.random() * 0.35 + 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Mouse coordinates for subtle interactive attraction
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

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw interconnecting graph links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particle positions
      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Subtle mouse pull if cursor is near
        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const force = (1 - mdist / 140) * 0.02;
            p.x += mdx * force;
            p.y += mdy * force;
          }
        }

        // Draw particle node with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
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
      {/* 1. Technical Dot Matrix Pattern with Smooth Top-to-Bottom Mask */}
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.25]"
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

      {/* 4. Interactive Live Architecture Node Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

