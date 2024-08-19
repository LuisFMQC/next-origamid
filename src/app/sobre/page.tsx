import Width from "@/components/width";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next - Sobre",
  description: "Essa é a página sobre",
};

export default function SobrePage(){
  return(
    <main>
      <h2>Sobre</h2>
      <Width/>
    </main>
  )
}