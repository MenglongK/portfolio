import { portfolioListing } from "@/data/mockData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
  return (
    <>
      {/* Portfolio Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="portfolio"
        className="py-20 container mx-auto px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-orange-500 text-foreground text-sm font-medium transition">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground/70 hover:bg-foreground/10 text-sm font-medium transition">
              Web Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioListing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-foreground/5 backdrop-blur-sm border border-foreground/10 p-2 aspect-4/3"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title || "portfolio project"}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-foreground hover:bg-orange-600"
                  >
                    &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
