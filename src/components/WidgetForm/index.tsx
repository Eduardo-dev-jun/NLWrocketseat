import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";


export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada"
        },
    },
    OTHER: {
        title: "Outros",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        },
    },    
};

export type FeedBackType = keyof typeof feedbackTypes


export function WidgetForm() {
    const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        	{!feedbackType ? (
                <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
            ) : (
                <FeedBackContentStep feedbackType={feedbackType}/>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com S2 pelo <a className="underline underline-offset-2" href="https://rocketseat.com.br">Eduardo</a>
            </footer>
        </div>
    );
}