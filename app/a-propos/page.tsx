import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserIcon, HeartIcon, TrendingUpIcon } from "lucide-react"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                À Propos de TEXAM
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Votre partenaire de confiance dans l&apos;industrie de la confection depuis plus de 30 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Notre Histoire
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Fondée en 1990, TEXAM a débuté comme un petit atelier de couture à Casablanca. Au fil des années, 
                grâce à notre engagement envers la qualité et l&apos;innovation, nous sommes devenus l&apos;un des leaders 
                de la confection de vêtements au Maroc.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Aujourd&apos;hui, TEXAM est fier de servir des clients du monde entier, en offrant des solutions 
                de confection sur mesure qui répondent aux plus hauts standards de l&apos;industrie de la mode.
              </p>
            </div>
            <div className="lg:order-first">
              <Image
                alt="TEXAM atelier historique"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={310}
                src="/black-white-clothing-black-and-white-room.jpg"
                width={550}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: HeartIcon, title: "Qualité", desc: "Nous nous engageons à fournir des produits de la plus haute qualité." },
              { icon: UserIcon, title: "Client d&apos;abord", desc: "La satisfaction de nos clients est notre priorité absolue." },
              { icon: TrendingUpIcon, title: "Innovation", desc: "Nous adoptons les dernières technologies pour rester à la pointe." },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <item.icon className="h-8 w-8 mb-2 text-black" />
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Marie Dupont", role: "Directrice Générale" },
              { name: "Ahmed Benali", role: "Chef de Production" },
              { name: "Sophie Martin", role: "Responsable Design" },
              { name: "Karim Idrissi", role: "Responsable Qualité" },
              { name: "Léa Rousseau", role: "Responsable Commercial" },
              { name: "Youssef El Amrani", role: "Responsable Logistique" },
            ].map((member, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-center">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Rejoignez l&apos;Aventure TEXAM
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe dynamique.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200">
            Voir nos Offres d&apos;Emploi
          </Button>
        </div>
      </section>
    </div>
  )
}