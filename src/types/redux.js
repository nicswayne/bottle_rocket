/* eslint no-undef:0 */

declare type Action = {|
    type: string,
    error?: string,
    payload?: any,
|};

declare type Dispatch = (a: Action | Thunk) => any;
declare type GetState = () => Object;
declare type Thunk = (d: Dispatch, g: GetState) => any;
