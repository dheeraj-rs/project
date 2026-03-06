import React from 'react';

const Home = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
















<header data-component-name="HEADER 2" class="w-full relative z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900 transition-all duration-300" data-sidebar-id="Header-1" data-aria-hidden="true" aria-hidden="true">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-24">
      
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="#" class="flex items-center gap-2 group">
          <div class="text-white font-black text-2xl tracking-tighter">
            DIGITAL<span class="text-zinc-500">CRAFTS</span>.
          </div>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-12">
        <a href="#about" class="text-sm font-semibold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Studio</a>
        <a href="#work" class="text-sm font-semibold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Work</a>
        <a href="#expertise" class="text-sm font-semibold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Expertise</a>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center">
        <a href="#contact" class="group relative inline-flex items-center justify-center px-6 py-2.5 bg-white text-zinc-950 font-bold overflow-hidden rounded text-sm hover:text-white transition-colors duration-300">
          <span class="absolute inset-0 w-full h-full bg-zinc-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
          <span class="relative z-10 flex items-center gap-2">Let's Talk</span>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button id="h2-mobile-btn" class="text-zinc-300 hover:text-white focus:outline-none p-2 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors">
          <svg class="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
          </svg>
        </button>
      </div>
      
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  <div id="h2-mobile-menu" class="hidden md:hidden bg-zinc-950 border-b border-zinc-900 absolute w-full left-0 top-24">
    <div class="px-6 py-8 space-y-6 text-center">
      <a href="#about" class="block text-xl font-bold text-zinc-400 hover:text-white uppercase tracking-widest">Studio</a>
      <a href="#work" class="block text-xl font-bold text-zinc-400 hover:text-white uppercase tracking-widest">Work</a>
      <a href="#expertise" class="block text-xl font-bold text-zinc-400 hover:text-white uppercase tracking-widest">Expertise</a>
      <div class="pt-6 border-t border-zinc-900">
        <a href="#contact" class="inline-block px-8 py-4 bg-white text-zinc-950 font-bold rounded">Let's Talk</a>
      </div>
    </div>
  </div>
</header>

<script>
  const h2Btn = document.getElementById('h2-mobile-btn');
  const h2Menu = document.getElementById('h2-mobile-menu');
  if(h2Btn && h2Menu) {
    h2Btn.addEventListener('click', () => {
      h2Menu.classList.toggle('hidden');
    });
  }
