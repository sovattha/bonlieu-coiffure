export default async function Home() {
  return (<>
      <header id="home">
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
                  <div className="row mt-2 mt-md-0">
                      <div className="col-lg-10 col-xl-8">
                          <h1 className="display-3 mt-md-4 text-white font-900">
                              Coiffure mixte Barbier
                          </h1>
                          <h2 className="mt-3 mt-md-4 text-white">
                              Bon Lieu Coiffure à Sallenôves
                          </h2>
                          <p className="mt-3 text-white">
                              Votre{" "}
                              <span className="font-700">
                  <strong>salon de coiffure mixte à Sallenôves</strong>
                </span>
                              , lieu dit Bonlieu (74270) <br/>
                              Une équipe dynamique et à l&apos;écoute pour vous offrir une
                              expérience unique. <br/>
                              Prenez rendez-vous avec{" "}
                              <span className="font-700">votre style</span> !
                          </p>
                      </div>
                  </div>
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
      </header>
    <main>
        <div className="container-lg my-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="border rounded sticky-top" style={{top: "2rem"}}>
                        <h1 className="text-center bg-gray-100 py-3 mb-0 h2">Horaires</h1>
                        <table className="table my-0">
                            <tbody>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Lundi</strong>
                                </td>
                                <td>14:00 - 19:00</td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Mardi</strong>
                                </td>
                                <td>
                                    09:00 - 12:00 <br/> 14:00 - 19:00
                                </td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Mercredi</strong>
                                </td>
                                <td>09:00 - 12:00</td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Jeudi</strong>
                                </td>
                                <td>
                                    09:00 - 19:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Vendredi</strong>
                                </td>
                                <td>
                                    09:00 - 20:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Samedi</strong>
                                </td>
                                <td>
                                    08:00 - 15:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            </tbody>
                        </table>
                        <p className="text-center bg-gray-100 py-3 mb-0 border-top h4">
                            <a href="tel:+33450778037">
                                <i className="bi bi-telephone-fill mr-2"/> 04 50 77 80 37
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <section className="row">
                        <div className="col-12 mb-5">
                            <h1>
                                <i className="bi bi-calendar-check mr-2"/> Réservation en
                                ligne
                            </h1>
                        </div>
                        <div className="col-12">
                            <div className="card">
                                <a
                                    href="https://reservationcoiffeur.fr/bon-lieu-coiffure-sallenoves/coiffeur-barbier-sallenoves-rond-point-de-bonlieu-74270"
                                    className="d-flex align-items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/qr-code.jpg"
                                        alt="QR code réservation en ligne"
                                        id="qr"
                                    />
                                    <p className="ml-3 ml-lg-4 h5 font-body">
                                        <span>Réservez un créneau directement en ligne !</span>
                                        <span className="d-block mt-1 font-weight-normal">
                        avec notre nouveau service Réservation Coiffeur
                      </span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-12 my-5">
                            <h1>Nos prestations</h1>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-femme.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait femme
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr className="bg-gray-100 text-uppercase gray-600">
                                                <th scope="col" className="border-0"/>
                                                <th scope="col" className="border-0">
                                                    Courts
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Mi-longs
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Longs
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">Shampooing + brushing</th>
                                                <td>27&nbsp;€</td>
                                                <td>32&nbsp;€</td>
                                                <td>35&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Shampooing/coupe + brushing</th>
                                                <td>38&nbsp;€</td>
                                                <td>41&nbsp;€</td>
                                                <td>44&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Sampoing/coupe coloration/brushing
                                                </th>
                                                <td>71&nbsp;€</td>
                                                <td>76&nbsp;€</td>
                                                <td>81&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Sampoing/coupe mèches/soin + brushing
                                                </th>
                                                <td>86&nbsp;€</td>
                                                <td>96&nbsp;€</td>
                                                <td>105&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Shampooing/coupe + mise en plis</th>
                                                <td colSpan={3} className="text-center">
                                                    38&nbsp;€
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Blond polaire</th>
                                                <td colSpan={3} className="text-center">
                                                    Sur devis
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Lissage brésilien ou semi-permanent
                                                </th>
                                                <td colSpan={3} className="text-center">
                                                    Sur devis
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p>
                                        <small>
                                            Supplément de 10&nbsp;€ à 20&nbsp;€ selon
                                            longueur/épaisseur
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-jeune-fille.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait jeune fille (-12 ans)
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Coupe + brushing</th>
                                                <td className="text-center">29&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-homme.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait homme
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Shampooing / coupe / séchage</th>
                                                <td className="text-center">24&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    -11 ans =&gt; Shampooing / coupe
                                                </th>
                                                <td className="text-center">20&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">-5 ans =&gt; Shampooing / coupe</th>
                                                <td className="text-center">16&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-barbe.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait barbe
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Barbe tondeuse</th>
                                                <td className="text-center">9&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Entretien barbe</th>
                                                <td className="text-center">19&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Rasage complet - Rituel à l&apos;ancienne
                                                </th>
                                                <td className="text-center">34&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <p style={{lineHeight: "1.2"}}>
                                <small>
                                    Les tarifs présents sur ce site sont à titre indicatif et
                                    non contractuels. <br/>
                                    Bon Lieu Coiffure se réserve le droit de les modifier sans
                                    préavis.
                                </small>
                            </p>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12">
                            <h1>Le salon de coiffure</h1>
                            <p>
                                Salon de coiffure mixte et
                                barbier&nbsp;créé&nbsp;en&nbsp;2004, situé à Bonlieu sur la
                                commune de Sallenôves à 5&nbsp;mn de Frangy en direction
                                d&apos;Annecy (à côté de l&apos;entreprise S.E. LEVAGE). <br/>
                                Vous pourrez trouver une place de parking juste devant le
                                salon. <br/>
                                Nous vous accueillons dans une ambiance apaisante et détendue.
                                Nous vous apportons toutes nos compétences afin de mieux
                                répondre à vos envies. Nous vous proposons également toute une
                                gamme de produits professionnels pour répondre aux besoins de
                                vos cheveux, ainsi que les messieurs pour leur barbe !
                            </p>
                        </div>
                        <div className="col-10 offset-1 col-lg-12 offset-lg-0 mt-4">
                            <div className="owl-carousel" id="salon-carousel">
                                <img
                                    src="/images/entree-salon-coiffure.jpg"
                                    alt="Le salon Bon Lieu Coiffure à Sallenôves"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/cote-coiffure-vue-shampoing.jpg"
                                    alt="Le côté coiffure avec vue sur la partie shampoing"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/cote-coiffure-2.jpg"
                                    alt="Le côté coiffure"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/cote-coiffure.jpg"
                                    alt="Le côté coiffure vu depuis la zone shampoing"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/cote-shampoings.jpg"
                                    alt="Le côté shampoing"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/salon.jpg"
                                    alt="Le salon Bon Lieu Coiffure à Sallenôves"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/siege-barbier.jpg"
                                    alt="Siège de barbier"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/statue.jpg"
                                    alt="Statuette décorative"
                                    className="img-fluid"
                                />
                                <img
                                    src="/images/materiel-rasage.jpg"
                                    alt="Rasoir électrique et rasoir de barbier"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12 mb-4">
                            <h1>L&apos;équipe</h1>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title font-body">Nadine</h2>
                                    <p>
                                        Je suis la créatrice et gérante de l&apos;entreprise Bon Lieu
                                        Coiffure depuis&nbsp;2004. <br/>
                                        La dynamique de mon caractère m&apos;entraîne à apporter de la
                                        nouveauté dans le salon. <br/>
                                        Toujours à la recherche de nouvelles techniques, j&apos;attache
                                        de l&apos;importance à une formation régulière, afin de vous
                                        apporter le meilleur service. <br/>
                                        Votre bien-être reste ma priorité !
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title font-body">Méryl</h2>
                                    <p>
                                        Coiffeuse polyvalente et passionnée depuis l&apos;enfance par
                                        le métier, je suis titulaire d&apos;un CAP et BP coiffure.{" "}
                                        <br/>
                                        Spontanée, souriante, chaleureuse, je suis toujours à
                                        l&apos;écoute de mes clientes et clients !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12 mb-4">
                            <h1>Nos marques</h1>
                        </div>
                        <div className="col-10 offset-1 col-lg-12 offset-lg-0">
                            <div className="owl-carousel" id="marques-carousel">
                                <img
                                    src="/images/marque-artisan.jpg"
                                    alt="Logo marque Artisan"
                                />
                                <img
                                    src="/images/marque-broaer.jpg"
                                    alt="Logo marque Broaer"
                                />
                                <img
                                    src="/images/marque-bandido.jpg"
                                    alt="Logo marque Bandido"
                                />
                                <img
                                    src="/images/marque-milkshake.jpg"
                                    alt="Logo marque MilkShake"
                                />
                                <img
                                    src="/images/marque-menstories.jpg"
                                    alt="Logo marque Men Stories"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    <footer className="bg-gray-100 py-5">
        <div className="container" id="contact">
            <div className="row">
                <div className="col-md-8">
                    <div id="mapid" style={{height: 400}}/>
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
    </footer>
</>)

}
