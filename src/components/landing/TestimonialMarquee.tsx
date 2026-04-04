const testimonials = [
  { quote: "Economizo quase 2 horas por dia", author: "Dr. Felipe Andrade", specialty: "Clínico geral" },
  { quote: "Não consigo mais trabalhar sem", author: "Dra. Marina Costa", specialty: "Cardiologista" },
  { quote: "Muito precisa na estruturação", author: "Dr. Ricardo Lemos", specialty: "Neurologista" },
  { quote: "Otimizou muito meu tempo", author: "Dra. Camila Barros", specialty: "Endocrinologista" },
  { quote: "Essencial quanto meu estetoscópio", author: "Dr. Bruno Tavares", specialty: "Gastroenterologista" },
  { quote: "A qualidade da documentação melhorou", author: "Dra. Ana Ribeiro", specialty: "Dermatologista" },
];

const doubled = [...testimonials, ...testimonials];

const TestimonialMarquee = () => (
  <section className="py-4 border-y border-border overflow-hidden bg-surface">
    <div className="flex animate-marquee whitespace-nowrap">
      {doubled.map((t, i) => (
        <div key={i} className="inline-flex items-center gap-3 px-8 shrink-0">
          <span className="text-sm font-semibold text-foreground">"{t.quote}"</span>
          <span className="text-xs text-muted-foreground">{t.author}, {t.specialty}</span>
          <span className="text-border ml-3">·</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialMarquee;