</script>
<section data-component-name="HERO 3" class="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden text-[#e5e5e5]" data-sidebar-id="Hero-2" data-aria-hidden="true" aria-hidden="true">
  
  <!-- Cyberpunk Grid Background -->
  <div class="absolute inset-0 bg-[#0a0a0a] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

  <!-- Glowing Line -->
  <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent shadow-[0_0_20px_#22d3ee] animate-pulse"></div>

  <!-- Content Container -->
  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">
    
    <div class="flex-1 flex flex-col items-start font-mono">
      <div class="inline-flex items-center gap-3 px-4 py-2 border border-[#22d3ee]/30 bg-[#22d3ee]/5 text-[#22d3ee] rounded-sm uppercase tracking-widest text-xs font-semibold mb-8 animate-fade-in">
        <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-ping"></span>
        System Online
      </div>
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-glitch" title="NEXT-GEN INTERFACES">
        NEXT-GEN<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">INTERFACES</span>
      </h1>
      
      <p class="text-lg md:text-xl text-[#a3a3a3] max-w-xl mb-10 leading-relaxed font-sans border-l-2 border-[#a855f7] pl-4">
        We engineer high-performance web applications with futuristic aesthetics. Merging cutting-edge technology with cyberpunk design principles to dominate the digital frontier.
      </p>
      
      <div class="flex gap-4">
        <a href="#" class="group relative px-8 py-4 bg-transparent border border-[#22d3ee] text-[#22d3ee] font-bold uppercase tracking-widest text-sm overflow-hidden hover:text-[#0a0a0a] transition-colors duration-300">
          <span class="absolute inset-0 bg-[#22d3ee] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
          <span class="relative z-10">Initialize Project</span>
        </a>
        <a href="#" class="px-8 py-4 bg-transparent border border-[#333] text-[#888] font-bold uppercase tracking-widest text-sm hover:border-[#a855f7] hover:text-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
          Access Database
        </a>
      </div>
    </div>
    
    <!-- Neon Decoration Image/Object -->
    <div class="flex-1 w-full max-w-md relative animate-float">
      <div class="absolute inset-0 bg-gradient-to-br from-[#22d3ee] to-[#a855f7] filter blur-[100px] opacity-40 rounded-full"></div>
      <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&amp;fit=crop&amp;q=80&amp;w=800" alt="Cyberpunk Element" class="relative z-10 w-full h-auto object-cover rounded-sm border border-[#333] shadow-[0_0_30px_rgba(34,211,238,0.2)] grayscale contrast-150 hover:grayscale-0 transition-all duration-700 cursor-none">
    </div>

  </div>
</section>

<style data-aria-hidden="true" aria-hidden="true">
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
/* Subtle hover glitch effect */
.animate-glitch:hover {
  text-shadow: 2px 0 #22d3ee, -2px 0 #a855f7;
  animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}
@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(-5deg); }
  40% { transform: skew(5deg); }
  60% { transform: skew(-5deg); }
  80% { transform: skew(5deg); }
  100% { transform: skew(0deg); }
}
</style>
<section data-component-name="ABOUT 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="About-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex items-center gap-4 mb-16">
      <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
      <span class="text-[#22d3ee] text-xs uppercase tracking-[0.3em]">// Loading: profile.sys</span>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Terminal Card -->
      <div class="border border-[#22d3ee]/30 bg-[#0f1117] rounded-none shadow-[0_0_40px_rgba(34,211,238,0.1)]">
        <div class="flex items-center gap-2 px-4 py-3 border-b border-[#22d3ee]/20 bg-[#22d3ee]/5">
          <span class="w-3 h-3 rounded-full bg-red-500/70"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/70"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/70"></span>
          <span class="text-[#22d3ee]/50 text-xs ml-2">about.sh</span>
        </div>
        <div class="p-8 space-y-3 text-sm">
          <div><span class="text-[#22d3ee]">$</span> <span class="text-zinc-400">cat profile.json</span></div>
          <div class="text-zinc-300 pl-4">{</div>
          <div class="text-zinc-300 pl-8">"name": <span class="text-[#a855f7]">"Alex Chen"</span>,</div>
          <div class="text-zinc-300 pl-8">"role": <span class="text-[#a855f7]">"Full-Stack Developer"</span>,</div>
          <div class="text-zinc-300 pl-8">"exp": <span class="text-[#22d3ee]">5</span>,</div>
          <div class="text-zinc-300 pl-8">"stack": [<span class="text-[#a855f7]">"React","Node","TypeScript"</span>],</div>
          <div class="text-zinc-300 pl-8">"status": <span class="text-green-400">"available_for_hire"</span></div>
          <div class="text-zinc-300 pl-4">}</div>
          <div class="mt-4"><span class="text-[#22d3ee]">$</span> <span class="animate-pulse text-zinc-400">_</span></div>
        </div>
      </div>
      <!-- Content -->
      <div>
        <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-white mb-6">
          ENGINEER.<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">DESIGNER.</span><br>CREATOR.
        </h2>
        <p class="text-[#a3a3a3] leading-relaxed mb-8 border-l-2 border-[#22d3ee]/40 pl-4">
          I architect and build next-generation digital experiences. Specializing in high-performance applications that push the boundaries of what's possible on the web. Every pixel is intentional. Every interaction is crafted.
        </p>
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="border border-[#22d3ee]/20 p-4 text-center">
            <div class="text-2xl font-black text-[#22d3ee]">50+</div>
            <div class="text-xs text-zinc-500 mt-1 uppercase tracking-widest">Projects</div>
          </div>
          <div class="border border-[#a855f7]/20 p-4 text-center">
            <div class="text-2xl font-black text-[#a855f7]">30+</div>
            <div class="text-xs text-zinc-500 mt-1 uppercase tracking-widest">Clients</div>
          </div>
          <div class="border border-[#22d3ee]/20 p-4 text-center">
            <div class="text-2xl font-black text-[#22d3ee]">5yr</div>
            <div class="text-xs text-zinc-500 mt-1 uppercase tracking-widest">EXP</div>
          </div>
        </div>
        <a href="#contact" class="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#22d3ee] text-[#22d3ee] font-bold uppercase tracking-widest text-sm overflow-hidden hover:text-[#0a0a0a] transition-colors duration-300">
          <span class="absolute inset-0 bg-[#22d3ee] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
          <span class="relative z-10">Initialize Contact</span>
        </a>
      </div>
    </div>
  </div>
