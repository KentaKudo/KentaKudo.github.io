__NUXT_JSONP__("/blog/cpu-experiment", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{page:{slug:"cpu-experiment",description:"\"CPU Experiment\" at the University of Tokyo (UT) CS undergrad course is one of the most famous (either in a good way or bad way) programmes among those who are concerned.\n\nHere, I want to introduce what the programme is, and what kind of exciting stuff are going on there.",title:"CPU Experiment at the University of Tokyo",language:"en\u002FGB",tags:["computer science","system programming"],image:{src:"hardware.jpg",alt:"electronics hardware",credit:"Photo by \u003Ca href=\"https:\u002F\u002Funsplash.com\u002F@jorgedevs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003EJorge Ramirez\u003C\u002Fa\u003E on \u003Ca href=\"https:\u002F\u002Funsplash.com\u002Fs\u002Fphotos\u002Fcomputer-science?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003EUnsplash\u003C\u002Fa\u003E"},toc:[{id:s,depth:l,text:t},{id:u,depth:l,text:v},{id:w,depth:l,text:x},{id:y,depth:l,text:z},{id:A,depth:l,text:B}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"I note in passing that this is NOT based on my personal experience because I was not a CS student at UT. So apologies if I'm not very accurate in some details but I hope I don't miss the big picture."}]},{type:a,value:c},{type:b,tag:m,props:{id:s},children:[{type:b,tag:f,props:{href:"#whats-cpu-experiment",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The programme is held in the autumn-winter term in the third year. CS undergrads are divided into a group of 3–5 people, and they'll be given a credit if they can successfully run the ray-tracing app written in MinCaml (a subset of OCaml), which is handed out at the introduction, at the end term presentation."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The rules and conditions have changed over time but basically what they need to do are:"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"define ISA (original or based on PowerPC, MIPS, RISC-V, etc.)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"build a CPU core on a provided FPGA ("},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.xilinx.com\u002Fproducts\u002Fboards-and-kits\u002Fkcu105.html",rel:[g,h,i],target:j},children:[{type:a,value:"KCU105"}]},{type:a,value:")"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"write an assembler"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"extend a "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fesumii\u002Fmin-caml",rel:[g,h,i],target:j},children:[{type:a,value:"MinCaml compiler"}]},{type:a,value:" so it can compile the given ray-tracing app"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"write a simulator to debug the compiler\u002Fassembler"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"compile & run the required ray-tracing app on the self-built CPU"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Each team member is assigned to one of the four tasks: CPU (core), FPU, simulator, and compiler. Conventionally the assembler seems to be done by a member who is responsible for the simulator."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What's cool about this on-the-job style programme I think is not only you can learn how to integrate the computer science knowledge you learned through the course, but also you need to finish the project in time collaborating with other team members."}]},{type:a,value:c},{type:b,tag:m,props:{id:u},children:[{type:b,tag:f,props:{href:"#thats-not-the-end-of-the-story",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is where things get even more exciting."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For most of them it's not very difficult to run the required ray-tracing app, and actually they succeed in running the app in less than 3months."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"How do they spend the rest of the term?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's up to them how to use the time: Most of the teams try to optimise the system to amaze people by how fast they can run the app at the end term presentation."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The optimisation ideas include:"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"design richer ISA"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"introduce pipelining"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"optimise compiler to reduce the number of instructions"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"and so on"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The current record seems to be 5s, which was made in 2017(*), and generally speaking under 20s is considered to be brazing fast."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(* The team realised multi-core CPU & the compiler that utilises it.)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"However, some teams decide to venture into the wild adventure…"}]},{type:a,value:c},{type:b,tag:m,props:{id:w},children:[{type:b,tag:f,props:{href:"#creative-crazy-ideas-they-try",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As long as the ray-tracing app works, you can be credited for the course. There's nothing to prevent them from tackling their creative ideas such as:"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"run an OS such as xv6, Linux, or even write an original OS"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"run the ray-tracing app on the OS"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"implement a single instruction that runs the ray-tracing"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"etc."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are lots of things involved to achieve these: To run an OS you'll need much richer ISA than just running the ray-tracing app. If you want to run the existing OS written in C on your original ISA, you'll need a C compiler that targets the ISA …and so on."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some of them were realised by their exhaustive effort, while the others are yet to come true. So exciting, aren't they?"}]},{type:a,value:c},{type:b,tag:m,props:{id:y},children:[{type:b,tag:f,props:{href:"#why-am-i-writing-this",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some may wonder why I'm writing a post to introduce something I didn't do. Well, there are two reasons:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First of all, I think the programme is very cool and worth sharing. There are lots of blog posts written by students but most of them are in Japanese (see the next section), and only few resources are available in English for their cool stuff."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And the second one, rather personal one, is that I'm interested in tracing this \"CPU Experiment\" as my personal project. I've been working as a software engineer for almost 7 years. Thankfully I could grow a lot in this space, yet I've been feeling I missed chances to learn computer science basics. I thought it's a great idea to follow what they do to fill this gap."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I hope I can give updates on my project soon:)"}]},{type:a,value:c},{type:b,tag:m,props:{id:A},children:[{type:b,tag:f,props:{href:"#references",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Even though most of them are written in Japanese, I'll leave some links for those who are interested so you can at least have a look at their code:)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2010"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwata-orz.hatenadiary.org\u002Fentry\u002F20100319\u002F1268998396",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2015"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fnullpo-head.hateblo.jp\u002Fentry\u002F2015\u002F03\u002F24\u002F205419",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験で自作 CPU に UNIX ライク OS (xv6) を移植した話"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"[EN]"},{type:b,tag:f,props:{href:"https:\u002F\u002Ffuel.edby.coffee\u002Fposts\u002Fhow-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"how we ran a unix-like os (xv6) on our home-built cpu with our home-built c compiler"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This is basically the same article as the one above but in English."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fkw-udon.hatenablog.com\u002Fentry\u002F2015\u002F03\u002F19\u002F171921",rel:[g,h,i],target:j},children:[{type:a,value:"自作 CPU 向け C コンパイラをつくって OS 動かした話 (CPU 実験まとめ)"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2016"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fmedium.com\u002Feureka-engineering\u002F%E6%9D%B1%E5%A4%A7%E7%90%86%E6%83%85%E5%90%8D%E7%89%A9%E3%81%AEcpu%E5%AE%9F%E9%A8%93%E3%81%A7%E6%AF%8E%E9%80%B1%E5%BE%B9%E5%A4%9C%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E6%A6%82%E8%A6%81%E7%B7%A8-6cb8c155cb64",rel:[g,h,i],target:j},children:[{type:a,value:"東大理情名物の CPU 実験で毎週徹夜したお話（概要編）"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2017"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feguchishi.hatenablog.com\u002Fentry\u002F2017\u002F09\u002F09\u002F150229",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験：マルチコアで並列実行するまで（コンパイラ係目線）"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fsueki743.hatenablog.jp\u002Fentry\u002F2017\u002F03\u002F30\u002F151822",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験 2016 年度 D 班コア係（CPU 実験でマルチコア）"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2018"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Ftravelingresearcher.com\u002Fentry\u002F2018\u002F02\u002F27\u002F172417",rel:[g,h,i],target:j},children:[{type:a,value:"東大の CPU 実験で自作コア上の自作 OS 上で自作シェルを動かした話"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2019"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fmoraprogramming.hateblo.jp\u002Fentry\u002F2019\u002F03\u002F17\u002F165802",rel:[g,h,i],target:j},children:[{type:a,value:"RISC V に従う CPU の上で動作する OS を Rust で書く（CPU 実験余興）"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2020"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fdiary.shift-js.info\u002Fbuilding-a-riscv-cpu-for-linux\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Linux が動作する RISC-V CPU を自作した (2019 年度 CPU 実験 余興)"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fmisteer.hatenablog.com\u002Fentry\u002Fcpuex",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験が終わりました 〜コア係目線〜"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fokuraofvegetable.hatenablog.com\u002Fentry\u002F2020\u002F02\u002F29\u002F230201",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験の振り返り (コンパイラ係目線)"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2021"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fnote.com\u002Ftomo_stleq\u002Fn\u002Fncc8a1ff8ba20",rel:[g,h,i],target:j},children:[{type:a,value:"CPU 実験振り返り(シミュレータ・FPU 係目線)"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fcfkazu.hatenablog.com\u002Fentry\u002F2020\u002F12\u002F05\u002F000416",rel:[g,h,i],target:j},children:[{type:a,value:"ああ CPU 実験"}]}]},{type:a,value:c}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fcpu-experiment",extension:".md",createdAt:"2021-12-22T16:03:28.160Z",updatedAt:"2021-12-22T16:18:57.195Z",bodyPlainText:"\nI note in passing that this is NOT based on my personal experience because I was not a CS student at UT. So apologies if I'm not very accurate in some details but I hope I don't miss the big picture.\n\n## What's CPU Experiment\n\nThe programme is held in the autumn-winter term in the third year. CS undergrads are divided into a group of 3–5 people, and they'll be given a credit if they can successfully run the ray-tracing app written in MinCaml (a subset of OCaml), which is handed out at the introduction, at the end term presentation.\n\nThe rules and conditions have changed over time but basically what they need to do are:\n\n- define ISA (original or based on PowerPC, MIPS, RISC-V, etc.)\n- build a CPU core on a provided FPGA ([KCU105](https:\u002F\u002Fwww.xilinx.com\u002Fproducts\u002Fboards-and-kits\u002Fkcu105.html))\n- write an assembler\n- extend a [MinCaml compiler](https:\u002F\u002Fgithub.com\u002Fesumii\u002Fmin-caml) so it can compile the given ray-tracing app\n- write a simulator to debug the compiler\u002Fassembler\n- compile & run the required ray-tracing app on the self-built CPU\n\nEach team member is assigned to one of the four tasks: CPU (core), FPU, simulator, and compiler. Conventionally the assembler seems to be done by a member who is responsible for the simulator.\n\nWhat's cool about this on-the-job style programme I think is not only you can learn how to integrate the computer science knowledge you learned through the course, but also you need to finish the project in time collaborating with other team members.\n\n## That's not the end of the story\n\nThis is where things get even more exciting.\n\nFor most of them it's not very difficult to run the required ray-tracing app, and actually they succeed in running the app in less than 3months.\n\nHow do they spend the rest of the term?\n\nIt's up to them how to use the time: Most of the teams try to optimise the system to amaze people by how fast they can run the app at the end term presentation.\n\nThe optimisation ideas include:\n\n- design richer ISA\n- introduce pipelining\n- optimise compiler to reduce the number of instructions\n- and so on\n\nThe current record seems to be 5s, which was made in 2017(\\*), and generally speaking under 20s is considered to be brazing fast.\n\n(\\* The team realised multi-core CPU & the compiler that utilises it.)\n\nHowever, some teams decide to venture into the wild adventure…\n\n## Creative (crazy) ideas they try\n\nAs long as the ray-tracing app works, you can be credited for the course. There's nothing to prevent them from tackling their creative ideas such as:\n\n- run an OS such as xv6, Linux, or even write an original OS\n- run the ray-tracing app on the OS\n- implement a single instruction that runs the ray-tracing\n- etc.\n\nThere are lots of things involved to achieve these: To run an OS you'll need much richer ISA than just running the ray-tracing app. If you want to run the existing OS written in C on your original ISA, you'll need a C compiler that targets the ISA …and so on.\n\nSome of them were realised by their exhaustive effort, while the others are yet to come true. So exciting, aren't they?\n\n## Why am I writing this?\n\nSome may wonder why I'm writing a post to introduce something I didn't do. Well, there are two reasons:\n\nFirst of all, I think the programme is very cool and worth sharing. There are lots of blog posts written by students but most of them are in Japanese (see the next section), and only few resources are available in English for their cool stuff.\n\nAnd the second one, rather personal one, is that I'm interested in tracing this \"CPU Experiment\" as my personal project. I've been working as a software engineer for almost 7 years. Thankfully I could grow a lot in this space, yet I've been feeling I missed chances to learn computer science basics. I thought it's a great idea to follow what they do to fill this gap.\n\nI hope I can give updates on my project soon:)\n\n## References\n\nEven though most of them are written in Japanese, I'll leave some links for those who are interested so you can at least have a look at their code:)\n\n2010\n\n- [CPU 実験](https:\u002F\u002Fwata-orz.hatenadiary.org\u002Fentry\u002F20100319\u002F1268998396)\n\n2015\n\n- [CPU 実験で自作 CPU に UNIX ライク OS (xv6) を移植した話](https:\u002F\u002Fnullpo-head.hateblo.jp\u002Fentry\u002F2015\u002F03\u002F24\u002F205419)\n- [EN][how we ran a unix-like os (xv6) on our home-built cpu with our home-built c compiler](https:\u002F\u002Ffuel.edby.coffee\u002Fposts\u002Fhow-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler\u002F)\n  - This is basically the same article as the one above but in English.\n- [自作 CPU 向け C コンパイラをつくって OS 動かした話 (CPU 実験まとめ)](https:\u002F\u002Fkw-udon.hatenablog.com\u002Fentry\u002F2015\u002F03\u002F19\u002F171921)\n\n2016\n\n- [東大理情名物の CPU 実験で毎週徹夜したお話（概要編）](https:\u002F\u002Fmedium.com\u002Feureka-engineering\u002F%E6%9D%B1%E5%A4%A7%E7%90%86%E6%83%85%E5%90%8D%E7%89%A9%E3%81%AEcpu%E5%AE%9F%E9%A8%93%E3%81%A7%E6%AF%8E%E9%80%B1%E5%BE%B9%E5%A4%9C%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E6%A6%82%E8%A6%81%E7%B7%A8-6cb8c155cb64)\n\n2017\n\n- [CPU 実験：マルチコアで並列実行するまで（コンパイラ係目線）](https:\u002F\u002Feguchishi.hatenablog.com\u002Fentry\u002F2017\u002F09\u002F09\u002F150229)\n- [CPU 実験 2016 年度 D 班コア係（CPU 実験でマルチコア）](https:\u002F\u002Fsueki743.hatenablog.jp\u002Fentry\u002F2017\u002F03\u002F30\u002F151822)\n\n2018\n\n- [東大の CPU 実験で自作コア上の自作 OS 上で自作シェルを動かした話](https:\u002F\u002Ftravelingresearcher.com\u002Fentry\u002F2018\u002F02\u002F27\u002F172417)\n\n2019\n\n- [RISC V に従う CPU の上で動作する OS を Rust で書く（CPU 実験余興）](https:\u002F\u002Fmoraprogramming.hateblo.jp\u002Fentry\u002F2019\u002F03\u002F17\u002F165802)\n\n2020\n\n- [Linux が動作する RISC-V CPU を自作した (2019 年度 CPU 実験 余興)](https:\u002F\u002Fdiary.shift-js.info\u002Fbuilding-a-riscv-cpu-for-linux\u002F)\n- [CPU 実験が終わりました 〜コア係目線〜](https:\u002F\u002Fmisteer.hatenablog.com\u002Fentry\u002Fcpuex)\n- [CPU 実験の振り返り (コンパイラ係目線)](https:\u002F\u002Fokuraofvegetable.hatenablog.com\u002Fentry\u002F2020\u002F02\u002F29\u002F230201)\n\n2021\n\n- [CPU 実験振り返り(シミュレータ・FPU 係目線)](https:\u002F\u002Fnote.com\u002Ftomo_stleq\u002Fn\u002Fncc8a1ff8ba20)\n- [ああ CPU 実験](https:\u002F\u002Fcfkazu.hatenablog.com\u002Fentry\u002F2020\u002F12\u002F05\u002F000416)\n"}}],fetch:[],mutations:void 0}}("text","element","\n","p","li","a","nofollow","noopener","noreferrer","_blank","ul",2,"h2","true",-1,"span","icon","icon-link","whats-cpu-experiment","What's CPU Experiment","thats-not-the-end-of-the-story","That's not the end of the story","creative-crazy-ideas-they-try","Creative (crazy) ideas they try","why-am-i-writing-this","Why am I writing this?","references","References")));