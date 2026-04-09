import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#a3e635] selection:text-white dark:bg-slate-900 dark:text-slate-100">
                {/* Navigation Bar */}
                <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 dark:bg-slate-900/70 dark:border-slate-800 transition-all">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <div className="flex items-center space-x-3">
                                <ApplicationLogo className="w-12 h-12" />
                                <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                                    Qtec <span className="text-[#a3e635]">Tasks</span>
                                </span>
                            </div>

                            {/* Auth Links */}
                            <nav className="hidden md:flex space-x-6 items-center font-medium">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-slate-600 hover:text-[#a3e635] transition-colors dark:text-slate-300"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-slate-600 hover:text-[#a3e635] transition-colors dark:text-slate-300"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-[#a3e635] text-slate-900 px-6 py-2.5 rounded-full hover:bg-[#8fd125] transition-all transform hover:scale-105 shadow-md shadow-[#a3e635]/30 font-semibold"
                                        >
                                            Get Started Free
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-[#a3e635] rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full mb-8 shadow-sm animate-fade-in-down">
                            <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#a3e635] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Laravel 11 Powered Architecture</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                            Master Your Workflow <br className="hidden md:block" />
                            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fd125] to-emerald-500">Pure Elegance</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-400 mb-10 animate-fade-in-up animation-delay-100">
                            A seamless, rapid, and gorgeous Task Management System expressly engineered for Qtec Solution Limited. Break boundaries, not speed limits.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-200">
                            <Link
                                href={auth.user ? route('dashboard') : route('register')}
                                className="bg-[#a3e635] text-slate-900 text-lg px-8 py-4 rounded-full font-bold shadow-lg shadow-[#a3e635]/40 hover:bg-[#8fd125] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {auth.user ? 'Go to your Tasks' : 'Start Organizing Today'}
                            </Link>
                            <a
                                href="#features"
                                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg px-8 py-4 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                            >
                                Explore Features
                            </a>
                        </div>
                    </div>
                </main>

                {/* Features Section */}
                <section id="features" className="py-24 bg-white dark:bg-slate-800/50 relative z-10 border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Engineered for Perfection</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">No-nonsense features that get out of your way and let you focus entirely on completing your objectives.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-[#a3e635]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-[#8fd125]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Kanban Aesthetics</h3>
                                <p className="text-slate-600 dark:text-slate-400">Instantly view your progress with a clean, pillared task board. Move from pending to completed smoothly without aggressive page reloads.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-emerald-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Lightning SPA Speed</h3>
                                <p className="text-slate-600 dark:text-slate-400">Powered natively by Inertia.js coupled with React. Enjoy the raw speed of a single-page application powered firmly by a classic Laravel backend.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-teal-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Security</h3>
                                <p className="text-slate-600 dark:text-slate-400">Rigid authorization checks lock your tasks safely behind custom endpoints. Decoupled Service layers and strict Enums guard data integrity seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <ApplicationLogo className="w-8 h-8 opacity-80" />
                            <span className="text-slate-200 font-bold tracking-wide">Qtec Solution Limited</span>
                        </div>
                        <div className="text-sm">
                            <p>&copy; {new Date().getFullYear()} Developed for Technical Assessment.</p>
                            <p className="mt-1 text-xs opacity-70">Laravel v{laravelVersion} (PHP v{phpVersion})</p>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Custom Tailwind CSS injected for specific animations to avoid tailwind config complexity for this one-off */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { 
                    animation: fadeInUp 0.8s ease-out forwards; 
                }
                
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out forwards;
                }
                .animation-delay-100 { animation-delay: 0.1s; opacity: 0; }
                .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
            `}} />
        </>
    );
}
