import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Termos = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto max-w-3xl px-5 md:px-6 pt-28 md:pt-32 pb-20 md:pb-28">
      <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        Termos de Uso — MindMed
      </h1>
      <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
        Esta página está em atualização. Para dúvidas sobre os termos de uso da MindMed, entre em contato pelo e-mail{" "}
        <a href="mailto:contato@mindmed.online" className="text-primary underline underline-offset-4">
          contato@mindmed.online
        </a>.
      </p>
    </main>
    <Footer />
  </div>
);

export default Termos;
