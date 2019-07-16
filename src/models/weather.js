// import { parse, stringify } from 'qs';
// import { routerRedux } from 'dva/router';\\


import { queryList } from '@/services/weather';
const Model = {
  namespace: 'weather',
  state: {
    data: [],
  },
  effects: {
    *queryList(_, { call, put }) {
        try {
            const response = yield call(queryList);
            const { city, data} = response;
            yield put({
                type: 'updateList',
                payload: {
                    data,
                    city
                },
            });
        } catch (e) {
            console.error(e.stack);
            message.error(e.stack);
        }
    },
  },
  reducers: {
    updateList(state, { payload }) {
      return { ...state, ...payload};
    },
  },
};
export default Model;
