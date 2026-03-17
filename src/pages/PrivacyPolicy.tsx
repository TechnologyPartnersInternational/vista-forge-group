import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden bg-navy-900 text-white"
          style={{ minHeight: "440px" }}
        >
          {/* Background Gradient/Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e1b4b]" />
          
          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-20 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Legal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed max-w-lg"
            >
              Learn how Technology Partners International protects and manages your personal information.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="prose prose-slate max-w-none space-y-12 text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              At TPI, we take your privacy seriously. As an environmental consultancy, we collect, use, and share personal information in order to provide our services to our clients and to comply with legal and regulatory requirements.
            </p>

            <div className="h-px bg-border w-24" />

            {/* Collection of Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Collection of Personal Information</h2>
              <p>
                We may collect personal information, such as your name, contact information, and company information, when you request a quote, schedule a consultation, or engage in our services. We may also collect personal information from public sources, such as government agencies and industry-specific databases.
              </p>
            </div>

            {/* Use of Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Use of Personal Information</h2>
              <p>
                We use personal information to provide our services, including conducting assessments, providing advice and recommendations, and reporting on our findings. We may also use personal information for billing and collection purposes, and to comply with legal and regulatory requirements.
              </p>
            </div>

            {/* Sharing of Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Sharing of Personal Information</h2>
              <p>
                We may share personal information with third parties, such as regulatory agencies, as required by law. We may also share personal information with service providers, such as software providers, who assist us in providing our services. We require that these third parties protect personal information in a manner consistent with this policy and applicable laws.
              </p>
            </div>

            {/* Security of Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Security of Personal Information</h2>
              <p>
                We take reasonable measures to protect personal information from unauthorized access, use, or disclosure. We also regularly review and update our security measures to ensure that personal information is protected.
              </p>
            </div>

            {/* Access to Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Access to Personal Information</h2>
              <p>
                You have the right to request access to the personal information that we collect, use, and share. You also have the right to request that we correct any inaccuracies in your personal information.
              </p>
            </div>

            {/* Changes to this Policy */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Changes to this Policy</h2>
              <p>
                We may update this policy from time to time to reflect changes in our practices or applicable laws. We will provide notice of any such changes through our website or by other means.
              </p>
            </div>

            {/* Contact Us */}
            <div className="p-8 rounded-2xl bg-mist border border-border/50 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this policy, please contact us at:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Email:</span> 
                  <a href="mailto:info@tpinigeria.com" className="hover:text-primary transition-colors">info@tpinigeria.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Phone:</span> 
                  <span>08177668572, 08033030049</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
