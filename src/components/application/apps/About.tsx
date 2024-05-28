import { cn } from '@/app/lib/utils';
export function AboutHla() {
    return (
        <textarea className={cn('app-body overflow-auto resize-none w-full h-full outline-none px-1 text-sm')}>
            Hla Htun: A bad little boy who has the smartest brain in the world.
        </textarea>
    );
}

export function AboutImgyeong() {
    return (
        <textarea className={cn('app-body overflow-auto resize-none w-full h-full outline-none px-1 text-sm')}>
            Imgyeong Lee: A crazy Korean. &#40;dumb&#41;
        </textarea>
    );
}
