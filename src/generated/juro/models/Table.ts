/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Table in Juro is more like grid than a table, meaning it doesn't have headers, just a two-dimensional array of rows and columns in it, making it easier to utilize table api.
 */
export type Table = {
    /**
     * unique id
     */
    uid?: string;
    /**
     * two-dimensional array, where first dimension represents rows, and second dimension is an array of columns. Each column has a value property which is column's value - e.g. text in table's cell
     */
    rows?: Array<Array<{
        value: string;
    }>>;
};

