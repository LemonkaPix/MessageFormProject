import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MessageForm from "./MessageFormComponent";
import MessagesTable from "./MessagesTableComponent";

export function MessagesComponent() {


  return (
    <Card>
      <CardHeader>
        <CardTitle>Wiadomości</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <MessageForm />
          <MessagesTable/>
        </div>
      </CardContent>
    </Card>
  );
}
