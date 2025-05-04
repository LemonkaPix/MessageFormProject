"use client";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRowComponent } from "@/components/TableRowComponent";
import { 
  useGetMessagesQuery,
} from "@/services/messagesAPI";

type Message = {
  id: string;
  text: string;
};

export default function MessagesTable({ refreshKey, onSuccess }: { refreshKey: number; onSuccess: () => void }) {
  const { data, isLoading, isError, refetch } = useGetMessagesQuery({});

  const messages: Message[] = data?.data || [];

  useEffect(() => {
    refetch(); // Odświeżanie danych po zmianie klucza
  }, [refreshKey, refetch]);

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }
  if (isError) {
    return <div>Wystąpił błąd podczas ładowania wiadomości</div>;
  }
  if (messages.length === 0) {
    return <div>Brak wiadomości do wyświetlenia.</div>;
  }
  
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
          <TableRowComponent
            key={message.id}
            id={message.id}
            text={message.text}
            onSuccess={onSuccess} // Przekazanie funkcji odświeżania
          />
        ))}
      </TableBody>
    </Table>
  );
}
