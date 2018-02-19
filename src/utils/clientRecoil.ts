import dynamic from 'next/dynamic';

// wherever Recoil lives, we must wrap each import with a dynamic

export const Align = dynamic(import('../recoil/src/components/Align/Align'), {
    ssr: false
});

export const Emerge = dynamic(import('../recoil/src/components/Emerge/Emerge'), {
    ssr: false
});