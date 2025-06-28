import { ShieldCheckIcon, LockClosedIcon, ServerIcon, CodeBracketIcon, BeakerIcon } from '@heroicons/react/24/outline'

const securitySkills = [
    {
        title: "Security Analysis",
        description: "Experience in identifying vulnerabilities and implementing security measures through CTF challenges and practical applications",
        icon: ShieldCheckIcon,
    },
    {
        title: "Secure Development",
        description: "Implementing security-first principles in development, focusing on secure coding practices and vulnerability prevention",
        icon: CodeBracketIcon,
    },
    {
        title: "Blue Team Focus",
        description: "Growing expertise in defensive security, system hardening, and security monitoring",
        icon: ServerIcon,
    },
    {
        title: "CTF Experience",
        description: "Active participation in TryHackMe CTF challenges, developing practical security skills",
        icon: BeakerIcon,
    },
]

const SecurityExpertise = () => {
    return (
        <section className="py-20" id="security">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Security Focus
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Combining development expertise with security-first principles
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {securitySkills.map((skill) => (
                            <div
                                key={skill.title}
                                className="relative group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
                            >
                                <div>
                                    <skill.icon className="h-8 w-8 text-blue-500" aria-hidden="true" />
                                    <h3 className="mt-4 text-lg font-medium text-white">{skill.title}</h3>
                                    <p className="mt-2 text-base text-gray-300">{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-slate-800/30 rounded-lg p-8 border border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Security Experience & Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <BeakerIcon className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">TryHackMe CTF Challenges</h4>
                                <p className="mt-1 text-gray-300">Active participation in security challenges, developing practical skills in vulnerability assessment and exploitation</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">Blue Team Focus</h4>
                                <p className="mt-1 text-gray-300">Growing expertise in defensive security, system hardening, and security monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecurityExpertise 