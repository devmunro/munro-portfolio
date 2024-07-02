"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VerticalText from "./VerticalText";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";
import Link from 'next/link'


const formSchema = z.object({
  name: z.string().min(2),
  email: z.string(),
  message: z.string().min(10),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className="flex w-full h-full">
      <VerticalText title="contact" />
      <div className="flex w-full h-2/3 justify-between self-center items-center md:mx-72 border-4 bg-indigo-900">
        <div className="flex-col flex items-center justify-center w-full self-center h-full">
          <Avatar className="w-48 h-48 items-center">
            <AvatarImage src="https://github.com/devmunro.png" />
            <AvatarFallback className="text-black">DM</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p>Get in touch with me by filling out the form.</p>
          <div className="flex space-x-4 p-2">
            <Button variant="default" size="icon">
              <Link target="_blank" href="https://github.com/devmunro">
                <Github />
              </Link>
            </Button>
            <Button variant="default" size="icon">
              <Link target="_blank" href="https://www.linkedin.com/in/dmunro/">
                <Linkedin />
              </Link>
            </Button>
            
          </div>
        </div>

        {/*Form*/}
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white w-1/2 p-4 text-black h-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Joe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Joe@bloggs.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type message here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form> */}
      </div>
    </div>
  );
};

export default Contact;
