"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Mail, Users, BookOpen, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
})

import { getTranslation, type Language } from '@/lib/translations'

interface ContactSectionProps {
  language: Language;
}

export function ContactSection({ language }: ContactSectionProps) {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await emailjs.send(
        'service_w56969n',
        'template_i454ioq',
        {
          from_name: `${values.firstName} ${values.lastName}`,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: 'support@afri-fek.org'
        },
        'XyUzH97_CifkN4obA'
      );
      
      alert('Message envoyé avec succès!');
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Erreur lors de l\'envoi du message');
    }
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#4d7c0f]">{getTranslation('contactUsTitle', language)}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {getTranslation('needHelp', language)}
          </h2>
          <p className="text-lg text-muted-foreground">
            {getTranslation('contactDescription', language)}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Options */}
          <div className="space-y-6 order-2 lg:order-1">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#fbbf24]" />
                  {getTranslation('scientificCommunity', language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {getTranslation('scientificCommunityDesc', language)}
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer">
                  {getTranslation('joinCommunity', language)}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#fbbf24]" />
                  {getTranslation('technicalSupport', language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {getTranslation('technicalSupportDesc', language)}
                </p>
                <Link href="/support">
                  <Button variant="outline" size="sm" className="cursor-pointer ">
                    {getTranslation('contactSupport', language)}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#fbbf24]" />
                  {getTranslation('userGuideTitle', language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {getTranslation('userGuideDesc', language)}
                </p>
                <Link href="/guide">
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    {getTranslation('viewDocumentation', language)}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 ">
                  <Mail className="h-5 w-5 text-[#fbbf24]" />
                  {getTranslation('sendMessage', language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{getTranslation('firstName', language)}</FormLabel>
                            <FormControl>
                              <Input placeholder="Jean" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{getTranslation('lastName', language)}</FormLabel>
                            <FormControl>
                              <Input placeholder="Dupont" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{getTranslation('email', language)}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{getTranslation('subject', language)}</FormLabel>
                          <FormControl>
                            <Input placeholder="Demande d'information, rapport de bug, question générale..." {...field} />
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
                          <FormLabel>{getTranslation('message', language)}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Dites-nous comment nous pouvons vous aider avec Afri-Fek..."
                              rows={10}
                              className="min-h-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-[#4d7c0f] hover:bg-[#3f6212] cursor-pointer">
                      Envoyer le Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
