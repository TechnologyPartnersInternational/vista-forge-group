import Layout from "@/components/layout/Layout";
import { locations } from "@/data/team";
import { services } from "@/data/services";
import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-silver leading-relaxed">
              Ready to discuss your project? Our team is here to help scope the right solution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg p-8 md:p-10 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Request a Proposal</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-mist flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank you for your enquiry</h3>
                    <p className="text-muted-foreground">Our team will be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input
                          type="text" required value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                        <input
                          type="email" required value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          type="text" value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your organisation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input
                          type="tel" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service Interest</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        required rows={5} value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    <button type="submit" className="w-full md:w-auto px-8 py-3.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Location Cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Our Offices</h2>
              {locations.map((loc) => (
                <div key={loc.city} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-bold text-foreground">{loc.city}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{loc.address}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <Phone className="w-3 h-3" /> {loc.phone}
                    </span>
                  </div>
                </div>
              ))}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">Email</h3>
                </div>
                <p className="text-sm text-primary">info@tpigrp.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
