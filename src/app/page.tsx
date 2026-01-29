import ToolCard from "@/components/ToolCard";
import { tools, categories } from "@/utils/tools";
import { 
  Zap, 
  Shield, 
  Lock, 
  Sparkles, 
  Github, 
  Star,
  ArrowRight,
  Terminal,
  Cpu,
  Palette
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const totalTools = tools.length;
  const popularTools = tools.filter(t => t.popular);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-300">{totalTools}+ Professional Developer Tools</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in stagger-1">
            <span className="text-white">Your Ultimate</span>
            <br />
            <span className="gradient-text">Developer Toolkit</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8 animate-fade-in stagger-2">
            Free, privacy-focused tools for developers. Format JSON, decode JWTs, 
            test regex, generate passwords, and more. All processing happens in your browser.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in stagger-3">
            {[
              { icon: Lock, text: "100% Private" },
              { icon: Shield, text: "No Data Collection" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Terminal, text: "Open Source" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-zinc-300">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-4">
            <Link
              href="#tools"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all btn-lift"
            >
              <Terminal className="w-5 h-5" />
              Explore Tools
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/Saff9/devkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
              <span className="flex items-center gap-1 px-2 py-0.5 text-sm bg-yellow-500/20 text-yellow-400 rounded-full">
                <Star className="w-3 h-3 fill-current" />
                1.2k
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { value: "30+", label: "Developer Tools" },
          { value: "100%", label: "Client-Side" },
          { value: "0", label: "Data Collected" },
          { value: "∞", label: "Free Forever" },
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="text-center p-6 rounded-2xl glass"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
            <div className="text-sm text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Popular Tools Section */}
      {popularTools.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Popular Tools</h2>
              <p className="text-sm text-zinc-500">Most used by developers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.slice(0, 6).map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section id="tools">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">All Tools</h2>
            <p className="text-sm text-zinc-500">Browse by category</p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium">
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </section>

      {/* Categories Overview */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Categories</h2>
            <p className="text-sm text-zinc-500">Explore by tool type</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const count = tools.filter((t) => t.category === category.id).length;
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-2xl glass card-hover text-center cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl ${category.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-zinc-500">{count} tools</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">DevKit</span>
            </div>
            <p className="text-zinc-400 max-w-md mb-6">
              A collection of free, privacy-focused developer tools. Built with ❤️ for the developer community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Saff9/devkit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-zinc-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">All Tools</Link></li>
              <li><Link href="/json-formatter" className="hover:text-white transition-colors">JSON Formatter</Link></li>
              <li><Link href="/jwt-decoder" className="hover:text-white transition-colors">JWT Decoder</Link></li>
              <li><Link href="/regex-tester" className="hover:text-white transition-colors">Regex Tester</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="https://github.com/Saff9/devkit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 DevKit. Open source under MIT License.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
