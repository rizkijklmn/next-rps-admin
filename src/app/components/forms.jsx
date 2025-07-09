import { Button, Label, TextInput } from "flowbite-react";

const CplAddForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="kodecpl">Kode CPL</Label>
        </div>
        <TextInput id="kodecpl" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Rumusan CPL</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export { CplAddForm };