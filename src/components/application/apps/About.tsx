import { cn } from '@/app/lib/utils';
export default function About() {
    return (
        <textarea className={cn('app-body overflow-auto resize-none w-full h-full outline-none px-1 text-sm')}>
            What? We do not have enough time to find a notepad icon.
        </textarea>
    );
}
