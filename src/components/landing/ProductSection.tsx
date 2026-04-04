import FadeIn from "./FadeIn";
import featureCapture from "@/assets/feature-capture.jpg";
import featureStructure from "@/assets/feature-structure.jpg";
import featureReady from "@/assets/feature-ready.jpg";

const features = [
  {
    title: "Captura inteligente",
    desc: "A consulta é transformada em texto estruturado automaticamente.",
    img: featureCapture,
  },
  {
    title: "Estrutura clínica",
    desc: "Organização em anamnese, hipóteses, condutas e exames.",
    img: featureStructure,
  },
  {
    title: "Pronto para uso",
    desc: "Documento final já estruturado e editável.",
    img: featureReady,
  },
];

const ProductSection = () => (
  <section id="produto" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <FadeIn>
        <div className="max-w-md">
          <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-tight text-foreground leading-tight">
            Projetado para a prática clínica real.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.1}>
            <div className="group rounded-xl border border-border bg-background overflow-hidden hover:shadow-[0_8px_30px_rgb(0_0_0/0.04)] transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
