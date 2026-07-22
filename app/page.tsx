import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Imec Oficina Mecânica | Nacionais e Importados em Itapevi",
  description:
    "Mecânica em geral, injeção eletrônica, suspensão, embreagem, freios, motor e ABS em Itapevi.",
};

const whatsapp = "https://wa.me/5511945221201";

const whatsappLink = (message: string) =>
  `${whatsapp}?text=${encodeURIComponent(message)}`;

const services = [
  { name: "Mecânica em geral", detail: "Diagnóstico, manutenção preventiva e reparos para veículos nacionais e importados." },
  { name: "Injeção eletrônica", detail: "Diagnóstico e serviço para o sistema de injeção do veículo." },
  { name: "Suspensão", detail: "Atenção ao conjunto responsável por estabilidade e conforto." },
  { name: "Embreagem", detail: "Avaliação e reparo do sistema de transmissão de força." },
  { name: "Freios", detail: "Cuidado com um dos sistemas mais importantes para a segurança." },
  { name: "Motor", detail: "Manutenção e reparos com eficiência e precisão." },
  { name: "ABS", detail: "Atendimento para o sistema antitravamento dos freios." },
];

const reviews = [
  {
    name: "Priscila Alves Santos",
    text: "Ninguém além deles mexe no meu carro, afinal só eles quem resolveu o problema.",
  },
  {
    name: "Monica Marques",
    text: "Atendimento de primeira, melhores mecânicos da região 👏👏👏",
  },
  {
    name: "Breno Gabriel Mendes da Silva",
    text: "Limpeza excelente e ótimos preços.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader whatsappHref={whatsappLink("Olá, Imec! Quero solicitar um orçamento para meu veículo.")} />

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true">
          <img src="/imec/oficina-01.jpg" alt="" />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Oficina mecânica · Itapevi</p>
          <h1>
            Seu carro recebe
            <span>tratamento adequado.</span>
          </h1>
          <p className="hero-copy">
            Equipe técnica treinada para cada situação. Resolver o problema do seu veículo é nossa satisfação.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href={whatsappLink("Olá, Imec! Quero solicitar um orçamento para meu veículo.")}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
            <a className="text-link light-link" href="#servicos">Conhecer os serviços ↓</a>
          </div>
        </div>
        <div className="road-mark" aria-hidden="true">IMEC · NACIONAIS E IMPORTADOS · IMEC · NACIONAIS E IMPORTADOS</div>
      </section>

      <section className="service-section" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Serviços reais da Imec</p>
            <h2>Mecânica em geral,<br />com atenção ao detalhe.</h2>
          </div>
          <p>
            Atendimento para veículos nacionais e importados, com uma equipe capacitada para oferecer segurança em cada serviço.
          </p>
        </div>
        <div className="service-grid">
          {services.slice(0, 4).map((service, index) => (
            <a
              className="service-card"
              key={service.name}
              href={whatsappLink(`Olá, Imec! Quero falar sobre o serviço de ${service.name.toLowerCase()} para meu veículo.`)}
              target="_blank"
              rel="noreferrer"
            >
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="services-more">
          <a className="button button-services" href="/servicos">Veja todos os serviços</a>
        </div>
      </section>

      <section className="story" id="sobre">
        <div className="story-collage" aria-label="Fotos da oficina Imec">
          <img className="story-main" src="/imec/oficina-02.jpg" alt="Interior da oficina Imec" />
          <img className="story-small" src="/imec/oficina-03.jpg" alt="Equipe e estrutura da oficina Imec" />
          <p className="photo-stamp">Itapevi · SP<br /><strong>IMEC</strong></p>
        </div>
        <div className="story-copy">
          <p className="eyebrow light">Sobre a Imec</p>
          <h2>Eficiência e precisão para superar expectativas.</h2>
          <p>
            A Imec é uma sólida empresa que atua no mercado automotivo na cidade de Itapevi, efetuando serviços de mecânica em geral, como injeção eletrônica, suspensão, embreagem, freios, motor, ABS, entre outros.
          </p>
          <p>
            Contamos com uma equipe capacitada para oferecer a nossos clientes a segurança de que seus veículos estão recebendo tratamento adequado.
          </p>
          <p>
            A Imec tem por objetivo a eficiência e precisão na manutenção e reparos dos veículos, garantindo resultados que superem as expectativas dos clientes e gerem uma relação recíproca de confiança e preferência.
          </p>
          <a
            className="button button-white"
            href={whatsappLink("Olá, Imec! Quero conversar sobre meu veículo.")}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a equipe
          </a>
        </div>
      </section>

      <section className="proof" id="avaliacoes">
        <div className="proof-copy">
          <p className="eyebrow light">Avaliações no Google</p>
          <div className="rating-line"><strong>5,0</strong><span>★★★★★</span></div>
          <h2>Quem conhece,<br />recomenda.</h2>
          <p className="proof-note">37 avaliações públicas no perfil da Imec no Google.</p>
          <a
            className="button button-white"
            href={whatsappLink("Olá, Imec! Vi as avaliações e quero solicitar um orçamento.")}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </a>
        </div>
        <div className="reviews-list" aria-label="Avaliações de clientes no Google">
          {reviews.map((review) => (
            <blockquote className="review-card" key={review.name}>
              <span className="review-stars" aria-label="5 de 5 estrelas">★★★★★</span>
              <p>“{review.text}”</p>
              <footer>{review.name}<small>Avaliação no Google</small></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="location" id="localizacao">
        <div className="location-card">
          <p className="eyebrow light">Como nos encontrar</p>
          <h2>Imec Oficina Mecânica</h2>
          <address>
            Rua Maria de Lourdes Chaluppe, 231<br />
            Jardim Rosemary · Itapevi — SP<br />
            CEP 06657-150
          </address>
          <dl>
            <div><dt>Telefone</dt><dd>(11) 4141-0052</dd></div>
            <div><dt>WhatsApp</dt><dd>(11) 94522-1201</dd></div>
            <div><dt>Instagram</dt><dd>@imec_nacionaiseimportados</dd></div>
          </dl>
        </div>
        <div className="location-map">
          <iframe
            title="Mapa da Imec Oficina Mecânica em Itapevi"
            src="https://www.google.com/maps?q=Rua+Maria+de+Lourdes+Chaluppe,+231,+Jardim+Rosemary,+Itapevi,+SP,+06657-150&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-label" aria-hidden="true">
            <span>Localização confirmada</span>
            <strong>Jardim Rosemary · Itapevi</strong>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Seu veículo em boas mãos</p>
        <h2>Conte para a Imec<br />o que seu carro precisa.</h2>
        <a
          className="button button-dark"
          href={whatsappLink("Olá, Imec! Quero solicitar um orçamento para meu veículo.")}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar orçamento
        </a>
      </section>

      <footer>
        <img src="/imec/logo.jpg" alt="Imec Nacionais e Importados" />
        <p>Oficina mecânica em Itapevi para veículos nacionais e importados.</p>
        <div>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#localizacao">Localização</a>
        </div>
        <small>Imec Oficina Mecânica · Itapevi — SP</small>
      </footer>

      <a
        className="floating-wa"
        href={whatsappLink("Olá, Imec! Quero falar sobre meu veículo.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Imec pelo WhatsApp"
      >
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
