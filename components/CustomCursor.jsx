// "use client";

// import { useEffect, useState } from "react";
// import { site } from "@/data/site";

// export default function CustomCursor() {
//   const [pos, setPos]       = useState({ x: -100, y: -100 });
//   const [dot, setDot]       = useState({ x: -100, y: -100 });
//   const [clicking, setClicking] = useState(false);
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     // Hide the native cursor globally
//     document.documentElement.style.cursor = "none";

//     let animFrame;
//     let target = { x: -100, y: -100 };
//     let current = { x: -100, y: -100 };

//     const onMove = (e) => {
//       target = { x: e.clientX, y: e.clientY };
//       // Dot follows exactly
//       setDot({ x: e.clientX, y: e.clientY });
//     };

//     const onDown  = () => setClicking(true);
//     const onUp    = () => setClicking(false);

//     // Detect hoverable elements
//     const onOver = (e) => {
//       const el = e.target.closest("a, button, [role='button'], input, textarea, select, label");
//       setHovering(!!el);
//     };

//     const loop = () => {
//       // Logo cursor lags slightly behind for a smooth feel
//       current.x += (target.x - current.x) * 0.12;
//       current.y += (target.y - current.y) * 0.12;
//       setPos({ x: current.x, y: current.y });
//       animFrame = requestAnimationFrame(loop);
//     };

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mousedown", onDown);
//     window.addEventListener("mouseup",   onUp);
//     window.addEventListener("mouseover", onOver);
//     animFrame = requestAnimationFrame(loop);

//     return () => {
//       document.documentElement.style.cursor = "";
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mousedown", onDown);
//       window.removeEventListener("mouseup",   onUp);
//       window.removeEventListener("mouseover", onOver);
//       cancelAnimationFrame(animFrame);
//     };
//   }, []);

//   const logoSize = clicking ? 32 : hovering ? 42 : 36;

//   return (
//     <>
//       {/* Exact dot — sits right on the pointer */}
//       <div
//         style={{
//           position: "fixed",
//           left: dot.x,
//           top:  dot.y,
//           width:  6,
//           height: 6,
//           borderRadius: "50%",
//           background: "#22c55e",
//           transform: "translate(-50%, -50%)",
//           pointerEvents: "none",
//           zIndex: 9999,
//           transition: "width 0.15s, height 0.15s",
//         }}
//       />

//       {/* Logo cursor — lags slightly, scales on hover/click */}
//       <div
//         style={{
//           position: "fixed",
//           left: pos.x,
//           top:  pos.y,
//           width:  logoSize,
//           height: logoSize,
//           transform: "translate(-50%, -50%)",
//           pointerEvents: "none",
//           zIndex: 9998,
//           transition: "width 0.2s, height 0.2s, opacity 0.2s",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: 7,
//           background: hovering ? "#22c55e" : "#ffffff",
//           boxShadow: hovering
//             ? "0 0 0 2px rgba(34,197,94,0.4)"
//             : "0 0 0 2px rgba(255,255,255,0.15)",
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "var(--font-poppins), sans-serif",
//             fontWeight: 700,
//             fontSize: logoSize * 0.52,
//             lineHeight: 1,
//             color: hovering ? "#0a0a0a" : "#0a0a0a",
//             userSelect: "none",
//           }}
//         >
//           {site.name.charAt(0)}
//         </span>
//       </div>
//     </>
//   );
// }
