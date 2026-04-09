import { router } from '@inertiajs/react';

export default function TaskCard({ task, onEdit }) {
    const handleDelete = () => {
        router.delete(route('tasks.destroy', task.id), {
            preserveScroll: true,
        });
    };

    const statusStyles = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800/50',
        in_progress: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50',
        completed: 'bg-[#a3e635]/20 text-[#4d7313] border-[#a3e635]/30 dark:bg-[#a3e635]/10 dark:text-[#a3e635] dark:border-[#a3e635]/20',
    };

    return (
        <div className="group relative bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
                <h5 className="font-bold text-slate-800 dark:text-slate-100 leading-tight pr-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {task.title}
                </h5>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wide whitespace-nowrap ${statusStyles[task.status]}`}>
                    {task.status.replace('_', ' ')}
                </span>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                {task.description || <span className="italic opacity-60">No description provided.</span>}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {new Date(task.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
                
                <div className="flex space-x-2">
                    <button 
                        onClick={onEdit}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                        title="Edit Task"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        title="Delete Task"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
