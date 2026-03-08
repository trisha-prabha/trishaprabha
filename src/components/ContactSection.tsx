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
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-sm">
          <div>
            <span className="text-muted-foreground text-xs">Email:</span>
            <p className="text-foreground font-medium">trisha13p@gmail.com</p>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">LinkedIn:


            </span>
            <p className="text-foreground font-medium">trisha13p@gmail.com</p>
          </div>
        </div>
      </div>
    </section>);};
export default ContactSection;