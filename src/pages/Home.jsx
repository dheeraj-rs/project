import React from 'react';

const Home = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<header class="bg-gray-900 font-sans relative" data-component-name="HEADER 5" data-sidebar-id="Header-4">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5 text-white text-xl font-bold font-mono tracking-tighter">
        <span class="text-indigo-500">&lt;D-Admin</span><span class="text-indigo-500">/&gt;</span>
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white" data-collapse-toggle="mobile-menu-header-5" aria-controls="mobile-menu-header-5" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="#" class="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Documentation</a>
      <a href="#" class="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">API Reference</a>
      <a href="#" class="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Showcase</a>
      <a href="#" class="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Community</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
      <a href="#" class="text-sm font-semibold leading-6 text-white hover:text-indigo-400 my-auto">Log in</a>
      <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all">Start Building</a>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div class="hidden lg:hidden bg-gray-800 border-t border-gray-700" id="mobile-menu-header-5">
    <div class="space-y-1 px-4 py-6">
      <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Documentation</a>
      <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">API Reference</a>
      <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Showcase</a>
      <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Community</a>
      <div class="mt-4 pt-4 border-t border-gray-700">
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-700">Log in</a>
        <a href="#" class="mt-2 block w-full text-center rounded-md bg-indigo-500 px-3 py-2.5 text-base font-semibold text-white hover:bg-indigo-400">Start Building</a>
      </div>
    </div>
  </div>
</header>

<section data-component-name="ABOUT 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="About-2">
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
<section data-component-name="PROJECTS 2" class="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8" data-sidebar-id="Projects-1">
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
<section data-component-name="SERVICES 2" class="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8" data-sidebar-id="Services-1">
  <div class="max-w-7xl mx-auto">
    <div class="border-t border-zinc-800 pt-16 mb-16">
      <span class="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">// Services</span>
      <h2 class="text-5xl sm:text-6xl font-black text-white tracking-tighter mt-3">WHAT I<br><span class="text-zinc-500">DELIVER</span></h2>
    </div>
    <div class="space-y-0">
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">01</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">Full-Stack Web Development</h3>
          <p class="text-zinc-500 max-w-2xl">End-to-end development of web apps — from database design and API architecture to stunning frontend experiences.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">React</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Node</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">AWS</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">02</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">UI/UX Design Systems</h3>
          <p class="text-zinc-500 max-w-2xl">Comprehensive design systems that scale. Component libraries, brand guidelines, and consistent design language.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Figma</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Storybook</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">03</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">Performance Engineering</h3>
          <p class="text-zinc-500 max-w-2xl">Audit and optimize for Core Web Vitals. Sub-second load times, efficient bundles, and scalable architectures.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Lighthouse</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">CDN</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">04</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">AI Product Development</h3>
          <p class="text-zinc-500 max-w-2xl">Build AI-native features using OpenAI, Anthropic, and custom models. From chatbots to intelligent automation.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">OpenAI</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">LangChain</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
    </div>
  </div>
</section>
<section data-component-name="TESTIMONIALS 3" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden" data-sidebar-id="Testimonials-2">
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
<footer data-component-name="FOOTER 3" class="relative bg-[#0a0a0a] border-t border-[#22d3ee]/20 py-16 px-4 sm:px-6 lg:px-8 font-mono" data-sidebar-id="Footer-2">
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