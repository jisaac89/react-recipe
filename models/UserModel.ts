import { observable } from 'mobx';
import { IUser } from '../_interfaces/data/IUser';

export const UserModel: IUser = observable({
    name: '',
    email: '',
    photo: ''
})