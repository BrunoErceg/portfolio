export default function getAnimateInProps(
  from: "none" | "bottom" | "left" = "bottom",
  delay = 0,
) {
  const initial = { opacity: 0, x: 0, y: 15 };
  const whileInView = { opacity: 1, x: 0, y: 0 };
  const viewport = { once: true, margin: "-100px" };
  const transition = { duration: 0.3, ease: "easeOut" as const, delay: delay };
  if (from == "left") {
    initial.x = -15;
    initial.y = 0;
  }
  if (from == "none") {
    initial.y = 0;
  }

  return { initial, whileInView, transition, viewport };
}
