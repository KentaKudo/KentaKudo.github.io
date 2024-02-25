import{j as e}from"./jsx-runtime-BlSqMCxk.js";import{c as j}from"./utils-7bPorvLa.js";const Q=({at:s,className:n})=>{const p=new Date(s).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"});return e.jsx("time",{className:j("italic text-slate-400",n),children:p})},u={title:"シェーダーについて (1)",description:null,language:"ja/JP",tags:["GPU","シェーダー"],image:{src:"trude-jonsson-stangel-3o5Z-vjvANY-unsplash.jpg",alt:"Shadow on a chair",credit:'Photo by <a href="https://unsplash.com/@trude_jonsson_stangel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Trude Jonsson Stangel</a> on <a href="https://unsplash.com/s/photos/shade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2023-07-26"};function t(s){const n={hr:"hr",p:"p",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"WebGL について調べていく中で、シェーダーというのが出てくる。"}),`
`,e.jsx(n.p,{children:"チュートリアルなどでは「シェーダーとは陰影処理をするプログラムである」などと説明はそこそこに、「ではシェーダーを書いてみましょう」となるのだが、シェーダーの理解が覚束ないためサンプルのプログラムが何をしているのかいまいちよく掴めない、ということがよくあった。"}),`
`,e.jsx(n.p,{children:"シェーダーを理解する上で非常に役に立ったのが、その全体像を把握することだった。"}),`
`,e.jsx(n.p,{children:"そもそもやりたいことというのは、手元に 3D のデータがあり、これを 2D である画面への描画、つまりピクセルごとの色情報の列に変換することだ。ちなみに入力である 3D データがどこからくるかというと、Blender などのソフトを使ってモデリングという作業を行うわけだが、そういったことを含めて 3DCG という技術全体が成り立っている。"}),`
`,e.jsx(n.p,{children:"話を戻して描画に関して、この 3D から 2D への変換を一般的にレンダリングと呼ぶ。さらにこのレンダリングはパイプライン処理、つまりタスク全体をより小さいサブタスクに分けた上でバケツリレー形式で処理されるため、レンダリングパイプラインまたはグラフィックスパイプラインと呼ばれる。"}),`
`,e.jsxs(n.p,{children:["シェーダーはこのレンダリングパイプラインの中で陰影をつける役割 (に今は限られず、様々な処理を行う) を担うのだが、ポイントは",e.jsx(n.strong,{children:"プログラム可能である"}),"というところだ。"]}),`
`,e.jsx(n.p,{children:"元々レンダリング処理は全て CPU 上で行なわれていたが、専用ハードウェアを用意することで高速化が図られた、というのが GPU の始まりである。"}),`
`,`
`,e.jsx("aside",{children:e.jsx(n.p,{children:"時とともにGPUが担当する処理が増え、処理内容も複雑化、さらには機械学習を中心にレンダリング以外の用途への転用と発展し、年を増すごとにGPUの重要度が大きくなっている。今年 5 月には GPU の老舗、NVIDIAの時価総額が1兆円を突破するなど、非常にホットな領域である。"})}),`
`,e.jsx(n.p,{children:"こうして登場した初期の GPU は機能が全て固定されて提供されていた。そのため新しい処理を実装したい場合にはハードウェアのリリースを待たなければいけなかった。"}),`
`,e.jsx(n.p,{children:"3D 技術が急速に発展し、要求も多様化するのに伴い、ハードウェアアップデートを待たずに機能を実装したいというニーズが生まれた。GPU ベンダーはハードウェアの一部をプログラム可能にすることでこの要求に応えた。"}),`
`,e.jsx(n.p,{children:"このプログラムこそが、「陰影処理をするプログラム」であるシェーダーである。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"先にも書いたが、近年シェーダーの守備範囲は陰影処理に限られなくなっている。"}),`
`,e.jsx(n.p,{children:"シェーダーが実際にレンダリングパイプラインの中でどういった処理を行なっているのかについて、次回見ていきたい。"}),`
`,e.jsx(n.p,{children:"では、また。"})]})}function g(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}const f={title:"WebGLについて",description:`アニメーションがかっこいいサイトに WebGL という技術が使われているらしいということは小耳に挟んでおり、WebGL について気にはなってはいたものの、ちゃんと調べたことはまだなかった。
この度仕事で使う可能性が出てきたということで、少し調べてみたのでまとめてみた。`,language:"ja/JP",tags:["WebGL","GPU","JavaScript"],image:{src:"abhipsa-pal-ILra9AOaXOE-unsplash.jpg",alt:"A graphic of skull",credit:'Photo by <a href="https://unsplash.com/de/@ambiteaux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Abhipsa Pal</a> on <a href="https://unsplash.com/s/photos/animation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2023-06-18"};function i(s){const n={a:"a",h2:"h2",hr:"hr",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"webgl-とは",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#webgl-とは",children:e.jsx(n.span,{className:"icon icon-link"})}),"WebGL とは"]}),`
`,e.jsxs(n.p,{children:["WebGL は Web Graphics Library の略であり、その名の通りウェブアプリ、つまりは ",e.jsx(n.strong,{children:"JavaScript でグラフィック操作を行うためのライブラリ"}),"である。"]}),`
`,e.jsx(n.p,{children:`そもそもアプリから 2D/3D の描画をする際には OpenGL という C 言語のライブラリが存在し、広く使われている。
ネイティブなアプリであれば OpenGL を使えば良いのだが、当然ながらウェブ上のアプリからも綺麗なアニメーションを表示したいという要求が出てくる。`}),`
`,e.jsx(n.p,{children:"そこで 2006 年に Firefox ブラウザを開発する Mozilla がウェブ上で 3D 描画をするプロトタイプを発表。2009 年、そこに OpenGL の仕様を策定しているクロノスグループが参加しワーキンググループが発足、主要なブラウザベンダーである Apple や Google も参加したことにより標準化の動きが生まれた。"}),`
`,e.jsx(n.p,{children:`WebGL は OpenGL(より正確には組込みシステム用に定義されたサブセットである OpenGL ES)をベースに定義されており、この仕様をもとに各ブラウザが機能を
提供している。`}),`
`,e.jsxs(n.p,{children:["2017 年にリリースされた WenGL 2.0 が最新の API となっており、2023 年 6 月現在モバイルを含む主要な各ブラウザでサポートされている。(",e.jsx(n.a,{href:"https://caniuse.com/webgl2",children:"https://caniuse.com/webgl2"}),")"]}),`
`,e.jsxs(n.h2,{id:"webgl-のメリット",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#webgl-のメリット",children:e.jsx(n.span,{className:"icon icon-link"})}),"WebGL のメリット"]}),`
`,e.jsx(n.p,{children:"ウェブ上で 2D/3D を描画する方法にはそれまで Flush Player や Unity Web Player といった技術が存在した。"}),`
`,e.jsx(n.p,{children:`これらの既存技術はブラウザへのプラグインという形で提供されるため、ユーザーのブラウザにプラグインがインストールされていないと動作しないという欠点がある。
セキュリティの観点からプラグインの導入が敬遠されていることもあり、せっかくかっこいいウェブサイトを作っても動作環境が整わない可能性があった。`}),`
`,e.jsxs(n.p,{children:["これに対し、WebGL は JavaScript の API であり、仕様策定のワーキンググループに主要なブラウザベンダーが参加していることもあり、",e.jsx(n.strong,{children:"多くのブラウザに標準でサポートされている"}),"。"]}),`
`,e.jsx(n.p,{children:"「GPU が OpenGL をサポートしていないといけない」という制限はあるものの、WebGL の登場により JavaScript さえ動けばほとんどのブラウザ環境で 2D/3D が好きなように描画できる状況が生まれた。"}),`
`,e.jsxs(n.h2,{id:"webgl-のその先",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#webgl-のその先",children:e.jsx(n.span,{className:"icon icon-link"})}),"WebGL のその先"]}),`
`,e.jsx(n.p,{children:`現在 WebGL を置き換える次世代のインターフェイスとして WebGPU が提案されている。
(2023 年 6 月現在デスクトップ版の Chrome のみが正式にサポートしている。)`}),`
`,e.jsxs(n.p,{children:["そもそも OpenGL は GPU を利用することで描画演算を高速に処理することを実現しているが、近年のハードウェア性能の向上や機械学習の盛り上がりを背景に、この GPU を取り巻く環境が大きく変化し、1990 年代前半に登場した",e.jsx(n.strong,{children:"OpenGL では満足いかないケースが増えてきた"}),"。"]}),`
`,e.jsx(n.p,{children:"より具体的には、OpenGL は抽象度が高い API のため、GPU 利用を細かくチューニングすることが難しい。加えて、機械学習を中心に、GPU をグラフィックスだけでなく、一般的な計算リソースとして利用したいというニーズが高まりつつある(GPGPU: General Purpose GPU と呼ばれる)。"}),`
`,e.jsx(n.p,{children:"そこで GPU をより効率的に利用したい各社がより低レベルの API を発表する流れが生まれた。GPU チップメーカーの NVIDIA から CUDA(CUDA はコンピューティングプラットフォーム全体の名称であり、API はその一部)が、Apple からは Metal、そしてクロノスグループからも Vulcan という仕様がそれぞれ発表されている。"}),`
`,e.jsx(n.p,{children:"これらの動きを背景に、WebGL も次世代 API へと置き換える流れが生まれ、WebGPU という仕様が登場。標準化の動きが進んでいる。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"WebGL とは何なのか、WebGL が生まれた背景、そしてこれからの動きについて追ってきた。"}),`
`,e.jsx(n.p,{children:"このほかのトピックに Three.js といった WebGL をよりラクに利用するためのライブラリや、シェーダーを記述するための言語である GLSL などがあり、次回以降この辺りにも踏み込んでいけたらと思っている。"}),`
`,e.jsx(n.p,{children:"それではまた。"}),`
`,e.jsxs(n.h2,{id:"references",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.span,{className:"icon icon-link"})}),"References"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ja.wikipedia.org/wiki/WebGL",children:"Wikipedia — WebGL"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ics.media/entry/230426/",children:"WebGPU がついに利用可能に WebGL 以上の高速な描画と、計算処理への可能性"})}),`
`]})]})}function y(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}const b={title:"CPU Experiment at the University of Tokyo",description:`"CPU Experiment" at the University of Tokyo (UT) CS undergrad course is one of the most famous (either in a good way or bad way) programmes among those who are concerned.

Here, I want to introduce what the programme is, and what kind of exciting stuff are going on there.`,language:"en/GB",tags:["computer science","system programming"],image:{src:"hardware.jpg",alt:"electronics hardware",credit:'Photo by <a href="https://unsplash.com/@jorgedevs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Ramirez</a> on <a href="https://unsplash.com/s/photos/computer-science?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2021-12-22"};function r(s){const n={a:"a",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"I note in passing that this is NOT based on my personal experience because I was not a CS student at UT. So apologies if I'm not very accurate in some details but I hope I don't miss the big picture."}),`
`,e.jsxs(n.h2,{id:"whats-cpu-experiment",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-cpu-experiment",children:e.jsx(n.span,{className:"icon icon-link"})}),"What's CPU Experiment"]}),`
`,e.jsx(n.p,{children:"The programme is held in the autumn-winter term in the third year. CS undergrads are divided into a group of 3–5 people, and they'll be given a credit if they can successfully run the ray-tracing app written in MinCaml (a subset of OCaml), which is handed out at the introduction, at the end term presentation."}),`
`,e.jsx(n.p,{children:"The rules and conditions have changed over time but basically what they need to do are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"define ISA (original or based on PowerPC, MIPS, RISC-V, etc.)"}),`
`,e.jsxs(n.li,{children:["build a CPU core on a provided FPGA (",e.jsx(n.a,{href:"https://www.xilinx.com/products/boards-and-kits/kcu105.html",children:"KCU105"}),")"]}),`
`,e.jsx(n.li,{children:"write an assembler"}),`
`,e.jsxs(n.li,{children:["extend a ",e.jsx(n.a,{href:"https://github.com/esumii/min-caml",children:"MinCaml compiler"})," so it can compile the given ray-tracing app"]}),`
`,e.jsx(n.li,{children:"write a simulator to debug the compiler/assembler"}),`
`,e.jsx(n.li,{children:"compile & run the required ray-tracing app on the self-built CPU"}),`
`]}),`
`,e.jsx(n.p,{children:"Each team member is assigned to one of the four tasks: CPU (core), FPU, simulator, and compiler. Conventionally the assembler seems to be done by a member who is responsible for the simulator."}),`
`,e.jsx(n.p,{children:"What's cool about this on-the-job style programme I think is not only you can learn how to integrate the computer science knowledge you learned through the course, but also you need to finish the project in time collaborating with other team members."}),`
`,e.jsxs(n.h2,{id:"thats-not-the-end-of-the-story",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#thats-not-the-end-of-the-story",children:e.jsx(n.span,{className:"icon icon-link"})}),"That's not the end of the story"]}),`
`,e.jsx(n.p,{children:"This is where things get even more exciting."}),`
`,e.jsx(n.p,{children:"For most of them it's not very difficult to run the required ray-tracing app, and actually they succeed in running the app in less than 3months."}),`
`,e.jsx(n.p,{children:"How do they spend the rest of the term?"}),`
`,e.jsx(n.p,{children:"It's up to them how to use the time: Most of the teams try to optimise the system to amaze people by how fast they can run the app at the end term presentation."}),`
`,e.jsx(n.p,{children:"The optimisation ideas include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"design richer ISA"}),`
`,e.jsx(n.li,{children:"introduce pipelining"}),`
`,e.jsx(n.li,{children:"optimise compiler to reduce the number of instructions"}),`
`,e.jsx(n.li,{children:"and so on"}),`
`]}),`
`,e.jsx(n.p,{children:"The current record seems to be 5s, which was made in 2017(*), and generally speaking under 20s is considered to be brazing fast."}),`
`,e.jsx(n.p,{children:"(* The team realised multi-core CPU & the compiler that utilises it.)"}),`
`,e.jsx(n.p,{children:"However, some teams decide to venture into the wild adventure…"}),`
`,e.jsxs(n.h2,{id:"creative-crazy-ideas-they-try",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creative-crazy-ideas-they-try",children:e.jsx(n.span,{className:"icon icon-link"})}),"Creative (crazy) ideas they try"]}),`
`,e.jsx(n.p,{children:"As long as the ray-tracing app works, you can be credited for the course. There's nothing to prevent them from tackling their creative ideas such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"run an OS such as xv6, Linux, or even write an original OS"}),`
`,e.jsx(n.li,{children:"run the ray-tracing app on the OS"}),`
`,e.jsx(n.li,{children:"implement a single instruction that runs the ray-tracing"}),`
`,e.jsx(n.li,{children:"etc."}),`
`]}),`
`,e.jsx(n.p,{children:"There are lots of things involved to achieve these: To run an OS you'll need much richer ISA than just running the ray-tracing app. If you want to run the existing OS written in C on your original ISA, you'll need a C compiler that targets the ISA …and so on."}),`
`,e.jsx(n.p,{children:"Some of them were realised by their exhaustive effort, while the others are yet to come true. So exciting, aren't they?"}),`
`,e.jsxs(n.h2,{id:"why-am-i-writing-this",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-am-i-writing-this",children:e.jsx(n.span,{className:"icon icon-link"})}),"Why am I writing this?"]}),`
`,e.jsx(n.p,{children:"Some may wonder why I'm writing a post to introduce something I didn't do. Well, there are two reasons:"}),`
`,e.jsx(n.p,{children:"First of all, I think the programme is very cool and worth sharing. There are lots of blog posts written by students but most of them are in Japanese (see the next section), and only few resources are available in English for their cool stuff."}),`
`,e.jsx(n.p,{children:`And the second one, rather personal one, is that I'm interested in tracing this "CPU Experiment" as my personal project. I've been working as a software engineer for almost 7 years. Thankfully I could grow a lot in this space, yet I've been feeling I missed chances to learn computer science basics. I thought it's a great idea to follow what they do to fill this gap.`}),`
`,e.jsx(n.p,{children:"I hope I can give updates on my project soon:)"}),`
`,e.jsxs(n.h2,{id:"references",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.span,{className:"icon icon-link"})}),"References"]}),`
`,e.jsx(n.p,{children:"Even though most of them are written in Japanese, I'll leave some links for those who are interested so you can at least have a look at their code:)"}),`
`,e.jsx(n.p,{children:"2010"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://wata-orz.hatenadiary.org/entry/20100319/1268998396",children:"CPU 実験"})}),`
`]}),`
`,e.jsx(n.p,{children:"2015"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nullpo-head.hateblo.jp/entry/2015/03/24/205419",children:"CPU 実験で自作 CPU に UNIX ライク OS (xv6) を移植した話"})}),`
`,e.jsxs(n.li,{children:["[EN]",e.jsx(n.a,{href:"https://fuel.edby.coffee/posts/how-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler/",children:"how we ran a unix-like os (xv6) on our home-built cpu with our home-built c compiler"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This is basically the same article as the one above but in English."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://kw-udon.hatenablog.com/entry/2015/03/19/171921",children:"自作 CPU 向け C コンパイラをつくって OS 動かした話 (CPU 実験まとめ)"})}),`
`]}),`
`,e.jsx(n.p,{children:"2016"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://medium.com/eureka-engineering/%E6%9D%B1%E5%A4%A7%E7%90%86%E6%83%85%E5%90%8D%E7%89%A9%E3%81%AEcpu%E5%AE%9F%E9%A8%93%E3%81%A7%E6%AF%8E%E9%80%B1%E5%BE%B9%E5%A4%9C%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E6%A6%82%E8%A6%81%E7%B7%A8-6cb8c155cb64",children:"東大理情名物の CPU 実験で毎週徹夜したお話（概要編）"})}),`
`]}),`
`,e.jsx(n.p,{children:"2017"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://eguchishi.hatenablog.com/entry/2017/09/09/150229",children:"CPU 実験：マルチコアで並列実行するまで（コンパイラ係目線）"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sueki743.hatenablog.jp/entry/2017/03/30/151822",children:"CPU 実験 2016 年度 D 班コア係（CPU 実験でマルチコア）"})}),`
`]}),`
`,e.jsx(n.p,{children:"2018"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://travelingresearcher.com/entry/2018/02/27/172417",children:"東大の CPU 実験で自作コア上の自作 OS 上で自作シェルを動かした話"})}),`
`]}),`
`,e.jsx(n.p,{children:"2019"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://moraprogramming.hateblo.jp/entry/2019/03/17/165802",children:"RISC V に従う CPU の上で動作する OS を Rust で書く（CPU 実験余興）"})}),`
`]}),`
`,e.jsx(n.p,{children:"2020"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://diary.shift-js.info/building-a-riscv-cpu-for-linux/",children:"Linux が動作する RISC-V CPU を自作した (2019 年度 CPU 実験 余興)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://misteer.hatenablog.com/entry/cpuex",children:"CPU 実験が終わりました 〜コア係目線〜"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://okuraofvegetable.hatenablog.com/entry/2020/02/29/230201",children:"CPU 実験の振り返り (コンパイラ係目線)"})}),`
`]}),`
`,e.jsx(n.p,{children:"2021"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://note.com/tomo_stleq/n/ncc8a1ff8ba20",children:"CPU 実験振り返り(シミュレータ・FPU 係目線)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://cfkazu.hatenablog.com/entry/2020/12/05/000416",children:"ああ CPU 実験"})}),`
`]})]})}function w(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}const N={title:"DDIA 読書ノート 【第8章】",description:`第8章は分散ノード環境において、認識し、立ち向かわないといけない困難について。分散ノードの敵は誰か、という話。
そしてそれがどういった理由で発生するのかおよびそれを解決することがいかに困難であるかについての理解を深め、最後にそれにどう立ち向かえば良いかの方針が示されている。`,language:"ja/JP",tags:["ddia","distributed system"],image:{src:"jon-tyson-FlHdnPO6dlw-unsplash.jpg",alt:"many clocks",credit:'Photo by <a href="https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Tyson</a> on <a href="https://unsplash.com/photos/FlHdnPO6dlw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2023-09-20"};function a(s){const n={a:"a",h2:"h2",hr:"hr",li:"li",p:"p",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsxs("aside",{children:[e.jsxs("p",{children:[e.jsx("a",{href:"https://open.spotify.com/show/0J8LZwfrGB9BJLihy4Ldb1",children:"London Tech Talk"})," というポッドキャストを運営している ",e.jsx("a",{href:"https://twitter.com/tommyasai",children:"@tommyasai"})," さん・",e.jsx("a",{href:"https://twitter.com/kenwagatsuma",children:"@kenwagatsuma"})," さん主催で DDIA の輪読会が行われており、それに向けて DDIA を読んでいるのでその際のまとめです。今回は第 8 章。"]}),e.jsx("p",{children:"理解したこと、考えたことをそのまま書き落としていくので読み物としては読みづらいかと思いますがその点は悪しからず。"})]}),`
`,e.jsxs(n.h2,{id:"分散システムにおける困難",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#分散システムにおける困難",children:e.jsx(n.span,{className:"icon icon-link"})}),"分散システムにおける困難"]}),`
`,e.jsx(n.p,{children:"分散システム特有の困難としては二つ、不確定性と部分障害がある。そしてこれらが発生する理由としても二つ、ネットワークの不確かさとクロックの不確かさを起因としている。"}),`
`,e.jsx(n.p,{children:"これらを解決するのは非常に困難、あるいは経済性とのトレードオフ上諦めざるを得ないかのどちらかで、特殊な機能要件が求められる環境、例えば金融や航空宇宙システムなどを除いて基本的にはこれらが存在するものとして扱わなければならない。"}),`
`,e.jsxs(n.h2,{id:"不確かなネットワーク",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#不確かなネットワーク",children:e.jsx(n.span,{className:"icon icon-link"})}),"不確かなネットワーク"]}),`
`,e.jsx(n.p,{children:`ネットワークがいかに信頼性に欠けるものであるか、という点は普段異常系の設計をする際にお馴染みかと思う。
ここで知っておく必要があるのは`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"フォールトを検知する唯一確実な方法はタイムアウトしかない、ということ"}),`
`,e.jsx(n.li,{children:"そしてそのタイムアウトをどのように決めるかの絶対的な方法は存在しない、ということ"}),`
`]}),`
`,e.jsx(n.p,{children:"の二つである。"}),`
`,e.jsx(n.p,{children:"どこでフォールトが起こっているかを調べる方法をいくつか例に挙げており、どれも有効な手段ではあるが、究極的にはアプリケーションからの応答がないと処理が実行されたかどうか・成功したかどうかの判定はできないため、確実な方法としてはタイムアウトを待つ、という選択肢だけが残る。"}),`
`,e.jsx(n.p,{children:"そしてタイムアウトが発生する原因として処理の遅延や輻輳、キューイングの詰まりなどがあるが、いずれの場合も遅延がどのくらいになるかという上限は保証されておらず、レスポンスタイムの分布をもとに経験則的に設定する以外に方法はない。"}),`
`,e.jsx("aside",{children:e.jsx(n.p,{children:"実際には同期ネットワークというものを使うことでネットワークの遅延には上限を設けることが可能ではあるが、その方式はバースト性のあるトラフィックには非常に非効率なため、一般的な通信でその方式が選択されることはない。"})}),`
`,e.jsx(n.p,{children:"このようにネットワークに関する性質はとにかく都合の悪い要素が多いのだ。そしてそれはクロックの話題にも当てはまる。"}),`
`,e.jsxs(n.h2,{id:"不確かなクロック",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#不確かなクロック",children:e.jsx(n.span,{className:"icon icon-link"})}),"不確かなクロック"]}),`
`,e.jsx(n.p,{children:"クロックには時刻を計測するものとある時点からの増加分を数えていく二つの方法があり、単調増加のクロックの方が正確な時刻との同期を取る必要がない分信頼性が高いと言えるが、とはいえ正確に時刻を刻んでいく保証はない。"}),`
`,e.jsx(n.p,{children:"クロックに依存したくなる典型的な例としてイベントの順序づけがある。"}),`
`,e.jsx(n.p,{children:"ローカルなクロックに依存してしまうと悲惨で、あるノードは他のノードに対して未来にいるためいろんな悪いことが起こり得る。"}),`
`,e.jsx(n.p,{children:"これを解決するために、イベントの相対的な発生順序だけを意味する、論理クロックというものを導入できるが、この論理クロックを生成するコンポーネントがボトルネックになりがちである。"}),`
`,e.jsxs("aside",{children:[e.jsx("p",{children:e.jsx(n.p,{children:`Google Cloud Spannerはこの問題に対応するため、TrueTime
APIを通して、クロックの値の信頼区間を公開している。二つ時刻の信頼区間が重ならないようにすることで、時刻のクロックに依存しながら順序を担保している。`})}),e.jsx("p",{children:e.jsx(n.p,{children:"この信頼区間をできるだけ狭くするために、クロックを同期させることに最新の注意を払っている。"})})]}),`
`,e.jsx(n.p,{children:"クロックが信頼できないもう一つの話題としてプロセスの停止について述べている。ガベージコレクションが典型例だ。"}),`
`,e.jsx(n.p,{children:"車のエアバッグなど、プロセスの停止が致命的な事故につながる可能性のある環境ではプロセスの停止を予測可能なものにする仕組みがあることにはあるが、これもまたトレードオフの話で、OS から何から全てのソフトウェアで一貫してサポートされている必要があるため、その利用は組み込みなどの環境に限られる。"}),`
`,e.jsxs(n.h2,{id:"この困難にどう立ち向かうのか",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#この困難にどう立ち向かうのか",children:e.jsx(n.span,{className:"icon icon-link"})}),"この困難にどう立ち向かうのか"]}),`
`,e.jsx(n.p,{children:"章の最後にはこの困難に立ち向かう方法としてサイエンスな視点、つまりある点を仮定し、その仮定のもとである性質を満たし続けるアルゴリズムを導入する、という考え方を紹介する。"}),`
`,e.jsx(n.p,{children:"章の冒頭に述べているように、その仮定が成り立たなくなる事象というのはいつか発生する、発生するものとして捉えないといけないのだが、その境界線を認識することで、具体的にどういうケースでその性質が満たされず、そしてどのように対応するのかということを事前に決めておける、非常に有用な考え方だ。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"最後に、プログラミングとは全く関係のない感想だが、分散システムと人と人とのコミュニケーションは非常に似ているなと感じた。"}),`
`,e.jsx(n.p,{children:"相手が何を考えているかを把握する絶対的な手段は存在せず、コミュニケーションに頼らざるを得ない一方で、コミュニケーションはとても不確実性だ。"}),`
`,e.jsx(n.p,{children:"こうした不確かさを抱えつつも、全体としてはなんとか協調していく必要がある、というのは分散的なものの宿命なのかもしれない。"}),`
`,e.jsxs(n.h2,{id:"references",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.span,{className:"icon icon-link"})}),"References"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://note.com/ruiu/n/n0349ed9f0d8f",children:"システム障害なしにうるう秒を乗り切る技術の発達について"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"クロックに依存する危険性と leap smearing について触れたエッセイ。読み物として面白い。"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://qiita.com/everpeace/items/632831371da5ff215995",children:"最近よく聞く Quorum は過半数(多数決)よりも一般的でパワフルな概念だった"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Quoram とは何かについて解説した記事。単純に多数決と言えない奥深さを知れる。"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://forum.equinix.com/assets/images/files/Cinnober_on_GC_pause_free_Java_applications.pdf",children:`Predictable low
latency`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Java システムの GC のレイテンシに対応するため、ノードを primary-secondary 構成にして、先にレスポンスを返した方の結果を採用する仕組み。どれだけ効果があるのかは不明だが、興味深い。"}),`
`]}),`
`]}),`
`]})]})}function A(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}const k={title:"DDIA 読書ノート 【第10章】",description:"第10章はバッチ処理について、MapReduceを中心に展開していく。",language:"ja/JP",tags:["ddia","distributed system","mapreduce"],image:{src:"jonathan-farber-6jpdeeA2GBU-unsplash.jpg",alt:"batch of doughnuts",credit:'Photo by <a href="https://unsplash.com/@farber?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Farber</a> on <a href="https://unsplash.com/photos/6jpdeeA2GBU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'},published:"2023-10-17"};function l(s){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",span:"span",strong:"strong",sup:"sup",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"第 9 章が難しかったこともあり、読書ノートがまだ書ききれてないんですが、なんとか完成させようとは思っているのでとりあえず 10 章の話をどうぞ。。"}),`
`,`
`,e.jsxs("aside",{children:[e.jsxs("p",{children:[e.jsx("a",{href:"https://open.spotify.com/show/0J8LZwfrGB9BJLihy4Ldb1",children:"London Tech Talk"}),"というポッドキャストを運営している",e.jsx("a",{href:"https://twitter.com/tommyasai",children:"@tommyasai"})," さん・",e.jsx("a",{href:"https://twitter.com/kenwagatsuma",children:"@kenwagatsuma"})," さん主催で DDIA の輪読会が行われており、それに向けて DDIA を読んでいるのでその際のまとめです。今回は第 10 章。"]}),e.jsx("p",{children:"理解したこと、考えたことをそのまま書き落としていくので読み物としては読みづらいかと思いますがその点は悪しからず。"})]}),`
`,e.jsxs(n.h2,{id:"contents",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contents",children:e.jsx(n.span,{className:"icon icon-link"})}),"Contents"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E7%AC%AC-10-%E7%AB%A0-%E3%83%90%E3%83%83%E3%83%81%E5%87%A6%E7%90%86",children:"第 10 章 バッチ処理"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#unix-%E5%86%8D%E8%A8%AA",children:"Unix 再訪"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mapreduce-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",children:"MapReduce について"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mapreduce-%E3%81%8B%E3%82%89%E6%99%82%E3%82%92%E7%B5%8C%E3%81%A6",children:"MapReduce から時を経て"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%AC%A1%E7%AB%A0%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%A0%E5%87%A6%E7%90%86",children:"次章、ストリーム処理"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"第-10-章-バッチ処理",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#第-10-章-バッチ処理",children:e.jsx(n.span,{className:"icon icon-link"})}),"第 10 章 バッチ処理"]}),`
`,e.jsx(n.p,{children:"第 10 章からはチャプターが変わり、チャプター 3。このチャプターではそれぞれに特性の異なるシステムを組み合わせてより大きなシステムを構築する方法が紹介されている。"}),`
`,e.jsx(n.p,{children:"システムは単体で全てのニーズに応えることが難しい and/or 非効率なため、どう組み合わせるか、といういうのは見落とされがちだが重要なトピックになってくる。"}),`
`,e.jsx(n.p,{children:"その中で第 10 章はバッチ処理について。MapReduce に関する話題を中心に展開されている。"}),`
`,e.jsxs(n.h2,{id:"unix-再訪",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unix-再訪",children:e.jsx(n.span,{className:"icon icon-link"})}),"Unix 再訪"]}),`
`,e.jsx(n.p,{children:"唐突に感じるところもあるがまず取り上げているのが Unix の哲学とそれに基づいた Unix ツール群、というのも MapReduce はこの Unix の概念や教訓と共通する部分が多いため、馴染みのある Unix がまず最初に取り上げられている。"}),`
`,e.jsxs(n.p,{children:["特に重要なのが Unix がファイルを介した、",e.jsx(n.strong,{children:"一様なインターフェイスを持つ"}),"という点で、MapReduce も同様に分散ファイルシステムをインターフェイスとして、それぞれの Job がお互いを意識することなく入出力をやりとりできるようにデザインされている。"]}),`
`,e.jsx(n.p,{children:"Unix の考え方は様々なところで引用されており、馴染みが深いが、ここにも顔を出すその影響の大きさに改めて驚いた。"}),`
`,e.jsx(n.p,{children:"この Unix の特徴を踏まえた上で MapReduce の詳細説明に入っていく。"}),`
`,e.jsxs(n.h2,{id:"mapreduce-について",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mapreduce-について",children:e.jsx(n.span,{className:"icon icon-link"})}),"MapReduce について"]}),`
`,e.jsx(n.p,{children:"MapReduce にはその名にあるように、mapper と呼ばれるステップと reducer と呼ばれるステップがある。"}),`
`,e.jsx(n.p,{children:"mapper では先に触れたように分散ファイルシステム上のファイルを通して受け取る入力のデータを key-value のペアにマッピングする。この key-value のペアはソートされたのち key ごとに同一の reducer に送られる。"}),`
`,e.jsxs(n.p,{children:["reducer では mapper から送られてくる key-value を元に好きなことをすればよく",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"、例えば検索エンジンのインデックス構築であったり、出力をそのまま key-value ストアのデータとして利用するといった用法があるが、最もよく使われる使い道はなんといっても別の Job のインプットにする、ということだ。"]}),`
`,e.jsx(n.p,{children:"先にも触れたように MapReduce は分散ファイルシステムという一様なインターフェイスを持つ。reducer の出力は入力として受け取ったのと同様に分散ファイルシステムに書き出されるため、次の Job はその入力が前の Job の出力である、ということを知ることなく実行できる。これはまさに Unix ツールがファイルを介して連携している点と対応している。"}),`
`,e.jsx(n.p,{children:"このように、ユーザーは mapper と reducer で何をするかだけを考えればよく、I/O や分散ネットワークについて頭を悩ませることなく Job と Job を繋ぎ合わせて大量のデータを効率よく処理することができるのが MapReduce の特徴である。"}),`
`,e.jsx(n.p,{children:"MapReduce は大量のデータに対するバッチ計算処理のフレームワークを提供したわけだが、そのことにより、収集したデータはひとまずどこかに保存してしまい、それを処理するのは別のタスクとして切り出す、というアプローチが広まった。これによりデータの収集よりもデータの解釈に重きが重要視されるきっかけになったり、生のデータの方が加工されたデータよりも有用だ、という考え方(sushi principle、寿司原則と呼ばれる)に繋がった。"}),`
`,e.jsxs(n.h2,{id:"mapreduce-から時を経て",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mapreduce-から時を経て",children:e.jsx(n.span,{className:"icon icon-link"})}),"MapReduce から時を経て"]}),`
`,e.jsx(n.p,{children:"と、このように MapReduce はデータ処理に対するアプローチを変える画期的なアイデアだったわけだが、論文が発表されたのは 2004 年。それから月日が経ち、MapReduce のある意味シンプルすぎる考え方から発展させて、より最適化が図られた手法が次々と開発されており、今日では MapReduce をそのまま利用する、ということは少なくなっている。"}),`
`,e.jsx(n.p,{children:"具体的には、MapReduce は Job の都度ファイルへの書き出しが行われるため、読み書きのオーバーヘッドが発生する。Apache Spark や Apache Tez では mapper の出力を別の mapper に繋げたり、reducer の出力を直接次の mapper に繋げたりすることで、DAG(Direct Acyclic Graph: 有向非巡回グラフ)を構築、全体を一つの Job とすることでファイル書き出しのオーバーヘッドを減らす工夫がされている。"}),`
`,e.jsx(n.p,{children:"この他にも中間層の不要なソーティングを無くしたり、耐障害性を高めるなど MapReduce を元により最適なバッチ処理のプラットフォームが実現されている。"}),`
`,e.jsxs(n.h2,{id:"次章ストリーム処理",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#次章ストリーム処理",children:e.jsx(n.span,{className:"icon icon-link"})}),"次章、ストリーム処理"]}),`
`,e.jsx(n.p,{children:"このように MapReduce を通して分散バッチ処理について紹介されてきたが、次章のトピックはストリーム処理となる。両者の１番の違いは処理するデータのサイズが事前にわかるかどうか、という点だ。"}),`
`,e.jsx(n.p,{children:"今回も学びが多かったので、次章もとても楽しみ。"}),`
`,e.jsx(n.p,{children:"この章に限らず DDIA の本それ自体に対してもそう言えるのだけど、これまでキャリアがかなり計算・ロジック(あるいはオンラインシステムとも言えるかも知れない)の方に偏っているので、データの方の知識・経験も増やしていきたいと思っている。"}),`
`,e.jsx(n.p,{children:"もしこのあたりのトピックに関しておすすめの本やリソースなどがあれば(Hadoop などの個別トピックでも全然いいので)紹介してほしいです！"}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.span,{className:"icon icon-link"})}),"Footnotes"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:["といってもそれは冪等な操作に限る。Job が失敗した際、失敗した計算のみを自動で再実行することで耐障害性を高めているため、実行する度に結果が変わる、というのでは困ってしまう。 ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function v(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const I={title:"Does integer division overflow?",description:"In this short post, I'm going to introduce integer overflow and small fun fact that causes overflow in seemingly impossible situation.",language:"en/GB",tags:["computerscience","systemprogramming","integeroverflow"],image:{src:"overflow.jpg",alt:"Spilled coffee",credit:'Photo by <a href="https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/spill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2022-01-25"};function c(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"whats-integer-overflow",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-integer-overflow",children:e.jsx(n.span,{className:"icon icon-link"})}),"What's integer overflow?"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In computer programming, an integer overflow occurs when an arithmetic operation attempts to create a numeric value that is outside of the range that can be represented with a given number of digits – either higher than the maximum or lower than the minimum representable value. — ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Integer_overflow",children:"Wikipedia — Integer overflow"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["As you may know, addition of two integer numbers can overflow. For example addition of two ",e.jsx(n.code,{children:"int8"})," number 127 and 1 overflows, and doesn't return mathematically correct answer."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-go",children:[e.jsx(n.span,{className:"hljs-keyword",children:"package"}),` main

`,e.jsx(n.span,{className:"hljs-keyword",children:"import"})," ",e.jsx(n.span,{className:"hljs-string",children:'"fmt"'}),`

`,e.jsxs(n.span,{className:"hljs-function",children:[e.jsx(n.span,{className:"hljs-keyword",children:"func"})," ",e.jsx(n.span,{className:"hljs-title",children:"main"}),e.jsx(n.span,{className:"hljs-params",children:"()"})]}),` {
        `,e.jsx(n.span,{className:"hljs-keyword",children:"var"})," i, j ",e.jsx(n.span,{className:"hljs-type",children:"int8"})," = ",e.jsx(n.span,{className:"hljs-number",children:"127"}),", ",e.jsx(n.span,{className:"hljs-number",children:"1"}),`
        fmt.Printf(`,e.jsx(n.span,{className:"hljs-string",children:'"127 + 1 = %d"'}),`, i+j)
}
`]})}),`
`,e.jsxs(n.p,{children:["This Go programme outputs ",e.jsx(n.code,{children:"127 + 1 = -128"}),". For subtraction, if you think about ",e.jsx(n.code,{children:"127 - (-1)"}),", this is going to overflow as this is the equivalent expression to the addition we just saw."]}),`
`,e.jsx(n.p,{children:"Likewise, multiplication of two integer numbers can overflow."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-go",children:[e.jsx(n.span,{className:"hljs-keyword",children:"package"}),` main

`,e.jsx(n.span,{className:"hljs-keyword",children:"import"})," ",e.jsx(n.span,{className:"hljs-string",children:'"fmt"'}),`

`,e.jsxs(n.span,{className:"hljs-function",children:[e.jsx(n.span,{className:"hljs-keyword",children:"func"})," ",e.jsx(n.span,{className:"hljs-title",children:"main"}),e.jsx(n.span,{className:"hljs-params",children:"()"})]}),` {
        `,e.jsx(n.span,{className:"hljs-keyword",children:"var"})," i, j ",e.jsx(n.span,{className:"hljs-type",children:"int8"})," = ",e.jsx(n.span,{className:"hljs-number",children:"64"}),", ",e.jsx(n.span,{className:"hljs-number",children:"2"}),`
        fmt.Printf(`,e.jsx(n.span,{className:"hljs-string",children:'"64 * 2 = %d"'}),`, i*j)
}
`]})}),`
`,e.jsxs(n.p,{children:["This outputs ",e.jsx(n.code,{children:"64 * 2 = -128"}),"."]}),`
`,e.jsxs(n.p,{children:["The reason is because 127 is the biggest number ",e.jsx(n.code,{children:"int8"})," can represent and any calculation resulting in bigger number than this overflows returning unexpected result."]}),`
`,e.jsx(n.p,{children:"Here is a question: Can division of two integer numbers ever overflow? If yes, which combination of two integers make it happen?"}),`
`,e.jsxs(n.h2,{id:"integer-division-overflow",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integer-division-overflow",children:e.jsx(n.span,{className:"icon icon-link"})}),"Integer division overflow"]}),`
`,e.jsxs(n.p,{children:["From mathematical point of view, if the divisor is either bigger than or equal to 1, or smaller than or equal to -1, the absolute value of the quotient is never going to be bigger than that of the dividend, and for any ",e.jsx(n.code,{children:"int8"})," number this condition is satisfied. So it doesn't seem possible to make overflow happen with two ",e.jsx(n.code,{children:"int8"})," numbers."]}),`
`,e.jsx(n.p,{children:"…However, yes it is possible, as you may have guessed."}),`
`,e.jsx(n.p,{children:"What do you think is the output of this Go programme?"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-go",children:[e.jsx(n.span,{className:"hljs-keyword",children:"package"}),` main

`,e.jsx(n.span,{className:"hljs-keyword",children:"import"})," ",e.jsx(n.span,{className:"hljs-string",children:'"fmt"'}),`

`,e.jsxs(n.span,{className:"hljs-function",children:[e.jsx(n.span,{className:"hljs-keyword",children:"func"})," ",e.jsx(n.span,{className:"hljs-title",children:"main"}),e.jsx(n.span,{className:"hljs-params",children:"()"})]}),` {
        `,e.jsx(n.span,{className:"hljs-keyword",children:"var"})," i, j ",e.jsx(n.span,{className:"hljs-type",children:"int8"})," = ",e.jsx(n.span,{className:"hljs-number",children:"-128"}),", ",e.jsx(n.span,{className:"hljs-number",children:"-1"}),`
        fmt.Printf(`,e.jsx(n.span,{className:"hljs-string",children:'"-128 / -1 = %d"'}),`, i/j)
}
`]})}),`
`,e.jsxs(n.p,{children:["Mathematically correct answer is ",e.jsx(n.code,{children:"128"}),"…but wait, ",e.jsxs(n.strong,{children:["wasn't the biggest number ",e.jsx(n.code,{children:"int8"})," can represent 127??"]})]}),`
`,e.jsxs(n.p,{children:["That means this calculation overflows and the output is ",e.jsx(n.code,{children:"-128 / -1 = -128"}),"."]}),`
`,e.jsxs(n.p,{children:["The reason why this happens is while ",e.jsx(n.code,{children:"int8"})," can represent ",e.jsx(n.code,{children:"2^8 = 256"})," different numbers, 0 has to be included, which means odd number ",e.jsx(n.code,{children:"255"})," is left to represent both positive and negative numbers. Most of the computing systems adopt a technique called ",e.jsx(n.em,{children:"two's complement"})," to represent signed numbers",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," and with that technique ",e.jsx(n.code,{children:"int8"})," is going to have ",e.jsx(n.strong,{children:"127 positive numbers and 128 negative numbers"}),"."]}),`
`,e.jsx(n.p,{children:"As a result by dividing the biggest negative number by -1, we can cause overflow in integer division."}),`
`,e.jsx(n.p,{children:`I'd like to know more of this kind of "fun facts", so please share if you know. In the next post I'd like to talk about what two's complement is, and why it is so widely used in the computing systems.`}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.span,{className:"icon icon-link"})}),"Footnotes"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:["Signed numbers: Numbers that consist of both positive and negative numbers ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function T(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}const D={title:"NFT — 可能性と問題点",description:`NFTの話題が連日テックニュース界隈を賑わせています。きっかけはデジタルアート作品のNFTに$69mの値段がついたことです。作品は Beepleというアーティストによるもので、取引はNFTを扱うオークションサイトのChristie'sで行われました。その後もTwitterの創業者であるJack Dorseyによる、Twitter初のツイートに$3mの値段がつくなど、話題がつきません。
NFTはデジタル作品を手がけるアーティストを支援する強力なツールとなる可能性がある一方でいくつかの問題も抱えています。ここではNFTのもつ可能性と問題点についてまとめます。`,language:"ja/JP",tags:["Blockchain","Cryptocurrency","Ethereum","NFT","Bitcoin","ブロックチェーン","仮想通貨","イーサリアム","ビットコイン"],image:{src:"blockchain.jpg",alt:"blockchain",credit:'Photo by <a href="https://unsplash.com/@hiteshchoudhary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hitesh Choudhary</a> on <a href="https://unsplash.com/s/photos/blockchain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2021-04-15"};function h(s){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"まずはじめに NFT とはなにか簡単に説明します。"}),`
`,e.jsxs(n.h2,{id:"nft-とは",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nft-とは",children:e.jsx(n.span,{className:"icon icon-link"})}),"NFT とは"]}),`
`,e.jsx(n.p,{children:"NFT とは Non-Fungible Token の略で、ブロックチェーンを応用した技術のひとつです。日本語では非代替性トークンと訳されますが、従来のブロックチェーン技術との違いはまさにその非代替性にあります。"}),`
`,e.jsx(n.p,{children:"ブロックチェーンは基本的にはデータベースです。ビットコインのような仮想通貨を例にとると、そのブロックチェーン上には誰と誰との間でいくらの移動があったかという取引情報が保存されています。現実世界の通貨においてあなたが持つ 100 円玉と僕が持つ 100 円玉の区別をつける必要がないのと同様に、ビットコインであってもそれぞれのアセットの区別をつける必要はありません。これを代替可能(=fungible)と呼びます。"}),`
`,e.jsx(n.p,{children:"その一方で世の中には代替不可能なものも存在します。一例としてアート作品を想像してみてください。モナリザのコピーは世の中に多数存在しますが、オリジナルはルーブル美術館にある一つだけです。あなたの持つモナリザのコピーをルーブル美術館のオリジナルと交換することはできません。これを代替不可能(=non-fungible)であると言います。NFT を使ったブロックチェーン上にはそれぞれのアセットを表すユニークな ID とその所有者のマッピングが保存されており、そのブロックチェーンを見ればある作品を所有しているのが誰なのか知ることができます。また、仮想通貨と同様にその所有権を移動させることも可能です。"}),`
`,e.jsx(n.p,{children:"アート作品がしばしばオークションを通して売りに出されるのと同様に、NFT でもオークションを通して所有権が売買されます。それこそが今 NFT 界隈で起こっていることです。ただし違いはそこで売買されているのがモナリザのような絵画ではなく、画像や映像といったデジタルデータだということです。"}),`
`,e.jsxs(n.h2,{id:"なぜ-nft-が盛り上がっているか",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#なぜ-nft-が盛り上がっているか",children:e.jsx(n.span,{className:"icon icon-link"})}),"なぜ NFT が盛り上がっているか"]}),`
`,e.jsx(n.p,{children:"デジタルなデータが物理的に存在するモノと圧倒的に異なる点は、オリジナルをコストゼロで簡単にコピーできることです。cmd+c を押すだけで本物と全く同じものを無数に作り出すことができます。それゆえ、これまでデジタルデータは実物のように「所有する」ということができませんでした。"}),`
`,e.jsx(n.p,{children:"そこに出現したのが NFT です。"}),`
`,e.jsx(n.p,{children:'さきほど説明したように、NFT を使うことによりブロックチェーン上に"誰が何を所有するか"の情報を書き込むことができ、一度書き込まれた内容を勝手に書き換えることはほぼ不可能です。NFT によりデジタルデータを実物のアート作品と同様に、コレクションとしてあるいは投資対象として「所有する」ということが可能になった、というのが NFT がこれだけ盛り上がっている大きな理由です。'}),`
`,e.jsx(n.p,{children:"このことは NFT がデジタル作品を手がけるアーティストを支援する強力なツールとなる可能性を示しています。これまで著作権という保護はありながらも、無断でコピーされたものから生み出された利益がその作成者に還元されることはありませんでした。残念ながら NFT はその問題自体に解決策を与えてくれるものではありません。しかし「NFT を通して所有権を売る」という、アーティストが収入を得る新たな手段を生み出しました。加えて多くの NFT プラットフォームでは売買のたびに出品者に手数料が入る仕組みを導入しており、売買が行われる限り継続的に収入を得ることができるという実物の取引にはないメリットもあります。"}),`
`,e.jsx(n.p,{children:"ここまでをみるとデジタルな創作物に正しい評価が与えられるすばらしい発明、と考えられます。しかし実態は少し異なっているようです。"}),`
`,e.jsxs(n.h2,{id:"アーティストがお金を稼ぐ手段が増えてハッピー",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#アーティストがお金を稼ぐ手段が増えてハッピー",children:e.jsx(n.span,{className:"icon icon-link"})}),"「アーティストがお金を稼ぐ手段」が増えてハッピー？"]}),`
`,e.jsx(n.p,{children:"一見すばらしい仕組みにみえる NFT ですが、問題もいくつか抱えています。"}),`
`,e.jsxs(n.h3,{id:"1-誰でも出品できるという欠陥",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-誰でも出品できるという欠陥",children:e.jsx(n.span,{className:"icon icon-link"})}),"1. 誰でも出品できるという欠陥"]}),`
`,e.jsxs(n.p,{children:["先述のとおり一度ブロックチェーンに書き込まれた内容は変更することができません。そのため正しい情報を書き込むことが大切です。デジタルデータを扱う NFT の場合は「クリエイター＝出品者」であることが求められますが、これを保証してくれるはずの認証システムの信頼性にはプラットフォームによってばらつきがあります。Rarible という NFT プラットフォーム上では、アーティストがある日起きたら自分の作品が勝手に出品され、売買さえも完了していたという事例",e.jsx(n.a,{href:"https://www.theverge.com/2021/3/20/22334527/nft-scams-artists-opensea-rarible-marble-cards-fraud-art",children:"3"}),"が実際に発生しています。また別の NFT プラットフォームである OpenSea は「爆発的に増加した出品リクエストに対応する」と言う名目で認証システムを一切無くしました",e.jsx(n.a,{href:"https://www.theverge.com/2021/3/20/22334527/nft-scams-artists-opensea-rarible-marble-cards-fraud-art",children:"3"}),"。あるいは盗作や二次創作物などの出品を防ぐ有効な手段もありません。"]}),`
`,e.jsx(n.p,{children:"クリエイターに新たな収入源を与える一方で、違法者やモラルを無視した人にも等しくその利便性が与えられては仕方がありません。"}),`
`,e.jsxs(n.h3,{id:"2-所有権というものの曖昧さ",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-所有権というものの曖昧さ",children:e.jsx(n.span,{className:"icon icon-link"})}),"2. 「所有権」というものの曖昧さ"]}),`
`,e.jsx(n.p,{children:"NFT における「所有権」とは実際に何を指すのでしょうか。ブロックチェーン上の各ブロックにはそれがどういった作品なのかという情報が書き込まれなければいけません。しかしブロックチェーンに書き込むことができるデータのサイズには限りがあり、作品をそのままデータとして記録することができません。そこで多くのプラットフォームでは作品への URL(正確には作品の URL を含むメタデータへのリンク)だけをブロック上に記録します。この作品へのリンクをもって所有権というものが成立しています。"}),`
`,e.jsx(n.p,{children:"しかし URL を使うことには大きな問題があります。もしそのリンクをもつサービスが停止してしまったらどうなるでしょうか。ブロックチェーンは残りますがそこに書き込まれたリンクは無効となり、もうアクセスすることはできません。何を所有しているかわからない「所有権」だけが残ることになります。所有権を URL を使って表現することには信頼性という点で疑問が残ります。"}),`
`,e.jsx(n.p,{children:"いくつかのプラットフォームではこの問題に対応するため、ブロックに IPFS のトークンを書き込む方式を採用しています。IPFS とは Inter-Planetary File System の略で、ファイルを分散ホスト上に展開し、peer-to-peer システムによりアクセス可能にする技術です。IPFS 上のファイルは URL のような場所を特定する情報は持たず、唯一性をもつトークンのみが与えられます。そしてそのファイルをホストするサーバーが一つでも存在する限りファイルが失われることはありません。"}),`
`,e.jsx(n.p,{children:"しかしこの IPFS にも問題があります。作品のメタデータは分散して保存されており失われることがありませんが、肝心の作品データが特定のサーバー上にしか存在しないということがあります。URL を使ったケースと同様に、そのサーバーを運用するサービスが停止した時点でそのデータにアクセスすることはできなくなります。"}),`
`,e.jsxs(n.p,{children:['NFT のコンセプトの発案者 Anil Dash はこのブロックチェーンにリンクだけを書き込む方式を"shortcut"としています',e.jsx(n.a,{href:"https://www.theatlantic.com/ideas/archive/2021/04/nfts-werent-supposed-end-like/618488/",children:"4"}),'。その"shortcut"はコンセプトの発案から 7 年たった今も使われ続けています。 NFT における「所有権」とは現状、いつなくなるかわからないとても脆弱なものです。']}),`
`,e.jsxs(n.h3,{id:"3-環境負荷という問題",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-環境負荷という問題",children:e.jsx(n.span,{className:"icon icon-link"})}),"3. 環境負荷という問題"]}),`
`,e.jsxs(n.p,{children:["ブロックチェーンに新たなブロックを書き込む際の環境負荷という点も見逃せません。多くの NFT プラットフォームではデジタルデータを Ethereum という、すでにあるブロックチェーン上に書き込んでいます。この Ethereum というブロックチェーンは、データの改ざんを防ぐためにプルーフオブワークという仕組みを採用しています。このプルーフオブワークにはマイニングという作業が必要になるのですが、このマイニングにはとてつもない量の計算が必要となります。大量の計算にはそれに見合うだけの電力を必要とします。Ethereum が年間に消費する電力量はベラルーシが年間に消費する電力量に匹敵するといわれています",e.jsx(n.a,{href:"https://digiconomist.net/ethereum-energy-consumption",children:"5"}),"。"]}),`
`,e.jsxs(n.p,{children:["これは Ethereum というブロックチェーンが抱える問題であるため、NFT 自身の問題とはいえません。しかし NFT が注目を浴びることで利用者が増え、Ethereum でのマイニング作業がより必要となることで結果的に環境に与える負荷が高まるのは間違いありません。事実今年に入ってから Ethereum の電力消費量は激増しています",e.jsx(n.a,{href:"https://digiconomist.net/ethereum-energy-consumption",children:"5"}),"。"]}),`
`,e.jsxs(n.h2,{id:"nft-が向かう先",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nft-が向かう先",children:e.jsx(n.span,{className:"icon icon-link"})}),"NFT が向かう先"]}),`
`,e.jsx(n.p,{children:"「NFT を通したアート作品が$69m で落札！」 といったセンセーショナルな話題に振り回されていますが、NFT は本来アーティストを保護し、支援するための仕組みだと Anil Dash は述べています。NFT という技術が大きな可能性を秘めているのは間違いありませんが、出現してから日が浅く、未だ多くの課題を抱えているのも事実です。一過性の話題として消費されるにとどまらず、技術が円熟し有益なものとして利用可能になるのを期待しています。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"参照",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#参照",children:e.jsx(n.span,{className:"icon icon-link"})}),"参照"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theverge.com/2021/3/11/22325054/beeple-christies-nft-sale-cost-everydays-69-million",children:"Beeple sold an NFT for $69 million"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theverge.com/2021/3/22/22344937/jack-dorsey-nft-sold-first-tweet-ethereum-cryptocurrency-twitter",children:"Jack Dorsey’s first tweet sold as an NFT for an oddly specific $2,915,835.47"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theverge.com/2021/3/15/22328203/nft-cryptoart-ethereum-blockchain-climate-change",children:"THE CLIMATE CONTROVERSY SWIRLING AROUND NFTS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theverge.com/2021/3/20/22334527/nft-scams-artists-opensea-rarible-marble-cards-fraud-art",children:"NFT MANIA IS HERE, AND SO ARE THE SCAMMERS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theverge.com/2021/3/25/22349242/nft-metadata-explained-art-crypto-urls-links-ipfs",children:"YOUR MILLION-DOLLAR NFT CAN BREAK TOMORROW IF YOU’RE NOT CAREFUL"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://thedefiant.io/do-you-really-own-your-nft-chances-are-you-dont/",children:"Do You Really* Own Your NFT? Chances Are, You Don’t"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.theatlantic.com/ideas/archive/2021/04/nfts-werent-supposed-end-like/618488/",children:"NFTs Weren’t Supposed to End Like This"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://opensea.io/blog/guides/non-fungible-tokens",children:"The Non-Fungible Token Bible: Everything you need to know about NFTs"})}),`
`]})]})}function C(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}const P={title:"量子コンピュータ開発の現状",description:`2019 年の 10 月に Google が世界で初めて量子超越性を達成したと発表して以来、量子コンピュータ開発競争はますます盛り上がりをみせています。量子コンピュータの実現を目指す各社ともに順調に開発を進めており、この先数年のあいだに量子超越性の証明が相次いで発表されることが予想されます。しかしその先の万能量子コンピュータの実現にはエラー耐性という課題を克服しなければならず、それには 10 年単位の研究・開発が必要となるでしょう。
ここでは2021年3月現在における各社の量子コンピュータ開発への取り組みをそれぞれ見ていきたいと思います。`,language:"ja/JP",tags:["量子コンピュータ","QuantumComputer","NISQ","Google","Microsoft","Amazon","IBM","DWave","IonQ","Honeywell"],image:{src:"electronic-chip.jpg",alt:"electronic chip",credit:'Photo by <a href="https://unsplash.com/@jsshotz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Salvador</a> on <a href="https://unsplash.com/s/photos/electronic-chip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2021-03-19"};function o(s){const n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",span:"span",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"量子コンピュータとは",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#量子コンピュータとは",children:e.jsx(n.span,{className:"icon icon-link"})}),"量子コンピュータとは"]}),`
`,e.jsx(n.p,{children:"本題の前に簡単に量子コンピュータについて。"}),`
`,e.jsx(n.p,{children:"量子コンピュータとはその名の通り量子力学を応用した原理で動作するコンピュータのことです。現在ひろく使われているコンピュータに対し指数関数的な性能向上が理論上は実現可能であることから注目を集めています。"}),`
`,e.jsxs(n.p,{children:["量子コンピュータの計算には",e.jsx(n.em,{children:"量子重ね合わせ"}),"という量子力学の性質を利用します。従来のコンピュータ(これより古典コンピュータと呼びます)は",e.jsx(n.em,{children:"ビット"}),"を基本単位として計算を行いますが、このビットは 0 または 1 の値しかとらず、全ての計算はこの 0 と 1 の配列をもとに行われます。これに対し、量子コンピュータは",e.jsx(n.em,{children:"量子ビット"}),"(qubit; quantum bit)を基本単位としています。この量子ビットに特殊な操作を加えることにより、0 と 1 が重なり合った—0 であると同時に 1 でもある—状態にすることができます。この状態の量子を使って計算を行うことにより、古典コンピュータでは 2 の n 乗回必要だった計算をたった一回で行うことが可能になります。"]}),`
`,e.jsx(n.p,{children:"もうひとつ、量子コンピュータの特徴的な性質として計算結果が確率的であることがあげられます。一回の計算で得られた解が必ずしも正しいという保証はなく、何度か計算を繰り返して解の精度を高める必要があります。複数回の試行には時間がかかるとはいえ、定数倍の計算量が必要になるだけなのでそれでもやはり古典コンピュータよりも量子コンピュータの方が高速に動作します。"}),`
`,e.jsxs(n.h2,{id:"量子コンピュータ開発の歴史",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#量子コンピュータ開発の歴史",children:e.jsx(n.span,{className:"icon icon-link"})}),"量子コンピュータ開発の歴史"]}),`
`,e.jsx(n.p,{children:"1980 年代に Paul Benioff や Richard Fyneman がその有効性を予測して以来、実現に向けた研究が続けられています。"}),`
`,e.jsxs(n.p,{children:["数ある研究の中でもっとも注目を集めたのが 1994 年に Peter Shor が考案した「ショアのアルゴリズム」です。内容としては、量子コンピュータにより素因数分解を高速に解くアルゴリズムを発見した、というシンプルなものですがとても重要な意味を持っています。素因数分解は数が大きくなればなるほど計算に時間がかかるようになります。十分に大きな数の素因数分解を古典コンピュータ(スーパーコンピュータであったとしても)で解こうとすると何万年という時間がかかるため、現実的には計算不可能です。この性質を利用したのが RSA 暗号という、現在インターネットでもっとも広く使われている暗号化技術のひとつです。ショアのアルゴリズムは",e.jsx(n.strong,{children:"量子コンピュータが実現した際には RSA 暗号が破られる"}),"ということを示しており、この発見により量子コンピュータ研究はさらに注目を集めるようになります。"]}),`
`,e.jsx(n.p,{children:"その後はしばらく基礎研究で進展をみせるものの、実用化という面では大きな変化がなく 2010 年代を迎えます。そして 2011 年 5 月、突如カナダの D-Wave Systems という企業が「世界初の商用量子コンピュータを開発した」と発表し世間を驚かせます。その後 IBM や Google などのハイテク企業が商用利用のための開発に参加し、量子コンピュータを実際にビジネスに利用するための開発競争が加速します。"}),`
`,e.jsxs(n.p,{children:["2019 年の 10 月には、Google が世界で初めて量子超越性—量子力学を利用した計算機で古典コンピュータでは解決不可能な計算を行うこと—を達成したと発表",e.jsx(n.a,{href:"https://ai.googleblog.com/2019/10/quantum-supremacy-using-programmable.html",children:"1"}),"。これは量子コンピュータ研究におけるひとつのマイルストーンとみられています。"]}),`
`,e.jsxs(n.h2,{id:"量子コンピューティングに取り組む企業",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#量子コンピューティングに取り組む企業",children:e.jsx(n.span,{className:"icon icon-link"})}),"量子コンピューティングに取り組む企業"]}),`
`,e.jsx(n.p,{children:"現在商用の量子コンピュータを開発、またはクラウドサービスとして提供している主な企業を紹介します。"}),`
`,e.jsxs(n.h3,{id:"d-wave-systems",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#d-wave-systems",children:e.jsx(n.span,{className:"icon icon-link"})}),"D-Wave Systems"]}),`
`,e.jsxs(n.p,{children:["先ほども登場しました D-Wave Systems は 2011 年 5 月、世界初の商用量子コンピュータとして D-Wave One を発表",e.jsx(n.a,{href:"https://www.nature.com/articles/nature10012",children:"2"}),"しました。"]}),`
`,e.jsx(n.p,{children:"現在量子コンピュータの実装方式として主流なのは量子ゲートと呼ばれるものですが、D-Wave が採用しているのは量子アニーリングと呼ばれる方式です。この方式は量子ゲート方式に比べると解決可能な問題の種類は制限される一方、量子の状態を管理するのが容易というメリットがあります。量子ゲート方式が現在 50~100 程度の量子ビットしか扱えないのに対し、D-Wave は 2000qubit を達成しています。"}),`
`,e.jsxs(n.p,{children:["先月には量子優位性—量子コンピュータが古典コンピュータの性能を上回ること、量子超越性よりも弱い概念—を発表",e.jsx(n.a,{href:"https://www.zdnet.com/article/a-quantum-computer-just-solved-a-decades-old-problem-three-million-times-faster-than-a-classical-computer/",children:"3"}),"しており、量子コンピュータの実用においては一歩抜け出しています。"]}),`
`,e.jsx(n.p,{children:"D-Wave はクラウドコンピューティングサービスである Leap2 を提供しているほか、のちほど紹介する Amazon Braket からも利用可能です。"}),`
`,e.jsxs(n.h3,{id:"google",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#google",children:e.jsx(n.span,{className:"icon icon-link"})}),"Google"]}),`
`,e.jsx(n.p,{children:"先にも述べましたが、Google は 2019 年の 10 月に「量子超越性を達成した」と発表しました。Google はこの証明のため Sycamore という量子ゲート方式のプロセサを開発、Summit—当時世界でもっともパワフルなスーパーコンピュータ—が 10,000 年かけて行う計算を 200 秒で完了したという実験結果を示しました。"}),`
`,e.jsxs(n.p,{children:["この Sycamore プロセサは NISQ(Noisy Intermediate-Scale Quantum)というアイディアにもとづいて開発されています。この NISQ というのは理論物理学者の John Preskill が 2018 年の論文",e.jsx(n.a,{href:"https://arxiv.org/abs/1801.00862",children:"4"}),`で発表したもので、
(a) Noisy、つまりエラー耐性を実装していないことと、
(b) 中規模なサイズ(50~100qubit)
な点が特徴です。Google はこの NISQ という考え方をベースに Sycamore プロセサを開発し、53qubit での計算を行いました。`]}),`
`,e.jsx(n.p,{children:"Sycamore プロセサは Google のクラウドサービスである Quantum Computing Service で利用可能となっていますが、一般にはまだ公開されていません。また Google は量子コンピュータ利用を支援するツールとして Cirq SDK や OpenFermion といった OSS を公開しています。"}),`
`,e.jsxs(n.h3,{id:"honeywell",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#honeywell",children:e.jsx(n.span,{className:"icon icon-link"})}),"Honeywell"]}),`
`,e.jsx(n.p,{children:"電子機器関連の老舗 Honeywell はイオントラップ型と呼ばれる方式を使った量子コンピュータを開発しています。"}),`
`,e.jsx(n.p,{children:`イオントラップはその名のとおり、電磁場を使ってイオンを閉じ込める方式です。このイオントラップ型は
(a) 他の方式に比べて計算の精度が高いことと、
(b) コンピュータを大規模化するためのアイデアが構築されていること
から有力視されている方式のひとつです。`}),`
`,e.jsxs(n.p,{children:["量子コンピュータの性能を測る指標のひとつに Quantum Volume というものがあります。これは IBM が提唱した指標で、量子コンピュータの動作方式によらず計算できるように定義されています。この Quantum Volume で高い値をだすためには量子ビット数が多いことももちろんですが、エラー耐性が高いということも大事な要因です。これまでの最高値は昨年 Honeywell が出した 128 という値でしたが、Honeywell は今月この数値を更新、512 という値を得たことを発表",e.jsx(n.a,{href:"https://www.zdnet.com/article/quantum-computing-honeywell-just-quadrupled-the-power-of-its-computer/",children:"5"}),"しました。Honeywell のシステムは他社に比べ量子ビット数は小さいため、量子ビット数を増やすことよりもエラー耐性を向上させることに力を入れていることが伺えます。"]}),`
`,e.jsx(n.p,{children:"Honeywell のハードウェアは Microsoft Azure から利用可能となっています。"}),`
`,e.jsxs(n.h3,{id:"ionq",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ionq",children:e.jsx(n.span,{className:"icon icon-link"})}),"IonQ"]}),`
`,e.jsxs(n.p,{children:["IonQ は Honeywell と同様にイオントラップ型の量子コンピュータを開発しています。先日 SPAC スキームを使って上場することが発表",e.jsx(n.a,{href:"https://ionq.com/news/march-08-2021-ionq-to-become-first-public-quantum-computer-company/",children:"6"}),"されましたが、これは量子コンピューティング関連企業としては初となります。"]}),`
`,e.jsxs(n.p,{children:["昨年の 10 月にそれまでの 11 量子ビットシステムからほぼ 3 倍となる 32 量子ビットのシステムを発表",e.jsx(n.a,{href:"https://ionq.com/news/october-01-2020-most-powerful-quantum-computer",children:"7"}),"しました。その発表の中には Quantum Volume で 4,000,000 を達成したという驚くべき内容も含まれています。Honeywell や IBM とは異なる計算の仕方をしているので単純に比較することはできませんが、計算精度が高いという彼らの主張を裏付ける数値と言えそうです。"]}),`
`,e.jsxs(n.p,{children:["また、IonQ が昨年発表したロードマップ",e.jsx(n.a,{href:"https://ionq.com/posts/december-09-2020-scaling-quantum-computer-roadmap",children:"8"}),"によると 2023 年には量子コンピュータのデータセンターを作ることも予定しています。"]}),`
`,e.jsx(n.p,{children:"IonQ のハードウェアは Amazon Braket や Microsoft Azure のクラウドサービスから利用可能なほか、直接パートナーシップを結ぶことで利用が可能です。"}),`
`,e.jsxs(n.h3,{id:"ibm-quantum",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ibm-quantum",children:e.jsx(n.span,{className:"icon icon-link"})}),"IBM Quantum"]}),`
`,e.jsx(n.p,{children:"IBM は 2016 年に超伝導型量子コンピュータを利用したクラウドサービスである IBM Quantum を発表しています。"}),`
`,e.jsx(n.p,{children:"彼らは Python をベースにした SDK である Qiskit フレームワークを公開しているのに加え、Qiskit をベースにしたビジュアルプログラミングプラットフォームの Quantum Composer というサービスを提供しています。インタラクティブなツールにより、より直感的に量子コンピュータの操作を学ぶことができます。"}),`
`,e.jsxs(n.p,{children:["IBM の量子コンピュータ開発に関するニュースの中で注目したいのは昨年の 9 月に発表したロードマップ",e.jsx(n.a,{href:"https://www.ibm.com/blogs/research/2020/09/ibm-quantum-roadmap/",children:"9"}),"です。そのロードマップによると IBM は今年には 127qubit のシステムの実現を予定しています。Google の Sycamore が 53qubit で量子超越性を達成したことを考慮すると、同じく NISQ を採用する IBM がどこまで性能をあげてくるか注目です。また 2023 年には 1,000qubit を達成すると計画しています。"]}),`
`,e.jsxs(n.h3,{id:"amazon",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#amazon",children:e.jsx(n.span,{className:"icon icon-link"})}),"Amazon"]}),`
`,e.jsx(n.p,{children:"Amazon は 2019 年の 12 月にクラウド量子コンピューティングサービス、Amazon Braket をリリースしています。Amazon 自身が量子コンピュータを開発するのではなく、量子コンピュータを開発する他社とパートナーシップを結びそのリソースを AWS 上で提供する形をとっています。Rigetti(超伝導型)、IonQ(イオントラップ型)、D-Wave(量子アニーリング型)とそれぞれ異なる方式を採用する会社と提携してサービスを提供しているのが特徴です。昨年の 8 月には一般公開をしており、誰でも利用することが可能です。また、シミュレータ上でプログラムを実行することもできます。"}),`
`,e.jsx(n.p,{children:"サポートツールとして Amazon が提供する Amazon Braket SDK や D-Wave が開発する Ocean SDK の他、PennyLane ライブラリをサポートしています。この PennyLane は Xanadu 社が開発する SDK で、量子コンピュータを利用した機械学習(量子機械学習)を記述するためのものです。"}),`
`,e.jsx(n.p,{children:"料金体系は 1 ショットあたりの値段と 1 タスクあたりの値段からなります。ショットは 1 回の求解を表す単位です。先に述べたように量子コンピュータの計算は確率的なため、同じ計算を何ショットも繰り返し解の精度を高める必要があります。そうして何千、何万ショット繰り返して解を得る操作を 1 単位としてタスクと呼びます。一例として D-Wave で 1 タスク、2000 ショットの計算をおこなった場合、D-Wave の 1 タスクあたりの料金は$0.30、1 ショットあたりの料金は$0.00019 となっているため、1 task * $0.30 + 2,000 shots * $0.00019 = $0.68 となります。"}),`
`,e.jsxs(n.h3,{id:"azure",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#azure",children:e.jsx(n.span,{className:"icon icon-link"})}),"Azure"]}),`
`,e.jsx(n.p,{children:"Microsoft も Amazon と同様にクラウドプラットフォームである Azure 上で量子コンピューティングサービス Azure Quantum を提供しています。利用可能なハードウェアは Honeywell、IonQ、Quantum Circuits から選択可能です。発表以来 Early Access のステータスでしたが、先月一般公開となり誰でもアクセスすることができます。"}),`
`,e.jsx(n.p,{children:"Microsoft は Q#言語とその SDK を開発、提供しています。SDK にはシミュレータも含まれているためローカルマシンでプログラムを実行することも可能です。"}),`
`,e.jsx(n.p,{children:"料金は IonQ のシミュレータで 1 時間あたり$3,000 となっています。"}),`
`,e.jsx(n.p,{children:"また、Microsoft は独自の量子コンピュータを製造する研究開発も進めていますが、こちらは少し難航している模様です。2018 年の 3 月にデルフト大学のカウウェンホーフェンがマヨラナ粒子—その存在を予想したイタリアの物理学者にちなんで名付けられた—の存在を確認したという論文を発表します。Microsoft はこのマヨラナ粒子を利用した量子コンピュータの開発を進めてきましたが、現在この 2018 年の論文に疑問が投げかけられており、もしマヨラナ粒子が存在しないということになれば量子コンピュータ開発の計画が大きく後退することは避けられないでしょう。"}),`
`,e.jsxs(n.h2,{id:"おわりに",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#おわりに",children:e.jsx(n.span,{className:"icon icon-link"})}),"おわりに"]}),`
`,e.jsxs(n.p,{children:["昨年末には中国が独自に開発する光子を利用した量子コンピュータで量子超越性を達成したことを発表",e.jsx(n.a,{href:"https://science.sciencemag.org/content/370/6523/1460",children:"10"}),"しました。量子超越性とその先にある万能量子コンピュータの実現に向け、各社・各国開発競争を進める中でどうエラー耐性を獲得していくのか。今後も量子コンピュータ関連の話題から目が離せません。"]})]})}function S(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}const _="/assets/materials-wBS4jwBy.png",U="/assets/ray-DPOVp89I.png",M="/assets/canvas-api-BqnjRkih.png",R={title:"Ray Tracer on Web",description:"I have been working on writing a ray tracer in Rust in the last few weeks. This post is to show off what I could achieve:)",language:"en/GB",tags:["raytracing","rust"],image:{src:"laser.jpg",alt:"Laser beams in darkness",credit:'Photo by <a href="https://unsplash.com/@clyde_he?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clyde He</a> on <a href="https://unsplash.com/s/photos/light?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2022-03-03"};function d(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"contents",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contents",children:e.jsx(n.span,{className:"icon icon-link"})}),"Contents"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#whats-ray-tracing",children:"What's ray tracing?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#scene",children:"Scene"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#camera",children:"Camera"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#ray",children:"Ray"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#ray-tracer--web-assembly",children:"Ray tracer + Web Assembly"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-api",children:"Canvas API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wasm-bindgen",children:"wasm-bindgen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#web-worker",children:"Web Worker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multi-threading",children:"Multi-threading"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#why-ray-tracer",children:"Why ray tracer?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#references",children:"References"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"whats-ray-tracing",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-ray-tracing",children:e.jsx(n.span,{className:"icon icon-link"})}),"What's ray tracing?"]}),`
`,e.jsx(n.p,{children:"Ray tracing is a technique used to render a scene. Pay close attention to the shadows and the reflection on water, walls, floors, and glasses in this video."}),`
`,e.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Xf2QCdScU6o",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"mx-auto"}),`
`,e.jsx(n.p,{children:"You may find the scene rendered by ray tracing more natural."}),`
`,e.jsxs(n.p,{children:["While ray tracing is computationaly more expensive than the widely used method ",e.jsx(n.em,{children:"rasterisation"}),", it's been increasing its presence in movie and game rendering with the help of the latest advance in GPU technology."]}),`
`,e.jsx(n.p,{children:'Programatically, it calculates the colour of each pixel in the image from top left to right bottom tracing "rays" from a "camera" to the "scene".'}),`
`,e.jsxs(n.h3,{id:"scene",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scene",children:e.jsx(n.span,{className:"icon icon-link"})}),"Scene"]}),`
`,e.jsx(n.p,{children:"A scene is the world where all the objects, for example cars, lights, buildings, and so on, are placed. My ray tracer only has simple spheres as they're easy to model, but you can put literally any objects in any positions if you manage to model it."}),`
`,e.jsxs(n.p,{children:["You can add other factors to objects to make it look more real. One such factor is a ",e.jsx(n.strong,{children:"material"})," the object is made of. Depending on the material, the object behaves differently when a ray hits. Materials supported by my version of ray tracer are:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lambertian — a material that reflects the ray to a random direction,"}),`
`,e.jsx(n.li,{children:"Metal — a material that reflects the ray to the direction calculated from the incoming ray's angle, and"}),`
`,e.jsx(n.li,{children:"Dielectric (glasses) — a material that refracts the ray to the inside of the object."}),`
`]}),`
`,`
`,e.jsxs("figure",{children:[e.jsx("img",{src:_,alt:"Lambertian casts a ray to a random direction, Metal reflects, Dielectric refracts"}),e.jsx("figcaption",{children:"Each material baheves differently when a ray hits it"})]}),`
`,e.jsx(n.p,{children:"Once you define a scene, the next thing you need to do is to specify where you look at the scene from."}),`
`,e.jsxs(n.h3,{id:"camera",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#camera",children:e.jsx(n.span,{className:"icon icon-link"})}),"Camera"]}),`
`,e.jsx(n.p,{children:"A camera is your eyes. All the rays start their journey from the camera. It's defined with two main parameters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"position — the place where you look at the scene from, and"}),`
`,e.jsx(n.li,{children:"atitude — the direction of its gaze"}),`
`]}),`
`,e.jsx(n.p,{children:`In addition to them, you also need to configure
(1) a viewport which has the same aspect ratio as the final image, think it as a window which you look at the scene through, and
(2) the distance between the camera and the viewport, which is called "focal length".`}),`
`,e.jsx(n.p,{children:"Once the camera is positioned, it's ready to start casting rays."}),`
`,e.jsxs(n.h3,{id:"ray",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ray",children:e.jsx(n.span,{className:"icon icon-link"})}),"Ray"]}),`
`,e.jsx(n.p,{children:"A ray is casted from the camera to the direction of the pixel it's interested in at the time. The casted ray may or may not hit objects placed in the scene. If it hits something, it first records the color of the object surface. Then, it produces another ray, the direction of which depends on the material of the object as explained in the scene section, from the hit point."}),`
`,e.jsx(n.p,{children:`The tracing of the ray stops either
(1) when the ray goes deep into the shadow or
(2) when it doesn't hit anything anymore, which means it reaches the ambient light (or sky so to speak).
The final colour of the pixel is calculated at that point.`}),`
`,`
`,e.jsxs("figure",{children:[e.jsx("img",{src:U,alt:"A ray is cast from a camera to the scene through a frame in between them calculating the final colour of the pixel"}),e.jsx("figcaption",{children:"Tracing the journey of the ray"})]}),`
`,e.jsxs(n.p,{children:["This is a quick explanation of what the ray tracer is. See the ",e.jsx(n.a,{href:"#references",children:e.jsx(n.em,{children:"References"})})," section to continue reading more about ray tracing if you're interested."]}),`
`,e.jsx(n.p,{children:"Now, let's talk about what I did to run it on web browser."}),`
`,e.jsxs(n.h2,{id:"ray-tracer--web-assembly",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ray-tracer--web-assembly",children:e.jsx(n.span,{className:"icon icon-link"})}),"Ray tracer + Web Assembly"]}),`
`,e.jsx(n.p,{children:"The first thing I had to do was make a decision on how JavaScript and Rust should communicate each other; more precisely, how to pass images from Rust to JavaScript."}),`
`,e.jsxs(n.h3,{id:"canvas-api",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#canvas-api",children:e.jsx(n.span,{className:"icon icon-link"})}),"Canvas API"]}),`
`,e.jsxs(n.p,{children:["To draw an image on the screen, I used the <canvas> HTML element. Its ",e.jsx(n.code,{children:"putImageData()"})," API receives input image as an ",e.jsx(n.code,{children:"ImageData"})," object, and the image data is given as ",e.jsx(n.code,{children:"Uint8ClampedArray"}),", which is expected to be an array containing the pixel data in the RGBA order."]}),`
`,`
`,e.jsx("figure",{children:e.jsx("img",{src:M,alt:"Uint8ClampedArray is used for ImageData then passed to canvas HTML element."})}),`
`,e.jsxs(n.p,{children:["Long story short, the goal is to return a properly serialised ",e.jsx(n.code,{children:"Uint8ClampedArray"})," from the Rust programme."]}),`
`,e.jsxs(n.h3,{id:"wasm-bindgen",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-bindgen",children:e.jsx(n.span,{className:"icon icon-link"})}),"wasm-bindgen"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/rustwasm/wasm-bindgen",children:"wasm-bindgen"})," is a library that bridges the gap between JavaScript and the Web Assembly module written in Rust."]}),`
`,e.jsxs(n.p,{children:["What I needed to do so the ",e.jsx(n.code,{children:"render"})," function can be called from JavaScript and return ",e.jsx(n.code,{children:"Uint8ClampedArray"})," was to add a ",e.jsx(n.code,{children:"#[wasm_bindgen]"})," annotation and modify the return type:"]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-rust",children:[e.jsx(n.span,{className:"hljs-keyword",children:"use"}),` wasm_bindgen::prelude::*;

`,e.jsx(n.span,{className:"hljs-meta",children:"#[wasm_bindgen]"}),`
`,e.jsx(n.span,{className:"hljs-keyword",children:"pub"})," ",e.jsx(n.span,{className:"hljs-keyword",children:"fn"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"render"}),"(width: ",e.jsx(n.span,{className:"hljs-type",children:"u16"}),", height: ",e.jsx(n.span,{className:"hljs-type",children:"u16"}),") ",e.jsx(n.span,{className:"hljs-punctuation",children:"->"}),` Uint8ClampedArray {

  `,e.jsx(n.span,{className:"hljs-comment",children:"// ...setup a scene and a camera"}),`

  `,e.jsx(n.span,{className:"hljs-keyword",children:"let"})," ",e.jsx(n.span,{className:"hljs-keyword",children:"mut "}),e.jsx(n.span,{className:"hljs-variable",children:"img"})," = ",e.jsx(n.span,{className:"hljs-built_in",children:"vec!"}),`[];

  `,e.jsx(n.span,{className:"hljs-comment",children:"// ...build image"}),`

  `,e.jsx(n.span,{className:"hljs-comment",children:"// convert from [u8] to Uint8ClampedArray using Into trait."}),`
  img[..].`,e.jsx(n.span,{className:"hljs-title function_ invoke__",children:"into"}),`()
}
`]})}),`
`,e.jsx(n.p,{children:"This is basically everything I needed to run the ray tracer in web browser, but there was one issue when I tried it: the browser got stuck while running the ray tracer. What I was missing was to follow this advice:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The main thread in a browser cannot block. This means that if you run WebAssembly code on the main thread you can never block, meaning you can't do so much as acquire a mutex. This is an extremely difficult limitation to work with on the web, although one workaround is to run wasm exclusively in web workers and run JS on the main thread. It is possible to run the same wasm across all threads, but you need to be extremely vigilant about synchronization with the main thread. —— ",e.jsx(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/examples/raytrace.html#caveats",children:"Parallel Raytracing#caveats"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Because ray tracing takes some time and blocks the thread where it runs, running it on the main thread is a no-no; I made a first encounter to Web Worker...!"}),`
`,e.jsxs(n.h3,{id:"web-worker",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web-worker",children:e.jsx(n.span,{className:"icon icon-link"})}),"Web Worker"]}),`
`,e.jsxs(n.p,{children:["Regardless of its unfriendly interface (",e.jsx(n.a,{href:"https://github.com/GoogleChromeLabs/comlink",children:"Comlink"})," can be a help for it), using Web Worker is not super complicated."]}),`
`,e.jsxs(n.p,{children:["The main thread needs to (1) instantiate a worker specifying the path to the worker file, (2) invoke it passing arguments via ",e.jsx(n.code,{children:"postMessage"})," API, and (3) listen to the result by registering an ",e.jsx(n.code,{children:"onmessage"})," callback:"]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," w = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Worker"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"../path/to/the/worker/file"'}),`);
w.`,e.jsx(n.span,{className:"hljs-title function_",children:"postMessage"}),"([",e.jsx(n.span,{className:"hljs-variable constant_",children:"WIDTH"}),", ",e.jsx(n.span,{className:"hljs-variable constant_",children:"HEIGHT"}),`]);
w.`,e.jsx(n.span,{className:"hljs-property",children:"onmessage"})," = ",e.jsxs(n.span,{className:"hljs-function",children:["(",e.jsx(n.span,{className:"hljs-params",children:"{ data: rendered }"}),") =>"]}),` {
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," imageData = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"ImageData"}),"(rendered, ",e.jsx(n.span,{className:"hljs-variable constant_",children:"WIDTH"}),`);
  canvas.`,e.jsx(n.span,{className:"hljs-title function_",children:"getContext"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"2d"'}),").",e.jsx(n.span,{className:"hljs-title function_",children:"putImageData"}),"(imageData, ",e.jsx(n.span,{className:"hljs-number",children:"0"}),", ",e.jsx(n.span,{className:"hljs-number",children:"0"}),`);
};
`]})}),`
`,e.jsxs(n.p,{children:["The worker in return defines an ",e.jsx(n.code,{children:"onmessage"})," method, calls the wasm function, and pass back the result using ",e.jsx(n.code,{children:"postMessage"})," API:"]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:["onmessage = ",e.jsx(n.span,{className:"hljs-keyword",children:"async"})," ",e.jsx(n.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(n.span,{className:"hljs-params",children:"e"}),`) {
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," { render } = ",e.jsx(n.span,{className:"hljs-keyword",children:"await"})," ",e.jsx(n.span,{className:"hljs-keyword",children:"import"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"wasm-raytracer"'}),`);
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," rendered = ",e.jsx(n.span,{className:"hljs-title function_",children:"render"}),"(e.",e.jsx(n.span,{className:"hljs-property",children:"data"}),"[",e.jsx(n.span,{className:"hljs-number",children:"0"}),"], e.",e.jsx(n.span,{className:"hljs-property",children:"data"}),"[",e.jsx(n.span,{className:"hljs-number",children:"1"}),`]);
  `,e.jsx(n.span,{className:"hljs-title function_",children:"postMessage"}),`(rendered);
};
`]})}),`
`,e.jsx(n.p,{children:"This was all I needed to run ray tracer on a dedicated thread."}),`
`,e.jsx(n.p,{children:"Before closing the section, I address the performance issue I tried to solve."}),`
`,e.jsxs(n.h3,{id:"multi-threading",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multi-threading",children:e.jsx(n.span,{className:"icon icon-link"})}),"Multi-threading"]}),`
`,e.jsx(n.p,{children:"Even though now it's separated from the main thread, running it on a single thread takes a bit of time. To improve performance, I looked at options to run it on multiple threads."}),`
`,e.jsxs(n.p,{children:["The calculation of each pixel can be done in isolatation from each other, and ",e.jsx(n.em,{children:"fork-join parallelism"}),", which is to ",e.jsx(n.em,{children:"fork"})," to start a new thread and to join to ",e.jsx(n.em,{children:"wait"})," for it to finish, can be applied using libraries such as ",e.jsx(n.a,{href:"https://github.com/rayon-rs/rayon",children:"Rayon"}),"."]}),`
`,e.jsx(n.p,{children:"Even though it wasn't difficult to turn the programme into the multi-thread version, there were a couple of challenges to run it in the browser environment:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["WebAssembly threads are not supported by ",e.jsx(n.a,{href:"https://webassembly.org/roadmap/",children:"some browsers"})," yet."]}),`
`,e.jsxs(n.li,{children:["To enable it, ",e.jsx(n.a,{href:"https://web.dev/coop-coep/",children:"COOP and COEP headers"})," need to be configured properly, which is not possble for GitHub pages where this blog is hosted as of today."]}),`
`,e.jsxs(n.li,{children:["Because Rust's wasm build target doesn't assume it's going to be run in browsers, the standard library ",e.jsx(n.code,{children:"std::thread"})," is not aware of Web Workers that enable WebAssembly threads on browser environments."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsxs(n.a,{href:"https://github.com/GoogleChromeLabs/wasm-bindgen-rayon",children:[e.jsx(n.code,{children:"wasm-bindgen-rayon"})," library"]})," enables compiling multi-thread code written with the Rayon library into threads aware wasm, but only with the nightly version of Rust."]}),`
`]}),`
`,e.jsx(n.p,{children:"For those reasons, I gave up multi-threading for now hoping I can introduce it in the near future."}),`
`,e.jsxs(n.h2,{id:"why-ray-tracer",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-ray-tracer",children:e.jsx(n.span,{className:"icon icon-link"})}),"Why ray tracer?"]}),`
`,e.jsxs(n.p,{children:["This is kind of a detour from my journey of the ",e.jsx(n.a,{href:"/blog/cpu-experiment",children:"CPU experiment"})," aimed at understanding what ray tracer is and how to implement it (+ not to mention learning Rust). Next challenge is to migrate the ray tracer programme to the Hack/Jack system I built while I was reading the book I introduced in the last section of the ",e.jsx(n.a,{href:"/blog/the-power-of-nand",children:"The Power of NAND"})," post. Bye for now:)"]}),`
`,e.jsxs(n.h2,{id:"references",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.span,{className:"icon icon-link"})}),"References"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://raytracing.github.io/books/RayTracingInOneWeekend.html",children:"Ray Tracing In One Weekend"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.singleton.io/posts/2022-01-02-raytracing-with-rust/",children:"The joy of building a ray tracer, for fun, in Rust."})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://bheisler.github.io/post/writing-raytracer-in-rust-part-1/",children:"Writing a Raytracer in Rust"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://clayto.com/2021/07/shaking-off-the-rust-2-ray-tracing-in-webassembly/",children:"Shaking Off the Rust 2: Ray Tracing in WebAssembly"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://rustwasm.github.io/wasm-bindgen/examples/raytrace.html",children:"Parallel Raytracing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web.dev/webassembly-threads/",children:"Using WebAssembly threads from C, C++ and Rust"})}),`
`]})]})}function E(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}const W={title:"Subtraction as Addition",description:"In modern computing system, a technique called two's complement is used to represent negative integers. The reason it's so commonly used is it makes computing system much simpler. In this post, I'd like to show what two's complement is and how it helps keeping it simple.",language:"en/GB",tags:["computerscience","systemprogramming","twoscomplement"],image:{src:"complementary.jpg",alt:"An orange coloured in blue outside (complementary colours)",credit:'Photo by <a href="https://unsplash.com/@davisuko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">davisuko</a> on <a href="https://unsplash.com/s/photos/complementary-colors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2022-01-30"};function x(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["To make the discussion simple I'm going to use 4 bit integer, ",e.jsx(n.code,{children:"int4"})," throughout the post."]}),`
`,e.jsxs(n.p,{children:["NOTE: I expect you to have a basic understanding of binary number system. If you're not familiar with it, take a moment and have a look at ",e.jsx(n.a,{href:"https://www.mathsisfun.com/binary-number-system.html",children:"this article"})," first."]}),`
`,e.jsxs(n.h2,{id:"whats-twos-complement",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-twos-complement",children:e.jsx(n.span,{className:"icon icon-link"})}),"What's two's complement?"]}),`
`,e.jsxs(n.p,{children:["It's one way of representing signed integers",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". ",e.jsx(n.code,{children:"int4"})," can represent ",e.jsx(n.code,{children:"2^4 = 16"})," different numbers, and two's complement assigns 16 integers ranging from -8 to 7 to each bit pattern. The mapping rules go like this:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Map from 0 to 7 to binary numbers starting from ",e.jsx(n.code,{children:"0000"})," to ",e.jsx(n.code,{children:"0111"}),". This is same as how we represent positive integers in binary."]}),`
`,e.jsxs(n.li,{children:["For negative numbers, assign the smallest negative number -8 to ",e.jsx(n.code,{children:"1000"}),", then assign -7 to the one bigger binary ",e.jsx(n.code,{children:"1001"}),", -6 to ",e.jsx(n.code,{children:"1010"})," …and so on up to ",e.jsx(n.code,{children:"1111"}),". ",e.jsx(n.code,{children:"1111"})," is going to be -1."]}),`
`]}),`
`,e.jsx(n.p,{children:"If they aren't very clear, have a look at the table showing full mapping below and examine the rules again."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"Decimal"}),e.jsx(n.th,{style:{textAlign:"center"},children:"Binary"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"7"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0111"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"6"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0110"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"5"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0101"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"4"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0100"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"3"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0011"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"2"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0010"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0001"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1111"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-2"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1110"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-3"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1101"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-4"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1100"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-5"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1011"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-6"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1010"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-7"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1001"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-8"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1000"})]})]})]}),`
`,e.jsx(n.p,{children:"Just by looking at it, it doesn't make much sense why it does such a tricky mapping for negative numbers. There's a reason powerful enough to justify this trickiness."}),`
`,e.jsxs(n.h2,{id:"why-is-it-so-widely-used",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-is-it-so-widely-used",children:e.jsx(n.span,{className:"icon icon-link"})}),"Why is it so widely used?"]}),`
`,e.jsxs(n.p,{children:["The reason why two's complement is widely used is it makes hardware simple in a way that ",e.jsx(n.strong,{children:"it enables hardware to use the addition unit to also calculate subtraction"}),"."]}),`
`,e.jsxs(n.p,{children:["You may be surprised to know that computers don't do subtraction. What it actually does instead is addition of the negative number. For example, ",e.jsx(n.code,{children:"5 - 3"})," is calculated as ",e.jsx(n.code,{children:"5 + (-3)"})," inside a computer. By converting subtraction to addition, it's now free from minding how to go about subtraction, which is a big deal from hardware engineering point of view."]}),`
`,e.jsxs(n.p,{children:["However, we need to carefully pick a way to represent negative numbers in order to get correct answers. Two's complement is one of such representations",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," that makes it happen. Let's look at an example."]}),`
`,e.jsxs(n.p,{children:["Let's do ",e.jsx(n.code,{children:"5 + (-3)"}),". In two's complement 5 and -3 are represented as ",e.jsx(n.code,{children:"0101"})," and ",e.jsx(n.code,{children:"1101"})," respectively. The addition of these two is ",e.jsx(n.code,{children:"0101 + 1101 = 0010"}),". If you look back at the table in the previous section, you can find it represents 2, which ",e.jsxs(n.strong,{children:["corresponds to the answer of ",e.jsx(n.code,{children:"5 + (-3)"})]}),"."]}),`
`,e.jsx(n.p,{children:`You may still wonder "so what? what's so special about this?" because my first impression was like that. Let's see what happens if it did NOT use two's complement.`}),`
`,e.jsxs(n.h3,{id:"another-way-of-representing-minus-numbers",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#another-way-of-representing-minus-numbers",children:e.jsx(n.span,{className:"icon icon-link"})}),"Another way of representing minus numbers"]}),`
`,e.jsxs(n.p,{children:["I'm going to use the first bit solely as a flag that indicates sign: 0 to be positive, and 1 to be negative. The rest of three bits are used to represent number part, for example, ",e.jsx(n.code,{children:"0001"})," is 1 and ",e.jsx(n.code,{children:"1001"})," is -1."]}),`
`,e.jsx(n.p,{children:"This is the mapping table of this system."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"Decimal"}),e.jsx(n.th,{style:{textAlign:"center"},children:"Binary"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"7"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0111"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"6"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0110"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"5"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0101"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"4"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0100"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"3"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0011"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"2"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0010"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0001"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1001"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-2"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1010"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-3"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1011"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-4"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1100"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-5"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1101"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-6"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1110"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"-7"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1111"})]})]})]}),`
`,e.jsxs(n.p,{children:["Probably this is more intuitive way of representing negative numbers. This system is called ",e.jsx(n.em,{children:"signed magnitude representation"}),", and was actually used in early computers. Be aware ",e.jsx(n.strong,{children:"it has two zeros"}),"."]}),`
`,e.jsxs(n.p,{children:["Now let's see how ",e.jsx(n.code,{children:"5 + (-3)"})," looks like in this system."]}),`
`,e.jsxs(n.p,{children:["In this system, 5 and -3 are represented ",e.jsx(n.code,{children:"0101"})," and ",e.jsx(n.code,{children:"1011"})," respectively. If we add these two binary numbers, the result is ",e.jsx(n.code,{children:"0101 + 1011 = 0000"}),". ",e.jsx(n.code,{children:"0000"})," is simply 0, which is clearly wrong answer for ",e.jsx(n.code,{children:"5 + (-3)"}),"."]}),`
`,e.jsx(n.p,{children:"This means it can't use the addition hardware to perform this calculation, and to get the right answer it needs another hardware dedicated for subtraction."}),`
`,e.jsx(n.p,{children:"Being able to calculate subtraction as addition is a very unique characteristic two's complement has, and it's the reason why it's so popular in computing systems."}),`
`,e.jsx("aside",{children:e.jsxs(n.p,{children:["Indeed, ",e.jsx("i",{children:"method of complement"}),` (ones' complement, two's complement, etc)
is `,e.jsx("b",{children:"designed to implement subtraction as addition"}),` of its complement
number.`]})}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.span,{className:"icon icon-link"})}),"Footnotes"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:["Signed numbers: Numbers that consist of both positive and negative numbers ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(n.p,{children:["Ones' complement is another way to realise subtraction as addition. See ",e.jsx(n.a,{href:"https://stackoverflow.com/questions/11054213/advantage-of-2s-complement-over-1s-complement",children:"Stack Overflow — Advantage of 2's complement over 1's complement?"})," if you're interested in why two's complement is more preferred. ",e.jsx(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function G(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}const L="/assets/AND-DyEGJMaQ.svg",F="/assets/OR-QkMsrapx.svg",O="/assets/NAND-BsgtyvmJ.svg",B="/assets/AND with NAND-DRAZ1CIU.svg",q="/assets/OR with NAND-CvffBfo7.svg",J={title:"The Power of NAND",description:`When I was an engineering student, I learned a logic gate NAND in one of the electronics classes. At that time I didn't fully understand why NAND is so important.

Ten years later, only after I decided to engage myself more in computer science, I finally understood why it's so: We can build very complex computing systems only with NAND on contrary to its super simple look.

I'd like to introduce here (1) what NAND is and (2) why it has such a powerful capability.`,language:"en/GB",tags:["computer science","system programming","nand2tetris"],image:{src:"gate.jpg",alt:"A gate in Beograd, Serbia",credit:'Photo by <a href="https://unsplash.com/@nknezevic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Knezevic</a> on <a href="https://unsplash.com/s/photos/gate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},published:"2022-01-12"};function m(s){const n={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"whats-nand",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-nand",children:e.jsx(n.span,{className:"icon icon-link"})}),"What's NAND?"]}),`
`,e.jsxs(n.p,{children:["NAND is one of the most basic ",e.jsx(n.strong,{children:"logic gates"}),". So first I need to explain what the logic gate is."]}),`
`,e.jsx(n.p,{children:"A logic gate is a sort of a calculator that accepts one or more input and produces one or more output where both input and output values are either 0 or 1. Let's take a look at one of the simplest logic gates: AND."}),`
`,`
`,e.jsxs("figure",{className:"my-4 mx-auto flex flex-col items-center gap-2",children:[e.jsx("img",{src:L,alt:"AND gate"}),e.jsx("figcaption",{className:"text-sm text-slate-500",children:"AND gate"})]}),`
`,e.jsx(n.p,{children:"As you can see it takes two inputs (a) and (b), then produce one output (out). Because each (a) and (b) can be either 0 or 1, there are 4 variations of input combination as shown in the table below. The output of an AND gate will be 1 only when both (a) and (b) are 1."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"a"}),e.jsx(n.th,{style:{textAlign:"center"},children:"b"}),e.jsx(n.th,{style:{textAlign:"center"},children:"out"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]})]})]}),`
`,e.jsx("aside",{children:e.jsxs(n.p,{children:[`This table representation of the relationship between input combinations and
corresponding output is called `,e.jsx("i",{children:"truth table"}),"."]})}),`
`,e.jsx(n.p,{children:"Let's take a look at another example: OR gate."}),`
`,`
`,e.jsxs("figure",{className:"my-4 mx-auto flex flex-col items-center gap-2",children:[e.jsx("img",{src:F,alt:"OR gate"}),e.jsx("figcaption",{className:"text-sm text-slate-500",children:"OR gate"})]}),`
`,e.jsx(n.p,{children:"Again, it receives two inputs and produces one output. The output of the OR gate is 0 when both (a) and (b) are 0, otherwise 1. This is the truth table of the OR gate."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"a"}),e.jsx(n.th,{style:{textAlign:"center"},children:"b"}),e.jsx(n.th,{style:{textAlign:"center"},children:"out"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]})]})]}),`
`,e.jsx(n.p,{children:"Now let's get back to the initial question: What is NAND?"}),`
`,e.jsx(n.p,{children:"Like AND and OR gates, NAND is also a logic gate that receives two inputs and produces one output."}),`
`,`
`,e.jsxs("figure",{className:"my-4 mx-auto flex flex-col items-center gap-2",children:[e.jsx("img",{src:O,alt:"NAND gate"}),e.jsx("figcaption",{className:"text-sm text-slate-500",children:"NAND gate"})]}),`
`,e.jsx(n.p,{children:"The output of NAND gate is just an opposite of AND output: When either (a) or (b) is 1 or both of them are 0, the output is 1. More simply put, the output is 0 only when both (a) and (b) are 1."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"a"}),e.jsx(n.th,{style:{textAlign:"center"},children:"b"}),e.jsx(n.th,{style:{textAlign:"center"},children:"out"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]})]})]}),`
`,e.jsx(n.p,{children:"Not very complicated, right?"}),`
`,e.jsx(n.p,{children:`Now how would it be possible to build a "computer" like the one you're reading this post with with this tiny device?`}),`
`,e.jsxs(n.h2,{id:"how-to-build-a-computer-with-nand",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-build-a-computer-with-nand",children:e.jsx(n.span,{className:"icon icon-link"})}),"How to Build a Computer with NAND"]}),`
`,e.jsx(n.p,{children:"The steps are like this:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"build elementary logic gates such as AND, OR, and Multiplexer with NAND"}),`
`,e.jsx(n.li,{children:"build components needed to compose CPU such as ALU (Arithmetic Logic Unit) and RAM (Random Access Memories) with elementary logic gates"}),`
`,e.jsx(n.li,{children:"build a CPU with these components"}),`
`]}),`
`,e.jsxs(n.p,{children:["An essential fact that makes these steps possible is that ",e.jsx(n.em,{children:"any logic gates can be constructed by combining only NAND gates"}),". Let's take a look at an example."]}),`
`,`
`,e.jsxs("figure",{className:"mx-auto flex flex-col items-center gap-1",children:[e.jsx("img",{src:B,alt:"Input (a) and (b) are connected to two different NANDs. The output of these two NANDs are connected to another NAND."}),e.jsx("figcaption",{className:"text-sm text-slate-500",children:"???"})]}),`
`,e.jsx(n.p,{children:"There are three NAND gates in this combined logic gate and it still has two inputs and one output. The branching lines from (a) and (b) mean that input (a) and (b) are connected to multiple gates. Please take a moment to think how the truth table of this logic gate would look like."}),`
`,e.jsx(n.p,{children:"This is the answer."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"a"}),e.jsx(n.th,{style:{textAlign:"center"},children:"b"}),e.jsx(n.th,{style:{textAlign:"center"},children:"out"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"0"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"}),e.jsx(n.td,{style:{textAlign:"center"},children:"1"})]})]})]}),`
`,e.jsx(n.p,{children:"As you can see, it's identical to the AND gate; we successfully made an AND gate only with NAND gates."}),`
`,e.jsx(n.p,{children:"What about this one?"}),`
`,`
`,e.jsxs("figure",{className:"mx-auto flex flex-col items-center gap-1",children:[e.jsx("img",{src:q,alt:"Input (a) are branched into two and connected to the same NAND. Same connection for (b). The output of these two NANDs are connected to another NAND."}),e.jsx("figcaption",{className:"text-sm text-slate-500",children:"???"})]}),`
`,e.jsx(n.p,{children:"As you may have guessed, it's an OR gate implemented with NAND gates."}),`
`,e.jsxs(n.p,{children:["The truth tables we've seen so far were quite simple: two inputs and one output, but it can be very complex in real life. However, it is known that no matter how complex the truth table is, it can be realised by combining only NAND gates. This characteristic of NAND is called ",e.jsx(n.strong,{children:"functional completeness"}),"."]}),`
`,e.jsx("aside",{children:e.jsx(n.p,{children:`In fact NAND is not the only gate that has functional completeness: NOR gate
(the inverse of OR gate), or the combination of AND and NOT also has this
property.`})}),`
`,e.jsx(n.p,{children:"Because so called CPU and any other components needed to build a computer are just a very complex version of logic gates, all the necessary components to build a computer are constructed only with NANDs."}),`
`,e.jsx(n.p,{children:"Of course tons of arduous work needs to be done on top of this to turn it into a full-fledged computer we use today, however, they are all about how to make use of this tiny yet powerful device."}),`
`,e.jsxs(n.h2,{id:"the-elements-of-computing-systems",children:[e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-elements-of-computing-systems",children:e.jsx(n.span,{className:"icon icon-link"})}),'"The Elements of Computing Systems"']}),`
`,e.jsx(n.p,{children:"Let me introduce a book which I learned this fact from at the end of the story."}),`
`,e.jsxs(n.p,{children:[`In the previous post I said I'm going to work on the "CPU Experiment". However, I didn't know what exactly I should work on or how to kick off the project. After some intensive search on the internet, I came across this book titled `,e.jsx(n.a,{href:"https://www.amazon.co.uk/Elements-Computing-Systems-second-Principles/dp/0262539802/",children:'"The Elements of Computing Systems"'}),"."]}),`
`,e.jsx(n.p,{children:"The book was written by Dr. Noam Nisan and Dr. Shimon Schocken, and was first published in 2005 as a computer science textbook to teach their students how the black-boxed computer systems actually look inside."}),`
`,e.jsx(n.p,{children:'The key concept of the book is "NAND to Tetris": The idea that any general-purpose computers are made in a same way that'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"(1) they are built from NAND as an elementary logic gate, and"}),`
`,e.jsx(n.li,{children:"(2) they are programmed to run any applications such as Tetris game."}),`
`]}),`
`,e.jsxs(n.p,{children:["And then there is a word ",e.jsx(n.em,{children:"to"})," between them meaning the book provides readers a hands-on experience of building a Tetris (general-purpose computer) starting from NAND (an elementary logic gate)."]}),`
`,e.jsx(n.p,{children:"It turned out that not only is this book a perfect introduction to the low-level systems but also it was a perfect timing for me to read. Most importantly, it helped me understand what exactly I'm trying to learn."}),`
`,e.jsx(n.p,{children:"I can't wait to see what comes out of this journey. Stay tuned…"})]})}function $(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(m,{...s})}):m(s)}const X={"about-shader-1":[g,u],"about-webgl":[y,f],"cpu-experiment":[w,b],"ddia-chapter-8":[A,N],"ddia-chapter-10":[v,k],"division-overflow":[T,I],"nft-potential-and-problems":[C,D],"quantum-computer-2021":[S,P],"ray-tracer-on-web":[E,R],"subtraction-as-addition":[G,W],"the-power-of-nand":[$,J]};export{Q as P,X as m};
