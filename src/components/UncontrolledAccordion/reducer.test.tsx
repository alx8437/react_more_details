import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
   // data
    const state: StateType = {collapsed: false}

   // test
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

   // expectation
    expect(newState).toBeTruthy()
    expect(() => reducer(state, {type: 'FAKE ACTION'})).toThrowError();
})

test('reducer should be fall', () => {
    const state: StateType = {collapsed: false}

    expect(() => reducer(state, {type: 'FAKE ACTION'})).toThrowError();
})