import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiClock,
} from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'pandeyap2605@gmail.com',
    href: 'mailto:pandeyap2605@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+916268389486',
    href: 'tel:+916268389486',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'India',
    href: null,
  },
  {
    icon: HiClock,
    label: 'Availability',
    value: 'Open for opportunities',
    href: null,
  },
];

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/adityagit2605', color: '#ffffff' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pandeyaditya26', color: '#0A66C2' },
];

const Contact = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1b1fcd09-92e3-4698-9318-9d44664f5d77",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="section-title mt-3">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message!
          </p>
        </div>

        <div ref={formRef} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={label}
                className="glass-card-hover p-5 flex items-center gap-4 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm font-medium hover:text-accent transition-colors duration-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-neutral-500 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:border-accent/30"
                    style={{ '--hover-color': color }}
                    title={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="text-xs text-neutral-500 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-neutral-500 mb-1.5 block">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs text-neutral-500 mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-neutral-500 mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <span>✓ Message Sent!</span>
                ) : (
                  <>
                    <HiPaperAirplane className="text-lg rotate-90" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-400">
                  Thank you! I&apos;ll get back to you soon. 🎉
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
