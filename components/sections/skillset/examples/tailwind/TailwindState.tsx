import { GradientSurface } from '../GradientSurface';

/**
 * A React component that demonstrates the use of Tailwind CSS.
 * It displays a button with a hover effect and a gradient surface.
 * @returns A React component that displays the button and gradient surface.
 */
export function TailwindState() {
  return (
    <GradientSurface centered className="p-10">
      <button className="group relative h-13 w-44 cursor-pointer overflow-hidden rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white duration-200 ease-in-out hover:bg-white/20 active:scale-90 dark:from-slate-700 dark:to-slate-900">
        <span className="absolute inset-0 flex translate-y-0 items-center justify-center duration-300 ease-out group-hover:-translate-y-10 group-focus:-translate-y-20">
          Hover me 🙏
        </span>
        <span className="absolute inset-0 flex translate-y-10 items-center justify-center duration-300 ease-out group-hover:translate-y-0 group-focus:-translate-y-10">
          Interactive UI ✨
        </span>
        <span className="absolute inset-0 flex translate-y-20 items-center justify-center duration-300 ease-out group-hover:translate-y-10 group-focus:translate-y-0">
          Focused! 🎯
        </span>
      </button>
    </GradientSurface>
  );
}
