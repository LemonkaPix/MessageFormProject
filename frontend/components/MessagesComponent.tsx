"use client"
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MessageForm from "./MessageFormComponent";
import MessagesTable from "./MessagesTableComponent";

export function MessagesComponent() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Zwiększenie klucza, aby wymusić odświeżenie
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wiadomości</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <MessageForm onSuccess={handleRefresh} />
          <MessagesTable refreshKey={refreshKey} onSuccess={handleRefresh} /> {/* Przekazanie funkcji odświeżania */}
        </div>
      </CardContent>
    </Card>
  );
}
