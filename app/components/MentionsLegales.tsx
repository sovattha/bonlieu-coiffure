import {PortableText} from "@portabletext/react";
import {MentionsLegales as MentionsLegalesType} from "@/types/MentionsLegales";
import Horaires from "@/app/components/Horaires";
import {Horaire} from "@/types/Horaire";

export function MentionsLegales(props: {
    horaires: Horaire[];
    mentionsLegales: MentionsLegalesType['content'];
}) {
    const { mentionsLegales } = props;
    return <main>
        <div className="container-lg my-5">
            <div className="row">
                <Horaires horaires={props.horaires} />
                <div className="col-8">
                    <h1 className="text-center">Mentions légales et crédits</h1>
                    <PortableText value={mentionsLegales} />
                </div>
            </div>
        </div>
    </main>;
}