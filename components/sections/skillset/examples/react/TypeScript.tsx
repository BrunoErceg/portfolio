function TypeScript() {
  return (
    <div className="mb-5 h-fit space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <textarea
        className="h-25 w-full resize-none overflow-hidden tracking-wide focus:border-transparent focus:ring-0 focus:outline-none"
        defaultValue={
          "type ComponentProps = {\n\tclassName?: string; \n\tchildren: ReactNode; \n}"
        }
      />
    </div>
  );
}

export default TypeScript;
