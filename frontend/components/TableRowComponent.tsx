import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEditMessageMutation, useDeleteMessageMutation } from "@/services/messagesAPI";
import { useState } from "react";

export function TableRowComponent({ id, text, onSuccess }: { id: string; text: string; onSuccess: () => void }) {
  const [editMessage, { isLoading: isEditing }] = useEditMessageMutation();
  const [deleteMessage, { isLoading: isDeleting }] = useDeleteMessageMutation();
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = async () => {
    try {
      await editMessage({ id, text: editedText }).unwrap();
      setIsEditingMode(false);
      onSuccess(); // Wywołanie funkcji odświeżania
    } catch (error) {
      console.error("Error editing message:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMessage(id).unwrap(); // Przekazanie tylko id
      onSuccess(); // Wywołanie funkcji odświeżania
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>
        {isEditingMode ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border rounded px-2 py-1"
          />
        ) : (
          text
        )}
      </TableCell>
      <TableCell className="flex gap-2">
        {isEditingMode ? (
          <>
            <Button onClick={handleEdit} disabled={isEditing}>
              Zapisz
            </Button>
            <Button variant="outline" onClick={() => setIsEditingMode(false)}>
              Anuluj
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => setIsEditingMode(true)}>
              Edytuj
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              Usuń
            </Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}
