import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">


      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
              Contactez-nous
            </h1>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Votre nom" />
                    <Input type="email" placeholder="Votre email" />
                    <Input placeholder="Sujet" />
                    <Textarea placeholder="Votre message" className="min-h-[150px]" />
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Envoyer</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Nos coordonnées</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="h-5 w-5 text-gray-500" />
                      <span>123 Rue de la Mode, 75001 Paris, France</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-5 w-5 text-gray-500" />
                      <span>+33 1 23 45 67 89</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MailIcon className="h-5 w-5 text-gray-500" />
                      <span>contact@texam.fr</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Notre emplacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <MapPinIcon className="h-12 w-12 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}