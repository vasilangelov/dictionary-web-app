import { Header } from "@/components/Header";

import appClasses from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={appClasses["App"]}>
      <Header />
    </div>
  );
};
