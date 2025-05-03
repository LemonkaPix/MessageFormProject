import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableRowComponent } from "@/components/TableRowComponent";

export function MessagesComponent() {
    const messages = [
        { id: "01", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
        { id: "02", text: "Another example message" },
        { id: "03", text: "This is a dynamically added message" },
        { id: "04", text: "Another test message" },
      ];

    return (
        <Card>
        <CardHeader>
        <CardTitle>Wiadomości</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <Input placeholder="Wpisz wiadomość..." className="flex-1" />
            <Button>Wyślij</Button>
            </div>
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
        </div>
        </CardContent>
    </Card>
    );
}
