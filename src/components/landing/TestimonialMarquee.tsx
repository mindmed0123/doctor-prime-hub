const testimonials = [
  { quote: "Economizo quase 2 horas por dia", author: "Dr. Felipe Andrade", specialty: "Clínico geral" },
  { quote: "Não consigo mais trabalhar sem", author: "Dra. Marina Costa", specialty: "Cardiologista" },
  { quote: "Muito precisa na estruturação clínica", author: "Dr. Ricardo Lemos", specialty: "Neurologista" },
  { quote: "Otimizou meu tempo de forma significativa", author: "Dra. Camila Barros", specialty: "Endocrinologista" },
  { quote: "Tão essencial quanto meu estetoscópio", author: "Dr. Bruno Tavares", specialty: "Gastroenterologista" },
  { quote: "A qualidade da documentação melhorou muito", author: "Dra. Ana Ribeiro", specialty: "Dermatologista" },
];

const doubled = [...testimonials, ...testimonials];

const TestimonialMarquee = () => (
  <section className="py-10 border-y border-border bg-surface overflow-hidden">
    <div className="flex animate-marquee">
      {doubled.map((t, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex items-center gap-6 px-8"
        >
          <p className="text-[14px] font-semibold text-foreground whitespace-nowrap">
            "{t.quote}"
          </p>
          <span className="text-[12px] text-muted-foreground whitespace-nowrap">
            {t.author}, {t.specialty}
          </span>
          <span className="text-border">•</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialMarquee;
