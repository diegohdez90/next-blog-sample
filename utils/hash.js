import { has } from 'markdown-it/lib/common/utils';

const bcrypt = require('bcrypt');

export function hash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export function compare(password, hash) {
    return bcrypt.compareSync(password, hash);
}
