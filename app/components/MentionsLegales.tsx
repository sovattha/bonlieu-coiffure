import {PortableText} from "@portabletext/react";
import {MentionsLegales as MentionsLegalesType} from "@/types/MentionsLegales";

export function MentionsLegales(props: {
    mentionsLegales: MentionsLegalesType['content'];
}) {
    const { mentionsLegales } = props;
    return <main>
        <div className="container-lg my-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Mentions légales et crédits</h1>
                    <PortableText value={mentionsLegales} />
                </div>
            </div>
        </div>
    </main>;
}