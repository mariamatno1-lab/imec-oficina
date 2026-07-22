type SiteHeaderProps = {
  whatsappHref: string;
};

const menuLinks = [
  { href: "/#inicio", label: "Home" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/#localizacao", label: "Localização" },
];

export function SiteHeader({ whatsappHref }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Imec — início">
        <img src="/imec/logo.jpg" alt="Imec Nacionais e Importados" />
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {menuLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>

      <a className="button button-small header-quote" href={whatsappHref} target="_blank" rel="noreferrer">
        <span className="button-label-full">Solicitar orçamento</span>
        <span className="button-label-short">Orçamento</span>
      </a>

      <details className="mobile-menu">
        <summary><span className="menu-icon" aria-hidden="true"><i /><i /><i /></span> Menu</summary>
        <nav aria-label="Menu para celular">
          {menuLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
      </details>
    </header>
  );
}
