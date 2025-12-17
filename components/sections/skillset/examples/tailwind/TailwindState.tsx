import Button from "@/components/ui/Button";

function TailwindState() {
  return (
    <div className="mb-5 flex justify-between rounded-2xl bg-linear-to-br from-blue-400 to-blue-300 p-6">
      <Button variant="secondary">Hover</Button>
      <Button variant="disabled">Disabled</Button>
      <Button>Focus</Button>
    </div>
  );
}

export default TailwindState;
