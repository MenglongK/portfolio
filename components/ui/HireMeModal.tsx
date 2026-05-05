"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Lightbulb, PenTool } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function HireMeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("Web Development");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openHireMe", handleOpen);
    return () => window.removeEventListener("openHireMe", handleOpen);
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email configuration missing!");
      return;
    }

    setLoading(true);

    const formData = new FormData(formRef.current);
    const templateParams = {
      subject: `Hire Request: ${selectedService}`,
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      from_phone: "N/A", // You can add phone if needed
      message: `Budget: ${formData.get("budget")}\n\nProject Description:\n${formData.get("message")}`,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      toast.success("Request sent successfully! I'll be in touch soon.");
      formRef.current.reset();
      setIsOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send request!");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { id: "Web Development", icon: <Code2 size={18} /> },
    { id: "Consulting", icon: <Lightbulb size={18} /> },
    { id: "UI/UX Design", icon: <PenTool size={18} /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[90vh] overflow-y-auto z-[101] bg-foreground/5 backdrop-blur-xl border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)] rounded-3xl p-6 md:p-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-foreground/50 hover:text-orange-500 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-extrabold text-foreground mb-2 flex items-center gap-3">
              Hire Me <span className="text-orange-500">.</span>
            </h2>
            <p className="text-foreground/60 mb-8">
              Tell me about your next project. I'd love to help you bring it to
              life.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 pl-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                    placeholder="Alex Carter"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 pl-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                    placeholder="alex@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/60 pl-2">
                  Services Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedService(svc.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
                        selectedService === svc.id
                          ? "bg-orange-500/10 border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                          : "bg-background/50 border-foreground/10 text-foreground/70 hover:border-orange-500/50"
                      }`}
                    >
                      {svc.icon}
                      <span className="text-sm font-medium">{svc.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/60 pl-2">
                  Project Budget
                </label>
                <select
                  name="budget"
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition appearance-none"
                >
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/60 pl-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600 resize-none"
                  placeholder="A detailed description of your vision, goals, and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Request Quote / Get Started →"}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
