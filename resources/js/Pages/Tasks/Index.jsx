import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import TaskCard from '@/Components/Task/TaskCard';
import TaskForm from '@/Components/Task/TaskForm';
import Modal from '@/Components/Modal';

export default function Index({ auth, tasks }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const pendingTasks = tasks.filter(t => t.status === 'pending');
    const inProgressTasks = tasks.filter(t => t.status === 'in_progress');
    const completedTasks = tasks.filter(t => t.status === 'completed');

    const openCreateForm = () => {
        setEditingTask(null);
        setIsFormOpen(true);
    };

    const openEditForm = (task) => {
        setEditingTask(task);
        setIsFormOpen(true);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-slate-800 dark:text-slate-200 leading-tight">Tasks Dashboard</h2>}
        >
            <Head title="Tasks Board" />

            <div className="py-12 bg-slate-50/50 dark:bg-slate-900 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* Header Action Area */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
                        <div>
                            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Project Board</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage and track your seamless workflow.</p>
                        </div>
                        <button
                            onClick={openCreateForm}
                            className="bg-[#a3e635] text-slate-900 font-bold py-2.5 px-6 rounded-full shadow-lg shadow-[#a3e635]/30 hover:bg-[#8fd125] hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            <span>New Task</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pending Column */}
                        <div className="flex flex-col bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800">
                                <h4 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center justify-between">
                                    <span className="flex items-center">
                                        <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
                                        Pending
                                    </span>
                                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-0.5 px-2.5 rounded-full text-xs">{pendingTasks.length}</span>
                                </h4>
                            </div>
                            <div className="p-4 space-y-4 flex-1 backdrop-blur-sm">
                                {pendingTasks.map(task => (
                                    <TaskCard key={task.id} task={task} onEdit={() => openEditForm(task)} />
                                ))}
                                {pendingTasks.length === 0 && (
                                    <div className="text-center py-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                                        <p className="text-sm text-slate-400 dark:text-slate-500">No pending tasks</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* In Progress Column */}
                        <div className="flex flex-col bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800">
                                <h4 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center justify-between">
                                    <span className="flex items-center">
                                        <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-2 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
                                        In Progress
                                    </span>
                                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-0.5 px-2.5 rounded-full text-xs">{inProgressTasks.length}</span>
                                </h4>
                            </div>
                            <div className="p-4 space-y-4 flex-1 backdrop-blur-sm">
                                {inProgressTasks.map(task => (
                                    <TaskCard key={task.id} task={task} onEdit={() => openEditForm(task)} />
                                ))}
                                {inProgressTasks.length === 0 && (
                                    <div className="text-center py-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                                        <p className="text-sm text-slate-400 dark:text-slate-500">Workspace is clear</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Completed Column */}
                        <div className="flex flex-col bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800">
                                <h4 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center justify-between">
                                    <span className="flex items-center">
                                        <span className="w-2.5 h-2.5 bg-[#a3e635] rounded-full mr-2 shadow-[0_0_8px_rgba(163,230,53,0.6)]"></span>
                                        Completed
                                    </span>
                                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-0.5 px-2.5 rounded-full text-xs">{completedTasks.length}</span>
                                </h4>
                            </div>
                            <div className="p-4 space-y-4 flex-1 backdrop-blur-sm">
                                {completedTasks.map(task => (
                                    <TaskCard key={task.id} task={task} onEdit={() => openEditForm(task)} />
                                ))}
                                {completedTasks.length === 0 && (
                                    <div className="text-center py-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                                        <p className="text-sm text-slate-400 dark:text-slate-500">Ready for action</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Injection */}
            <Modal show={isFormOpen} onClose={() => setIsFormOpen(false)} maxWidth="md">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                        {editingTask ? (
                            <><svg className="w-6 h-6 mr-2 text-[#a3e635]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Edit Task</>
                        ) : (
                            <><svg className="w-6 h-6 mr-2 text-[#a3e635]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Create New Task</>
                        )}
                    </h2>
                    <TaskForm 
                        task={editingTask} 
                        onClose={() => setIsFormOpen(false)} 
                    />
                </div>
            </Modal>

        </AuthenticatedLayout>
    );
}
