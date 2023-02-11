import _ from 'lodash';

export function paginate(movies, pageSize, page) {
    return [...movies].splice((page - 1) * pageSize, pageSize);
}

export function sort(movies, sortColumn) {
    return _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
}