import dynamic from 'next/dynamic';

let defaults = {
    ssr: false,
    loading: () => null
}

export const Align = dynamic(import('../recoil/src/components/Align/Align'), defaults);
export const Avatar = dynamic(import('../recoil/src/components/Avatar/Avatar'), defaults);
export const Button = dynamic(import('../recoil/src/components/Button/Button'), defaults);
export const Checkbox = dynamic(import('../recoil/src/components/Checkbox/Checkbox'), defaults);
export const DataSource = dynamic(import('../recoil/src/components/DataSource/DataSource'), defaults);
export const DatePicker = dynamic(import('../recoil/src/components/DatePicker/DatePicker'), defaults);
export const Dropdown = dynamic(import('../recoil/src/components/Dropdown/Dropdown'), defaults);
export const Emerge = dynamic(import('../recoil/src/components/Emerge/Emerge'), defaults);
export const Fixed = dynamic(import('../recoil/src/components/Fixed/Fixed'), defaults);
export const Layer = dynamic(import('../recoil/src/components/Layer/Layer'), defaults);
export const Loading = dynamic(import('../recoil/src/components/Loading/Loading'), defaults);
export const Modal = dynamic(import('../recoil/src/components/Modal/Modal'), defaults);
export const Notifications = dynamic(import('../recoil/src/components/Notifications/Notifications'), defaults);
export const OOCSS = dynamic(import('../recoil/src/components/OOCSS/OOCSS'), defaults);
export const Open = dynamic(import('../recoil/src/components/Open/Open'), defaults);
export const Pager = dynamic(import('../recoil/src/components/Pager/Pager'), defaults);
export const Portal = dynamic(import('../recoil/src/components/Portal/Portal'), defaults);
export const Recoil = dynamic(import('../recoil/src/components/Recoil/Recoil'), defaults);
export const Selectable = dynamic(import('../recoil/src/components/Selectable/Selectable'), defaults);
export const Shrink = dynamic(import('../recoil/src/components/Shrink/Shrink'), defaults);
export const SlideIn = dynamic(import('../recoil/src/components/SlideIn/SlideIn'), defaults);
export const Stepper = dynamic(import('../recoil/src/components/Stepper/Stepper'), defaults);
export const Table = dynamic(import('../recoil/src/components/Table/Table'), defaults);
export const Tags = dynamic(import('../recoil/src/components/Tags/Tags'), defaults);
export const TimePicker = dynamic(import('../recoil/src/components/TimePicker/TimePicker'), defaults);
export const Toggle = dynamic(import('../recoil/src/components/Toggle/Toggle'), defaults);
export const Toolbar = dynamic(import('../recoil/src/components/Toolbar/Toolbar'), defaults);
export const Transform = dynamic(import('../recoil/src/components/Transform/Transform'), defaults);
export const Tree = dynamic(import('../recoil/src/components/Tree/Tree'), defaults);
export const Wizard = dynamic(import('../recoil/src/components/Wizard/Wizard'), defaults);