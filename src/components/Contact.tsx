import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Graphic design",
    "Wordpress",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare message with selected services in brackets
      const servicesText =
        selectedServices.length > 0
          ? `[${selectedServices.join(", ")}]\n\n`
          : "";

      const messageWithServices = servicesText + formData.message;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
        message: messageWithServices,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", tel: "", message: "" });
      setSelectedServices([]);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Dots - Right Side */}
          <motion.div
            className="absolute top-48 right-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-5 gap-1.5">
              {[...Array(45)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-black rounded-full"
                ></div>
              ))}
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl lg:text-6xl text-end max-w-5xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-400">Say Hi!</span> and tell me about
            <br />
            <span className="relative inline-block">
              your idea</span>
              <svg
                className="absolute md:top-20 top-11 md:-left-3 left-0 lg:w-full w-32 h-8"
                viewBox="0 0 300 30"
                fill="none"
              >
                <path
                  d="M5 15 Q 150 5, 295 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black"
                />
                <path
                  d="M280 10 L295 15 L285 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black"
                />
              </svg>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a nice works? reach out and let's chat.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Name<span className="text-black">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Hello..."
                className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-gray-600 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Email<span className="text-black">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Where can i reply"
                className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-gray-600 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-black mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.tel}
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
              placeholder="Your phone number"
              className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-gray-600 placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-black mb-3">
              Message
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-gray-600 placeholder-gray-400 resize-none"
            />
          </div>

          {/* What's in your mind */}
          <div>
            <label className="block text-sm font-medium text-black mb-4">
              What's in your mind?<span className="text-black">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedServices.includes(service)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Submit Button with Scribble */}
          <div className="flex flex-col items-end justify-end pt-8">
            <div className="relative">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-[#C29A3A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Me"}
              </motion.button>

              {/* Decorative Scribble */}
              <motion.svg
                className="absolute -right-24 -top-3/4 -translate-y-1/2 w-20 h-20 hidden md:block"
                viewBox="0 0 50 50"
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <path
                  d="M10 25 Q15 15, 25 20 T40 25 Q35 30, 30 25 T20 30 Q25 35, 30 30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  className="text-black"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>

            <p className="text-gray-500 text-sm pt-3">
              I'll must get back to you within 24 hours
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.p
              className="text-green-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}
          {submitStatus === "error" && (
            <motion.p
              className="text-red-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
