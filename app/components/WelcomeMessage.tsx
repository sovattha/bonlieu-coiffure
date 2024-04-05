import {PortableText} from "@portabletext/react";
import {WelcomeMessage as WelcomeMessageType} from "@/types/WelcomeMessage";

export function WelcomeMessage(props: { content: WelcomeMessageType['content']; message?: WelcomeMessageType['message'] }) {
    return (
        <div className="mt-3 text-white">
            <PortableText value={props.content} />
            <p className="mt-3 text-danger h2">{props.message}</p>
        </div>
    )
}