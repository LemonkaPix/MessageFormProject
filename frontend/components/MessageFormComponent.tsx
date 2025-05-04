"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddMessageMutation } from "@/services/messagesAPI";

const formSchema = z.object({
  messageText: z.string().min(1, {
    message: "Wiadomość nie może być pusta",
  }),
});

export default function MessageForm({ onSuccess }: { onSuccess: () => void }) {
  const [addMessage, { isLoading, isError }] = useAddMessageMutation({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addMessage({ text: values.messageText }).unwrap();
      form.reset(); // Resetowanie formularza
      onSuccess(); // Wywołanie funkcji po sukcesie
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading messages</div>;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-4 w-full"
      >
        <div className="flex-1">
          <FormField
            control={form.control}
            name="messageText"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Wpisz wiadomość..."
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="flex-shrink-0" disabled={isLoading}>
          Wyślij
        </Button>
      </form>
    </Form>
  );
}