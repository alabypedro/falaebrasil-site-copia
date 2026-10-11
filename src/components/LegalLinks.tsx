const TERMS_URL = "/termos-de-uso";
const PRIVACY_URL = "/politica-de-privacidade";

export function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Documentos jurídicos" className={className}>
      <a href={TERMS_URL} className="underline underline-offset-4">
        Termos de Uso
      </a>
      <a href={PRIVACY_URL} className="underline underline-offset-4">
        Política de Privacidade
      </a>
    </nav>
  );
}

export function LegalConsent({
  action = "compra",
  responsible = false,
  dark = false,
  className = "",
}: {
  action?: "compra" | "matrícula" | "contratação" | "pagamento";
  responsible?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto max-w-xl text-center text-xs leading-relaxed ${
        dark ? "text-brand-blue-light" : "text-muted-foreground"
      } ${className}`}
    >
      Ao continuar com {action === "pagamento" ? "o" : "a"} {action}, {responsible ? "o responsável " : "você "}
      declara estar de acordo com os{" "}
      <a
        href={TERMS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4"
      >
        Termos de Uso
      </a>{" "}
      e a{" "}
      <a
        href={PRIVACY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4"
      >
        Política de Privacidade
      </a>{" "}
      da Falaê Brasil.
    </p>
  );
}