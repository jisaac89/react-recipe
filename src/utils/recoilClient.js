import dynamic from 'next/dynamic';

// errors known next-typescript issue that will get resolved soon, converted file to js to fix
// https://github.com/zeit/next.js/issues/3389
// wherever Recoil lives, we must wrap each import with a dynamic

let defaults = {
    ssr: true,
    loading: () => null
}

export const Align = dynamic(import('../recoil/src/components/Align/Align'), defaults);
export const Button = dynamic(import('../recoil/src/components/Button/Button'), defaults);
export const Layer = dynamic(import('../recoil/src/components/Layer/Layer'), defaults);
export const Toolbar = dynamic(import('../recoil/src/components/Toolbar/Toolbar'), defaults);
export const Emerge = dynamic(import('../recoil/src/components/Emerge/Emerge'), defaults);