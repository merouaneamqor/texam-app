import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCwIcon, ScissorsIcon, StarIcon, UserIcon } from "lucide-react"
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-gray-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2YxZjFmMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBMMzAgMEwwIDBaMzAgMzBMMzAgNjBMNjAgNjBaIiBmaWxsPSIjZTVlNWU1Ij48L3BhdGg+Cjwvc3ZnPg==')]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none text-black">
                  Bienvenue chez TEXAM
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-lg sm:text-xl md:text-2xl">
                  TEXAM - Votre partenaire de prêt à porter 
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">Nos Services</Button>
                <Button variant="outline" className="text-black border-black hover:bg-gray-100 w-full sm:w-auto">Contactez-nous</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="notre-expertise" className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-black">
              Notre Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "Confection sur Mesure", desc: "Solutions personnalisées pour boutiques et entreprises." },
                { title: "Production en Gros", desc: "Volumes importants pour détaillants et grossistes." },
                { title: "Collections Uniques", desc: "Lignes exclusives pour marques de mode innovantes." },
                { title: "E-commerce", desc: "Produits de haute qualité pour entrepreneurs du commerce électronique." }
              ].map((item, index) => (
                <Card key={index} className="bg-white border-2 border-gray-200 hover:border-black transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="pourquoi-texam" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-black">
              Pourquoi TEXAM ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: StarIcon, title: "Qualité Supérieure", desc: "Matériaux de premier choix pour des vêtements durables et esthétiques." },
                { icon: RefreshCwIcon, title: "Flexibilité", desc: "Adaptation à vos demandes, pour petites ou grandes séries." },
                { icon: UserIcon, title: "Service Personnalisé", desc: "Réponse à vos exigences spécifiques, car chaque client est unique." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                  <item.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-black" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="notre-mission" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Notre Mission</h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">
                  Notre mission est de faciliter votre succès en vous offrant des vêtements de haute qualité, prêts à être commercialisés. Chez TEXAM, nous croyons que la mode est un art, et chaque pièce que nous confectionnons est une œuvre d'art à part entière.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl mt-6 lg:mt-0">
                <img
                  alt="Atelier TEXAM"
                  className="object-cover w-full h-full"
                  height="310"
                  src="/black-white-clothing-black-and-white-room.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}