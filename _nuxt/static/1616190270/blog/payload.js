__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{pages:[{slug:"quantum-computer-2021",description:"2019 年の 10 月に Google が世界で初めて量子超越性を達成したと発表して以来、量子コンピュータ開発競争はますます盛り上がりをみせています。量子コンピュータの実現を目指す各社ともに順調に開発を進めており、この先数年のあいだに量子超越性の証明が相次いで発表されることが予想されます。しかしその先の万能量子コンピュータの実現にはエラー耐性という課題を克服しなければならず、それには 10 年単位の研究・開発が必要となるでしょう。\nここでは2021年3月現在における各社の量子コンピュータ開発への取り組みをそれぞれ見ていきたいと思います。",title:"量子コンピュータ開発の現状",language:"ja\u002FJP",tags:["量子コンピュータ","QuantumComputer","NISQ",w,"Microsoft",x,"IBM","DWave",y,z],image:{src:"electronic-chip.jpg",alt:"electronic chip",credit:"Photo by \u003Ca href=\"https:\u002F\u002Funsplash.com\u002F@jsshotz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003EJorge Salvador\u003C\u002Fa\u003E on \u003Ca href=\"https:\u002F\u002Funsplash.com\u002Fs\u002Fphotos\u002Felectronic-chip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003EUnsplash\u003C\u002Fa\u003E"},toc:[{id:q,depth:r,text:q},{id:s,depth:r,text:s},{id:t,depth:r,text:t},{id:B,depth:o,text:C},{id:D,depth:o,text:w},{id:E,depth:o,text:z},{id:F,depth:o,text:y},{id:G,depth:o,text:H},{id:I,depth:o,text:x},{id:J,depth:o,text:K},{id:u,depth:r,text:u}],body:{type:"root",children:[{type:b,tag:v,props:{id:q},children:[{type:b,tag:e,props:{href:"#%E9%87%8F%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%AF",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"本題の前に簡単に量子コンピュータについて。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"量子コンピュータとはその名の通り量子力学を応用した原理で動作するコンピュータのことです。現在ひろく使われているコンピュータに対し指数関数的な性能向上が理論上は実現可能であることから注目を集めています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"量子コンピュータの計算には"},{type:b,tag:A,props:{},children:[{type:a,value:"量子重ね合わせ"}]},{type:a,value:"という量子力学の性質を利用します。従来のコンピュータ(これより古典コンピュータと呼びます)は"},{type:b,tag:A,props:{},children:[{type:a,value:"ビット"}]},{type:a,value:"を基本単位として計算を行いますが、このビットは 0 または 1 の値しかとらず、全ての計算はこの 0 と 1 の配列をもとに行われます。これに対し、量子コンピュータは"},{type:b,tag:A,props:{},children:[{type:a,value:"量子ビット"}]},{type:a,value:"(qubit; quantum bit)を基本単位としています。この量子ビットに特殊な操作を加えることにより、0 と 1 が重なり合った—0 であると同時に 1 でもある—状態にすることができます。この状態の量子を使って計算を行うことにより、古典コンピュータでは 2 の n 乗回必要だった計算をたった一回で行うことが可能になります。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"もうひとつ、量子コンピュータの特徴的な性質として計算結果が確率的であることがあげられます。一回の計算で得られた解が必ずしも正しいという保証はなく、何度か計算を繰り返して解の精度を高める必要があります。複数回の試行には時間がかかるとはいえ、定数倍の計算量が必要になるだけなのでそれでもやはり古典コンピュータよりも量子コンピュータの方が高速に動作します。"}]},{type:a,value:c},{type:b,tag:v,props:{id:s},children:[{type:b,tag:e,props:{href:"#%E9%87%8F%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E9%96%8B%E7%99%BA%E3%81%AE%E6%AD%B4%E5%8F%B2",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1980 年代に Paul Benioff や Richard Fyneman がその有効性を予測して以来、実現に向けた研究が続けられています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"数ある研究の中でもっとも注目を集めたのが 1994 年に Peter Shor が考案した「ショアのアルゴリズム」です。内容としては、量子コンピュータにより素因数分解を高速に解くアルゴリズムを発見した、というシンプルなものですがとても重要な意味を持っています。素因数分解は数が大きくなればなるほど計算に時間がかかるようになります。十分に大きな数の素因数分解を古典コンピュータ(スーパーコンピュータであったとしても)で解こうとすると何万年という時間がかかるため、現実的には計算不可能です。この性質を利用したのが RSA 暗号という、現在インターネットでもっとも広く使われている暗号化技術のひとつです。ショアのアルゴリズムは"},{type:b,tag:"strong",props:{},children:[{type:a,value:"量子コンピュータが実現した際には RSA 暗号が破られる"}]},{type:a,value:"ということを示しており、この発見により量子コンピュータ研究はさらに注目を集めるようになります。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"その後はしばらく基礎研究で進展をみせるものの、実用化という面では大きな変化がなく 2010 年代を迎えます。そして 2011 年 5 月、突如カナダの D-Wave Systems という企業が「世界初の商用量子コンピュータを開発した」と発表し世間を驚かせます。その後 IBM や Google などのハイテク企業が商用利用のための開発に参加し、量子コンピュータを実際にビジネスに利用するための開発競争が加速します。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2019 年の 10 月には、Google が世界で初めて量子超越性—量子力学を利用した計算機で古典コンピュータでは解決不可能な計算を行うこと—を達成したと発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fai.googleblog.com\u002F2019\u002F10\u002Fquantum-supremacy-using-programmable.html",rel:[k,l,m],target:n},children:[{type:a,value:"1"}]},{type:a,value:"。これは量子コンピュータ研究におけるひとつのマイルストーンとみられています。"}]},{type:a,value:c},{type:b,tag:v,props:{id:t},children:[{type:b,tag:e,props:{href:"#%E9%87%8F%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%80%E4%BC%81%E6%A5%AD",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"現在商用の量子コンピュータを開発、またはクラウドサービスとして提供している主な企業を紹介します。"}]},{type:a,value:c},{type:b,tag:p,props:{id:B},children:[{type:b,tag:e,props:{href:"#d-wave-systems",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"先ほども登場しました D-Wave Systems は 2011 年 5 月、世界初の商用量子コンピュータとして D-Wave One を発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.nature.com\u002Farticles\u002Fnature10012",rel:[k,l,m],target:n},children:[{type:a,value:"2"}]},{type:a,value:"しました。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"現在量子コンピュータの実装方式として主流なのは量子ゲートと呼ばれるものですが、D-Wave が採用しているのは量子アニーリングと呼ばれる方式です。この方式は量子ゲート方式に比べると解決可能な問題の種類は制限される一方、量子の状態を管理するのが容易というメリットがあります。量子ゲート方式が現在 50~100 程度の量子ビットしか扱えないのに対し、D-Wave は 2000qubit を達成しています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"先月には量子優位性—量子コンピュータが古典コンピュータの性能を上回ること、量子超越性よりも弱い概念—を発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.zdnet.com\u002Farticle\u002Fa-quantum-computer-just-solved-a-decades-old-problem-three-million-times-faster-than-a-classical-computer\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"3"}]},{type:a,value:"しており、量子コンピュータの実用においては一歩抜け出しています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"D-Wave はクラウドコンピューティングサービスである Leap2 を提供しているほか、のちほど紹介する Amazon Braket からも利用可能です。"}]},{type:a,value:c},{type:b,tag:p,props:{id:D},children:[{type:b,tag:e,props:{href:"#google",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"先にも述べましたが、Google は 2019 年の 10 月に「量子超越性を達成した」と発表しました。Google はこの証明のため Sycamore という量子ゲート方式のプロセサを開発、Summit—当時世界でもっともパワフルなスーパーコンピュータ—が 10,000 年かけて行う計算を 200 秒で完了したという実験結果を示しました。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"この Sycamore プロセサは NISQ(Noisy Intermediate-Scale Quantum)というアイディアにもとづいて開発されています。この NISQ というのは理論物理学者の John Preskill が 2018 年の論文"},{type:b,tag:e,props:{href:"https:\u002F\u002Farxiv.org\u002Fabs\u002F1801.00862",rel:[k,l,m],target:n},children:[{type:a,value:"4"}]},{type:a,value:"で発表したもので、\n(a) Noisy、つまりエラー耐性を実装していないことと、\n(b) 中規模なサイズ(50~100qubit)\nな点が特徴です。Google はこの NISQ という考え方をベースに Sycamore プロセサを開発し、53qubit での計算を行いました。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sycamore プロセサは Google のクラウドサービスである Quantum Computing Service で利用可能となっていますが、一般にはまだ公開されていません。また Google は量子コンピュータ利用を支援するツールとして Cirq SDK や OpenFermion といった OSS を公開しています。"}]},{type:a,value:c},{type:b,tag:p,props:{id:E},children:[{type:b,tag:e,props:{href:"#honeywell",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"電子機器関連の老舗 Honeywell はイオントラップ型と呼ばれる方式を使った量子コンピュータを開発しています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"イオントラップはその名のとおり、電磁場を使ってイオンを閉じ込める方式です。このイオントラップ型は\n(a) 他の方式に比べて計算の精度が高いことと、\n(b) コンピュータを大規模化するためのアイデアが構築されていること\nから有力視されている方式のひとつです。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"量子コンピュータの性能を測る指標のひとつに Quantum Volume というものがあります。これは IBM が提唱した指標で、量子コンピュータの動作方式によらず計算できるように定義されています。この Quantum Volume で高い値をだすためには量子ビット数が多いことももちろんですが、エラー耐性が高いということも大事な要因です。これまでの最高値は昨年 Honeywell が出した 128 という値でしたが、Honeywell は今月この数値を更新、512 という値を得たことを発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.zdnet.com\u002Farticle\u002Fquantum-computing-honeywell-just-quadrupled-the-power-of-its-computer\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"5"}]},{type:a,value:"しました。Honeywell のシステムは他社に比べ量子ビット数は小さいため、量子ビット数を増やすことよりもエラー耐性を向上させることに力を入れていることが伺えます。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Honeywell のハードウェアは Microsoft Azure から利用可能となっています。"}]},{type:a,value:c},{type:b,tag:p,props:{id:F},children:[{type:b,tag:e,props:{href:"#ionq",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IonQ は Honeywell と同様にイオントラップ型の量子コンピュータを開発しています。先日 SPAC スキームを使って上場することが発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fionq.com\u002Fnews\u002Fmarch-08-2021-ionq-to-become-first-public-quantum-computer-company\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"6"}]},{type:a,value:"されましたが、これは量子コンピューティング関連企業としては初となります。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"昨年の 10 月にそれまでの 11 量子ビットシステムからほぼ 3 倍となる 32 量子ビットのシステムを発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fionq.com\u002Fnews\u002Foctober-01-2020-most-powerful-quantum-computer",rel:[k,l,m],target:n},children:[{type:a,value:"7"}]},{type:a,value:"しました。その発表の中には Quantum Volume で 4,000,000 を達成したという驚くべき内容も含まれています。Honeywell や IBM とは異なる計算の仕方をしているので単純に比較することはできませんが、計算精度が高いという彼らの主張を裏付ける数値と言えそうです。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、IonQ が昨年発表したロードマップ"},{type:b,tag:e,props:{href:"https:\u002F\u002Fionq.com\u002Fposts\u002Fdecember-09-2020-scaling-quantum-computer-roadmap",rel:[k,l,m],target:n},children:[{type:a,value:"8"}]},{type:a,value:"によると 2023 年には量子コンピュータのデータセンターを作ることも予定しています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IonQ のハードウェアは Amazon Braket や Microsoft Azure のクラウドサービスから利用可能なほか、直接パートナーシップを結ぶことで利用が可能です。"}]},{type:a,value:c},{type:b,tag:p,props:{id:G},children:[{type:b,tag:e,props:{href:"#ibm-quantum",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IBM は 2016 年に超伝導型量子コンピュータを利用したクラウドサービスである IBM Quantum を発表しています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"彼らは Python をベースにした SDK である Qiskit フレームワークを公開しているのに加え、Qiskit をベースにしたビジュアルプログラミングプラットフォームの Quantum Composer というサービスを提供しています。インタラクティブなツールにより、より直感的に量子コンピュータの操作を学ぶことができます。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IBM の量子コンピュータ開発に関するニュースの中で注目したいのは昨年の 9 月に発表したロードマップ"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.ibm.com\u002Fblogs\u002Fresearch\u002F2020\u002F09\u002Fibm-quantum-roadmap\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"9"}]},{type:a,value:"です。そのロードマップによると IBM は今年には 127qubit のシステムの実現を予定しています。Google の Sycamore が 53qubit で量子超越性を達成したことを考慮すると、同じく NISQ を採用する IBM がどこまで性能をあげてくるか注目です。また 2023 年には 1,000qubit を達成すると計画しています。"}]},{type:a,value:c},{type:b,tag:p,props:{id:I},children:[{type:b,tag:e,props:{href:"#amazon",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Amazon は 2019 年の 12 月にクラウド量子コンピューティングサービス、Amazon Braket をリリースしています。Amazon 自身が量子コンピュータを開発するのではなく、量子コンピュータを開発する他社とパートナーシップを結びそのリソースを AWS 上で提供する形をとっています。Rigetti(超伝導型)、IonQ(イオントラップ型)、D-Wave(量子アニーリング型)とそれぞれ異なる方式を採用する会社と提携してサービスを提供しているのが特徴です。昨年の 8 月には一般公開をしており、誰でも利用することが可能です。また、シミュレータ上でプログラムを実行することもできます。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"サポートツールとして Amazon が提供する Amazon Braket SDK や D-Wave が開発する Ocean SDK の他、PennyLane ライブラリをサポートしています。この PennyLane は Xanadu 社が開発する SDK で、量子コンピュータを利用した機械学習(量子機械学習)を記述するためのものです。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"料金体系は 1 ショットあたりの値段と 1 タスクあたりの値段からなります。ショットは 1 回の求解を表す単位です。先に述べたように量子コンピュータの計算は確率的なため、同じ計算を何ショットも繰り返し解の精度を高める必要があります。そうして何千、何万ショット繰り返して解を得る操作を 1 単位としてタスクと呼びます。一例として D-Wave で 1 タスク、2000 ショットの計算をおこなった場合、D-Wave の 1 タスクあたりの料金は$0.30、1ショットあたりの料金は$0.00019 となっているため、1 task * $0.30 + 2,000 shots * $0.00019 = $0.68 となります。"}]},{type:a,value:c},{type:b,tag:p,props:{id:J},children:[{type:b,tag:e,props:{href:"#azure",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Microsoft も Amazon と同様にクラウドプラットフォームである Azure 上で量子コンピューティングサービス Azure Quantum を提供しています。利用可能なハードウェアは Honeywell、IonQ、Quantum Circuits から選択可能です。発表以来 Early Access のステータスでしたが、先月一般公開となり誰でもアクセスすることができます。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Microsoft は Q#言語とその SDK を開発、提供しています。SDK にはシミュレータも含まれているためローカルマシンでプログラムを実行することも可能です。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"料金は IonQ のシミュレータで 1 時間あたり$3,000 となっています。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、Microsoft は独自の量子コンピュータを製造する研究開発も進めていますが、こちらは少し難航している模様です。2018 年の 3 月にデルフト大学のカウウェンホーフェンがマヨラナ粒子—その存在を予想したイタリアの物理学者にちなんで名付けられた—の存在を確認したという論文を発表します。Microsoft はこのマヨラナ粒子を利用した量子コンピュータの開発を進めてきましたが、現在この 2018 年の論文に疑問が投げかけられており、もしマヨラナ粒子が存在しないということになれば量子コンピュータ開発の計画が大きく後退することは避けられないでしょう。"}]},{type:a,value:c},{type:b,tag:v,props:{id:u},children:[{type:b,tag:e,props:{href:"#%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"昨年末には中国が独自に開発する光子を利用した量子コンピュータで量子超越性を達成したことを発表"},{type:b,tag:e,props:{href:"https:\u002F\u002Fscience.sciencemag.org\u002Fcontent\u002F370\u002F6523\u002F1460",rel:[k,l,m],target:n},children:[{type:a,value:"10"}]},{type:a,value:"しました。量子超越性とその先にある万能量子コンピュータの実現に向け、各社・各国開発競争を進める中でどうエラー耐性を獲得していくのか。今後も量子コンピュータ関連の話題から目が離せません。"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fquantum-computer-2021",extension:".md",createdAt:"2021-03-19T21:24:28.094Z",updatedAt:"2021-03-19T21:24:28.095Z",bodyPlainText:"\n## 量子コンピュータとは\n\n本題の前に簡単に量子コンピュータについて。\n\n量子コンピュータとはその名の通り量子力学を応用した原理で動作するコンピュータのことです。現在ひろく使われているコンピュータに対し指数関数的な性能向上が理論上は実現可能であることから注目を集めています。\n\n量子コンピュータの計算には*量子重ね合わせ*という量子力学の性質を利用します。従来のコンピュータ(これより古典コンピュータと呼びます)は*ビット*を基本単位として計算を行いますが、このビットは 0 または 1 の値しかとらず、全ての計算はこの 0 と 1 の配列をもとに行われます。これに対し、量子コンピュータは*量子ビット*(qubit; quantum bit)を基本単位としています。この量子ビットに特殊な操作を加えることにより、0 と 1 が重なり合った—0 であると同時に 1 でもある—状態にすることができます。この状態の量子を使って計算を行うことにより、古典コンピュータでは 2 の n 乗回必要だった計算をたった一回で行うことが可能になります。\n\nもうひとつ、量子コンピュータの特徴的な性質として計算結果が確率的であることがあげられます。一回の計算で得られた解が必ずしも正しいという保証はなく、何度か計算を繰り返して解の精度を高める必要があります。複数回の試行には時間がかかるとはいえ、定数倍の計算量が必要になるだけなのでそれでもやはり古典コンピュータよりも量子コンピュータの方が高速に動作します。\n\n## 量子コンピュータ開発の歴史\n\n1980 年代に Paul Benioff や Richard Fyneman がその有効性を予測して以来、実現に向けた研究が続けられています。\n\n数ある研究の中でもっとも注目を集めたのが 1994 年に Peter Shor が考案した「ショアのアルゴリズム」です。内容としては、量子コンピュータにより素因数分解を高速に解くアルゴリズムを発見した、というシンプルなものですがとても重要な意味を持っています。素因数分解は数が大きくなればなるほど計算に時間がかかるようになります。十分に大きな数の素因数分解を古典コンピュータ(スーパーコンピュータであったとしても)で解こうとすると何万年という時間がかかるため、現実的には計算不可能です。この性質を利用したのが RSA 暗号という、現在インターネットでもっとも広く使われている暗号化技術のひとつです。ショアのアルゴリズムは**量子コンピュータが実現した際には RSA 暗号が破られる**ということを示しており、この発見により量子コンピュータ研究はさらに注目を集めるようになります。\n\nその後はしばらく基礎研究で進展をみせるものの、実用化という面では大きな変化がなく 2010 年代を迎えます。そして 2011 年 5 月、突如カナダの D-Wave Systems という企業が「世界初の商用量子コンピュータを開発した」と発表し世間を驚かせます。その後 IBM や Google などのハイテク企業が商用利用のための開発に参加し、量子コンピュータを実際にビジネスに利用するための開発競争が加速します。\n\n2019 年の 10 月には、Google が世界で初めて量子超越性—量子力学を利用した計算機で古典コンピュータでは解決不可能な計算を行うこと—を達成したと発表[1]。これは量子コンピュータ研究におけるひとつのマイルストーンとみられています。\n\n[1]: https:\u002F\u002Fai.googleblog.com\u002F2019\u002F10\u002Fquantum-supremacy-using-programmable.html\n\n## 量子コンピューティングに取り組む企業\n\n現在商用の量子コンピュータを開発、またはクラウドサービスとして提供している主な企業を紹介します。\n\n### D-Wave Systems\n\n先ほども登場しました D-Wave Systems は 2011 年 5 月、世界初の商用量子コンピュータとして D-Wave One を発表[2]しました。\n\n現在量子コンピュータの実装方式として主流なのは量子ゲートと呼ばれるものですが、D-Wave が採用しているのは量子アニーリングと呼ばれる方式です。この方式は量子ゲート方式に比べると解決可能な問題の種類は制限される一方、量子の状態を管理するのが容易というメリットがあります。量子ゲート方式が現在 50~100 程度の量子ビットしか扱えないのに対し、D-Wave は 2000qubit を達成しています。\n\n先月には量子優位性—量子コンピュータが古典コンピュータの性能を上回ること、量子超越性よりも弱い概念—を発表[3]しており、量子コンピュータの実用においては一歩抜け出しています。\n\nD-Wave はクラウドコンピューティングサービスである Leap2 を提供しているほか、のちほど紹介する Amazon Braket からも利用可能です。\n\n[2]: https:\u002F\u002Fwww.nature.com\u002Farticles\u002Fnature10012\n[3]: https:\u002F\u002Fwww.zdnet.com\u002Farticle\u002Fa-quantum-computer-just-solved-a-decades-old-problem-three-million-times-faster-than-a-classical-computer\u002F\n\n### Google\n\n先にも述べましたが、Google は 2019 年の 10 月に「量子超越性を達成した」と発表しました。Google はこの証明のため Sycamore という量子ゲート方式のプロセサを開発、Summit—当時世界でもっともパワフルなスーパーコンピュータ—が 10,000 年かけて行う計算を 200 秒で完了したという実験結果を示しました。\n\nこの Sycamore プロセサは NISQ(Noisy Intermediate-Scale Quantum)というアイディアにもとづいて開発されています。この NISQ というのは理論物理学者の John Preskill が 2018 年の論文[4]で発表したもので、\n(a) Noisy、つまりエラー耐性を実装していないことと、\n(b) 中規模なサイズ(50~100qubit)\nな点が特徴です。Google はこの NISQ という考え方をベースに Sycamore プロセサを開発し、53qubit での計算を行いました。\n\nSycamore プロセサは Google のクラウドサービスである Quantum Computing Service で利用可能となっていますが、一般にはまだ公開されていません。また Google は量子コンピュータ利用を支援するツールとして Cirq SDK や OpenFermion といった OSS を公開しています。\n\n[4]: https:\u002F\u002Farxiv.org\u002Fabs\u002F1801.00862\n\n### Honeywell\n\n電子機器関連の老舗 Honeywell はイオントラップ型と呼ばれる方式を使った量子コンピュータを開発しています。\n\nイオントラップはその名のとおり、電磁場を使ってイオンを閉じ込める方式です。このイオントラップ型は\n(a) 他の方式に比べて計算の精度が高いことと、\n(b) コンピュータを大規模化するためのアイデアが構築されていること\nから有力視されている方式のひとつです。\n\n量子コンピュータの性能を測る指標のひとつに Quantum Volume というものがあります。これは IBM が提唱した指標で、量子コンピュータの動作方式によらず計算できるように定義されています。この Quantum Volume で高い値をだすためには量子ビット数が多いことももちろんですが、エラー耐性が高いということも大事な要因です。これまでの最高値は昨年 Honeywell が出した 128 という値でしたが、Honeywell は今月この数値を更新、512 という値を得たことを発表[5]しました。Honeywell のシステムは他社に比べ量子ビット数は小さいため、量子ビット数を増やすことよりもエラー耐性を向上させることに力を入れていることが伺えます。\n\nHoneywell のハードウェアは Microsoft Azure から利用可能となっています。\n\n[5]: https:\u002F\u002Fwww.zdnet.com\u002Farticle\u002Fquantum-computing-honeywell-just-quadrupled-the-power-of-its-computer\u002F\n\n### IonQ\n\nIonQ は Honeywell と同様にイオントラップ型の量子コンピュータを開発しています。先日 SPAC スキームを使って上場することが発表[6]されましたが、これは量子コンピューティング関連企業としては初となります。\n\n昨年の 10 月にそれまでの 11 量子ビットシステムからほぼ 3 倍となる 32 量子ビットのシステムを発表[7]しました。その発表の中には Quantum Volume で 4,000,000 を達成したという驚くべき内容も含まれています。Honeywell や IBM とは異なる計算の仕方をしているので単純に比較することはできませんが、計算精度が高いという彼らの主張を裏付ける数値と言えそうです。\n\nまた、IonQ が昨年発表したロードマップ[8]によると 2023 年には量子コンピュータのデータセンターを作ることも予定しています。\n\nIonQ のハードウェアは Amazon Braket や Microsoft Azure のクラウドサービスから利用可能なほか、直接パートナーシップを結ぶことで利用が可能です。\n\n[6]: https:\u002F\u002Fionq.com\u002Fnews\u002Fmarch-08-2021-ionq-to-become-first-public-quantum-computer-company\u002F\n[7]: https:\u002F\u002Fionq.com\u002Fnews\u002Foctober-01-2020-most-powerful-quantum-computer\n[8]: https:\u002F\u002Fionq.com\u002Fposts\u002Fdecember-09-2020-scaling-quantum-computer-roadmap\n\n### IBM Quantum\n\nIBM は 2016 年に超伝導型量子コンピュータを利用したクラウドサービスである IBM Quantum を発表しています。\n\n彼らは Python をベースにした SDK である Qiskit フレームワークを公開しているのに加え、Qiskit をベースにしたビジュアルプログラミングプラットフォームの Quantum Composer というサービスを提供しています。インタラクティブなツールにより、より直感的に量子コンピュータの操作を学ぶことができます。\n\nIBM の量子コンピュータ開発に関するニュースの中で注目したいのは昨年の 9 月に発表したロードマップ[9]です。そのロードマップによると IBM は今年には 127qubit のシステムの実現を予定しています。Google の Sycamore が 53qubit で量子超越性を達成したことを考慮すると、同じく NISQ を採用する IBM がどこまで性能をあげてくるか注目です。また 2023 年には 1,000qubit を達成すると計画しています。\n\n[9]: https:\u002F\u002Fwww.ibm.com\u002Fblogs\u002Fresearch\u002F2020\u002F09\u002Fibm-quantum-roadmap\u002F\n\n### Amazon\n\nAmazon は 2019 年の 12 月にクラウド量子コンピューティングサービス、Amazon Braket をリリースしています。Amazon 自身が量子コンピュータを開発するのではなく、量子コンピュータを開発する他社とパートナーシップを結びそのリソースを AWS 上で提供する形をとっています。Rigetti(超伝導型)、IonQ(イオントラップ型)、D-Wave(量子アニーリング型)とそれぞれ異なる方式を採用する会社と提携してサービスを提供しているのが特徴です。昨年の 8 月には一般公開をしており、誰でも利用することが可能です。また、シミュレータ上でプログラムを実行することもできます。\n\nサポートツールとして Amazon が提供する Amazon Braket SDK や D-Wave が開発する Ocean SDK の他、PennyLane ライブラリをサポートしています。この PennyLane は Xanadu 社が開発する SDK で、量子コンピュータを利用した機械学習(量子機械学習)を記述するためのものです。\n\n料金体系は 1 ショットあたりの値段と 1 タスクあたりの値段からなります。ショットは 1 回の求解を表す単位です。先に述べたように量子コンピュータの計算は確率的なため、同じ計算を何ショットも繰り返し解の精度を高める必要があります。そうして何千、何万ショット繰り返して解を得る操作を 1 単位としてタスクと呼びます。一例として D-Wave で 1 タスク、2000 ショットの計算をおこなった場合、D-Wave の 1 タスクあたりの料金は$0.30、1ショットあたりの料金は$0.00019 となっているため、1 task \\* $0.30 + 2,000 shots \\* $0.00019 = \\$0.68 となります。\n\n### Azure\n\nMicrosoft も Amazon と同様にクラウドプラットフォームである Azure 上で量子コンピューティングサービス Azure Quantum を提供しています。利用可能なハードウェアは Honeywell、IonQ、Quantum Circuits から選択可能です。発表以来 Early Access のステータスでしたが、先月一般公開となり誰でもアクセスすることができます。\n\nMicrosoft は Q#言語とその SDK を開発、提供しています。SDK にはシミュレータも含まれているためローカルマシンでプログラムを実行することも可能です。\n\n料金は IonQ のシミュレータで 1 時間あたり\\$3,000 となっています。\n\nまた、Microsoft は独自の量子コンピュータを製造する研究開発も進めていますが、こちらは少し難航している模様です。2018 年の 3 月にデルフト大学のカウウェンホーフェンがマヨラナ粒子—その存在を予想したイタリアの物理学者にちなんで名付けられた—の存在を確認したという論文を発表します。Microsoft はこのマヨラナ粒子を利用した量子コンピュータの開発を進めてきましたが、現在この 2018 年の論文に疑問が投げかけられており、もしマヨラナ粒子が存在しないということになれば量子コンピュータ開発の計画が大きく後退することは避けられないでしょう。\n\n## おわりに\n\n昨年末には中国が独自に開発する光子を利用した量子コンピュータで量子超越性を達成したことを発表[10]しました。量子超越性とその先にある万能量子コンピュータの実現に向け、各社・各国開発競争を進める中でどうエラー耐性を獲得していくのか。今後も量子コンピュータ関連の話題から目が離せません。\n\n[10]: https:\u002F\u002Fscience.sciencemag.org\u002Fcontent\u002F370\u002F6523\u002F1460\n"}]}],fetch:[],mutations:void 0}}("text","element","\n","p","a","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank",3,"h3","量子コンピュータとは",2,"量子コンピュータ開発の歴史","量子コンピューティングに取り組む企業","おわりに","h2","Google","Amazon","IonQ","Honeywell","em","d-wave-systems","D-Wave Systems","google","honeywell","ionq","ibm-quantum","IBM Quantum","amazon","azure","Azure")));