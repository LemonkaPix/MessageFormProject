import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRowComponent } from "@/components/TableRowComponent";

export default function MessagesTable() {
    const messages = [
        { id: "01", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
        { id: "02", text: "Another example message" },
        { id: "03", text: "This is a dynamically added message" },
        { id: "04", text: "Another test message" },
      ];

  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Wiadomość</TableHead>
          <TableHead>Akcje</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((message) => (
          <TableRowComponent key={message.id} id={message.id} text={message.text} />
        ))}
      </TableBody>
    </Table>
  );
}
