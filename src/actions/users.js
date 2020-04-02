export const RECEIVE_USERS = 'RECIVE_USERS';

export function reciveveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}