import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo-ritsl.png" 
              alt="RITSL Logo" 
              width={120} 
              height={40}
              className="mr-4"
            />
            <h1 className="text-xl font-bold">Ollama Document Anonymization</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#fonctionnalites" className="hover:underline">Fonctionnalités</Link></li>
              <li><Link href="#comment-ca-marche" className="hover:underline">Comment ça marche</Link></li>
              <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Anonymisation de documents juridiques en toute confidentialité</h1>
              <p className="text-xl mb-8">Une solution développée spécifiquement pour les avocats suisses, garantissant une confidentialité totale sans aucun transfert de données.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#telecharger" className="btn-secondary">Télécharger l&apos;application</a>
                <a href="#demo" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-dark transition-all">Voir la démonstration</a>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <Image 
                src="/app-screenshot.png" 
                alt="Capture d&apos;écran de l&apos;application" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="fonctionnalites" className="section bg-neutral">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Avantages clés pour les professionnels du droit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Confidentialité totale</h3>
              <p>Toutes les données restent sur votre ordinateur. Aucune information n&apos;est jamais transmise à des serveurs externes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Traitement rapide et efficace</h3>
              <p>Anonymisez vos documents juridiques en quelques minutes grâce à des modèles d&apos;IA avancés fonctionnant localement.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Précision juridique</h3>
              <p>Conçu spécifiquement pour les documents juridiques suisses, avec une compréhension des termes et formats spécifiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="comment-ca-marche" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Comment fonctionne l&apos;application</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vérification du système</h3>
                    <p>L&apos;application vérifie votre système et installe automatiquement Ollama si nécessaire.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sélection du modèle d&apos;IA</h3>
                    <p>Choisissez et téléchargez le modèle d&apos;IA le plus adapté à vos besoins d&apos;anonymisation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Importation du document</h3>
                    <p>Importez facilement votre document juridique à anonymiser.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Anonymisation et vérification</h3>
                    <p>Visualisez et validez les résultats de l&apos;anonymisation avant d&apos;exporter le document final.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-80 md:h-96">
              <Image 
                src="/workflow.png" 
                alt="Processus d&apos;anonymisation" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="telecharger" className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à sécuriser vos documents juridiques?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Téléchargez Ollama Document Anonymization et commencez à anonymiser vos documents en toute confidentialité dès aujourd&apos;hui.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/download/mac" className="btn-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Télécharger pour macOS
            </a>
            <a href="/download/windows" className="btn-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Télécharger pour Windows
            </a>
            <a href="/download/linux" className="btn-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Télécharger pour Linux
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">Version 1.0.0 | Dernière mise à jour: Janvier 2024</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-neutral">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Mes documents sont-ils vraiment traités uniquement en local?</h3>
              <p>Oui, absolument. Toutes les opérations d&apos;anonymisation sont effectuées localement sur votre ordinateur. Aucune donnée n&apos;est jamais envoyée à des serveurs externes, garantissant une confidentialité totale.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quelles sont les exigences système?</h3>
              <p>L&apos;application nécessite un minimum de 8 Go de RAM et 10 Go d&apos;espace disque libre. Elle est compatible avec macOS 11+, Windows 10/11 et les distributions Linux récentes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quels types de documents puis-je anonymiser?</h3>
              <p>L&apos;application prend en charge les formats PDF, DOCX, TXT et RTF. Elle est spécialement optimisée pour les documents juridiques suisses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Comment puis-je vérifier que l&apos;anonymisation est complète?</h3>
              <p>L&apos;application propose une interface de vérification qui met en évidence toutes les informations anonymisées. Nous recommandons toutefois de toujours effectuer une vérification manuelle finale avant d&apos;utiliser le document.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">L&apos;application est-elle conforme aux exigences légales suisses?</h3>
              <p>L&apos;application a été conçue en tenant compte des exigences de confidentialité et de protection des données en Suisse. Cependant, il est de la responsabilité de l&apos;utilisateur de s&apos;assurer que les documents anonymisés répondent aux exigences spécifiques de leur cas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-dark text-white">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-4">Avis de non-responsabilité</h2>
          <p className="text-sm opacity-80">
            Bien que notre application utilise des technologies d&apos;IA avancées pour l&apos;anonymisation des documents, il est de la responsabilité de l&apos;utilisateur de vérifier l&apos;exactitude et l&apos;exhaustivité de l&apos;anonymisation avant d&apos;utiliser les documents traités. RITSL ne peut être tenu responsable des conséquences résultant d&apos;une anonymisation incomplète ou incorrecte des documents.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image 
                src="/logo-ritsl-white.png" 
                alt="RITSL Logo" 
                width={150} 
                height={50}
                className="mb-4"
              />
              <p className="mb-4">Solutions technologiques innovantes pour les professionnels du droit.</p>
              <p className="text-sm opacity-80">© 2024 RITSL. Tous droits réservés.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="mb-2">RITSL</p>
              <p className="mb-2">Rue de Lausanne 15</p>
              <p className="mb-2">1201 Genève, Suisse</p>
              <p className="mb-2">info@ritsl.com</p>
              <p>+41 22 123 45 67</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li><a href="https://ritsl.com" className="hover:underline">Site web RITSL</a></li>
                <li><a href="/support" className="hover:underline">Support technique</a></li>
                <li><a href="/privacy" className="hover:underline">Politique de confidentialité</a></li>
                <li><a href="/terms" className="hover:underline">Conditions d&apos;utilisation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
