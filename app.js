const root = document.getElementById('root');

const tools = [
    { id: 1, name: "Midjourney v6.1", date: "2026-02-10", features: "텍스트 렌더링 완성, 사실적 질감 구현", link: "https://midjourney.com", crisis: 85 },
    { id: 2, name: "Adobe Firefly Video", date: "2026-02-05", features: "프롬프트 기반 고화질 영상 생성 및 편집", link: "https://firefly.adobe.com", crisis: 72 },
    { id: 3, name: "Canva Magic Edit", date: "2026-01-28", features: "레이아웃 자동 재구성 및 폰트 페어링 AI", link: "https://canva.com", crisis: 45 }
];

function render() {
    root.innerHTML = `
        <header class="h-[50vh] flex flex-col items-center justify-center border-b border-orange-900/30 bg-black">
            <h1 class="text-5xl md:text-7xl font-black text-orange-500 neon-text animate__animated animate__fadeIn">위기의 디자이너들</h1>
            <p class="mt-4 text-zinc-500 tracking-[0.4em] text-xs">LIVE AI THREAT LEVEL</p>
        </header>
        <main class="max-w-4xl mx-auto py-20 px-6">
            ${tools.map(tool => `
                <div class="mb-8 p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-orange-500/50 transition-all group">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-orange-500 text-[10px] mb-1 tracking-tighter">${tool.date}</p>
                            <h3 class="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">${tool.name}</h3>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] text-zinc-500">CRISIS LEVEL</span>
                            <div class="text-2xl font-black text-orange-500">${tool.crisis}%</div>
                        </div>
                    </div>
                    <p class="text-zinc-400 text-sm mt-4 italic leading-relaxed">"${tool.features}"</p>
                    <div class="mt-6 flex gap-4">
                        <button onclick="alert('위기 지수가 반영되었습니다 (Local Only)')" class="px-4 py-1 border border-orange-500/50 text-orange-500 text-xs hover:bg-orange-500 hover:text-black transition-all">위기 투표 +</button>
                        <a href="${tool.link}" target="_blank" class="px-4 py-1 text-zinc-600 text-xs hover:text-zinc-300 transition-all flex items-center">OFFICIAL SITE ↗</a>
                    </div>
                </div>
            `).join('')}
        </main>
        <footer class="py-20 text-center border-t border-zinc-900">
            <p class="text-zinc-700 text-[10px] tracking-[1em]">ADAPT OR DIE</p>
        </footer>
    `;
}

render();