import AboutShader1, {
  frontmatter as aboutShader1,
} from "./about-shader-1.mdx";
import AboutWebgl, { frontmatter as aboutWebgl } from "./about-webgl.mdx";
import CpuExperiment, {
  frontmatter as cpuExperiment,
} from "./cpu-experiment.mdx";
import DdiaChapter8, {
  frontmatter as ddiaChapter8,
} from "./ddia-chapter-8.mdx";
import DdiaChapter10, {
  frontmatter as ddiaChapter10,
} from "./ddia-chapter-10.mdx";
import DivisionOverflow, {
  frontmatter as divisionOverflow,
} from "./division-overflow.mdx";
import NftPotentialAndProblems, {
  frontmatter as nftPotentialAndProblems,
} from "./nft-potential-and-problems.mdx";
import QuantumComputer2021, {
  frontmatter as quantumComputer2021,
} from "./quantum-computer-2021.mdx";
import RayTracerOnWeb, {
  frontmatter as rayTracerOnWeb,
} from "./ray-tracer-on-web.mdx";
import SubtractionAsAddition, {
  frontmatter as subtractionAsAddition,
} from "./subtraction-as-addition.mdx";
import ThePowerOfNand, {
  frontmatter as thePowerOfNand,
} from "./the-power-of-nand.mdx";

export const CONTENTS = {
  "about-shader-1": [AboutShader1, aboutShader1],
  "about-webgl": [AboutWebgl, aboutWebgl],
  "cpu-experiment": [CpuExperiment, cpuExperiment],
  "ddia-chapter-8": [DdiaChapter8, ddiaChapter8],
  "ddia-chapter-10": [DdiaChapter10, ddiaChapter10],
  "division-overflow": [DivisionOverflow, divisionOverflow],
  "nft-potential-and-problems": [
    NftPotentialAndProblems,
    nftPotentialAndProblems,
  ],
  "quantum-computer-2021": [QuantumComputer2021, quantumComputer2021],
  "ray-tracer-on-web": [RayTracerOnWeb, rayTracerOnWeb],
  "subtraction-as-addition": [SubtractionAsAddition, subtractionAsAddition],
  "the-power-of-nand": [ThePowerOfNand, thePowerOfNand],
} as const;

export type Content = keyof typeof CONTENTS;
