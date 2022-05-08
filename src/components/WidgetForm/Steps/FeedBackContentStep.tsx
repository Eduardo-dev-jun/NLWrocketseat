import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentStepProps {
    feedbackType: FeedBackType;
}

export function FeedBackContentStep({feedbackType}:FeedBackContentStepProps) {

    const feebackTypeInfo = feedbackTypes[feedbackType];

    return ( 
        <>
        <header>
            <button type="button">

            </button>

            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feebackTypeInfo.image.source} alt={feebackTypeInfo.image.alt} className="w-6 h-6" />
                {feebackTypeInfo.title}
            </span>

            <CloseButton/>
        </header>

        <div className="flex py-8 gap-2 w-full">

        </div>
    </>
    );
}