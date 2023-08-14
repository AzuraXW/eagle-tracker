import{_ as s,o as a,c as n,U as l}from"./chunks/framework.17475148.js";const C=JSON.parse('{"title":"基础说明","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/basic.md","filePath":"guide/use/basic.md","lastUpdated":1691998951000}'),e={name:"guide/use/basic.md"},p=l(`<h1 id="基础说明" tabindex="-1">基础说明 <a class="header-anchor" href="#基础说明" aria-label="Permalink to &quot;基础说明&quot;">​</a></h1><h2 id="自动运行" tabindex="-1">自动运行 <a class="header-anchor" href="#自动运行" aria-label="Permalink to &quot;自动运行&quot;">​</a></h2><p>sdk会全程自动运行，理论上不需要手动干预，也暂不支持手动采集。如果你希望改变数据结构，或者手动上报数据，请异步至<a href="/eagle-tracker/guide/use/manual">手动上报</a></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eagle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EagleTracker</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">isTest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">XXXXXXXX</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dsn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://test.com/log</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行上述代码发生了：</p><ul><li>初始化JS、Promise、Http请求错误、Vue错误监听</li><li>初始化资源加载错误监听</li><li>初始化统计页面在线时长</li><li>页面加载完成后开始收集性能指标</li><li>页面加载完毕后开始收集资源加载情况</li></ul><h2 id="环境相关数据" tabindex="-1">环境相关数据 <a class="header-anchor" href="#环境相关数据" aria-label="Permalink to &quot;环境相关数据&quot;">​</a></h2><p>在数据上报之前会附带一些公共数据，其中就包含与用户环境相关的数据。例如用户所使用的浏览器类型及版本，操作系统类型及版本，屏幕分辨率。</p><p>至于用户IP和所在位置或者地理相关信息，单靠SDK很难做到，这个需要借助后端来实现。</p><h3 id="数据样例" tabindex="-1">数据样例 <a class="header-anchor" href="#数据样例" aria-label="Permalink to &quot;数据样例&quot;">​</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">browser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Chrome 117.0.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">deviceType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Desktop</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">os</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Windows 10.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">screen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1536x864</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="手动获取" tabindex="-1">手动获取 <a class="header-anchor" href="#手动获取" aria-label="Permalink to &quot;手动获取&quot;">​</a></h3><p>当然也可以手动获取这些数据</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">eagle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUserEnv</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="数据上报" tabindex="-1">数据上报 <a class="header-anchor" href="#数据上报" aria-label="Permalink to &quot;数据上报&quot;">​</a></h2><h3 id="上报方式" tabindex="-1">上报方式 <a class="header-anchor" href="#上报方式" aria-label="Permalink to &quot;上报方式&quot;">​</a></h3><p>目前的上报方式只有图片上报，即动态地创建图片元素，然后数据作为<a href="/eagle-tracker/guide/use/options#main-主要配置">dsn</a>的URL参数附加在图片的src属性中，相当于发送一次GET请求，它有如下好处</p><ul><li>跨域支持，图片上报是一种跨域的数据上报方式。由于浏览器的同源策略限制，普通的AJAX请求无法跨域发送数据到其他域名。</li><li>无需服务器端支持，图片上报不需要服务器端的特殊支持，因为它只是通过URL参数传递数据，服务器端只需要解析URL即可获取数据。</li><li>减小心智负担，无需处理请求失败的情况</li></ul><h3 id="上报时机" tabindex="-1">上报时机 <a class="header-anchor" href="#上报时机" aria-label="Permalink to &quot;上报时机&quot;">​</a></h3><p>上报时机分为 立即上报 和页面隐藏时上报</p><h4 id="立即上报" tabindex="-1">立即上报 <a class="header-anchor" href="#立即上报" aria-label="Permalink to &quot;立即上报&quot;">​</a></h4><p>应用内发生错误是一般无特殊说明都采取立即上报。</p><h4 id="页面卸载时上报" tabindex="-1">页面卸载时上报 <a class="header-anchor" href="#页面卸载时上报" aria-label="Permalink to &quot;页面卸载时上报&quot;">​</a></h4><p>页面卸载可以分为以下三种情况</p><ul><li>页面可见时，用户关闭 Tab 页或浏览器窗口</li><li>页面可见时，用户在当前窗口前往另一个页面</li><li>页面不可见时，用户或系统关闭浏览器窗口</li></ul><p>这三种情况 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event" target="_blank" rel="noreferrer">visibilitychange</a> 都会触发。<code>pagehide</code>，<code>beforeunload</code>，<code>unload</code> 事件在移动端可能不会触发，就关闭页面了，因为移动端可以直接 将浏览器进程切入后台，然后直接杀死进程。相比之下，<code>visibilitychange</code>事件更可靠。</p><p>另外，如果指定了 <code>beforeunload</code>，<code>unload</code> 事件会阻止浏览器将页面加入<a href="https://web.dev/bfcache/" target="_blank" rel="noreferrer">bfcache</a>中</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onHidden </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OnHiddenCallback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onHiddenOrPageHide</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pagehide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibilityState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hidden</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">cb</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">visibilitychange</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onHiddenOrPageHide</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 有些浏览器不支持visibilitychange</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pagehide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onHiddenOrPageHide</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>防止有些浏览器不支持 <code>visibilitychange</code> 事件，需要<code>pagehide</code>事件兜底。</p><h3 id="数据处理" tabindex="-1">数据处理 <a class="header-anchor" href="#数据处理" aria-label="Permalink to &quot;数据处理&quot;">​</a></h3><p>最终发送的数据经过<code>JSON.stringify</code>序列化之后，会再使用<code>encodeURIComponent</code>对字符串中的特殊字符进行转义，这样做的目的是 避免上报的数据破坏URI的结构和含义，能够正确地被传输。</p>`,31),o=[p];function t(r,c,i,F,D,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{C as __pageData,u as default};
