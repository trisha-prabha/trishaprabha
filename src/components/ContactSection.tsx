const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-3">That's all for now.</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Got a project in mind?
            <br />
            Let's talk
          </h2>
        </div>

        {/* Divider + Button */}
        <div className="flex items-end justify-between border-t border-border pt-8 mb-12">
          <div />
          <a
            href="mailto:its.ashwin.23@gmail.com"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium hover:scale-105 transition-transform">
            
            Get in touch
          </a>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 max-w-md gap-6 text-sm">
          <div>
            <span className="text-muted-foreground text-xs block mb-1">Email:</span>
            <p className="text-foreground font-medium">its.ashwin.23@gmail.com</p>
          </div>
          <div>
            <span className="text-muted-foreground text-xs block mb-1">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/trisha-prabha-p-029222334/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors underline block">Trisha Prabha P</a>
          </div>
        </div>
      </div>
    </section>);};
export default ContactSection;