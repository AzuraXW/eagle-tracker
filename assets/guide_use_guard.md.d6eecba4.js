import{_ as s,o as a,c as n,U as l}from"./chunks/framework.17475148.js";const d=JSON.parse('{"title":"类型保护","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/guard.md","filePath":"guide/use/guard.md","lastUpdated":1690186143000}'),e={name:"guide/use/guard.md"},p=l(`<h1 id="类型保护" tabindex="-1">类型保护 <a class="header-anchor" href="#类型保护" aria-label="Permalink to &quot;类型保护&quot;">​</a></h1><p>在 <a href="/eagle-tracker/guide/use/type">TS数据类型</a> 一节中存在部分联合类型，这些联合类型在业务中可能会使用到并且可能有需要缩小类型范围的需求，故提供一些类型守卫供开发者使用。</p><h2 id="辨析类型-ierrorlog" tabindex="-1">辨析类型 <a href="/eagle-tracker/guide/use/type#ierrorlog">IErrorLog</a> <a class="header-anchor" href="#辨析类型-ierrorlog" aria-label="Permalink to &quot;辨析类型 [IErrorLog](/guide/use/type#ierrorlog)&quot;">​</a></h2><ul><li>isVueError</li><li>isJSError</li><li>isHttpError</li><li>isPromiseError</li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">isVueError</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">isJSError</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">isHttpError</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">isPromiseError</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@eagle-tracker/vue3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">useCatchError</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">log</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isVueError</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,6),o=[p];function r(t,c,i,y,F,D){return a(),n("div",null,o)}const A=s(e,[["render",r]]);export{d as __pageData,A as default};