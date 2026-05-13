function SoftSkills() {
    const softSkills = [
        "Autonome",
        "Réactive",
        "Gestion du stress",
        "Adaptabilité",
        "Curieux"
    ]

    return (
        <section id="skills" className="py-16 px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="section-title text-center mb-12">Soft Skills</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {softSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="badge badge-lg badge-primary px-4 py-3 text-base font-semibold transition-all duration-300 hover:badge-secondary hover:scale-110 cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SoftSkills