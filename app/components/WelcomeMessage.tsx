import {PortableText} from "@portabletext/react";
import {PortableTextBlock} from "sanity";

export function WelcomeMessage(props: { content: PortableTextBlock; message?: string }) {
    return (
        <p className="mt-3 text-white">
            <PortableText value={props.content} />
            <span className="font-700">{props.message}</span>
        </p>
    )
}