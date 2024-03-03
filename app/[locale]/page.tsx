import styles from "./page.module.css";
import { MainTopBanner } from "../modules/MainTopBanner/MainTopBanner";
import { ConceptBlock } from "../modules/ConceptBlock/ConceptBlock";
import { Header } from "../components/Header/Header";
import { InviteBlock } from "../modules/InviteBlock/InviteBlock";
import { WorldBlock } from "../modules/WorldBlock/WorldBlock";
import { InterestingBlock } from "../modules/InterestingBlock/InterestingBlock";
import { StagesBlock } from "../modules/StagesBlock/StagesBlock";
import { Concept2Block } from "../modules/Concept2Block/Concept2Block";
import { Footer } from "../components/Footer/Footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <MainTopBanner />
      <ConceptBlock />
      <InviteBlock />
      <WorldBlock />
      <InterestingBlock />
      <StagesBlock />
      <Concept2Block />
    </main>
  );
}
