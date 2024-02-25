import AboutShader1, {
  frontmatter as aboutShader1Frontmatter,
} from "./about-shader-1.mdx";
import AboutWebGL, {
  frontmatter as aboutWebGLFrontmatter,
} from "./about-webgl.mdx";
import CPUExperiment, {
  frontmatter as cpuExperimentFrontmatter,
} from "./cpu-experiment.mdx";
import DDIAChapter8, {
  frontmatter as ddiaChapter8Frontmatter,
} from "./ddia-chapter-8.mdx";
import DDIAChapter10, {
  frontmatter as ddiaChapter10Frontmatter,
} from "./ddia-chapter-10.mdx";
import DivisionOverflow, {
  frontmatter as divisionOverflowFrontmatter,
} from "./division-overflow.mdx";
import NFTPotentialAndProblems, {
  frontmatter as nftPotentialAndProblemsFrontmatter,
} from "./nft-potential-and-problems.mdx";
import QuantumComputer2021, {
  frontmatter as quantumComputer2021Frontmatter,
} from "./quantum-computer-2021.mdx";
import RayTracer, {
  frontmatter as rayTracerFrontmatter,
} from "./ray-tracer-on-web.mdx";
import SubtractionAsAddition, {
  frontmatter as subtractionAsAdditionFrontmatter,
} from "./subtraction-as-addition.mdx";
import ThePowerOfNand, {
  frontmatter as thePowerOfNandFrontmatter,
} from "./the-power-of-nand.mdx";

export const mapping = {
  "about-shader-1": [AboutShader1, aboutShader1Frontmatter],
  "about-webgl": [AboutWebGL, aboutWebGLFrontmatter],
  // "butter-coffee": [],
  "cpu-experiment": [CPUExperiment, cpuExperimentFrontmatter],
  "ddia-chapter-8": [DDIAChapter8, ddiaChapter8Frontmatter],
  "ddia-chapter-10": [DDIAChapter10, ddiaChapter10Frontmatter],
  "division-overflow": [DivisionOverflow, divisionOverflowFrontmatter],
  "nft-potential-and-problems": [
    NFTPotentialAndProblems,
    nftPotentialAndProblemsFrontmatter,
  ],
  "quantum-computer-2021": [
    QuantumComputer2021,
    quantumComputer2021Frontmatter,
  ],
  "ray-tracer-on-web": [RayTracer, rayTracerFrontmatter],
  // "sdgs": [],
  "subtraction-as-addition": [
    SubtractionAsAddition,
    subtractionAsAdditionFrontmatter,
  ],
  "the-power-of-nand": [ThePowerOfNand, thePowerOfNandFrontmatter],
} as const;

export type Key = keyof typeof mapping;
