__NUXT_JSONP__("/blog/the-power-of-nand", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{page:{slug:"the-power-of-nand",description:"When I was an engineering student, I learned a logic gate NAND in one of the electronics classes. At that time I didn't fully understand why NAND is so important.\n\nTen years later, only after I decided to engage myself more in computer science, I finally understood why it's so: We can build very complex computing systems only with NAND on contrary to its super simple look.\n\nI'd like to introduce here (1) what NAND is and (2) why it has such a powerful capability.",title:"The Power of NAND",language:"en\u002FGB",tags:["computer science","system programming","nand2tetris"],image:{src:"gate.jpg",alt:"A gate in Beograd, Serbia",credit:"Photo by \u003Ca href=\"https:\u002F\u002Funsplash.com\u002F@nknezevic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003ENikola Knezevic\u003C\u002Fa\u003E on \u003Ca href=\"https:\u002F\u002Funsplash.com\u002Fs\u002Fphotos\u002Fgate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\u003EUnsplash\u003C\u002Fa\u003E"},createdAt:"2022-01-12T00:00:00.000Z",toc:[{id:F,depth:w,text:G},{id:H,depth:w,text:I},{id:J,depth:w,text:x}],body:{type:"root",children:[{type:b,tag:y,props:{id:F},children:[{type:b,tag:l,props:{href:"#whats-nand",ariaHidden:z,tabIndex:A},children:[{type:b,tag:B,props:{className:[C,D]},children:[]}]},{type:a,value:G}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"NAND is one of the most basic "},{type:b,tag:K,props:{},children:[{type:a,value:"logic gates"}]},{type:a,value:". So first I need to explain what the logic gate is."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"A logic gate is a sort of a calculator that accepts one or more input and produces one or more output where both input and output values are either 0 or 1. Let's take a look at one of the simplest logic gates: AND."}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:k},{type:b,tag:n,props:{src:"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FAND.svg",alt:L},children:[]},{type:a,value:k},{type:b,tag:o,props:{},children:[{type:a,value:L}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"As you can see it takes two inputs (a) and (b), then produce one output (out). Because each (a) and (b) can be either 0 or 1, there are 4 variations of input combination as shown in the table below. The output of an AND gate will be 1 only when both (a) and (b) are 1."}]},{type:a,value:q},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{align:c},children:[{type:a,value:l}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:t}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:u}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]}]}]},{type:a,value:d},{type:b,tag:M,props:{},children:[{type:a,value:"This table representation of the relationship between input combinations and corresponding output is called "},{type:b,tag:"i",props:{},children:[{type:a,value:"truth table"}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Let's take a look at another example: OR gate."}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:k},{type:b,tag:n,props:{src:"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FOR.svg",alt:N},children:[]},{type:a,value:k},{type:b,tag:o,props:{},children:[{type:a,value:N}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Again, it receives two inputs and produces one output. The output of the OR gate is 0 when both (a) and (b) are 0, otherwise 1. This is the truth table of the OR gate."}]},{type:a,value:q},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{align:c},children:[{type:a,value:l}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:t}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:u}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Now let's get back to the initial question: What is NAND?"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Like AND and OR gates, NAND is also a logic gate that receives two inputs and produces one output."}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:k},{type:b,tag:n,props:{src:"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FNAND.svg",alt:O},children:[]},{type:a,value:k},{type:b,tag:o,props:{},children:[{type:a,value:O}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The output of NAND gate is just an opposite of AND output: When either (a) or (b) is 1 or both of them are 0, the output is 1. More simply put, the output is 0 only when both (a) and (b) are 1."}]},{type:a,value:q},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{align:c},children:[{type:a,value:l}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:t}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:u}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Not very complicated, right?"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Now how would it be possible to build a \"computer\" like the one you're reading this post with with this tiny device?"}]},{type:a,value:d},{type:b,tag:y,props:{id:H},children:[{type:b,tag:l,props:{href:"#how-to-build-a-computer-with-nand",ariaHidden:z,tabIndex:A},children:[{type:b,tag:B,props:{className:[C,D]},children:[]}]},{type:a,value:I}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The steps are like this:"}]},{type:a,value:d},{type:b,tag:"ol",props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"build elementary logic gates such as AND, OR, and Multiplexer with NAND"}]},{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"build components needed to compose CPU such as ALU (Arithmetic Logic Unit) and RAM (Random Access Memories) with elementary logic gates"}]},{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"build a CPU with these components"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"An essential fact that makes these steps possible is that "},{type:b,tag:P,props:{},children:[{type:a,value:"any logic gates can be constructed by combining only NAND gates"}]},{type:a,value:". Let's take a look at an example."}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:k},{type:b,tag:n,props:{src:"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FAND with NAND.svg",alt:"Input (a) and (b) are connected to two different NANDs. The output of these two NANDs are connected to another NAND."},children:[]},{type:a,value:k},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"There are three NAND gates in this combined logic gate and it still has two inputs and one output. The branching lines from (a) and (b) mean that input (a) and (b) are connected to multiple gates. Please take a moment to think how the truth table of this logic gate would look like."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"This is the answer."}]},{type:a,value:q},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{align:c},children:[{type:a,value:l}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:t}]},{type:b,tag:j,props:{align:c},children:[{type:a,value:u}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:g}]}]},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]},{type:b,tag:e,props:{align:c},children:[{type:a,value:h}]}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"As you can see, it's identical to the AND gate; we successfully made an AND gate only with NAND gates."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"What about this one?"}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:k},{type:b,tag:n,props:{src:"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FOR with NAND.svg",alt:"Input (a) are branched into two and connected to the same NAND. Same connection for (b). The output of these two NANDs are connected to another NAND."},children:[]},{type:a,value:k},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"As you may have guessed, it's an OR gate implemented with NAND gates."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The truth tables we've seen so far were quite simple: two inputs and one output, but it can be very complex in real life. However, it is known that no matter how complex the truth table is, it can be realised by combining only NAND gates. This characteristic of NAND is called "},{type:b,tag:K,props:{},children:[{type:a,value:"functional completeness"}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:M,props:{},children:[{type:a,value:"In fact NAND is not the only gate that has functional completeness: NOR gate (the inverse of OR gate), or the combination of AND and NOT also has this property."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Because so called CPU and any other components needed to build a computer are just a very complex version of logic gates, all the necessary components to build a computer are constructed only with NANDs."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Of course tons of arduous work needs to be done on top of this to turn it into a full-fledged computer we use today, however, they are all about how to make use of this tiny yet powerful device."}]},{type:a,value:d},{type:b,tag:y,props:{id:J},children:[{type:b,tag:l,props:{href:"#the-elements-of-computing-systems",ariaHidden:z,tabIndex:A},children:[{type:b,tag:B,props:{className:[C,D]},children:[]}]},{type:a,value:x}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Let me introduce a book which I learned this fact from at the end of the story."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"In the previous post I said I'm going to work on the \"CPU Experiment\". However, I didn't know what exactly I should work on or how to kick off the project. After some intensive search on the internet, I came across this book titled "},{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.amazon.co.uk\u002FElements-Computing-Systems-second-Principles\u002Fdp\u002F0262539802\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:x}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The book was written by Dr. Noam Nisan and Dr. Shimon Schocken, and was first published in 2005 as a computer science textbook to teach their students how the black-boxed computer systems actually look inside."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The key concept of the book is \"NAND to Tetris\": The idea that any general-purpose computers are made in a same way that"}]},{type:a,value:d},{type:b,tag:"ul",props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"(1) they are built from NAND as an elementary logic gate, and"}]},{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"(2) they are programmed to run any applications such as Tetris game."}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"And then there is a word "},{type:b,tag:P,props:{},children:[{type:a,value:"to"}]},{type:a,value:" between them meaning the book provides readers a hands-on experience of building a Tetris (general-purpose computer) starting from NAND (an elementary logic gate)."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"It turned out that not only is this book a perfect introduction to the low-level systems but also it was a perfect timing for me to read. Most importantly, it helped me understand what exactly I'm trying to learn."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"I can't wait to see what comes out of this journey. Stay tuned…"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fthe-power-of-nand",extension:".md",updatedAt:"2022-01-13T21:38:42.892Z",bodyPlainText:"\n## What's NAND?\n\nNAND is one of the most basic **logic gates**. So first I need to explain what the logic gate is.\n\nA logic gate is a sort of a calculator that accepts one or more input and produces one or more output where both input and output values are either 0 or 1. Let's take a look at one of the simplest logic gates: AND.\n\n\u003Cfigure\u003E\n    \u003Cimg src=\"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FAND.svg\" alt=\"AND gate\" \u002F\u003E\n    \u003Cfigcaption\u003EAND gate\u003C\u002Ffigcaption\u003E\n\u003C\u002Ffigure\u003E\n\nAs you can see it takes two inputs (a) and (b), then produce one output (out). Because each (a) and (b) can be either 0 or 1, there are 4 variations of input combination as shown in the table below. The output of an AND gate will be 1 only when both (a) and (b) are 1.\n\n|  a  |  b  | out |\n| :-: | :-: | :-: |\n|  0  |  0  |  0  |\n|  1  |  0  |  0  |\n|  0  |  1  |  0  |\n|  1  |  1  |  1  |\n\n\u003Caside\u003EThis table representation of the relationship between input combinations and corresponding output is called \u003Ci\u003Etruth table\u003C\u002Fi\u003E.\u003C\u002Faside\u003E\n\nLet's take a look at another example: OR gate.\n\n\u003Cfigure\u003E\n    \u003Cimg src=\"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FOR.svg\" alt=\"OR gate\" \u002F\u003E\n    \u003Cfigcaption\u003EOR gate\u003C\u002Ffigcaption\u003E\n\u003C\u002Ffigure\u003E\n\nAgain, it receives two inputs and produces one output. The output of the OR gate is 0 when both (a) and (b) are 0, otherwise 1. This is the truth table of the OR gate.\n\n|  a  |  b  | out |\n| :-: | :-: | :-: |\n|  0  |  0  |  0  |\n|  1  |  0  |  1  |\n|  0  |  1  |  1  |\n|  1  |  1  |  1  |\n\nNow let's get back to the initial question: What is NAND?\n\nLike AND and OR gates, NAND is also a logic gate that receives two inputs and produces one output.\n\n\u003Cfigure\u003E\n    \u003Cimg src=\"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FNAND.svg\" alt=\"NAND gate\" \u002F\u003E\n    \u003Cfigcaption\u003ENAND gate\u003C\u002Ffigcaption\u003E\n\u003C\u002Ffigure\u003E\n\nThe output of NAND gate is just an opposite of AND output: When either (a) or (b) is 1 or both of them are 0, the output is 1. More simply put, the output is 0 only when both (a) and (b) are 1.\n\n|  a  |  b  | out |\n| :-: | :-: | :-: |\n|  0  |  0  |  1  |\n|  1  |  0  |  1  |\n|  0  |  1  |  1  |\n|  1  |  1  |  0  |\n\nNot very complicated, right?\n\nNow how would it be possible to build a \"computer\" like the one you're reading this post with with this tiny device?\n\n## How to Build a Computer with NAND\n\nThe steps are like this:\n\n1. build elementary logic gates such as AND, OR, and Multiplexer with NAND\n1. build components needed to compose CPU such as ALU (Arithmetic Logic Unit) and RAM (Random Access Memories) with elementary logic gates\n1. build a CPU with these components\n\nAn essential fact that makes these steps possible is that _any logic gates can be constructed by combining only NAND gates_. Let's take a look at an example.\n\n\u003Cfigure\u003E\n    \u003Cimg src=\"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FAND with NAND.svg\" alt=\"Input (a) and (b) are connected to two different NANDs. The output of these two NANDs are connected to another NAND.\" \u002F\u003E\n    \u003Cfigcaption\u003E???\u003C\u002Ffigcaption\u003E\n\u003C\u002Ffigure\u003E\n\nThere are three NAND gates in this combined logic gate and it still has two inputs and one output. The branching lines from (a) and (b) mean that input (a) and (b) are connected to multiple gates. Please take a moment to think how the truth table of this logic gate would look like.\n\nThis is the answer.\n\n|  a  |  b  | out |\n| :-: | :-: | :-: |\n|  0  |  0  |  0  |\n|  1  |  0  |  0  |\n|  0  |  1  |  0  |\n|  1  |  1  |  1  |\n\nAs you can see, it's identical to the AND gate; we successfully made an AND gate only with NAND gates.\n\nWhat about this one?\n\n\u003Cfigure\u003E\n    \u003Cimg src=\"\u002Fimg\u002Fblog\u002Fthe-power-of-nand\u002FOR with NAND.svg\" alt=\"Input (a) are branched into two and connected to the same NAND. Same connection for (b). The output of these two NANDs are connected to another NAND.\" \u002F\u003E\n    \u003Cfigcaption\u003E???\u003C\u002Ffigcaption\u003E\n\u003C\u002Ffigure\u003E\n\nAs you may have guessed, it's an OR gate implemented with NAND gates.\n\nThe truth tables we've seen so far were quite simple: two inputs and one output, but it can be very complex in real life. However, it is known that no matter how complex the truth table is, it can be realised by combining only NAND gates. This characteristic of NAND is called **functional completeness**.\n\n\u003Caside\u003EIn fact NAND is not the only gate that has functional completeness: NOR gate (the inverse of OR gate), or the combination of AND and NOT also has this property.\u003C\u002Faside\u003E\n\nBecause so called CPU and any other components needed to build a computer are just a very complex version of logic gates, all the necessary components to build a computer are constructed only with NANDs.\n\nOf course tons of arduous work needs to be done on top of this to turn it into a full-fledged computer we use today, however, they are all about how to make use of this tiny yet powerful device.\n\n## \"The Elements of Computing Systems\"\n\nLet me introduce a book which I learned this fact from at the end of the story.\n\nIn the previous post I said I'm going to work on the \"CPU Experiment\". However, I didn't know what exactly I should work on or how to kick off the project. After some intensive search on the internet, I came across this book titled [\"The Elements of Computing Systems\"](https:\u002F\u002Fwww.amazon.co.uk\u002FElements-Computing-Systems-second-Principles\u002Fdp\u002F0262539802\u002F).\n\nThe book was written by Dr. Noam Nisan and Dr. Shimon Schocken, and was first published in 2005 as a computer science textbook to teach their students how the black-boxed computer systems actually look inside.\n\nThe key concept of the book is \"NAND to Tetris\": The idea that any general-purpose computers are made in a same way that\n\n- (1) they are built from NAND as an elementary logic gate, and\n- (2) they are programmed to run any applications such as Tetris game.\n\nAnd then there is a word _to_ between them meaning the book provides readers a hands-on experience of building a Tetris (general-purpose computer) starting from NAND (an elementary logic gate).\n\nIt turned out that not only is this book a perfect introduction to the low-level systems but also it was a perfect timing for me to read. Most importantly, it helped me understand what exactly I'm trying to learn.\n\nI can't wait to see what comes out of this journey. Stay tuned…\n"}}],fetch:{},mutations:void 0}}("text","element","center","\n","td","p","0","1","tr","th","\n    ","a","figure","img","figcaption","li","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","table","thead","b","out","tbody",2,"\"The Elements of Computing Systems\"","h2","true",-1,"span","icon","icon-link",".","whats-nand","What's NAND?","how-to-build-a-computer-with-nand","How to Build a Computer with NAND","the-elements-of-computing-systems","strong","AND gate","aside","OR gate","NAND gate","em","???")));