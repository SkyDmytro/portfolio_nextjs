import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { gitHubLink, linkedInLink } from '../../helpers/constants';

export const ContactPageNew = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      {/* Hero Section */}{' '}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20"></div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              CONTACT
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
              Feel free to reach out to me for collaborations or just a friendly
              chat
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-emerald-400"></div>
                <h2 className="text-3xl font-bold">Get In Touch</h2>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Whether you have a question, want to start a project, or simply
                want to connect, feel free to send me a message. I'm currently
                open to new opportunities and collaborations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p>skydmytro@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <p>Poland</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Link
                  href={gitHubLink}
                  className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href={linkedInLink}
                  className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25"></div>
              <form className="relative bg-zinc-900 p-8 rounded-lg border border-zinc-800 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-zinc-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                    placeholder="Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
