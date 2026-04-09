import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function TaskForm({ task = null, onClose }) {
    const isEditing = !!task;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: task?.title || '',
        description: task?.description || '',
        status: task?.status || 'pending',
    });

    const submit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route('tasks.update', task.id), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        } else {
            post(route('tasks.store'), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div>
                <InputLabel htmlFor="title" value="Task Title" className="text-slate-700 dark:text-slate-300 font-medium" />
                <TextInput
                    id="title"
                    type="text"
                    name="title"
                    value={data.title}
                    className="mt-2 block w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-[#a3e635] focus:ring-[#a3e635] rounded-lg shadow-sm transition-colors"
                    isFocused={true}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="E.g. Finalize Qtec Proposal..."
                />
                <InputError message={errors.title} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="description" value="Description" className="text-slate-700 dark:text-slate-300 font-medium" />
                <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-2 block w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-[#a3e635] focus:ring-[#a3e635] rounded-lg shadow-sm min-h-[100px] resize-y transition-colors"
                    onChange={(e) => setData('description', e.target.value)}
                    placeholder="Provide additional details..."
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="status" value="Phase Status" className="text-slate-700 dark:text-slate-300 font-medium" />
                <select
                    id="status"
                    name="status"
                    value={data.status}
                    className="mt-2 block w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-[#a3e635] focus:ring-[#a3e635] rounded-lg shadow-sm transition-colors"
                    onChange={(e) => setData('status', e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <InputError message={errors.status} className="mt-2" />
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <SecondaryButton onClick={onClose} disabled={processing} className="font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 border-transparent shadow-none hover:shadow-sm">
                    Cancel
                </SecondaryButton>
                <button 
                    disabled={processing}
                    className="inline-flex items-center px-6 py-2.5 bg-[#a3e635] border border-transparent rounded-lg font-bold text-slate-900 uppercase tracking-widest hover:bg-[#8fd125] focus:bg-[#8fd125] active:bg-[#7bc015] focus:outline-none focus:ring-2 focus:ring-[#a3e635] focus:ring-offset-2 transition ease-in-out duration-150 shadow-md shadow-[#a3e635]/20 disabled:opacity-50"
                >
                    {isEditing ? 'Save Changes' : 'Create Task'}
                </button>
            </div>
        </form>
    );
}
