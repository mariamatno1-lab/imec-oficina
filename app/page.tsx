import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imec Oficina Mecânica | Nacionais e Importados em Itapevi",
  description:
    "Mecânica em geral, injeção eletrônica, suspensão, embreagem, freios, motor e ABS em Itapevi.",
};

const whatsapp = "https://wa.me/5555945221201";

const whatsappLink = (message: string) =>
  `${whatsapp}?text=${encodeURIComponent(message)}`;

const services = [
  { name: "Injeção eletrônica", detail: "Diagnóstico e serviço para o sistema de injeção do veículo." },
  { name: "Suspensão", detail: "Atenção ao conjunto responsável por estabilidade e conforto." },
  { name: "Embreagem", detail: "Avaliação e reparo do sistema de transmissão de força." },
  { name: "Freios", detail: "Cuidado com um dos sistemas mais importantes para a segurança." },
  { name: "Motor", detail: "Manutenção e reparos com eficiência e precisão." },
  { name: "ABS", detail: "Atendimento para o sistema antitravamento dos freios." },
];

const offers = [
  {
    label: "Atendimento pontual",
    title: "Resolver o que seu carro precisa agora",
    text: "Conte o que está acontecendo com o veículo e combine a avaliação diretamente com a equipe.",
    message: "Olá, Imec! Quero agendar um atendimento pontual para meu veículo.",
  },
  {
    label: "Plano 90 dias",
    title: "Acompanhamento por 3 meses",
    text: "Converse com a Imec para definir um acompanhamento de manutenção adequado ao seu veículo.",
    message: "Olá, Imec! Quero saber como funciona o plano de acompanhamento por 90 dias.",
  },
  {
    label: "Plano 180 dias",
    title: "Acompanhamento por 6 meses",
    text: "Uma opção para organizar os próximos cuidados do carro com a orientação da oficina.",
    message: "Olá, Imec! Quero saber como funciona o plano de acompanhamento por 180 dias.",
  },
];

function WhatsAppIcon() {
  return <span aria-hidden="true" className="wa-dot">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Imec — início">
          <img src="/imec/logo.jpg" alt="Imec Nacionais e Importados" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a
          className="button button-small"
          href={whatsappLink("Olá, Imec! Quero agendar uma consulta para meu veículo.")}
          target="_blank"
          rel="noreferrer"
        >
          Agendar consulta <WhatsAppIcon />
        </a>
      </header>

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
              href={whatsappLink("Olá, Imec! Quero agendar uma consulta para meu veículo.")}
              target="_blank"
              rel="noreferrer"
            >
              Agendar consulta <WhatsAppIcon />
            </a>
            <a className="text-link light-link" href="#servicos">Conhecer os serviços ↓</a>
          </div>
        </div>
        <div className="hero-contact">
          <span>Telefone</span>
          <strong>(11) 4141-0052</strong>
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
          {services.map((service, index) => (
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
              <span className="service-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
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
            Falar com a equipe <WhatsAppIcon />
          </a>
        </div>
      </section>

      <section className="offers" id="planos">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Escolha como começar</p>
            <h2>Do reparo de agora<br />ao próximo cuidado.</h2>
          </div>
          <p>As condições e o escopo de cada opção são definidos diretamente com a equipe, de acordo com o veículo.</p>
        </div>
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <article className={`offer-card ${index === 1 ? "featured" : ""}`} key={offer.label}>
              <p className="offer-label">{offer.label}</p>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <a className="offer-link" href={whatsappLink(offer.message)} target="_blank" rel="noreferrer">
                Consultar no WhatsApp <WhatsAppIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="proof" id="avaliacoes">
        <div className="proof-copy">
          <p className="eyebrow light">Avaliações</p>
          <h2>Confiança começa com transparência.</h2>
          <p>
            O site atual da Imec não publica depoimentos ou notas de clientes. Por isso, esta nova versão não atribui avaliações sem uma fonte verificável.
          </p>
          <p className="proof-note">Quando houver avaliações autorizadas, este espaço está pronto para recebê-las.</p>
          <a
            className="button button-white"
            href={whatsappLink("Olá, Imec! Quero conhecer o atendimento da oficina.")}
            target="_blank"
            rel="noreferrer"
          >
            Conhecer o atendimento <WhatsAppIcon />
          </a>
        </div>
        <div className="proof-image">
          <img src="/imec/oficina-04.jpg" alt="Estrutura da oficina Imec" />
          <div className="proof-badge">
            <span>Compromisso declarado</span>
            <strong>Segurança, eficiência e precisão.</strong>
          </div>
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
            <div><dt>WhatsApp</dt><dd>(55) 95452-21201</dd></div>
            <div><dt>Instagram</dt><dd>@imec_oficinamecanica</dd></div>
          </dl>
          <a
            className="button"
            href={whatsappLink("Olá, Imec! Pode me enviar a localização da oficina?")}
            target="_blank"
            rel="noreferrer"
          >
            Pedir localização <WhatsAppIcon />
          </a>
        </div>
        <div className="location-visual" aria-hidden="true">
          <span className="map-road road-a" />
          <span className="map-road road-b" />
          <span className="map-road road-c" />
          <span className="map-pin">IMEC</span>
          <p>Jardim<br />Rosemary</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Seu veículo em boas mãos</p>
        <h2>Conte para a Imec<br />o que seu carro precisa.</h2>
        <a
          className="button button-dark"
          href={whatsappLink("Olá, Imec! Quero agendar uma consulta para meu veículo.")}
          target="_blank"
          rel="noreferrer"
        >
          Agendar consulta <WhatsAppIcon />
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
        <span>WhatsApp</span><WhatsAppIcon />
      </a>
    </main>
  );
}
