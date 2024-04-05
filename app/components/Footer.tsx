'use client'

import dynamic from "next/dynamic";
import {useMemo} from "react";

export function Footer() {
  const Map = useMemo(() => dynamic(
    () => import('@/app/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  return <footer className="bg-gray-100 py-5">
        <div className="container" id="contact">
            <div className="row">
                <div className="col-md-8">
                    <Map position={[46.0110132, 5.9923703]} zoom={17}/>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="h4">BON LIEU COIFFURE</h1>
                    <p className="h5 font-body mt-4" style={{lineHeight: "1.5"}}>
                        11 Route de Marlioz <br/>
                        lieu dit Bonlieu <br/>
                        74270 Sallenôves
                    </p>
                    <p className="mt-4">
                        <a
                            href="tel:+33450778037"
                            className="text-primary font-700 font-body h5"
                        >
                            <i className="fas fa-phone"/> 04 50 77 80 37
                        </a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="bg-white mt-4 mt-md-5" style={{height: 1}}/>
                </div>
            </div>
            <div className="row mt-4 align-items-center">
                <div className="col-8">
                    ©2024 - Bon Lieu Coiffure - Tous droits réservés.{" "}
                    <a
                        href="/mentions-legales"
                        className="text-underline"
                    >
                        Mentions&nbsp;légales
                    </a>
                </div>
                <div className="col-4 text-lg-right">
                    <a
                        href="https://www.facebook.com/BLC74270"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn pr-0"
                    >
                        <i className="fab fa-facebook-square fa-2x"/>
                    </a>
                    <a
                        href="https://instagram.com/bonlieucoiffure?igshid=12z8ybkl8ezlw"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn pr-lg-0"
                    >
                        <i className="fab fa-instagram-square fa-2x"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>;
}