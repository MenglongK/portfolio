"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Sun,
  Moon,
  Loader2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { experienceData, educationData, skills } from "@/data/resume";

export default function Resume() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const { toJpeg } = await import("html-to-image");
      const { jsPDF } = await import("jspdf");

      const originalElement = document.getElementById("cv-content");
      if (!originalElement) return;

      // Create an off-screen wrapper to force desktop layout for accurate dimension calculation
      const cloneWrapper = document.createElement("div");
      cloneWrapper.style.position = "absolute";
      cloneWrapper.style.top = "-9999px";
      cloneWrapper.style.left = "-9999px";
      cloneWrapper.style.width = "1024px";
      cloneWrapper.style.zIndex = "-1";

      const clone = originalElement.cloneNode(true) as HTMLElement;
      clone.id = "cv-content-clone";
      clone.classList.add("pdf-exporting");

      // Guarantee perfect desktop layout by mapping mobile classes to desktop classes on the clone
      const forceDesktopClasses = (el: Element) => {
        const classMap: Record<string, string> = {
          "flex-col": "flex-row",
          "items-center": "items-end",
          "w-28": "w-36",
          "h-36": "h-44",
          "text-center": "text-left",
          "justify-center": "justify-start",
          "text-4xl": "text-5xl",
          "text-xl": "text-2xl",
          "grid-cols-1": "grid-cols-3",
          "gap-6": "gap-8",
          "pb-8": "pb-10",
          "p-6": "p-12",
          "sm:p-8": "p-12",
        };

        // Swap base classes with their desktop equivalents
        Object.entries(classMap).forEach(([mobile, desktop]) => {
          if (el.classList.contains(mobile)) {
            el.classList.remove(mobile);
            el.classList.add(desktop);
          }
        });

        // Explicitly apply lg: rules
        if (el.classList.contains("lg:col-span-2")) {
          el.classList.add("col-span-2");
        }
      };

      forceDesktopClasses(clone);
      clone.querySelectorAll("*").forEach(forceDesktopClasses);

      cloneWrapper.appendChild(clone);
      document.body.appendChild(cloneWrapper);

      // Give browser time to compute layout of the clone
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Use JPEG with high pixelRatio for crisp text and optimized quality to hit ~2MB size
      const imgData = await toJpeg(clone, {
        quality: 0.92,
        pixelRatio: 4,
        backgroundColor: resolvedTheme === "dark" ? "#09090b" : "#ffffff",
        style: {
          margin: "0",
          borderRadius: "0",
          border: "none",
          boxShadow: "none",
        },
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true, // Enable PDF compression
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = clone.offsetWidth;
      const canvasHeight = clone.offsetHeight;

      // Scale to fit within one A4 page (adding small 10mm margins)
      const margin = 10;
      const maxPdfWidth = pdfWidth - margin * 2;
      const maxPdfHeight = pageHeight - margin * 2;

      const ratio = Math.min(
        maxPdfWidth / canvasWidth,
        maxPdfHeight / canvasHeight,
      );

      const finalWidth = canvasWidth * ratio;
      const finalHeight = canvasHeight * ratio;

      // Center horizontally
      const xOffset = (pdfWidth - finalWidth) / 2;
      const yOffset = margin; // Top aligned with margin

      pdf.addImage(imgData, "JPEG", xOffset, yOffset, finalWidth, finalHeight);

      pdf.save("Menglong_Keo_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      const cloneWrapper =
        document.getElementById("cv-content-clone")?.parentElement;
      if (cloneWrapper) document.body.removeChild(cloneWrapper);
      setIsDownloading(false);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
            @page { size: A4; margin: 10mm; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; zoom: 0.8; }
            * {
                opacity: 1 !important;
                transform: none !important;
            }
        }
        .pdf-exporting * {
            opacity: 1 !important;
            transform: none !important;
        }
      `,
        }}
      />
      <div
        id="cv-wrapper"
        className="bg-background text-foreground/80 font-sans antialiased relative selection:bg-orange-500 selection:text-foreground min-h-screen py-6 sm:py-10 print:py-0 print:bg-white"
      >
        {/* Decorative Background Blobs for Glassmorphism Effect */}
        <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/20 blur-[120px] pointer-events-none z-0 print:hidden"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0 print:hidden"></div>
        <div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0 print:hidden"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl print:px-0">
          {/* Navigation / Actions */}
          <motion.div
            data-html2canvas-ignore="true"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-between items-center mb-8 print:hidden"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/70 hover:text-orange-500 transition px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 hover:border-orange-500/50"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="p-2 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 hover:border-orange-500/50 hover:text-orange-500 text-foreground/70 transition shadow-lg"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun size={20} />
                  ) : (
                    <Moon size={20} />
                  )}
                </button>
              )}
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Download size={18} />
                )}
                <span className="hidden sm:inline">
                  {isDownloading ? "Generating..." : "Download PDF"}
                </span>
              </button>
            </div>
          </motion.div>

          {/* CV Content Wrapper */}
          <div
            id="cv-content"
            className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-4"
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end border-b border-foreground/10 print:border-gray-200 pb-8 md:pb-10 print:flex-row print:items-end print:pb-6 print:gap-8"
            >
              <div className="w-28 h-36 md:w-36 md:h-44 shrink-0 rounded-2xl overflow-hidden border-2 border-foreground/10 print:border-none shadow-xl print:shadow-none">
                <Image
                  src="/profile.png"
                  alt="Menglong Keo"
                  width={144}
                  height={176}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 print:text-black">
                  Menglong Keo
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-orange-500 mb-6 print:mb-4">
                  Web Developer
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-foreground/70 print:text-gray-600 print:justify-start">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-orange-500" />{" "}
                    menglongkeo07@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-orange-500" /> +855 87 896
                    167
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-orange-500" /> Phnom Penh,
                    Cambodia
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-orange-500" /> menglong.dev
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="py-10 border-b border-foreground/10 print:border-gray-200 print:py-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 print:text-black">
                <Award className="text-orange-500" /> Profile
              </h3>
              <p className="text-foreground/70 leading-relaxed print:text-gray-700">
                I am a passionate web developer with experience in building clean, user-friendly, and responsive applications. I enjoy turning UI designs from Figma into fast, functional websites using modern tools like React and Next.js. On the backend, I build secure and scalable APIs using Java Spring Boot and PostgreSQL, ensuring the entire application runs smoothly from front to back.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 py-8 md:py-10 print:grid print:grid-cols-3 print:py-6 print:gap-8">
              {/* Main Column (Experience & Education) */}
              <div className="lg:col-span-2 space-y-8 md:space-y-10 print:col-span-2 print:space-y-6">
                {/* Experience Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 print:text-black print:mb-4">
                    <Briefcase className="text-orange-500" /> Experience
                  </h3>
                  <div className="space-y-8 print:space-y-4">
                    {experienceData.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-foreground/10 hover:border-orange-500 transition duration-300"
                      >
                        <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                        <h4 className="text-xl font-bold text-foreground print:text-black">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap justify-between text-sm mb-3">
                          <span className="text-orange-500 font-medium">
                            {exp.company}
                          </span>
                          <span className="text-foreground/50 bg-foreground/5 px-2 py-0.5 rounded text-xs print:text-gray-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed print:text-gray-700">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 print:text-black print:mb-4">
                    <GraduationCap className="text-orange-500" /> Education
                  </h3>
                  <div className="space-y-8 print:space-y-4">
                    {educationData.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-foreground/10 hover:border-orange-500 transition duration-300"
                      >
                        <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                        <h4 className="text-xl font-bold text-foreground print:text-black">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap justify-between text-sm mb-3">
                          <span className="text-orange-500 font-medium">
                            {edu.institution}
                          </span>
                          <span className="text-foreground/50 bg-foreground/5 px-2 py-0.5 rounded text-xs print:text-gray-500">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed print:text-gray-700">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Side Column (Skills & Extra) */}
              <div className="space-y-8 md:space-y-10 print:space-y-6">
                {/* Skills Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 print:text-black">
                    <div className="w-5 h-5 rounded-sm border-2 border-orange-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                    </div>
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-xl text-sm font-medium hover:border-orange-500/50 hover:text-orange-500 transition duration-300 print:border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.section>

                {/* Languages Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="print:mt-8"
                >
                  <h3 className="text-2xl font-bold text-foreground print:text-black mb-6 flex items-center gap-2">
                    <Globe className="text-orange-500" /> Languages
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-foreground print:text-black">
                          Khmer
                        </span>
                        <span className="text-foreground/60 print:text-gray-600">
                          Native
                        </span>
                      </div>
                      <div className="w-full h-2 bg-foreground/10 print:bg-gray-200 rounded-full overflow-hidden print:border print:border-gray-300">
                        <div className="h-full bg-orange-500 w-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-foreground print:text-black">
                          English
                        </span>
                        <span className="text-foreground/60 print:text-gray-600">
                          Professional
                        </span>
                      </div>
                      <div className="w-full h-2 bg-foreground/10 print:bg-gray-200 rounded-full overflow-hidden print:border print:border-gray-300">
                        <div className="h-full bg-orange-500 w-[85%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
