"use client";

import Image from "next/image";
import { ShoppingBag, MessageCircle, MapPin, Phone, Clock, ChevronRight, Store, PackageOpen, Truck } from "lucide-react";

export default function Home() {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5519996189999&text=Ol%C3%A1%2C+gostaria+de+fazer+um+pedido%21";
  const STORE_LINK = "https://www.vitrineja.store/cantinho-doce";

  return (
    <main className="min-h-screen font-sans selection:bg-brand-pink selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/images/logo.png" alt="Cantinho Doce Logo" width={60} height={60} className="object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 text-stone-600 font-medium">
            <a href="#produtos" className="hover:text-brand-pink transition-colors">Produtos</a>
            <a href="#sobre" className="hover:text-brand-pink transition-colors">A Empresa</a>
            <a href="#atacado" className="hover:text-brand-pink transition-colors">Atacado</a>
            <a href="#contato" className="hover:text-brand-pink transition-colors">Contato</a>
          </nav>
          <div className="flex gap-4">
            <a 
              href={STORE_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-2.5 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Acessar nossa loja</span>
              <span className="sm:hidden">Loja</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-stone-800 font-medium text-sm mb-6 border border-brand-blue/30">
              🍬 Atacado e Varejo em Piracicaba
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-6">
              A maior variedade com o <span className="text-brand-pink">melhor preço</span> da cidade
            </h1>
            <p className="text-lg lg:text-xl text-stone-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Há 29 anos atendendo padarias, cantinas, restaurantes e o varejo. Mais de 700 itens em doces, chocolates, salgadinhos e artigos para festa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={STORE_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold text-lg py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-brand-pink/30"
              >
                <ShoppingBag className="w-5 h-5" />
                Acessar nossa loja online
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold text-lg py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/doces_pote.jpg" 
                alt="Doces no Pote e prateleiras da Cantinho Doce" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-brand-blue/30 p-3 rounded-full">
                <Store className="w-8 h-8 text-stone-800" />
              </div>
              <div>
                <p className="text-stone-500 text-sm font-medium">Tradição desde</p>
                <p className="text-stone-900 font-bold text-xl">1995</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES / PRODUCTS */}
      <section id="produtos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">Linha Completa de Produtos</h2>
              <p className="text-lg text-stone-600">
                Dos clássicos aos lançamentos. Expanda sua linha de produtos e atenda os desejos dos seus clientes sem comprometer a rentabilidade.
              </p>
            </div>
            <a 
              href={STORE_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 text-brand-pink font-semibold hover:text-brand-pink-dark transition-colors"
            >
              Ver catálogo completo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Chocolates", desc: "Marcas tradicionais e lançamentos.", img: "/images/chocolates.jpg" },
              { name: "Salgadinhos", desc: "Variedade para todos os gostos.", img: "/images/lobitos.jpg" },
              { name: "Doces no Pote", desc: "A receita do sucesso para o seu comércio.", img: "/images/doces_pote.jpg" },
              { name: "Balas & Mentos", desc: "Refrescância e doçura a qualquer hora.", img: "/images/mentos.jpg" },
              { name: "Amendoins", desc: "Crocantes e perfeitos para aperitivos.", img: "/images/amendoins.jpg" },
              { name: "Drops & Nutella", desc: "A alegria garantida das crianças.", img: "/images/nutella.jpg" },
            ].map((cat, i) => (
              <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={cat.img} 
                    alt={cat.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{cat.name}</h3>
                  <p className="text-stone-600">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE & ATACADO */}
      <section id="sobre" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              A escolha perfeita para <span className="text-brand-blue">variedade e economia.</span>
            </h2>
            <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
              <p>
                A <strong>Cantinho Doce</strong>, localizada no centro de Piracicaba, é especialista em atacado e varejo de doces. Com quase 3 décadas de tradição no mercado, somos conhecidos por oferecer os melhores preços da cidade sem comprometer a qualidade.
              </p>
              <p>
                Além de centenas de doces, também oferecemos artigos essenciais para o seu negócio: copos descartáveis, guardanapos, canudos, sacolas plásticas e muito mais.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div id="atacado" className="bg-stone-800 p-6 rounded-2xl border border-stone-700">
                <PackageOpen className="w-10 h-10 text-brand-pink mb-4" />
                <h4 className="text-xl font-bold mb-2">Para o seu negócio</h4>
                <p className="text-stone-400">Atendemos bares, padarias, cantinas, restaurantes e pequenos comércios com preços imbatíveis.</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700">
                <Truck className="w-10 h-10 text-brand-blue mb-4" />
                <h4 className="text-xl font-bold mb-2">Entregas Rápidas</h4>
                <p className="text-stone-400">Fazemos entregas em toda Piracicaba, levando comodidade diretamente para o seu estabelecimento.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border-8 border-stone-800">
              <Image 
                src="/images/balas.jpg" 
                alt="Corredores da Cantinho Doce" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO & LOCALIZAÇÃO */}
      <section id="contato" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-stone-100">
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Venha nos visitar!</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-brand-pink/10 p-3 rounded-xl h-fit">
                    <MapPin className="w-6 h-6 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">Endereço</h4>
                    <p className="text-stone-600 mt-1">Rua Dom Pedro I, 1129-1133<br/>Centro, Piracicaba - SP<br/>(Ao lado do Terminal Central)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-blue/20 p-3 rounded-xl h-fit">
                    <Phone className="w-6 h-6 text-stone-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">Contato</h4>
                    <p className="text-stone-600 mt-1">WhatsApp: (19) 99618-9999<br/>Telefone Fixo: (19) 3435-5599</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-stone-100 p-3 rounded-xl h-fit">
                    <Clock className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">Horário de Funcionamento</h4>
                    <p className="text-stone-600 mt-1">Segunda a Sexta: 08:00 às 18:00<br/>Sábado: 08:00 às 13:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/maps/place/Cantinho+Doce/@-22.730051,-47.6497597,17z/data=!3m1!4b1!4m6!3m5!1s0x1561be2f571b303:0x9a88dbfa920b7f4d!8m2!3d-22.730051!4d-47.647571!16s%2Fg%2F11b7fw6nzx" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Ver no Mapa
                </a>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] lg:min-h-full bg-stone-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14717.388835821217!2d-47.647571!3d-22.730051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1561be2f571b303%3A0x9a88dbfa920b7f4d!2sCantinho%20Doce!5e0!3m2!1spt-BR!2sbr!4v1710385200000!5m2!1spt-BR!2sbr" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-pink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/logo.png')] bg-repeat bg-center" style={{ backgroundSize: '150px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Doce, rápido e fácil!
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Faça seu pedido agora pelo nosso catálogo online ou separe seus produtos pelo WhatsApp para retirada rápida na loja.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={STORE_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto bg-white text-brand-pink hover:bg-stone-50 font-bold text-lg py-4 px-10 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Acessar Nossa Loja
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-4 px-10 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl">
                <Image src="/images/logo.png" alt="Cantinho Doce Logo" width={40} height={40} />
              </div>
              <p className="font-semibold text-stone-200">Cantinho Doce</p>
            </div>
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cantinho Doce. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
