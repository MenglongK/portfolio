import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Guard clauses for safety
    if (!formRef.current) return;

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email configuration missing!");
      return;
    }

    setLoading(true);

    // 2. Map form data to template parameters
    const formData = new FormData(formRef.current);
    const templateParams = {
      subject: formData.get("subject") as string,
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      from_phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };
    console.log(templateParams);

    // 3. Send email using async/await for cleaner flow
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      toast.success("Email sent successfully!");
      formRef.current.reset(); // Reset form on success
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send email!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 container mx-auto px-6 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-foreground/5 backdrop-blur-lg border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-foreground/60 pl-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                placeholder="Menglong Keo"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-foreground/60 pl-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                placeholder="menglong@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-foreground/60 pl-2">Phone</label>
              <input
                type="text"
                name="phone"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                placeholder="+855 012 345 678"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-foreground/60 pl-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600"
                placeholder="Subject Inquiry"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-foreground/60 pl-2">Message</label>
            <textarea
              rows={4}
              name="message"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition placeholder-gray-600 resize-none"
              placeholder="Tell me about your messages..."
              required
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.4)] w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
