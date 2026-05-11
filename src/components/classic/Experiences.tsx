function Experiences() {
    return (
        <section id="Experiences">
            <h2 className="section-title">Experiences</h2>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Mes expériences professionnelle</li>

                <li className="list-row">
                    <div><img className="size-20 rounded-box" src="\superk.png" /></div>
                    <div>
                        <div>Employé polyvalent - Super K</div>
                        <div className="text-xs uppercase font-semibold opacity-60">CDD</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        Ce poste m'as appris la mise en rayon rapide et organisée, tout en me rendant autonome.
                    </p>
                </li>

                <li className="list-row">
                    <div><img className="size-20 rounded-box" src="/kfc.png" /></div>
                    <div>
                        <div>Équipier polyvalent - KFC</div>
                        <div className="text-xs uppercase font-semibold opacity-60">CDI</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        Ce poste m'as appris a gérer mon stress dans un environment dynamique.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Experiences