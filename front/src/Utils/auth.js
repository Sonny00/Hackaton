import { Role } from "../Constants";

function isAdmin(user) {
    if (user == null || user.role !== Role.ADMIN) {
        return false;
    }
    return true;
}

function isUser(user) {
    if (user == null || user.role !== Role.USER) {
        return false;
    }
    return true;
}

export { isAdmin, isUser };
