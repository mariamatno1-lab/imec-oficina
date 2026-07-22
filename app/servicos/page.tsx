import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Imec Oficina Mecânica em Itapevi",
  description: "Conheça os serviços da Imec para veículos nacionais e importados em Itapevi.",
};

const whatsapp = "https://wa.me/5511945221201";
const whatsappLink = (service: string) =>
  `${whatsapp}?text=${encodeURIComponent(`Olá, Imec! Quero falar sobre o serviço de ${service.toLowerCase()} para meu veículo.`)}`;

const services = [
  { name: "Mecânica em geral", detail: "Diagnóstico, manutenção preventiva e reparos para veículos nacionais e importados." },
  { name: "Injeção eletrônica", detail: "Diagnóstico e serviço para o sistema de injeção do veículo." },
  { name: "Suspensão", detail: "Avaliação e reparo do conjunto responsável por estabilidade, conforto e segurança." },
  { name: "Embreagem", detail: "Avaliação e reparo do sistema de transmissão de força do veículo." },
  { name: "Freios", detail: "Inspeção e manutenção de um dos sistemas mais importantes para a segurança." },
  { name: "Motor", detail: "Manutenção e reparos com eficiência, precisão e diagnóstico cuidadoso." },
  { name: "ABS", detail: "Diagnóstico e atendimento para o sistema antitravamento dos freios." },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Imec — início">
          <img src="/imec/logo.jpg" alt="Imec Nacionais e Importados" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="/">Home</a>
          <a href="/#sobre">Sobre nós</a>
          <a href="/servicos" aria-current="page">Serviços</a>
          <a href="/#localizacao">Localização</a>
        </nav>
        <a className="button button-small" href={whatsappLink("orçamento")} target="_blank" rel="noreferrer">
          Solicitar orçamento <span aria-hidden="true" className="wa-dot">↗</span>
        </a>
      </header>

      <section className="services-hero">
        <p className="eyebrow light">Serviços da Imec</p>
        <h1>Todo cuidado que<br /><span>seu carro precisa.</span></h1>
        <p>Atendimento para veículos nacionais e importados, com diagnóstico responsável e uma equipe preparada para cada situação.</p>
      </section>

      <section className="service-section services-complete" aria-label="Todos os serviços">
        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" key={service.name} href={whatsappLink(service.name)} target="_blank" rel="noreferrer">
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{service.name}</h2><p>{service.detail}</p></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <a className="text-link services-back" href="/">← Voltar para a página inicial</a>
      </section>
    </main>
  );
}
