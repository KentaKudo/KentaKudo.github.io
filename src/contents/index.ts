import AboutShader1, {
  frontmatter as aboutShader1,
  tableOfContents as aboutShader1Toc,
} from "./about-shader-1.mdx";
import AboutWebgl, {
  frontmatter as aboutWebgl,
  tableOfContents as aboutWebglToc,
} from "./about-webgl.mdx";
import CpuExperiment, {
  frontmatter as cpuExperiment,
  tableOfContents as cpuExperimentToc,
} from "./cpu-experiment.mdx";
import DdiaChapter8, {
  frontmatter as ddiaChapter8,
  tableOfContents as ddiaChapter8Toc,
} from "./ddia-chapter-8.mdx";
import DdiaChapter10, {
  frontmatter as ddiaChapter10,
  tableOfContents as ddiaChapter10Toc,
} from "./ddia-chapter-10.mdx";
import DivisionOverflow, {
  frontmatter as divisionOverflow,
  tableOfContents as divisionOverflowToc,
} from "./division-overflow.mdx";
import NftPotentialAndProblems, {
  frontmatter as nftPotentialAndProblems,
  tableOfContents as nftPotentialAndProblemsToc,
} from "./nft-potential-and-problems.mdx";
import QuantumComputer2021, {
  frontmatter as quantumComputer2021,
  tableOfContents as quantumComputer2021Toc,
} from "./quantum-computer-2021.mdx";
import RayTracerOnWeb, {
  frontmatter as rayTracerOnWeb,
  tableOfContents as rayTracerOnWebToc,
} from "./ray-tracer-on-web.mdx";
import SubtractionAsAddition, {
  frontmatter as subtractionAsAddition,
  tableOfContents as subtractionAsAdditionToc,
} from "./subtraction-as-addition.mdx";
import ThePowerOfNand, {
  frontmatter as thePowerOfNand,
  tableOfContents as thePowerOfNandToc,
} from "./the-power-of-nand.mdx";
import PlateauHackChallenge2024, {
  frontmatter as plateauHackChallenge2024,
  tableOfContents as plateauHackChallenge2024Toc,
} from "./plateau-hack-challenge-2024.mdx";
import UncoolLife20240828, {
  frontmatter as uncoolLife20240828,
  tableOfContents as uncoolLife20240828Toc,
} from "./uncool-life-20240828.mdx";
import UncoolLife20240901, {
  frontmatter as uncoolLife20240901,
  tableOfContents as uncoolLife20240901Toc,
} from "./uncool-life-20240901.mdx";
import UncoolLife20240908, {
  frontmatter as uncoolLife20240908,
  tableOfContents as uncoolLife20240908Toc,
} from "./uncool-life-20240908.mdx";
import UncoolLife20240915, {
  frontmatter as uncoolLife20240915,
  tableOfContents as uncoolLife20240915ToC,
} from "./uncool-life-20240915.mdx";

export const CONTENTS = {
  "about-shader-1": [AboutShader1, aboutShader1, aboutShader1Toc],
  "about-webgl": [AboutWebgl, aboutWebgl, aboutWebglToc],
  "cpu-experiment": [CpuExperiment, cpuExperiment, cpuExperimentToc],
  "ddia-chapter-8": [DdiaChapter8, ddiaChapter8, ddiaChapter8Toc],
  "ddia-chapter-10": [DdiaChapter10, ddiaChapter10, ddiaChapter10Toc],
  "division-overflow": [
    DivisionOverflow,
    divisionOverflow,
    divisionOverflowToc,
  ],
  "nft-potential-and-problems": [
    NftPotentialAndProblems,
    nftPotentialAndProblems,
    nftPotentialAndProblemsToc,
  ],
  "quantum-computer-2021": [
    QuantumComputer2021,
    quantumComputer2021,
    quantumComputer2021Toc,
  ],
  "ray-tracer-on-web": [RayTracerOnWeb, rayTracerOnWeb, rayTracerOnWebToc],
  "subtraction-as-addition": [
    SubtractionAsAddition,
    subtractionAsAddition,
    subtractionAsAdditionToc,
  ],
  "the-power-of-nand": [ThePowerOfNand, thePowerOfNand, thePowerOfNandToc],
  "plateau-hack-challenge-2024": [
    PlateauHackChallenge2024,
    plateauHackChallenge2024,
    plateauHackChallenge2024Toc,
  ],
  "uncool-life-20240828": [
    UncoolLife20240828,
    uncoolLife20240828,
    uncoolLife20240828Toc,
  ],
  "uncool-life-20240901": [
    UncoolLife20240901,
    uncoolLife20240901,
    uncoolLife20240901Toc,
  ],
  "uncool-life-20240908": [
    UncoolLife20240908,
    uncoolLife20240908,
    uncoolLife20240908Toc,
  ],
  "uncool-life-20240915": [
    UncoolLife20240915,
    uncoolLife20240915,
    uncoolLife20240915ToC,
  ],
} as const;

export type Content = keyof typeof CONTENTS;
