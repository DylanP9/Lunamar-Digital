/**
 * Route transition wrapper.
 *
 * Unlike layout.tsx (which persists across navigations), a template remounts on
 * every route change. That fresh mount replays the `.page-enter` CSS animation
 * defined in globals.css, giving a smooth fade-and-rise between pages while the
 * header and footer stay fixed in place.
 *
 * Reduced motion is respected automatically — the global prefers-reduced-motion
 * rule collapses the animation duration to near-zero.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
