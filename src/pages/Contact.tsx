import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { locations } from "@/data/team";
import { services } from "@/data/services";
import heroBg from "@/assets/More Pictures/ContactPic.jpeg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          <img
            src={heroBg}
            alt="Contact TPI"
            className="absolute inset-0 w-full h-full object-cover object-[0_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-20 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Get in Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Partner with <br className="hidden md:block" />
              West Africa's Experts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Ready to discuss your technical requirements? Our specialists are here 
              to provide engineering, environmental, and digital solutions tailored to your project.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <div className="space-y-6 mb-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                  Enquiry Form
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  How can we help?
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                  Fill out the form below and a representative from the relevant 
                  service division will contact you within one business day.
                </p>
              </div>

              <div className="bg-mist/30 p-8 md:p-10 rounded-[2rem] border border-border/40 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Enquiry Received</h3>
                      <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-8">
                        Thank you for reaching out. One of our specialists will be in touch shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                            Full Name *
                          </label>
                          <input
                            type="text" required value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/50"
                            placeholder="e.g. Adebayo Ogunlade"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                            Email Address *
                          </label>
                          <input
                            type="email" required value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/50"
                            placeholder="name@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                            Company
                          </label>
                          <input
                            type="text" value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/50"
                            placeholder="Your Organization"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                            Phone
                          </label>
                          <input
                            type="tel" value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/50"
                            placeholder="+234 ..."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                          Service Interest
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_1.25rem_center] bg-no-repeat"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Multiple">Multiple Services</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 ml-1">
                          Message *
                        </label>
                        <textarea
                          required rows={5} value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-white text-foreground text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 placeholder:text-muted-foreground/50 resize-none"
                          placeholder="Briefly describe your requirements..."
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full md:w-auto px-10 py-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                      >
                        Submit Enquiry 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Office Locations */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                  Technical Hubs
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Presence
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {locations.map((loc) => (
                  <div 
                    key={loc.city} 
                    className="p-6 rounded-2xl bg-white border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-mist/50 transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-mist group-hover:bg-primary/10 transition-colors">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground">{loc.city}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 pl-1">
                      {loc.address}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-primary px-3 py-1.5 rounded-full bg-primary/5">
                      <Phone className="w-3 h-3" />
                      {loc.phone}
                    </div>
                  </div>
                ))}

                <div className="p-8 rounded-2xl bg-[#020617] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-125" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-bold">Direct Email</h3>
                    </div>
                    <p className="text-silver text-xs mb-4">
                      For general enquiries or partnership opportunities.
                    </p>
                    <a 
                      href="mailto:info@tpigrp.com" 
                      className="text-base font-bold text-white hover:text-primary transition-colors"
                    >
                      info@tpigrp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