</section>
<section data-component-name="PROJECTS 2" class="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8" data-sidebar-id="Projects-1" data-aria-hidden="true" aria-hidden="true">
  <div class="max-w-7xl mx-auto">
    <div class="border-t border-zinc-800 pt-16 mb-16">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span class="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">// Selected Work</span>
          <h2 class="text-5xl sm:text-6xl font-black text-white tracking-tighter mt-3">PROJECTS</h2>
        </div>
        <a href="#" class="text-zinc-400 hover:text-white text-sm font-semibold uppercase tracking-widest flex items-center gap-2 transition-colors">
          All Work <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
    <!-- Large Featured -->
    <div class="group relative rounded-2xl overflow-hidden mb-6 h-[450px] cursor-pointer">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=1400&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Featured project">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-8">
        <span class="text-xs tracking-widest uppercase text-zinc-400 mb-3 block">UI / Design System</span>
        <h3 class="text-3xl font-black text-white mb-2">Design System Builder</h3>
        <p class="text-zinc-300 max-w-lg text-sm">A comprehensive design system toolkit for teams scaling their design-to-code workflow.</p>
      </div>
      <div class="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </div>
    </div>
    <!-- Two Smaller -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;w=800&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-6">
          <span class="text-xs tracking-widest uppercase text-zinc-400 mb-2 block">Fintech</span>
          <h3 class="text-xl font-black text-white">Crypto Wallet App</h3>
        </div>
      </div>
      <div class="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-6">
          <span class="text-xs tracking-widest uppercase text-zinc-400 mb-2 block">SaaS</span>
          <h3 class="text-xl font-black text-white">Analytics Platform</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<section data-component-name="SERVICES 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="Services-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex items-center gap-4 mb-4">
      <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
      <span class="text-[#22d3ee] text-xs uppercase tracking-[0.3em]">// services.init</span>
    </div>
    <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-16">SYSTEM<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">MODULES</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="border border-[#22d3ee]/20 p-8 hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 group">
        <div class="text-[#22d3ee] text-xs uppercase tracking-[0.3em] mb-4">MODULE_01</div>
        <h3 class="text-xl font-black text-white uppercase tracking-tight mb-3">Web Engineering</h3>
        <p class="text-zinc-500 text-sm leading-relaxed mb-6">Full-stack development using React, Next.js, Node.js and PostgreSQL. Production-grade architecture from day one.</p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">React</span>
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">Next.js</span>
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">Node</span>
        </div>
      </div>
      <div class="border border-[#a855f7]/20 p-8 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
        <div class="text-[#a855f7] text-xs uppercase tracking-[0.3em] mb-4">MODULE_02</div>
        <h3 class="text-xl font-black text-white uppercase tracking-tight mb-3">Interface Design</h3>
        <p class="text-zinc-500 text-sm leading-relaxed mb-6">User experience architected from research to pixel-perfect components. Design systems that scale across products.</p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">Figma</span>
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">UX Research</span>
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">Design Systems</span>
        </div>
      </div>
      <div class="border border-[#a855f7]/20 p-8 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
        <div class="text-[#a855f7] text-xs uppercase tracking-[0.3em] mb-4">MODULE_03</div>
        <h3 class="text-xl font-black text-white uppercase tracking-tight mb-3">Infrastructure &amp; DevOps</h3>
        <p class="text-zinc-500 text-sm leading-relaxed mb-6">Cloud-native infrastructure setup, CI/CD pipelines, containerization, and monitoring for production systems.</p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">AWS</span>
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">Docker</span>
          <span class="text-xs text-[#a855f7]/70 border border-[#a855f7]/20 px-2 py-1">Terraform</span>
        </div>
      </div>
      <div class="border border-[#22d3ee]/20 p-8 hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 group">
        <div class="text-[#22d3ee] text-xs uppercase tracking-[0.3em] mb-4">MODULE_04</div>
        <h3 class="text-xl font-black text-white uppercase tracking-tight mb-3">AI Integration</h3>
        <p class="text-zinc-500 text-sm leading-relaxed mb-6">Embed intelligence into your product pipeline with custom LLM integrations, RAG systems, and AI workflows.</p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">OpenAI</span>
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">LangChain</span>
          <span class="text-xs text-[#22d3ee]/70 border border-[#22d3ee]/20 px-2 py-1">Vector DB</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section data-component-name="SKILLS 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="Skills-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex items-center gap-4 mb-4">
      <span class="w-2 h-2 bg-[#a855f7] shadow-[0_0_8px_#a855f7] animate-pulse"></span>
      <span class="text-[#a855f7] text-xs uppercase tracking-[0.3em]">// skills.manifest</span>
    </div>
    <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-16">CORE<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">CAPABILITIES</span></h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <!-- Each skill as a glowing card -->
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">⚛️</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">React</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">▲</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">Next.js</div>
      </div>
      <div class="border border-[#a855f7]/20 p-4 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🟦</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#a855f7] transition-colors uppercase tracking-wider">TypeScript</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🟢</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">Node.js</div>
      </div>
      <div class="border border-[#a855f7]/20 p-4 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🐘</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#a855f7] transition-colors uppercase tracking-wider">PostgreSQL</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🐳</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">Docker</div>
      </div>
      <div class="border border-[#a855f7]/20 p-4 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">☁️</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#a855f7] transition-colors uppercase tracking-wider">AWS</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🎨</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">Figma</div>
      </div>
      <div class="border border-[#a855f7]/20 p-4 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🔴</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#a855f7] transition-colors uppercase tracking-wider">Redis</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🕸️</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">GraphQL</div>
      </div>
      <div class="border border-[#a855f7]/20 p-4 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🐍</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#a855f7] transition-colors uppercase tracking-wider">Python</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-4 text-center hover:border-[#22d3ee]/60 hover:bg-[#22d3ee]/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group cursor-pointer">
        <div class="text-2xl mb-2">🔱</div>
        <div class="text-xs text-zinc-400 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wider">Prisma</div>
      </div>
    </div>
  </div>
</section>
<section data-component-name="STATS 3" class="relative bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 font-mono" data-sidebar-id="Stats-2" data-aria-hidden="true" aria-hidden="true">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="border border-[#22d3ee]/20 p-8 text-center hover:border-[#22d3ee]/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
        <div class="text-4xl sm:text-5xl font-black text-[#22d3ee] mb-2 shadow-[0_0_20px_rgba(34,211,238,0.5)] [text-shadow:0_0_20px_rgba(34,211,238,0.5)]">50+</div>
        <div class="text-zinc-600 text-xs uppercase tracking-[0.2em]">Projects</div>
      </div>
      <div class="border border-[#a855f7]/20 p-8 text-center hover:border-[#a855f7]/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300">
        <div class="text-4xl sm:text-5xl font-black text-[#a855f7] mb-2 [text-shadow:0_0_20px_rgba(168,85,247,0.5)]">30+</div>
        <div class="text-zinc-600 text-xs uppercase tracking-[0.2em]">Clients</div>
      </div>
      <div class="border border-[#22d3ee]/20 p-8 text-center hover:border-[#22d3ee]/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
        <div class="text-4xl sm:text-5xl font-black text-[#22d3ee] mb-2 [text-shadow:0_0_20px_rgba(34,211,238,0.5)]">5yr</div>
        <div class="text-zinc-600 text-xs uppercase tracking-[0.2em]">Experience</div>
      </div>
      <div class="border border-[#a855f7]/20 p-8 text-center hover:border-[#a855f7]/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300">
        <div class="text-4xl sm:text-5xl font-black text-[#a855f7] mb-2 [text-shadow:0_0_20px_rgba(168,85,247,0.5)]">99%</div>
        <div class="text-zinc-600 text-xs uppercase tracking-[0.2em]">Satisfaction</div>
      </div>
    </div>
  </div>
</section>
<section data-component-name="TESTIMONIALS 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="Testimonials-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex items-center gap-4 mb-4">
      <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
      <span class="text-[#22d3ee] text-xs uppercase tracking-[0.3em]">// client.feedback</span>
    </div>
    <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-16">TRUSTED<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">BY LEADERS</span></h2>
    <div class="space-y-6">
      <div class="border border-[#22d3ee]/20 p-8 hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5 transition-all duration-300">
        <div class="flex justify-between items-start mb-6">
          <div class="text-[#22d3ee] text-4xl font-black opacity-30">"</div>
          <div class="text-[#22d3ee] text-xs">★★★★★</div>
        </div>
        <p class="text-zinc-300 text-lg leading-relaxed mb-6">"This developer doesn't just write code — they think about business outcomes. Our conversion rate jumped 40% after the redesign."</p>
        <div class="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" class="w-12 h-12 object-cover border border-[#22d3ee]/20" alt="Client">
          <div>
            <div class="text-white font-bold text-sm uppercase tracking-wider">Marcus Williams</div>
            <div class="text-zinc-600 text-xs">CEO // TechPath Inc.</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-[#a855f7]/20 p-6 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5 transition-all duration-300">
          <div class="text-[#a855f7] text-[40px] font-black opacity-30 mb-4 leading-none">"</div>
          <p class="text-zinc-400 text-sm leading-relaxed mb-5">"Delivered our complex dashboard on time, with incredible precision. The UI is exactly what we envisioned."</p>
          <div class="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" class="w-10 h-10 object-cover border border-[#a855f7]/20" alt="Client">
            <div>
              <div class="text-white font-bold text-xs uppercase">Sarah Chen</div>
              <div class="text-zinc-600 text-xs">Product Lead // Luminary</div>
            </div>
          </div>
        </div>
        <div class="border border-[#22d3ee]/20 p-6 hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5 transition-all duration-300">
          <div class="text-[#22d3ee] text-[40px] font-black opacity-30 mb-4 leading-none">"</div>
          <p class="text-zinc-400 text-sm leading-relaxed mb-5">"A true strategic partner. Brought invaluable insights that shaped our product's entire journey and success."</p>
          <div class="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" class="w-10 h-10 object-cover border border-[#22d3ee]/20" alt="Client">
            <div>
              <div class="text-white font-bold text-xs uppercase">Alex Kumar</div>
              <div class="text-zinc-600 text-xs">Founder // NovaSpark</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section data-component-name="CONTACT 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="Contact-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <div class="flex items-center justify-center gap-4 mb-8">
      <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
      <span class="text-[#22d3ee] text-xs uppercase tracking-[0.3em]">// contact.sys</span>
    </div>
    <h2 class="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
      READY TO<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">INITIALIZE?</span>
    </h2>
    <p class="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">Available for select projects and collaborations. If you have a vision that pushes boundaries, let's connect.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <a href="mailto:hello@dev.com" class="group relative px-10 py-5 border border-[#22d3ee] text-[#22d3ee] font-black uppercase tracking-widest overflow-hidden hover:text-[#0a0a0a] transition-colors duration-300">
        <span class="absolute inset-0 bg-[#22d3ee] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
        <span class="relative z-10">Send Message</span>
      </a>
      <a href="#" class="px-10 py-5 border border-zinc-700 text-zinc-400 font-black uppercase tracking-widest hover:border-[#a855f7] hover:text-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300">
        View GitHub
      </a>
    </div>
    <!-- Contact info grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-zinc-800 pt-12">
      <div class="text-center">
        <div class="text-xs text-zinc-600 uppercase tracking-widest mb-2">Email</div>
        <a href="mailto:hello@dev.com" class="text-zinc-300 hover:text-[#22d3ee] transition-colors">hello@dev.com</a>
      </div>
      <div class="text-center">
        <div class="text-xs text-zinc-600 uppercase tracking-widest mb-2">Location</div>
        <span class="text-zinc-300">Bangalore, India</span>
      </div>
      <div class="text-center">
        <div class="text-xs text-zinc-600 uppercase tracking-widest mb-2">Status</div>
        <span class="text-green-400 flex items-center justify-center gap-2">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_#4ade80]"></span>
          Available
        </span>
      </div>
    </div>
  </div>
</section>
<footer data-component-name="FOOTER 3" class="relative bg-[#0a0a0a] border-t border-[#22d3ee]/20 py-16 px-4 sm:px-6 lg:px-8 font-mono" data-sidebar-id="Footer-2" data-aria-hidden="true" aria-hidden="true">
  <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent shadow-[0_0_15px_#22d3ee]"></div>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#22d3ee]/10">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="w-2 h-2 bg-[#22d3ee] shadow-[0_0_6px_#22d3ee] animate-pulse"></span>
          <span class="text-white font-bold text-xl tracking-widest uppercase">SYS<span class="text-[#a855f7]">.INIT</span></span>
        </div>
        <p class="text-zinc-600 text-xs leading-relaxed">Next-generation digital engineering. Building performant web systems that define the frontier.</p>
      </div>
      <div>
        <div class="text-[#22d3ee] text-xs uppercase tracking-[0.3em] mb-5">// Navigation</div>
        <ul class="space-y-2">
          <li><a href="#core" class="text-zinc-500 hover:text-[#22d3ee] text-xs uppercase tracking-wider transition-colors"><span class="text-[#22d3ee] mr-2">&gt;</span> Core</a></li>
          <li><a href="#modules" class="text-zinc-500 hover:text-[#22d3ee] text-xs uppercase tracking-wider transition-colors"><span class="text-[#22d3ee] mr-2">&gt;</span> Modules</a></li>
          <li><a href="#records" class="text-zinc-500 hover:text-[#22d3ee] text-xs uppercase tracking-wider transition-colors"><span class="text-[#22d3ee] mr-2">&gt;</span> Records</a></li>
          <li><a href="#connect" class="text-zinc-500 hover:text-[#22d3ee] text-xs uppercase tracking-wider transition-colors"><span class="text-[#22d3ee] mr-2">&gt;</span> Connect</a></li>
        </ul>
      </div>
      <div>
        <div class="text-[#a855f7] text-xs uppercase tracking-[0.3em] mb-5">// Status</div>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-green-400 shadow-[0_0_6px_#4ade80] rounded-full animate-pulse"></span>
            <span class="text-zinc-500 text-xs">System: Online</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-[#22d3ee] shadow-[0_0_6px_#22d3ee] rounded-full animate-pulse"></span>
            <span class="text-zinc-500 text-xs">Available for Hire</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-[#a855f7] shadow-[0_0_6px_#a855f7] rounded-full"></span>
            <span class="text-zinc-500 text-xs">Location: India</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-zinc-700 text-xs uppercase tracking-widest">© 2024 SYS.INIT — All rights reserved</p>
      <p class="text-zinc-800 text-xs">v1.0.0 // build:stable</p>
    </div>
  </div>
</footer>
` }} />
  );
};

export default Home;