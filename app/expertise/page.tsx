import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScissorsIcon, ShirtIcon, PackageIcon, TruckIcon, UsersIcon, BarChartIcon } from "lucide-react"

export default function ExpertisePage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Notre Expertise
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Découvrez comment TEXAM excelle dans la confection de vêtements de haute qualité pour répondre à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Nos Compétences Clés
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ScissorsIcon, title: "Coupe Précise", desc: "Techniques de coupe avancées pour une précision maximale." },
              { icon: ShirtIcon, title: "Couture Experte", desc: "Couture de haute qualité pour tous types de vêtements." },
              { icon: PackageIcon, title: "Finition Soignée", desc: "Attention méticuleuse aux détails pour une finition parfaite." },
              { icon: TruckIcon, title: "Logistique Efficace", desc: "Gestion optimisée de la chaîne d'approvisionnement." },
              { icon: UsersIcon, title: "Service Client", desc: "Support client personnalisé tout au long du processus." },
              { icon: BarChartIcon, title: "Contrôle Qualité", desc: "Processus rigoureux de contrôle qualité à chaque étape." },
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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Notre Processus de Fabrication
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">De la Conception à la Livraison</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="font-bold">1.</span>
                  <span>Consultation et Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-bold">2.</span>
                  <span>Sélection des Matériaux</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-bold">3.</span>
                  <span>Prototypage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-bold">4.</span>
                  <span>Production en Série</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-bold">5.</span>
                  <span>Contrôle Qualité</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-bold">6.</span>
                  <span>Emballage et Expédition</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-first">
              <img
                alt="Processus de fabrication TEXAM"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/black-white-clothing-black-and-white-room.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Industries Servies
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Mode Prêt-à-Porter",
              "Vêtements de Sport",
              "Uniformes Professionnels",
              "Accessoires de Mode",
              "Vêtements pour Enfants",
              "Lingerie et Sous-vêtements",
            ].map((industry, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Solutions sur mesure pour répondre aux exigences spécifiques de l'industrie {industry.toLowerCase()}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Prêt à Collaborer ?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
            Découvrez comment notre expertise peut transformer vos idées en réalité. Contactez-nous dès aujourd'hui pour discuter de votre projet.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200">
            Demander un Devis
          </Button>
        </div>
      </section>
    </div>
  )
}