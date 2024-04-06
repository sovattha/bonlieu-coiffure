import {Horaire} from "@/types/Horaire";
import {PortableText} from "@portabletext/react";

export default function Horaires(props: { horaires: Horaire[] }) {
    return <div className="col-lg-4">
        <div className="border rounded sticky-top" style={{top: "2rem"}}>
            <h1 className="text-center bg-gray-100 py-3 mb-0 h2">Horaires</h1>
            <table className="table my-0">
                <tbody>
                {props.horaires?.map((horaire: Horaire, index: number) => (
                    <tr key={index} className="py-1 px-2 ">
                        <td className="align-middle">
                            <strong>{horaire.dayOfWeek}</strong>
                        </td>
                        <td><PortableText value={horaire.content}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="text-center bg-gray-100 py-3 mb-0 border-top h4">
                <a href="tel:+33450778037">
                    <i className="bi bi-telephone-fill mr-2"/> 04 50 77 80 37
                </a>
            </p>
        </div>
    </div>;
}
