import dynamic from 'next/dynamic';

let defaults = {
    ssr: true,
    loading: () => null
}

export const Align = dynamic(import('../recoil/src/components/Align/Align'), defaults);
export const Button = dynamic(import('../recoil/src/components/Button/Button'), defaults);
export const Layer = dynamic(import('../recoil/src/components/Layer/Layer'), defaults);
export const Toolbar = dynamic(import('../recoil/src/components/Toolbar/Toolbar'), defaults);
export const Emerge = dynamic(import('../recoil/src/components/Emerge/Emerge'), defaults);