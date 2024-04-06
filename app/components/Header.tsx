import {WelcomeMessage} from "@/app/components/WelcomeMessage";
import {WelcomeMessage as WelcomeMessageType} from "@/types/WelcomeMessage";
import {PortableTextBlock} from "sanity";

export function Header(props: { content?: WelcomeMessageType['content']; message?: WelcomeMessageType['message'] }) {
    return <header id="home">
        <div className="container h-100">
            <div className="d-flex flex-column h-100 justify-content-between">
                <div className="row mt-2 mt-md-4">
                    <div className="col-12">
                        <nav className="navbar navbar-expand flex-column flex-sm-row">
                            <a href="https://bon-lieu-coiffure.com" className="navbar-brand mr-0">
                                <img
                                    src="https://bon-lieu-coiffure.com/images/logo-bonlieu-coiffure-2.png"
                                    alt="Logo du salon Bon Lieu Coiffure à Bonlieu (74)"
                                    className="img-fluid"
                                    style={{maxWidth: 170}}
                                />
                            </a>{" "}
                            <button
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                className="navbar-toggler"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>
                            {" "}
                            <div
                                id="navbarSupportedContent"
                                className="collapse navbar-collapse mt-1 mt-sm-0"
                            >
                                <ul className="navbar-nav pl-sm-5">
                                    <li className="nav-item">
                                        <a
                                            href="https://www.facebook.com/BLC74270"
                                            title="Facebook"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav-link"
                                        >
                                            <i className="bi bi-facebook text-white h2"/>
                                        </a>
                                    </li>
                                    {" "}
                                    <li className="nav-item">
                                        <a
                                            href="https://instagram.com/bonlieucoiffure?igshid=12z8ybkl8ezlw"
                                            title="Instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav-link"
                                        >
                                            <i className="bi bi-instagram text-white h2 ml-2"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
                {props.content && props.message &&
                    <div className="row mt-2 mt-md-0">
                        <div className="col-lg-10 col-xl-8">
                            <h1 className="display-3 mt-md-4 text-white font-900">
                                Coiffure mixte Barbier
                            </h1>
                            <h2 className="mt-3 mt-md-4 text-white">
                                Bon Lieu Coiffure à Sallenôves
                            </h2>
                            <WelcomeMessage content={props.content} message={props.message} />
                        </div>
                    </div>
                }
                <div className="row mt-md-4 mb-lg-5 pb-md-5">
                    <div className="col-xl-8">
                        <p>
                            <a
                                href="tel:+33450778037"
                                className="btn bg-white text-primary btn-lg rounded-pill mt-3 mr-md-3 font-700"
                            >
                                <i className="bi bi-telephone-fill"/> 04 50 77 80 37
                            </a>
                            <a
                                href="#contact"
                                className="btn btn-outline-light text-white btn-lg rounded-pill mt-3 animatedLink"
                            >
                                <i className="bi bi-geo-fill"/> Plan d&apos;accès
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>;
}