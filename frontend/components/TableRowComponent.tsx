import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export function TableRowComponent({ id, text }: { id: string; text: string }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{text}</TableCell>
      <TableCell className="flex gap-2">
        <Button variant="outline">Edytuj</Button>
        <Button variant="destructive">Usuń</Button>
      </TableCell>
    </TableRow>
  );
}
